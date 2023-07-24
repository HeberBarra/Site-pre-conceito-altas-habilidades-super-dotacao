"use strict";
const noteButton = document.querySelector("#noteButton");
const spanStatus = document.querySelectorAll("span")[1];
const spanNotes = document.querySelectorAll("span.nota");
const buttonValues = ["Esconder Notas", "Mostrar Notas"];
const statusValues = ["visíveis", "ocultas"];
if (noteButton && spanStatus && spanNotes) {
    let hidden = true;
    noteButton.addEventListener("click", () => {
        noteButton.innerText = buttonValues[0];
        spanStatus.innerText = statusValues[0];
        let noteStyle = "";
        if (hidden) {
            noteStyle = "none";
            noteButton.innerText = buttonValues[1];
            spanStatus.innerText = statusValues[1];
        }
        hidden = !hidden;
        spanNotes.forEach(element => {
            element.style.display = noteStyle;
        });
    });
}
