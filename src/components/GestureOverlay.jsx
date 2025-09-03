import React, { useRef, useEffect, useState } from "react";
import * as handpose from "@tensorflow-models/handpose";
import * as tf from "@tensorflow/tfjs";

function GestureOverlay({ cameraOn }) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  const [gestureText, setGestureText] = useState("No gesture detected");
  const [cursor, setCursor] = useState({ x: -100, y: -100 });

  useEffect(() => {
    let model;

    async function runHandpose() {
      model = await handpose.load();
      console.log("Handpose model loaded");

      const video = videoRef.current;

      async function detect() {
        if (video.readyState === 4) {
          const predictions = await model.estimateHands(video);

          const ctx = canvasRef.current.getContext("2d");
          ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

          if (predictions.length > 0) {
            const landmarks = predictions[0].landmarks;

            // Draw landmarks
            landmarks.forEach(([x, y]) => {
              ctx.beginPath();
              ctx.arc(x, y, 5, 0, 3 * Math.PI);
              ctx.fillStyle = "lime";
              ctx.fill();
            });

            // Index fingertip
            const [x, y] = landmarks[8];
            setCursor({ x, y });

            // 🔹 Scrolling logic
            const centerY = ctx.canvas.height / 2;
            if (y < centerY - 50) {
              window.scrollBy({ top: -20, behavior: "smooth" });
              setGestureText("Scrolling ⬆️");
            } else if (y > centerY + 50) {
              window.scrollBy({ top: 20, behavior: "smooth" });
              setGestureText("Scrolling ⬇️");
            } else {
              setGestureText("Index finger detected (cursor follows)");
            }
          } else {
            setCursor({ x: -100, y: -100 }); // hide cursor
            setGestureText("No hand detected");
          }
        }
        animationRef.current = requestAnimationFrame(detect);
      }

      detect();
    }

    if (cameraOn) {
      navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
        videoRef.current.srcObject = stream;
        videoRef.current.onloadedmetadata = () => {
          videoRef.current.play();
          runHandpose();
        };
      });
    }

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      if (videoRef.current && videoRef.current.srcObject) {
        videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
      }
    };
  }, [cameraOn]);

  return (
    <div style={{ position: "relative" }}>
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        width="640"
        height="480"
        style={{ display: "block" }}
      />
      <canvas
        ref={canvasRef}
        width="640"
        height="480"
        style={{ position: "absolute", top: 0, left: 0 }}
      />
      {/* 🔹 Virtual Cursor */}
      <div
        style={{
          position: "absolute",
          top: cursor.y - 10,
          left: cursor.x - 10,
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          background: "red",
          pointerEvents: "none",
        }}
      ></div>
      {/* 🔹 Gesture status text */}
      <div
        style={{
          position: "absolute",
          top: 10,
          left: 10,
          background: "black",
          color: "lime",
          padding: "5px 10px",
          borderRadius: "8px",
        }}
      >
        {gestureText}
      </div>
    </div>
  );
}

export default GestureOverlay;
