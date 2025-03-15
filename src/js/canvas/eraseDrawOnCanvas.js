import { toggleIsErasing } from "./drawOnCanvas";

const toggleButton = document.getElementById("toggle-button");
const toggleCircle = document.getElementById("toggle-circle");

toggleButton.addEventListener("click", () => {
  toggleCircle.classList.toggle("active");
  toggleButton.classList.toggle("active");
  toggleIsErasing();
});
