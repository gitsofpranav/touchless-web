# ✋ Touchless Web

A futuristic **gesture-controlled web application** built with **React + TensorFlow.js**.  
No mouse, no touch — just control the app with your **hand gestures** 🎉.

---

## 🚀 Features
- 📷 Live camera preview with start/stop controls  
- ✋ Hand tracking using **TensorFlow Handpose**  
- 🎯 Gesture → Action mapping (navigate between pages using hand movements)  
- 📑 Multiple demo pages:
  - Home (camera + gesture preview)
  - Slots (smart booking system)
  - About (project details)
  - Demo Gestures (gesture testing playground)

---

## 📂 Project Structure
touchless-web/
│
├─ public/ # static assets (index.html)
├─ src/
│ ├─ pages/ # main pages
│ │ ├─ Home.jsx
│ │ ├─ Slots.jsx
│ │ ├─ About.jsx
│ │ ├─ DemoGestures.jsx
│ │
│ ├─ components/ # reusable components
│ │ ├─ CameraBox.jsx
│ │ ├─ GestureOverlay.jsx
│ │
│ ├─ js/ # logic files
│ │ ├─ camera.js
│ │ ├─ gesture.js
│ │ ├─ actions.js
│ │
│ ├─ App.js
│ ├─ App.css
│ ├─ index.js
│ ├─ logo.svg
│ ├─ reportWebVitals.js
│ ├─ setupTests.js

📖 About

This project is designed to showcase touchless interaction for the web,
which can be extended for smart parking slot booking systems, interactive kiosks, and accessible UIs.

👨‍💻 Tech Stack
React.js
TensorFlow.js (Handpose)
React Router
HTML5 Canvas