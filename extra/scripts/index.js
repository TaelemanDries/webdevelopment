const symbols = ["🍎", "🍌", "🍉", "🍇", "🍎", "🍌", "🍉", "🍇"];
let shuffledSymbols, flippedCards, matchedPairs;

const setup = () => {
    shuffledSymbols = symbols.sort(() => Math.random() - 0.5);
    flippedCards = [];
    matchedPairs = 0;
    createBoard();
};

const createBoard = () => {
    const board = document.getElementById("game-board");
    board.innerHTML = "";
    shuffledSymbols.forEach((symbol, index) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.dataset.index = index;
        card.addEventListener("click", flipCard);
        board.appendChild(card);
    });
};

const flipCard = (event) => {
    const card = event.target;
    const index = card.dataset.index;

    if (flippedCards.length < 2 && !flippedCards.includes(index)) {
        card.textContent = shuffledSymbols[index];
        card.classList.add("flipped");
        flippedCards.push(index);
    }

    if (flippedCards.length === 2) {
        setTimeout(checkMatch, 800);
    }
};

const checkMatch = () => {
    const [firstIndex, secondIndex] = flippedCards;
    const cards = document.querySelectorAll(".card");

    if (shuffledSymbols[firstIndex] === shuffledSymbols[secondIndex]) {
        matchedPairs++;
        if (matchedPairs === symbols.length / 2) {
            setTimeout(() => alert("Gefeliciteerd! Je hebt alle paren gevonden!"), 300);
        }
    } else {
        cards[firstIndex].textContent = "";
        cards[secondIndex].textContent = "";
        cards[firstIndex].classList.remove("flipped");
        cards[secondIndex].classList.remove("flipped");
    }

    flippedCards = [];
};

const resetGame = () => {
    setup();
};

window.addEventListener("load", setup);
