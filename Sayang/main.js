const gak = document.getElementById("gak");
const sayang = document.getElementById("sayang");
const h1 = document.querySelector("h1")
const img = document.querySelector("img")


const width = window.innerWidth - 300;
const height = window.innerHeight - 200;

gak.addEventListener("click", function () {
  const random = Math.random();
  const randomWidth = random * width;
  const randomHeight = random * height;
  gak.style.left = randomWidth + "px";
  gak.style.top = randomHeight + "px";
});


sayang.addEventListener("click", function () {
  h1.textContent = "makasiii, aku juga sayang kamu"
  gak.style.display = "none"
  sayang.style.display = "none"
  img.src = "gif/tkthao219-bubududu (1).gif"
})