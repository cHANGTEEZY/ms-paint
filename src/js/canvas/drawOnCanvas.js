/** @type {HTMLCanvasElement} */
export const canvas = document.getElementById("canvas");
/** @type {CanvasRenderingContext2D} */
export const ctx = canvas.getContext("2d", { willReadFrequently: true });

canvas.width = 1200;
canvas.height = 2000;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let isErasing = false;
let lineWidth = 2;

const canvasStack = [];

function saveCanvasState() {
  if (canvasStack.length > 20) canvasStack.shift();
  canvasStack.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
}

export function undo() {
  if (canvasStack.length > 0) {
    ctx.putImageData(canvasStack.pop(), 0, 0);
    console.log("Canvas state popped:", canvasStack.length);
  } else {
    console.log("No more states to undo");
  }
}

export function setupContext() {
  ctx.lineJoin = "round";
  ctx.lineCap = "round";
  ctx.lineWidth = lineWidth;
}

export function startDrawing(e) {
  isDrawing = true;
  coordinates.innerHTML = `x: ${e.offsetX}, y: ${e.offsetY}`;

  saveCanvasState();

  lastX = e.offsetX;
  lastY = e.offsetY;
  ctx.globalCompositeOperation = isErasing ? "destination-out" : "source-over";
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(lastX, lastY);
  ctx.stroke();
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
  if (isDrawing) {
    isDrawing = false;
    ctx.closePath();
  }
}

export function toggleIsErasing() {
  isErasing = !isErasing;
}

export function setColor(newColor) {
  ctx.strokeStyle = newColor;
}

export function setStroke(newStroke) {
  ctx.lineWidth = parseInt(newStroke);
}

document.addEventListener("keydown", (e) => {
  if (e.ctrlKey && e.key === "z") {
    undo();
  }
});
