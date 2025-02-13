const setup = () => {
// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
}
window.addEventListener("load", setup);
window.alert('goeiendag')
let antwoordConfirm = window.confirm('Zin in een koekje?')
console.log(antwoordConfirm)
let antwoordPrompt = window.prompt('wat is uw naam?', 'Onbekend')
console.log(antwoordPrompt)