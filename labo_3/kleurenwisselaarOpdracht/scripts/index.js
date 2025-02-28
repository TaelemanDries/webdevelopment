const setup = () => {

    let btn1 = document.getElementById("btn1");
    let btn2 = document.getElementById("btn2");
    let btn3 = document.getElementById("btn3");

btn1.addEventListener("click", changeButtonBlueWhite);
btn2.addEventListener("click", changeButtonYellowWhite);
btn3.addEventListener("click", changeButtonBlackWhite);
}

const changeButtonBlueWhite = () => {
    let btn = document.getElementById("btn1");
    btn.classList.toggle("changeColor1");
}
const changeButtonYellowWhite = () => {
    let btn = document.getElementById("btn2");
    btn.classList.toggle("changeColor2");
}
const changeButtonBlackWhite = () => {
    let btn = document.getElementById("btn3");
    btn.classList.toggle("changeColor3");
}

window.addEventListener("load", setup);