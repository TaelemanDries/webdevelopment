const setup = () => {
    const telSequentieMetIndexOf = (tekst, zoekterm) => {
        let count = 0;
        let positie = tekst.indexOf(zoekterm);

        while (positie !== -1) {
            count++;
            positie = tekst.indexOf(zoekterm, positie + 1);
        }

        return count;
    };

    const telSequentieMetLastIndexOf = (tekst, zoekterm) => {
        let count = 0;
        let positie = tekst.lastIndexOf(zoekterm);

        while (positie !== -1) {
            count++;
            positie = tekst.lastIndexOf(zoekterm, positie - 1);
        }

        return count;
    };

    document.getElementById("tellenKnop").addEventListener("click", function () {
        let tekst = "De man van An geeft geen hand aan ambetante verwanten";
        let zoekterm = "an";

        let indexOfTelling = telSequentieMetIndexOf(tekst, zoekterm);
        let lastIndexOfTelling = telSequentieMetLastIndexOf(tekst, zoekterm);

        document.getElementById("resultaatIndexOf").innerText = `"an" komt ${indexOfTelling} keer voor (via indexOf).`;
        document.getElementById("resultaatLastIndexOf").innerText = `"an" komt ${lastIndexOfTelling} keer voor (via lastIndexOf).`;
    });
}
window.addEventListener("load", setup);