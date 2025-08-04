const setup = () => {
    restoreSliderValues()
    restoreOpslagKleuren()

    update()

    let butt = document.getElementById("butt");
    let sliders = document.getElementsByClassName('slider');
    for (let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener('input', update);
    }
}
const update = () => {
    let sliders = document.getElementsByClassName("slider");
    let colorCube = document.getElementById("colorCube");

    let red = sliders[0].value;
    let green = sliders[1].value;
    let blue = sliders[2].value;

    document.getElementById("rood").textContent = red;
    document.getElementById("groen").textContent = green;
    document.getElementById("blauw").textContent = blue;

    colorCube.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

    storeSliderValues()

}
const addSwatchComponent = (kleur) => {
    const opslagKleuren = document.getElementById("opslagKleuren");
    const colorCube = document.getElementById("colorCube");

    const newColor = document.createElement("div");
    newColor.classList.add("opgeslagenKleur");
    newColor.style.backgroundColor = kleur;

    const verwijderBtn = document.createElement("button");
    verwijderBtn.classList.add("verwijderBtn");
    verwijderBtn.textContent = "X";

    verwijderBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        newColor.remove();
        storeOpslagKleuren(); // update storage bij verwijdering
    });

    newColor.addEventListener("click", () => {
        colorCube.style.backgroundColor = kleur;
        const rgb = kleur.match(/\d+/g);

        document.getElementById("sldRed").value = rgb[0];
        document.getElementById("sldGreen").value = rgb[1];
        document.getElementById("sldBlue").value = rgb[2];

        document.getElementById("rood").textContent = rgb[0];
        document.getElementById("groen").textContent = rgb[1];
        document.getElementById("blauw").textContent = rgb[2];


    });
    newColor.appendChild(verwijderBtn);
    opslagKleuren.appendChild(newColor);
};

butt.addEventListener('click', () => {
    const kleur = document.getElementById("colorCube").style.backgroundColor;
    addSwatchComponent(kleur);        // voegt het blokje toe
    storeOpslagKleuren();
});

window.addEventListener('load', setup);