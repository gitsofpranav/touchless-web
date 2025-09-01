import React, { useRef, useEffect, useState } from "react";

function Home() {
  const videoRef = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    let stream;

    const startCamera = async () => {
      try {
        stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error("Error accessing camera:", err);
      }
    };

    if (started) {
      startCamera();
    }

    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [started]);

  return (
    <div>
      <h1>Welcome to Touchless Web</h1>
      <p>Enable your camera and control apps with gestures.</p>

      {!started ? (
        <button onClick={() => setStarted(true)}>Start</button>
      ) : (
        <div>
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            style={{
              width: "480px",
              height: "360px",
              border: "2px solid black",
              background: "black"
            }}
          />
          <br />
          <button onClick={() => setStarted(false)}>Stop</button>
        </div>
      )}
    </div>
  );
}

export default Home;
