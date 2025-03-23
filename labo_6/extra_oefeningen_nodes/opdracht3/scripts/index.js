const setup = () => {
    let btn = document.querySelector("#myBtn");
    btn.addEventListener("click", addPelement);
};

const addPelement = () => {
    let div = document.getElementById("myDIV");
    let p = document.createElement("p");
    p.textContent = "Dit is een nieuwe p!";
    div.appendChild(p);
};

window.addEventListener("load", setup);
