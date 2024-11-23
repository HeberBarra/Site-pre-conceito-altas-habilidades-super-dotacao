const noteButton = document.getElementById("noteButton");
const spanStatus = document.getElementsByTagName("span")[1];
const buttonValues = ["Esconder Notas", "Mostrar Notas"];
const statusValues = ["visíveis", "ocultas"]

let hidden = true;

noteButton.addEventListener("click", () => {
    const notes = document.getElementsByClassName("nota");
    let noteStyle = "";
    noteButton.innerText = buttonValues[0];
    spanStatus.innerText = statusValues[0];

    if (hidden) {
        noteStyle = "none";
        noteButton.innerText = buttonValues[1];
        spanStatus.innerText = statusValues[1]; 
    } 

    hidden = !hidden    

    for (note of notes) {
        note.style.display = noteStyle;
    }
})