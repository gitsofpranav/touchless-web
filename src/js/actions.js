// actions.js → map gestures to app actions

/**
 * Very simple gesture-to-action mapping.
 * Later, you can expand with ML classification or custom logic.
 */

// Example: classify based on number of landmarks or positions
export function classifyGesture(predictions) {
  if (!predictions || predictions.length === 0) {
    return "NO_HAND";
  }

  const landmarks = predictions[0].landmarks;

  // Example rule: If hand is high (y < 150px), trigger "UP"
  const avgY =
    landmarks.reduce((sum, [, y]) => sum + y, 0) / landmarks.length;

  if (avgY < 150) return "HAND_UP";
  if (avgY > 300) return "HAND_DOWN";

  return "HAND_PRESENT";
}

/**
 * Perform action based on gesture label.
 * @param {string} gesture
 */
export function performAction(gesture) {
  switch (gesture) {
    case "HAND_UP":
      console.log("👆 Gesture detected → Navigate to Slots page");
      window.location.href = "/slots";
      break;

    case "HAND_DOWN":
      console.log("👇 Gesture detected → Navigate to Home page");
      window.location.href = "/";
      break;

    case "HAND_PRESENT":
      console.log("✋ Hand detected but idle");
      break;

    case "NO_HAND":
    default:
      console.log("🙅 No hand detected");
      break;
  }
}
