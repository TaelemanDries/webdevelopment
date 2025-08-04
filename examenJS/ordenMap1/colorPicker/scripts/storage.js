const storeSliderValues = () => {
    let red = document.getElementById("sldRed").value;
    let green = document.getElementById("sldGreen").value;
    let blue = document.getElementById("sldBlue").value;

    let sliderValues = { red: red, green: green, blue: blue };
    localStorage.setItem("sliderValues", JSON.stringify(sliderValues));
};
const restoreSliderValues = () => {
    let sliderValuesString = localStorage.getItem("sliderValues");
    if (sliderValuesString) {
        let sliderValues = JSON.parse(sliderValuesString);
        document.getElementById("sldRed").value = sliderValues.red;
        document.getElementById("sldGreen").value = sliderValues.green;
        document.getElementById("sldBlue").value = sliderValues.blue;
        document.getElementById("rood").textContent = sliderValues.red;
        document.getElementById("groen").textContent = sliderValues.green;
        document.getElementById("blauw").textContent = sliderValues.blue;
    }
};
const restoreCubeColor = () => {
    let kleur = localStorage.getItem("cubeColor");
    if (kleur) {
        document.getElementById("colorCube").style.backgroundColor = kleur;
    }
    const storeOpslag = () => {
        let opslag = document.getElementById("opslagKleuren");
        localStorage.setItem("")
    }
};
const storeOpslagKleuren = () => {
    const swatchElements = document.getElementsByClassName("opgeslagenKleur");
    const kleuren = [];

    for (let i = 0; i < swatchElements.length; i++) {
        const kleur = swatchElements[i].style.backgroundColor;
        kleuren.push(kleur); // bv. "rgb(255, 128, 0)"
    }

    localStorage.setItem("opgeslagenKleuren", JSON.stringify(kleuren));
};
const restoreOpslagKleuren = () => {
    const kleurenString = localStorage.getItem("opgeslagenKleuren");
    if (kleurenString) {
        const kleuren = JSON.parse(kleurenString);
        kleuren.forEach(kleur => {
            addSwatchComponent(kleur);
        });
    }
};

