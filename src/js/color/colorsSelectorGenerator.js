import { colors } from "./colorsData";

const container = document.getElementById("color-palette");

export const generateColorSelectors = () => {
  colors.forEach((color) => {
    const colorSpan = document.createElement("span");
    colorSpan.classList.add("color", color.class);
    colorSpan.title = color.name;
    colorSpan.style.backgroundColor = color.color;
    container.appendChild(colorSpan);
  });
};
