// gesture.js → load model + detect hands
import * as handpose from "@tensorflow-models/handpose";
import "@tensorflow/tfjs";

let model = null;

/**
 * Load the Handpose model (singleton).
 */
export async function loadModel() {
  if (!model) {
    model = await handpose.load();
    console.log("✅ Handpose model loaded");
  }
  return model;
}

/**
 * Run hand detection on a video element.
 * @param {HTMLVideoElement} video
 * @returns {Promise<Array>} predictions
 */
export async function detectHands(video) {
  if (!model) {
    throw new Error("⚠️ Handpose model not loaded. Call loadModel() first.");
  }
  const predictions = await model.estimateHands(video);
  return predictions;
}

/**
 * Draw detected keypoints on a canvas.
 * @param {Array} predictions - hand landmarks
 * @param {CanvasRenderingContext2D} ctx - canvas context
 */
export function drawKeypoints(predictions, ctx) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  predictions.forEach((p) => {
    p.landmarks.forEach(([x, y]) => {
      ctx.beginPath();
      ctx.arc(x, y, 5, 0, 2 * Math.PI);
      ctx.fillStyle = "red";
      ctx.fill();
    });
  });
}
