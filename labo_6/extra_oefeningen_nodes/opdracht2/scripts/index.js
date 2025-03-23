const setup = () => {
    let liElements = document.querySelectorAll("li");
    for (let i = 0; i < liElements.length; i++){
        let child = liElements[i];
        child.classList.add('listitem');
    }
    let img = document.createElement("img");
    img.setAttribute("src", "../images/img.png");
    let body = document.querySelector("body");
    body.appendChild(img);
}
window.addEventListener("load", setup);