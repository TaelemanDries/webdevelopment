const setup = () => {
// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    const familieLeden = ['Annelies', 'Dirk', 'Dré', 'Eva', 'Jean-Romain']
    console.log(familieLeden.length)
    console.log(familieLeden[0], familieLeden[2], familieLeden[4]);
    const voegNaamToe = (familieLeden) =>{
        let nieuweNaam = prompt('voeg naam toe')
        if (nieuweNaam) {
            familieLeden.push(nieuweNaam)
        }
    }
    voegNaamToe(familieLeden)
    console.log(familieLeden)
    let familieLedenString = familieLeden.join(', ')
    console.log(familieLedenString)
}
window.addEventListener("load", setup);
