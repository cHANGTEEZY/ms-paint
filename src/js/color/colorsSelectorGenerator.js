import { colors } from "./colorsData";

const container = document.getElementById("color-palette");

export const generateColorSelectors = () => {
  colors.forEach((color) => {
    const colorDiv = document.createElement("div");
    colorDiv.classList.add("color", color.class);
    colorDiv.title = color.name;
    colorDiv.style.backgroundColor = color.color;
    container.appendChild(colorDiv);
  });
};
