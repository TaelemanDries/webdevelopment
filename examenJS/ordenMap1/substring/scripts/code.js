const setup = () => {
    let btnSubs = document.getElementById('btnSubs');
    btnSubs.addEventListener('click', knip);
}
const knip = () => {
    let txtInput = document.getElementById('txtInput');
    let tekst = txtInput.value;
    let getal1 = document.getElementById("getal1");
    let nummer1 = parseInt(getal1.value, 10);
    let getal2 = document.getElementById("getal2");
    let nummer2 = parseInt(getal2.value, 10)
    let pTekst = document.getElementById('txtOutput');
    pTekst.innerHTML = tekst.substring(nummer1, nummer2);
}

window.addEventListener('load', setup);