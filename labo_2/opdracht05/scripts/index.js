const setup = () => {
// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    let btnWijzig=document.getElementById("btnWijzig");
    btnWijzig.addEventListener("click", wijzigen);
    pElement.innerHTML="Welkom!";
    const wijzigen = () => {
        let pElement = document.getElementById("txtOutput");
    }
}
window.addEventListener("load", setup);