let context;

// Canvas
export function canvasCreator() {
  const canvas = document.getElementById("canvas");
  if (canvas) {
    context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.strokeStyle = "#ffffff";
    context.lineWidth = 2;
    initialDrawing();
  }
}

// To reuse `context`
export function getContext() {
  return context;
}

// Create the gallows
export function initialDrawing() {
  if (context) {
    // clear canvas
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    // left line
    drawLine(1, 0, 1, 200);
    // bottom line
    drawLine(1, 199, 150, 199);
    // top line
    drawLine(1, 1, 120, 1);
    // diagonal line
    drawLine(1, 50, 50, 1);
    // small vertical line
    drawLine(120, 0, 120, 40);
  }
}

// Draw lines
export function drawLine(fromX, fromY, toX, toY) {
  if (context) {
    context.beginPath();
    context.moveTo(fromX, fromY);
    context.lineTo(toX, toY);
    context.stroke();
  }
}
