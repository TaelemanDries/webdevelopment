const setup = () => {
    document.getElementById("toonResultaat").addEventListener("click", () => {
        let roker = document.getElementById("roker").checked;

        let moedertaal = document.querySelector('input[name="moedertaal"]:checked');
        moedertaal = moedertaal ? moedertaal.value : "Geen keuze";

        let buurland = document.getElementById("buurland").value;

        let bestelling = Array.from(document.getElementById("bestelling").selectedOptions)
            .map(option => option.value);

        console.log("Is roker:", roker);
        console.log("Moedertaal:", moedertaal);
        console.log("Favoriete buurland:", buurland);
        console.log("Bestelling:", bestelling.length > 0 ? bestelling.join(", ") : "Geen selectie");
    });
}

window.addEventListener("load", setup);
