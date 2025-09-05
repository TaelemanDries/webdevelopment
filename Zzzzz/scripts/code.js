

const setup = () => {

    localStorage.setItem("gebruiker", "Dries");

    let input = document.getElementById("typbox");
    let chats = document.getElementById("chats");


    let messages = JSON.parse(localStorage.getItem('chats')) || [];
    messages.forEach(maakChatVoorPersoon);


    input.addEventListener("change", (e) => {
        input.value = e.target.value;
    })

    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            const tekst = input.value;


            const msg = {
                user: localStorage.getItem('gebruiker') || "Gebruiker",
                tekst: tekst,
                date: new Date().toISOString(),
            };
            const reply = {
                user: "AI assistent",
                tekst: "ja",
                date: new Date().toISOString(),
            }

            messages.push(msg);
            messages.push(reply);
            localStorage.setItem("chats", JSON.stringify(messages));
            maakChatVoorPersoon(msg);
            maakChatVoorPersoon(reply);
            input.value = "";
        }
    })
    function maakChatVoorPersoon(msg) {
        let box = document.createElement("div");
        let nu = new Date(msg.date).toLocaleDateString("Nl-Be");

        box.className = "box";
        box.innerHTML = `
    <div class="box">
    <header class="headerchats"><h1 class="headertitel">${msg.user}<h1><h2 class="headerDatum">${nu}</h2></header>
    <div class="message">${msg.tekst}</div>
    </div>`
        chats.appendChild(box);
    }
};
window.addEventListener("load", setup);