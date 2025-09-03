import React from "react";
import "../App.css";

function About() {
  return (
    <div className="about-container">
      <h1>About Touchless Web</h1>

      <p>
        <strong>Touchless Web</strong> is a smart project that allows users to
        interact with a website using only hand gestures, without touching the
        screen or mouse.
      </p>

      <h2>Features:</h2>
      <ul>
        <li>Camera-based hand detection using TensorFlow.js</li>
        <li>Touchless navigation and slot booking</li>
        <li>Start/Stop camera control for privacy</li>
        <li>Multiple demo pages to showcase functionality</li>
      </ul>

      <h2>Goal:</h2>
      <p>
        The goal of this project is to make web interaction more accessible and
        futuristic by enabling <em>gesture-based control</em>.
      </p>
    </div>
  );
}

export default About;
