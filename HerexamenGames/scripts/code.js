let keuze1 = document.querySelector(".keuze1");
let keuze2 = document.querySelector(".keuze2");
let wouldyourather = document.querySelector("main");
keuze2.addEventListener("click", () => {
    document.body.innerHTML = "";
    let p = document.createElement("p");
    p.textContent = "fuck you";
    document.body.classList.toggle("fuckyou");
    document.body.appendChild(p);
})