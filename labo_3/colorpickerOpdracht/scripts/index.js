const setup = () => {
    let sliders = document.getElementsByClassName("slider");
    let opslaanKleurBtn = document.getElementById("OpslaanKleur");

    for (let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("input", update);
    }

    opslaanKleurBtn.addEventListener("click", opslaanKleur);
};

const update = () => {
    let sliders = document.getElementsByClassName("slider");
    let colorDemo = document.getElementById("colorBox");

    let red = sliders[0].value;
    let green = sliders[1].value;
    let blue = sliders[2].value;

    document.getElementById("rood").textContent = red;
    document.getElementById("groen").textContent = green;
    document.getElementById("blauw").textContent = blue;

    colorDemo.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
};

const opslaanKleur = () => {
    let colorDemo = document.getElementById("colorBox");
    let opgeslagenKleuren = document.getElementById("opgeslagenKleuren");

    let newColor = document.createElement("div");
    newColor.classList.add("opgeslagenKleur");
    newColor.style.backgroundColor = colorDemo.style.backgroundColor;

    let verwijderBtn = document.createElement("button");
    verwijderBtn.classList.add("verwijderBtn");
    verwijderBtn.textContent = "X";

    // Kleur selecteren bij klikken
    newColor.addEventListener("click", () => {
        let rgbValues = newColor.style.backgroundColor.match(/\d+/g);
        let sliders = document.getElementsByClassName("slider");

        sliders[0].value = rgbValues[0];
        sliders[1].value = rgbValues[1];
        sliders[2].value = rgbValues[2];

        update();
    });

    newColor.appendChild(verwijderBtn);
    opgeslagenKleuren.appendChild(newColor);

    // Kleur verwijderen bij klikken op "X"
    verwijderBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        newColor.remove();
    });
};

window.addEventListener("load", setup);
