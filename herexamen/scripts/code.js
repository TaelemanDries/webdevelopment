const setup = () => {
const butt = document.getElementById("sla");
let inputveld = document.getElementById("mijnInput");
inputveld.addEventListener("change", (e) => {
    inputveld.value = e.target.value;
})
butt.addEventListener("click",  () => {
    let bericht = document.createElement("p");
    let divke = document.createElement("div");
    bericht.innerHTML = inputveld.value;
    divke.appendChild(bericht);
    document.body.appendChild(divke);
    inputveld.value = "";
})
}
window.addEventListener("load", setup);