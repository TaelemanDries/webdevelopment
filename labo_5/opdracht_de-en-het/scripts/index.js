const setup = () => {
    const zin = "Het Gisteren zat de jongen op de stoep en at de helft van de appel.";
    console.log(zin);

    let woorden = zin.toLowerCase().split(" ");
    for (let i = 0; i < woorden.length; i++) {
        if (woorden[i] === "de") {
            woorden[i] = "het";
        } else if(woorden[i] === "het") {
            woorden[i] = "de";
        }
    }

    woorden[0]= woorden[0][0].toUpperCase() + woorden[0].slice(1);
    let nieuweZin = woorden.join(" ");
    console.log(nieuweZin);
}

window.addEventListener("load", setup);
