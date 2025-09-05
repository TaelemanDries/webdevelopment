let input = document.getElementById("input");
let select = document.getElementById("select");
let p = document.createElement("p");
const img = document.getElementById("img");
let note = document.getElementById("note");
select.addEventListener("change", () => {
    if(select.value === "metEi"){
        img.style.backgroundImage = "url('images/with-egg.png')";
        img.classList.remove("hidden");

        note.textContent = "De kip heeft een ei";
    } else if(select.value === "zonderEi"){
        img.style.backgroundImage = "url('images/without-egg.png')";
        img.classList.remove("hidden");

        note.textContent = "De kip heeft geen ei"
    }
});
input.addEventListener("change", e => {
    input.value = e.target.value;
    p.textContent = input.value;
    if(p.innerText !== ""){
        let teller = 0;
        for(let i = 0; i<note.textContent.length; i++) {
            if(note.textContent[i] === p.textContent){
                teller++;
            }
        }
        let tel = document.createElement("p");
        tel.textContent = "De letter " + p.textContent + " komt " + teller + " keer voor.";

        if(document.body.contains(tel)){
            document.body.removeChild(tel);
            document.body.appendChild(tel);
        } else {
            document.body.appendChild(tel);
        }
    }
});

