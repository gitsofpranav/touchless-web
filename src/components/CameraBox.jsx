// src/components/CameraBox.jsx
import React, { useEffect, useRef } from "react";
import GestureOverlay from "./GestureOverlay";

function CameraBox({ cameraOn }) {
  const videoRef = useRef(null);
  const streamRef = useRef(null);

  useEffect(() => {
    if (cameraOn) {
      // Start camera
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          streamRef.current = stream;
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        })
        .catch((err) => {
          console.error("Camera access denied:", err);
        });
    } else {
      // Stop camera
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
        streamRef.current = null;
      }
    }
  }, [cameraOn]);

  return (
    <div className="camera-box" style={{ position: "relative", width: "640px", height: "480px" }}>
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        style={{
          width: "640px",
          height: "480px",
          background: "black",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />
      {/* ✅ Overlay gets the ref */}
      <GestureOverlay videoRef={videoRef} />
    </div>
  );
}

export default CameraBox;
