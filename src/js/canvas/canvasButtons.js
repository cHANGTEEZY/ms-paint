import { setColor, setStroke } from "./drawOnCanvas";

document.addEventListener("click", (e) => {
  const colorElement = e.target.closest(".color");
  if (colorElement) {
    document.querySelectorAll(".color").forEach((color) => {
      color.style.border = "";
    });

    colorElement.style.border = "2px solid black";

    const newColor = colorElement.style.backgroundColor;
    setColor(newColor);
  }

  const strokeElement = e.target.closest(".stroke-button");
  if (strokeElement) {
    document.querySelectorAll(".stroke-button").forEach((btn) => {
      btn.style.backgroundColor = "";
    });

    strokeElement.style.backgroundColor = "grey";

    const strokeSize = strokeElement.textContent.trim();
    setStroke(strokeSize);
  }
});
