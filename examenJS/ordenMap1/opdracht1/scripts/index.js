const setup = () => {
let tekst = document.getElementById('appelpeer');
const button = document.getElementById('butt');

button.addEventListener('click', () => {tekst.innerHTML = "ik heb kaka gedaan"})

}
window.addEventListener("load", setup);