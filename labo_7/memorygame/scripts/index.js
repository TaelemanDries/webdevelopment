console.log("test");
const AANTAL_HORIZONTAAL = 4;
const AANTAL_VERTICAAL = 3;
const AANTAL_KAARTEN = 6;
const IMAGE_PATH = "images/";
const BACK_IMAGE = "achterkant.png";

let kaarten = [];
let geselecteerdeKaarten = [];
let vergrendeld = false;

const setup = () => {
    const gameBoard = document.getElementById("gameBoard");
    gameBoard.style.gridTemplateColumns = `repeat(${AANTAL_HORIZONTAAL}, 1fr)`;
    gameBoard.style.gridTemplateRows = `repeat(${AANTAL_VERTICAAL}, 1fr)`;

    kaarten = [];
    geselecteerdeKaarten = [];
    vergrendeld = false;

    for (let i = 1; i <= AANTAL_KAARTEN; i++) {
        kaarten.push(i, i);
    }
    kaarten.sort(() => Math.random() - 0.5);

    gameBoard.innerHTML = "";
    kaarten.forEach((nummer, index) => {
        const kaart = document.createElement("img");
        kaart.src = IMAGE_PATH + BACK_IMAGE;
        kaart.dataset.id = nummer;
        kaart.classList.add("card");
        kaart.addEventListener("click", draaiKaartOm);
        gameBoard.appendChild(kaart);
    });
};

const draaiKaartOm = (event) => {
    if (vergrendeld) return;

    const kaart = event.target;
    if (!kaart.src.includes(BACK_IMAGE) || geselecteerdeKaarten.includes(kaart)) return;

    kaart.src = IMAGE_PATH + "kaart" + kaart.dataset.id + ".png";
    geselecteerdeKaarten.push(kaart);

    if (geselecteerdeKaarten.length === 2) {
        vergrendeld = true;
        setTimeout(controleren, 1000);
    }
};

const controleren = () => {
    const [kaart1, kaart2] = geselecteerdeKaarten;

    if (kaart1.dataset.id === kaart2.dataset.id) {
        kaart1.style.visibility = "hidden";
        kaart2.style.visibility = "hidden";
    } else {
        kaart1.src = IMAGE_PATH + BACK_IMAGE;
        kaart2.src = IMAGE_PATH + BACK_IMAGE;
    }

    geselecteerdeKaarten = [];
    vergrendeld = false;

    if (document.querySelectorAll(".card[style='visibility: hidden;']").length === AANTAL_KAARTEN * 2) {
        setTimeout(() => alert("Gefeliciteerd, je hebt gewonnen!"), 500);
    }
};

document.getElementById("restartButton").addEventListener("click", setup);
window.addEventListener("load", setup);
