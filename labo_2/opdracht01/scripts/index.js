const setup = () => {
// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
}
window.alert('goeiendag')
let antwoordConfirm = window.confirm('Wordt het morgen zonnig?')
console.log(antwoordConfirm)
let antwoordPrompt = window.prompt('Wie is mijn grote held?', 'Onbekend')
console.log(antwoordPrompt)
window.addEventListener("load", setup);