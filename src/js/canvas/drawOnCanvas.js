const canvas = document.getElementById("canvas");
const coordinates = document.getElementById("coordinates");
const ctx = canvas.getContext("2d");

//initial canvas settings
canvas.width = 1200;
canvas.height = 2000;

// Changing variables that is needed for drawing
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let currentColor = "#000000";
let lineWidth = 2;

function setupContext() {
  ctx.lineJoin = "round";
  ctx.lineCap = "round";
  ctx.lineWidth = lineWidth;
}

function startDrawing(e) {
  isDrawing = true;
  lastX = e.offsetX;
  lastY = e.offsetY;

  const x = e.offsetX;
  const y = e.offsetY;

  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(x, y);
  ctx.stroke();

  lastX = x;
  lastY = y;
}

function draw(e) {
  if (!isDrawing) return;
  coordinates.innerHTML = `x: ${e.offsetX}, y: ${e.offsetY}`;

  const x = e.offsetX;
  const y = e.offsetY;

  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(x, y);
  ctx.stroke();

  lastX = x;
  lastY = y;
}

function stopDrawing() {
  isDrawing = false;
}

function setColor(newColor) {
  currentColor = newColor;
  ctx.strokeStyle = newColor;
}

function cleanUp() {
  canvas.removeEventListener("mousedown", startDrawing);
  canvas.removeEventListener("mousemove", draw);
  canvas.removeEventListener("mouseup", stopDrawing);
  canvas.removeEventListener("mouseout", stopDrawing);
}

function init() {
  coordinates.innerHTML = "x:0, y:0";
  setupContext();
  cleanUp();
  canvas.addEventListener("mousedown", startDrawing);
  canvas.addEventListener("mousemove", draw);
  canvas.addEventListener("mouseup", stopDrawing);
  canvas.addEventListener("mouseout", stopDrawing);
}

init();

document.addEventListener("click", (e) => {
  if (e.target.closest(".color")) {
    const colorElement = e.target.closest(".color");
    const newColor = colorElement.style.backgroundColor;
    setColor(newColor);
  }
});
