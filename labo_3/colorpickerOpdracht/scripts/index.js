const setup = () => {
    let sliders = document.getElementsByClassName("slider");
    let colorDemo = document.getElementsByClassName("colorDemo")[0];

    for (let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("change", update);
        sliders[i].addEventListener("input", update);
    }
};

const update = () => {
    let sliders = document.getElementsByClassName("slider");
    let colorDemo = document.getElementsByClassName("colorDemo")[0];

    let red = sliders[0].value;
    let green = sliders[1].value;
    let blue = sliders[2].value;

    document.getElementById("rood").textContent = red;
    document.getElementById("groen").textContent = green;
    document.getElementById("blauw").textContent = blue;

    console.log(`RGB: (${red}, ${green}, ${blue})`);

    colorDemo.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
};
window.addEventListener("load", setup);
