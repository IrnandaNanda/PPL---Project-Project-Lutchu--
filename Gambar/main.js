let iniToggle = false;
const tombol = document.getElementById("tombol");

tombol.addEventListener("click", () => {
  iniToggle = !iniToggle;

  if (iniToggle) {
    tombol.textContent = "menghapus";
    document.addEventListener("mousemove", handleMove);
  } else {
    tombol.textContent = "menggambar";
    document.removeEventListener("mousemove", handleMove);
    clearDraw();
  }
});

let klik = false;

function handleKlik() {
  klik = true;
}

function handleNonKlik() {
  klik = false;
}

addEventListener("mousedown", handleKlik)
addEventListener("mouseup", handleNonKlik)

function handleMove(event) {
  const x = event.clientX,
    y = event.clientY;

  if (klik) {
    const circle = document.createElement("div");
    circle.style.top = y + "px";
    circle.style.left = x + "px";

    circle.id = "circle";

    document.body.appendChild(circle);
  }
}

function clearDraw() {
  const circles = document.querySelectorAll("div");
  circles.forEach((circles) => circles.remove());
}