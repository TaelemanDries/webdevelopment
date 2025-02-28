const setup = () => {
// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
document.getElementById("btnHerbereken").addEventListener("click", function () {
    let total = 0;

    let rows = document.getElementsByTagName("tbody")[0].getElementsByTagName("tr");

    for (let i = 0; i < rows.length; i++) {
        let prijsElement = rows[i].getElementsByClassName("prijs")[0];
        let aantalElement = rows[i].getElementsByClassName("aantal")[0];
        let btwElement = rows[i].getElementsByClassName("btw")[0];
        let subtotaalElement = rows[i].getElementsByClassName("subtotaal")[0];

        let prijs = parseFloat(prijsElement.innerText.replace(" eur", ""));
        let aantal = parseInt(aantalElement.value) || 0;
        let btwPercentage = parseFloat(btwElement.innerText.replace("%", "")) / 100;

        let subtotal = (prijs * aantal) * (1 + btwPercentage);
        subtotaalElement.innerText = subtotal.toFixed(2) + " eur";

        total += subtotal;
    }

    let totaalElement = document.getElementsByTagName("tfoot")[0].getElementsByClassName("subtotaal")[0];
    totaalElement.innerText = total.toFixed(2) + " eur";
});
}
window.addEventListener("load", setup);