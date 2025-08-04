const setup = () => {
let mva = document.getElementById("mva");
let txtOutput = document.getElementById("output");

    let counter = 0;
for (let i = 0; i < mva.innerHTML.length; i++) {
    if(mva.innerHTML[i] === "a" && mva.innerHTML[i+1] === "n"){
        counter++;
    }
}
txtOutput.innerHTML = `De letters \"an\" komen ${counter} keer voor`

}
window.addEventListener('load', setup);