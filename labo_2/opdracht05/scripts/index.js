const setup = () => {
    let pElement = document.getElementById("txtOutput");
    let btnWijzig = document.getElementById("btnWijzig");
    btnWijzig.addEventListener("click", () => {
        pElement.innerHTML = "Welkom!";
    });
};
window.addEventListener("load", setup);
