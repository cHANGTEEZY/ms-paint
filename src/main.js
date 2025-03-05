const canvas = document.getElementById("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight - 60;

const c = canvas.getContext("2d");

c.fillStyle = "red";
c.fillRect(0, 0, 150, 75);
c.fillRect(100, 100, 150, 75);
c.fillRect(200, 200, 150, 75);
c.fillRect(300, 300, 150, 75);
c.fillRect(400, 400, 150, 75);

document.addEventListener("mousemove", (e) => {
  c.fillStyle;
});
