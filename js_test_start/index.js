document.getElementById('kip').addEventListener('change', updateImage);
document.getElementById('letter').addEventListener('input', countLetter);

function updateImage() {
    const imgDiv = document.getElementById('img');
    const note = document.getElementById('note');
    const selection = document.getElementById('kip').value;

    if (selection === "KipMetEi") {
        imgDiv.className = 'url(\'with-egg.png\')';
        imgDiv.style.display = 'block';
        note.textContent = "Hierboven een kip met een ei";
    } else if (selection === "KipZonderEi") {
        imgDiv.className = 'url(\'without-egg.png\')';
        imgDiv.style.display = 'block';
        note.textContent = "Hierboven een kip zonder een ei";
    } else {
        imgDiv.style.display = 'none';
        note.textContent = "";
    }
    countLetter();
}

function countLetter() {
    const letter = document.getElementById('letter').value.toLowerCase();
    const noteText = document.getElementById('note').textContent.toLowerCase();
    const letterCountP = document.getElementById('letter-count');

    if (letter && noteText) {
        const count = noteText.split(letter).length - 1;
        letterCountP.textContent = `De letter "${letter}" komt ${count} keer voor in deze zin.`;
    } else {
        letterCountP.textContent = "";
    }
}