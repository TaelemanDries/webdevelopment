const setup = () => {
    document.getElementById("spatieMakerKnop").addEventListener("click", function () {
        let tekst = document.getElementById("tekstInput").value;

        if (tekst.length === 0) {
            console.log("Geen tekst ingevoerd.");
            return;
        }

        let gespreideTekst = tekst.split("").join(" ");

        console.log(gespreideTekst);
    });
};
    window.addEventListener("load", setup);

