const setup = () => {
    let btnSub = document.getElementById("btnSub");
    const createSubString = () => {
        let txtInput=document.getElementById("txtInput");
        let txtOutput=document.getElementById("txtOutput");
        let txtbt=document.getElementById("txtbt");
        let txtb2=document.getElementById("txtb2");

        let g1=parseInt(txtbt.value, 10);
        let g2=parseInt(txtb2.value, 10);
        let tekst = txtInput.value.substring(g1, g2);


        txtOutput.innerHTML= tekst;
    }

    btnSub.addEventListener("click", createSubString)
}

window.addEventListener("load", setup);