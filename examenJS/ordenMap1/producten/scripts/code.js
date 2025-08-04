const setup = () => {
let button = document.getElementById("bereken");
button.addEventListener("click", berekenen);
}
const berekenen = () => {
    let prijzen = document.getElementsByClassName("prijs");
    let aantallen = document.getElementsByClassName("aantal");
    let btws = document.getElementsByClassName("btw");
    let subtotalen = document.getElementsByClassName("subtotaal");

    let prijs1 = parseInt(prijzen[0].innerHTML, 10);
    let prijs2 = parseInt(prijzen[1].innerHTML, 10);
    let prijs3 = parseInt(prijzen[2].innerHTML, 10);

    console.log(prijs1);
    let aantal1 = parseInt(aantallen[0].value, 10)
    let aantal2 = parseInt(aantallen[1].value, 10)
    let aantal3 = parseInt(aantallen[2].value, 10)


    let btw1 = parseInt(btws[0].innerHTML, 10);
    let btw2 = parseInt(btws[1].innerHTML, 10);
    let btw3 = parseInt(btws[2].innerHTML, 10);

    console.log(btw1);

    let subtotaal1 = subtotalen[0].innerHTML;
    let subtotaal2 = subtotalen[1].innerHTML;
    let subtotaal3 = subtotalen[2].innerHTML;

    subtotaal1 = prijs1*aantal1 + (prijs1*aantal1)*(btw1/100);
    subtotaal2 = prijs2*aantal2 + (prijs2*aantal2)*(btw2/100);
    subtotaal3 = prijs3*aantal3 + (prijs3*aantal3)*(btw3/100);

    subtotalen[0].innerHTML = subtotaal1;
    subtotalen[1].innerHTML = subtotaal2;
    subtotalen[2].innerHTML = subtotaal3;

    let eindtotaal = document.getElementById("totaal");
    eindtotaal.innerHTML = subtotaal1 + subtotaal2 + subtotaal3;

}
window.addEventListener('load', setup);