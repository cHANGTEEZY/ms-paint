"use strict";

import { generateImage } from "./js/canvas/generateImage";
import { generateColorSelectors } from "./js/color/colorsSelectorGenerator";
import { generateStrokeButtons } from "./js/stroke/setStrokeSize";

const downloadImage = document.getElementById("save");

const loadEssentials = () => {
  generateColorSelectors();
  generateStrokeButtons();
};

loadEssentials();

downloadImage.addEventListener("click", () => {
  generateImage();
});
