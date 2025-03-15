import { canvas, ctx } from "./drawOnCanvas";

const clearCanvas = document.getElementById("clear-canvas");

clearCanvas.addEventListener("click", () => {
  console.log("click");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
