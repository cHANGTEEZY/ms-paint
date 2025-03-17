"use strict";

import {
  canvas,
  startDrawing,
  stopDrawing,
  draw,
  setupContext,
} from "./js/canvas/drawOnCanvas";
import { generateImage } from "./js/canvas/generateImage";
import { generateColorSelectors } from "./js/color/colorsSelectorGenerator";
import { generateStrokeButtons } from "./js/stroke/setStrokeSize";

function cleanUp() {
  canvas.removeEventListener("mousedown", startDrawing);
  canvas.removeEventListener("mousemove", draw);
  canvas.removeEventListener("mouseup", stopDrawing);
  canvas.removeEventListener("mouseout", stopDrawing);
}

function init() {
  generateColorSelectors();
  generateStrokeButtons();
  coordinates.innerHTML = "x:0, y:0";
  setupContext();
  cleanUp();
  canvas.addEventListener("mousedown", startDrawing);
  canvas.addEventListener("mousemove", draw);
  canvas.addEventListener("mouseup", stopDrawing);
  canvas.addEventListener("mouseout", stopDrawing);
}

init();

const downloadImage = document.getElementById("save");

downloadImage.addEventListener("click", () => {
  generateImage();
});
