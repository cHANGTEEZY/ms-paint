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
import { toggleToolBar } from "./js/header/showToolbar";
import { generateStrokeButtons } from "./js/stroke/setStrokeSize";

const downloadImage = document.getElementById("save");
const toggleToolbar = document.getElementById("toolbar");
const coordinates = document.getElementById("coordinates");

function cleanUp() {
  canvas.removeEventListener("mousedown", startDrawing);
  canvas.removeEventListener("mousemove", draw);
  canvas.removeEventListener("mouseup", stopDrawing);
  canvas.removeEventListener("mouseout", stopDrawing);
  downloadImage.removeEventListener("click", generateImage);
  toggleToolbar.removeEventListener("click", toggleToolBar);
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
  downloadImage.addEventListener("click", generateImage);
  toggleToolbar.addEventListener("click", toggleToolBar);
}

init();
