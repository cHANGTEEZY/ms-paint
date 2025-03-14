const strokesContainer = document.getElementById("stroke-size");

let strokeSize = 1;

export const generateStrokeButtons = () => {
  for (let i = 0; i < 5; i++) {
    const button = document.createElement("button");
    button.innerHTML = "click me";
    button.innerHTML = `${(strokeSize + i) * 2}`;
    button.classList.add("stroke-button");
    strokesContainer.appendChild(button);
  }
};
