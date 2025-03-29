


const setup = () => {
    const playField = document.getElementById("playField");
    const scoreDisplay = document.getElementById("scoreDisplay");
    const startButton = document.getElementById("startButton");

    const image = document.createElement("img");
    image.id = "target";
    playField.appendChild(image);

    let global = {
        IMAGE_COUNT: 5,
        IMAGE_SIZE: 48,
        IMAGE_PATH_PREFIX: "images/",
        IMAGE_PATH_SUFFIX: ".png",
        MOVE_DELAY: 1000,
        score: 0,
        timeoutId: 0
    };

    function moveAndChangeImage() {
        let randomX = Math.floor(Math.random() * (600 - global.IMAGE_SIZE));
        let randomY = Math.floor(Math.random() * (800 - global.IMAGE_SIZE));
        let randomImageIndex = Math.floor(Math.random() * global.IMAGE_COUNT);

        image.src = global.IMAGE_PATH_PREFIX + randomImageIndex + global.IMAGE_PATH_SUFFIX;
        image.style.left = randomX + "px";
        image.style.top = randomY + "px";
    }

    image.addEventListener("click", function() {
        if (image.src.includes("bomb")) {
            alert("Game Over!");
            clearInterval(global.timeoutId);
        } else {
            global.score++;
            scoreDisplay.innerText = "Score: " + global.score;
            moveAndChangeImage();
        }
    });

    startButton.addEventListener("click", function() {
        global.score = 0;
        scoreDisplay.innerText = "Score: 0";
        moveAndChangeImage();

        global.timeoutId = setInterval(moveAndChangeImage, global.MOVE_DELAY);
    });
};

window.addEventListener("load", setup);


