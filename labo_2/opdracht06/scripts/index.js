
const setup = () => {
    let btnKopieer = document.getElementById("btnKopieer");
    btnKopieer.addEventListener("click", kopieer);
}
const kopieer = () => {
    let txtInput = document.getElementById("txtInput");
    let tekst = txtInput.value;
    let tekstNew = document.getElementById("tekstOutput");
    tekstNew.textContent = tekst;
    console.log(tekst);
};
window.addEventListener("load", setup);
