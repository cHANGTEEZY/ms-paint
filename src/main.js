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

const downloadImage = document.getElementById("save");

function cleanUp() {
  canvas.removeEventListener("mousedown", startDrawing);
  canvas.removeEventListener("mousemove", draw);
  canvas.removeEventListener("mouseup", stopDrawing);
  canvas.removeEventListener("mouseout", stopDrawing);
  downloadImage.removeEventListener("click", () => {
    generateImage();
  });
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
  downloadImage.addEventListener("click", () => {
    generateImage();
  });
}

init();
