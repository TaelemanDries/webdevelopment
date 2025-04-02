const setup = () => {
const nu = new Date();
const verjaardag = new Date('Augustus 4, 2006 02:00:00');
const DatumNaAftrekking = nu - verjaardag
    const DatumNaAftrekkingInDagen = Math.floor(DatumNaAftrekking/1000/60/60/24)
    console.log(DatumNaAftrekkingInDagen);
}
window.addEventListener("load", setup);