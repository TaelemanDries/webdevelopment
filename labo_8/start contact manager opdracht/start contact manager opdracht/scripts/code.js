let personen = [
    {
        voornaam: 'Jan',
        familienaam: 'Janssens',
        geboorteDatum: '2010-10-10',
        email: 'jan@example.com',
        aantalKinderen: 0
    },
    {
        voornaam: 'Mieke',
        familienaam: 'Mickelsen',
        geboorteDatum: '1980-01-01',
        email: 'mieke@example.com',
        aantalKinderen: 1
    },
    {
        voornaam: 'Piet',
        familienaam: 'Pieters',
        geboorteDatum: '1970-12-31',
        email: 'piet@example.com',
        aantalKinderen: 2
    }
];

let geselecteerdeIndex = -1;

const getFormData = () => ({
    voornaam: document.getElementById("txtVoornaam").value.trim(),
    familienaam: document.getElementById("txtFamilienaam").value.trim(),
    geboorteDatum: document.getElementById("txtGeboorteDatum").value.trim(),
    email: document.getElementById("txtEmail").value.trim(),
    aantalKinderen: parseInt(document.getElementById("txtAantalKinderen").value.trim())
});

const vulFormulierIn = (persoon) => {
    document.getElementById("txtVoornaam").value = persoon.voornaam;
    document.getElementById("txtFamilienaam").value = persoon.familienaam;
    document.getElementById("txtGeboorteDatum").value = persoon.geboorteDatum;
    document.getElementById("txtEmail").value = persoon.email;
    document.getElementById("txtAantalKinderen").value = persoon.aantalKinderen;
};

const maakFormulierLeeg = () => {
    document.getElementById("txtVoornaam").value = "";
    document.getElementById("txtFamilienaam").value = "";
    document.getElementById("txtGeboorteDatum").value = "";
    document.getElementById("txtEmail").value = "";
    document.getElementById("txtAantalKinderen").value = "";
    geselecteerdeIndex = -1;
    clearAllErrors();
};

const updatePersonenLijst = () => {
    const lst = document.getElementById("lstPersonen");
    lst.innerHTML = "";
    personen.forEach((persoon, index) => {
        const option = document.createElement("option");
        option.textContent = `${persoon.voornaam} ${persoon.familienaam}`;
        option.setAttribute("data-index", index);
        lst.appendChild(option);
    });
};

const bewaarBewerktePersoon = () => {
    clearAllErrors();
    valideer();

    const errors = document.querySelectorAll(".errorMessage");
    for (let error of errors) {
        if (error.innerText !== "") return;
    }

    const data = getFormData();

    if (geselecteerdeIndex === -1) {
        personen.push(data);
    } else {
        personen[geselecteerdeIndex] = data;
    }

    updatePersonenLijst();
    maakFormulierLeeg();
};

const bewerkNieuwePersoon = () => {
    maakFormulierLeeg();
};

const toonPersoonInFormulier = (e) => {
    const index = e.target.selectedIndex;
    if (index >= 0) {
        geselecteerdeIndex = index;
        vulFormulierIn(personen[index]);
    }
};

const setup = () => {
    document.getElementById("btnBewaar").addEventListener("click", bewaarBewerktePersoon);
    document.getElementById("btnNieuw").addEventListener("click", bewerkNieuwePersoon);
    document.getElementById("lstPersonen").addEventListener("change", toonPersoonInFormulier);
    updatePersonenLijst();
};

window.addEventListener("load", setup);
