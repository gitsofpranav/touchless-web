import React, { useState } from "react";
import CameraBox from "../components/CameraBox";
import GestureOverlay from "../components/GestureOverlay";
import "../App.css";

function DemoGestures() {
  const [cameraOn, setCameraOn] = useState(false);

  return (
    <div className="demo-gestures-container">
      <h1>Gesture Demo</h1>
      <p>
        This page is for testing gesture recognition. Start the camera and try
        moving your hand in front of it. Detected gestures will be logged in the
        console for now.
      </p>

      {/* Camera + Overlay */}
      <div className="camera-container">
        <CameraBox cameraOn={cameraOn} />
        <GestureOverlay cameraOn={cameraOn} />
      </div>

      {/* Controls */}
      <div className="controls">
        <button onClick={() => setCameraOn(true)}>Start Camera</button>
        <button onClick={() => setCameraOn(false)}>Stop Camera</button>
      </div>

      {/* Status */}
      <p className="status">
        Camera Status: <strong>{cameraOn ? "ON" : "OFF"}</strong>
      </p>
    </div>
  );
}

export default DemoGestures;
