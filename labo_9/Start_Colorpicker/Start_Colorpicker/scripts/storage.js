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
    }
};

const storeSwatches = () => {
    let swatchElements = document.getElementsByClassName("swatch");
    let colors = [];

    for (let i = 0; i < swatchElements.length; i++) {
        if (swatchElements[i].classList.contains("rounded")) continue;

        let red = swatchElements[i].getAttribute("data-red");
        let green = swatchElements[i].getAttribute("data-green");
        let blue = swatchElements[i].getAttribute("data-blue");

        colors.push({ red: red, green: green, blue: blue });
    }

    localStorage.setItem("swatches", JSON.stringify(colors));
};

const restoreSwatches = () => {
    let swatchesStr = localStorage.getItem("swatches");
    if (swatchesStr) {
        let swatches = JSON.parse(swatchesStr);
        for (let i = 0; i < swatches.length; i++) {
            addSwatchComponent(swatches[i].red, swatches[i].green, swatches[i].blue);
        }
    }
};
