const setup = () => {
    const student1 = {
        naam: "Dries Taeleman",
        leeftijd: 18,
        vakken: ["WebDev", "FOP", "Engels"],
        scores: {
            WebDev: 45,
            FOP: 30,
            Engels: 75
        },
        inschrijvingsdatum: new Date("2024-09-01T08:00:00") // Date object
    };

    const jsonString = JSON.stringify(student1);
    console.log(jsonString);
}
const jsonString = '{"naam":"Dries Taeleman","leeftijd":18,"vakken":["WebDev","FOP","Engels"],"scores":{"WebDev":45,"FOP":30,"Engels":75},"inschrijvingsdatum":"2024-09-01T08:00:00.000Z"}';

const student2 = JSON.parse(jsonString);
console.log(student2.naam);

student2.inschrijvingsdatum = new Date(student2.inschrijvingsdatum);
console.log(student2.inschrijvingsdatum.getFullYear());


window.addEventListener("load", setup);