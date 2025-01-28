const img = document.getElementById("main-img");
const question = document.getElementById("question");
const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");

const questions = [
    { text: "Haii ... Jawab Ya", reason: "Karena aku lucu banget kan? 😁" },
    { text: "Kamu Suka Kucing 😺", reason: "Hemm Makasih ya 🥰" },
    { text: "Kamu Suka Es Krim 🍦", reason: "It is funny 🥺" },
    { text: "Kamu sayang aku gak?", reason: "That's Not so Bad🍦" } // Pertanyaan terakhir
];

let currentQuestion = 0;
const width = window.innerWidth - 300;
const height = window.innerHeight - 200;

// Fungsi untuk menampilkan pertanyaan berikutnya
function showNextQuestion(answer) {
    // Menampilkan alasan untuk pertanyaan selain pertanyaan terakhir
    if (currentQuestion < questions.length - 1) {
        if (answer === "yes") {
            alert("yeay! 🥰");
        } else if (answer === "no") {
            alert("Hemmm! 😅");
        }

        currentQuestion++;
        question.textContent = questions[currentQuestion].text;
        alert(questions[currentQuestion].reason); // Menampilkan alasan
    } else if (currentQuestion === questions.length - 1) {
        question.textContent = questions[currentQuestion].text;
        yesButton.addEventListener("click", showFinalGif);
        noButton.addEventListener("click", moveNoButton);
    }
}

// Fungsi untuk memindahkan tombol "Tidak"
function moveNoButton() {
    const randomWidth = Math.random() * width;
    const randomHeight = Math.random() * height;
    noButton.style.position = "absolute";
    noButton.style.left = randomWidth + "px";
    noButton.style.top = randomHeight + "px";
}

// Fungsi untuk menampilkan GIF akhir
function showFinalGif() {
    img.src = "gif/gif2.gif";
    question.textContent = "Makasii, aku juga sayang kamu!";
    yesButton.style.display = "none";
    noButton.style.display = "none";
}

// Event listener untuk tombol "Iya" dan "Tidak"
yesButton.addEventListener("click", () => showNextQuestion("yes"));
noButton.addEventListener("click", () => showNextQuestion("no"));
