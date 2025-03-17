export const canvas = document.getElementById("canvas");
const coordinates = document.getElementById("coordinates");
export const ctx = canvas.getContext("2d");

canvas.width = 1200;
canvas.height = 2000;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let lineWidth = 2;
let isErasing = false;

export function setupContext() {
  ctx.lineJoin = "round";
  ctx.lineCap = "round";
  ctx.lineWidth = lineWidth;
}

export function startDrawing(e) {
  isDrawing = true;
  coordinates.innerHTML = `x: ${e.offsetX}, y: ${e.offsetY}`;
  lastX = e.offsetX;
  lastY = e.offsetY;
  ctx.globalCompositeOperation = isErasing ? "destination-out" : "source-over";
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
}

export function draw(e) {
  if (!isDrawing) return;
  coordinates.innerHTML = `x: ${e.offsetX}, y: ${e.offsetY}`;

  const x = e.offsetX;
  const y = e.offsetY;

  ctx.lineTo(x, y);
  ctx.stroke();
  lastX = x;
  lastY = y;
}

export function stopDrawing() {
  isDrawing = false;
  ctx.closePath();
}

export function toggleIsErasing() {
  isErasing = !isErasing;
}

export function setColor(newColor) {
  ctx.strokeStyle = newColor;
}

export function setStroke(newStroke) {
  const intStroke = parseInt(newStroke);
  ctx.lineWidth = intStroke;
}
