// camera.js → start/stop camera utilities

/**
 * Start the camera and return a stream.
 * @param {Object} options - video constraints
 * @returns {Promise<MediaStream>}
 */
export async function startCamera(options = { video: true }) {
  try {
    const stream = await navigator.mediaDevices.getUserMedia(options);
    return stream;
  } catch (err) {
    console.error("❌ Error starting camera:", err);
    throw err;
  }
}

/**
 * Stop the given camera stream.
 * @param {MediaStream} stream
 */
export function stopCamera(stream) {
  if (stream) {
    stream.getTracks().forEach((track) => track.stop());
    console.log("⏹️ Camera stopped");
  }
}
