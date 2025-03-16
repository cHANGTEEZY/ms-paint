import { canvas } from "./drawOnCanvas";

export const generateImage = () => {
  const data = canvas.toDataURL();
  console.log(data);
  const a = document.createElement("a");
  a.href = data;
  a.download = "canvas-image";
  a.click();
};
