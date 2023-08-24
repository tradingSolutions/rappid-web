
// Cambiar Palabras del texto H2
const changingText = document.getElementById("changingText");
    const words = ["Productos", "Branding", "Experiencias", "Prototipos"];
    let currentIndex = 0;

    function changeWord() {
        changingText.innerHTML = `<span>${words[currentIndex]}</span>`;
        currentIndex = (currentIndex + 1) % words.length;
    }

    setInterval(changeWord, 1700); // Cambia cada 4 segundos (4000 ms)


// Navbar Slider
const menu = document.getElementById("menu");
const barsButton = document.querySelector(".bars")
const closeBtutton = document.querySelector(".close-icon")

const list = document.querySelectorAll(".menu-item");

barsButton.addEventListener("click", () => {
    overlay.classList.add("active");
});

closeBtutton.addEventListener("click", () => {
    overlay.classList.remove("active");
});

