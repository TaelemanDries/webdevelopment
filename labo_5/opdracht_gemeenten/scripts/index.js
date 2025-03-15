const setup = () => {
    let gemeenten = [];
    let invoer;

    while (true) {
        invoer = prompt("Geef een gemeente in of typ 'stop' om te stoppen:");

        if (invoer === null || invoer.toLowerCase() === "stop") {
            break;
        }

        if (invoer.trim() !== "") {
            gemeenten.push(invoer.trim());
        }
    }

    gemeenten.sort();

    let selectElement = document.getElementById("gemeentenLijst");
    gemeenten.forEach(gemeente => {
        let optie = document.createElement("option");
        optie.text = gemeente;
        selectElement.add(optie);
    });

    console.log(gemeenten);
}

window.addEventListener("load", setup);
