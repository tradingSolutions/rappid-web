
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

for (i = 0; i < list.length; i++) {
    list[i].addEventListener("click", () => {
        overlay.classList.remove("active");
    });
}

closeBtutton.addEventListener("click", () => {
    overlay.classList.remove("active");
});

const menuSM = document.getElementById("menuSM");
const barsButtonSM = document.querySelector(".barsSM")
const closeBtuttonSM = document.querySelector(".close-iconSM")

const listSM = document.querySelectorAll(".menu-item");

barsButtonSM.addEventListener("click", () => {
    overlaySM.classList.add("active");
});

for (i = 0; i < list.length; i++) {
    listSM[i].addEventListener("click", () => {
        overlaySM.classList.remove("active");
    });
}

closeBtuttonSM.addEventListener("click", () => {
    overlaySM.classList.remove("active");
});


$(document).ready(function(){
    $('.carousel').carousel();
});
