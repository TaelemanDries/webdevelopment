const setup = () => {
    document.getElementById("valideer").addEventListener("click", valideerForm);
}

const valideerForm = () => {
    let geldig = true;

    resetFouten();

    let voornaam = document.getElementById("voornaam").value.trim();
    if (voornaam.length > 30) {
        toonFout("voornaam", "Max. 30 karakters");
        geldig = false;
    }

    let familienaam = document.getElementById("familienaam").value.trim();
    if (familienaam === "") {
        toonFout("familienaam", "Verplicht veld");
        geldig = false;
    } else if (familienaam.length > 50) {
        toonFout("familienaam", "Max. 50 karakters");
        geldig = false;
    }

    let geboortedatum = document.getElementById("geboortedatum").value.trim();
    let dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (geboortedatum === "") {
        toonFout("geboortedatum", "Verplicht veld");
        geldig = false;
    } else if (!dateRegex.test(geboortedatum)) {
        toonFout("geboortedatum", "Formaat moet YYYY-MM-DD zijn");
        geldig = false;
    }

    let email = document.getElementById("email").value.trim();
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        toonFout("email", "Verplicht veld");
        geldig = false;
    } else if (!emailRegex.test(email)) {
        toonFout("email", "Geen geldig e-mailadres");
        geldig = false;
    }

    let kinderen = document.getElementById("kinderen").value.trim();
    if (kinderen === "" || isNaN(kinderen) || kinderen < 0) {
        toonFout("kinderen", "Moet een positief getal zijn");
        geldig = false;
    } else if (kinderen > 99) {
        toonFout("kinderen", "is te vruchtbaar");
        geldig = false;
    }

    if (geldig) {
        alert("Proficiat!");
    }
}

const toonFout = (veld, boodschap) => {
    let input = document.getElementById(veld);
    let error = document.getElementById(`error-${veld}`);

    input.classList.add("invalid");
    error.textContent = boodschap;
}

const resetFouten = () => {
    let inputs = document.querySelectorAll("input");
    inputs.forEach(input => input.classList.remove("invalid"));

    let fouten = document.querySelectorAll(".error");
    fouten.forEach(fout => fout.textContent = "");
}

window.addEventListener("load", setup);
