const toggleToolbar = document.getElementById("toolbar");
const toolbars = document.querySelector(".canvas-controllers");

toggleToolbar.addEventListener("click", () => {
  toolbars.classList.toggle("hide");
});
