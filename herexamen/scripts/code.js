const setup = () => {

    let inputVoornaam = document.getElementById("voornaam");
    let inputAchternaam = document.getElementById("achternaam");
    let inputEmail= document.getElementById("email");
    let inputTel = document.getElementById("telefoon");

    const butt1 = document.getElementById("log");

    inputVoornaam.addEventListener("change", e => {
        inputVoornaam.value = e.target.value;
    })
    inputAchternaam.addEventListener("change", e => {
        inputAchternaam.value = e.target.value;
    })
    inputEmail.addEventListener("change", e => {
        inputEmail.value = e.target.value;
    })
    inputTel.addEventListener("change", e => {
        inputTel.value = e.target.value;
    })

    butt1.addEventListener("click", () => {
        let value = false;
        if(!inputVoornaam.value) {
            alert("Geef astublieft een geldige voornaam")
            inputVoornaam.style.border = "2px solid red";
            value = true;
        }if(!inputAchternaam.value) {
            alert("Geef astublieft een geldige achternaam")
            inputAchternaam.style.border = "2px solid red";
            value = true;
        }if(!inputEmail.value || !inputEmail.value.includes("@")) {
            alert("Geef astublieft een geldig emailadres met een @")
            inputEmail.style.border = "2px solid red";
            value = true;
        }if(!inputTel.value) {
            alert("Geef astublieft een geldig telefoonnummer in")
            inputTel.style.border = "2px solid red";
            value = true;
        }
        if(!value){
            localStorage.setItem("voornaam", inputVoornaam.value);
            localStorage.setItem("achternaam", inputAchternaam.value);
            localStorage.setItem("email", inputEmail.value);
            localStorage.setItem("telefoon", inputTel.value);
            inputVoornaam.value = "";
            inputAchternaam.value = "";
            inputEmail.value = "";
            inputTel.value = "";
            inputVoornaam.style.border = "";
            inputAchternaam.style.border = "";
            inputEmail.style.border = "";
            inputTel.style.border = "";
            alert("login geslaagd!")
        }
    })

const butt2 = document.getElementById("sla");
let inputveld = document.getElementById("mijnInput");
inputveld.addEventListener("change", (e) => {
    inputveld.value = e.target.value;
})
butt2.addEventListener("click",  () => {
    let voornaam = localStorage.getItem("voornaam");
    let achternaam = localStorage.getItem("achternaam");
    let email = localStorage.getItem("email");
    let telefoon = localStorage.getItem("telefoon");

    const hdrnaam = document.createElement("span");
    hdrnaam.className = "hdrnaam";
    hdrnaam.textContent = `${voornaam} ${achternaam}`

    const hdremail = document.createElement("span");
    hdremail.className = "hdremail";
    hdremail.textContent = email;

    const hdrtel = document.createElement("span");
    hdrtel.className = "hdrtel";
    hdrtel.textContent = telefoon;

    let bericht = document.createElement("p");
    bericht.className = "reviewMsg";
    bericht.innerHTML = inputveld.value;

    let divke = document.createElement("div");
    divke.className = "reviewDiv";

    let header = document.createElement("div");
    header.className = "hdr";

    const toeDate = new Date();
    const vandaag = toeDate.toLocaleString("nl-BE")

    let toe = document.createElement("div");
    toe.className = "toe";

    toe.textContent = vandaag;

    header.appendChild(hdrnaam);
    header.appendChild(hdremail);
    header.appendChild(hdrtel);

    divke.appendChild(header);
    divke.appendChild(bericht);
    divke.appendChild(toe);
    document.getElementById("reviews").appendChild(divke);
    inputveld.value = "";
})
}

window.addEventListener("load", setup);