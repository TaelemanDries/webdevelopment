const setup = () => {

    let button = document.querySelector('button');
    let boekenlijst = document.getElementById('bookList');
    let emptymessage = document.getElementById('emptyMessage');

    let boeken = JSON.parse(localStorage.getItem('boeken')) || [];
    boeken.forEach(maakBoek);


    function maakBoek(boek) {
        let box = document.createElement("div");
        let datum = new Date(boek.datum).toLocaleDateString();

        box.className = "box";
        box.innerHTML = `
        <div class="book-card">
        <title>${boek.title}</title>
        <p>Auteur: ${boek.auteur}</p>
        <p>${boek.genre.toUpperCase()}</p>
        <p>${boek.isbn}</p>
        </div>`

        box.addEventListener('click', () => {
            window.alert("je voegde dit boek toe op " + datum);
        })
        boekenlijst.appendChild(box);
        emptymessage.textContent = "";

    }

    let inputs = document.getElementsByName("input");

    let titel = document.getElementById("titel");
    let auteur = document.getElementById("auteur");
    let isbn = document.getElementById("isbn");
    let genre = document.getElementById("genre");

    for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener("change", (e) => {
            inputs[i].value = e.target.value;
        })
        inputs[i].value = inputs[i].value.trim();
    }
    titel.addEventListener("change", (e) => {
        titel.value = e.target.value;
        localStorage.setItem("titel", titel.value);
    })
    auteur.addEventListener("change", (e) => {
        auteur.value = e.target.value;
        localStorage.setItem("auteur", auteur.value);
    })

    genre.addEventListener("change", (e) => {
        genre.value = e.target.value;
        localStorage.setItem("genre", genre.value);
    });
    isbn.addEventListener("change", (e) => {
        isbn.value = e.target.value;
        localStorage.setItem('isbn', isbn.value);

        isbn.value = isbn.value.replace("-", "");

        if (isbn.value.length !== 10) {
            isbn.value = "";
        }
        if (isbn.value % 11 !== 0) {
            isbn.value = "";
        }
        for (let i = 0; i < isbn.value.length; i++) {
            if (isbn.value[i] === "X" || isbn.value[i] === "x") {
                isbn.value[i] = 10;
            }
            isbn.value[i] *= 10 - i;
        }
    })

    button.addEventListener('click', () => {

        const boek = {
            titel: localStorage.getItem("titel"),
            auteur: localStorage.getItem("auteur"),
            isbn: localStorage.getItem("isbn"),
            genre: localStorage.getItem("genre"),
            datum: new Date().toISOString(),
        }

        boeken.push(boek);
        localStorage.setItem('boeken', JSON.stringify(boeken));
        maakBoek(boek);
        titel.value = "";
        auteur.value = "";
        isbn.value = "";
        genre.value = '';
    })
    let button2 = document.getElementById("clearBooks");
    button2.addEventListener("click", () => {
        localStorage.clear();
    })

}
window.addEventListener('load', setup);