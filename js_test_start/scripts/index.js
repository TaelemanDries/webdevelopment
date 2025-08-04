const updateView = () => {
    let kipMetEi = document.getElementById("kipMetEi");
    let kipZonderEI = document.getElementById("kipZonderEI");
    let kip=document.getElementById("kip");

        let img = document.getElementById("img");
        let index = kip.selectedIndex;
        let note = document.getElementById("note");
        let count = document.getElementById("letter-count");
        let letter = document.getElementById("letter");
        let counter = 0;
        if(kip.options[index].text === "Met een ei") {
            img.classList.remove("without-egg");
            img.classList.add("with-egg")
            note.innerHTML = "de kip met een ei"
        } else if(kip.options[index].text === "Zonder een ei") {
            img.classList.remove("with-egg");
            img.classList.add("without-egg")
            note.innerHTML = "de kip zonder een ei"
        }else {
            img.classList.remove("with-egg")
            img.classList.remove("without-egg")
            note.innerHTML = "";
        }
        for(i = 0; i<note.innerHTML.length; i++) {
            if(note.innerHTML[i] === letter.value){
                counter++;
            }
        }
        count.innerHTML = counter;
};
const setup = () => {
    document.getElementById('kip').addEventListener('change', updateView);
    document.getElementById("letter").addEventListener('input', updateView);

}
window.addEventListener("load", setup);