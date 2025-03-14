"use strict";

import { generateColorSelectors } from "./js/color/colorsSelectorGenerator";
import { generateStrokeButtons } from "./js/stroke/setStrokeSize";

const loadEssentials = () => {
  generateColorSelectors();
  generateStrokeButtons();
};

loadEssentials();
