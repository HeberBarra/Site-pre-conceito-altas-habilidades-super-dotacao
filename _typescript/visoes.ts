const noteButton:HTMLButtonElement | null = document.querySelector("#noteButton")
const spanStatus:HTMLSpanElement | null = document.querySelectorAll("span")[1]
const spanNotes:NodeListOf<HTMLSpanElement> | null = document.querySelectorAll("span.nota")
const buttonValues:string[] = ["Esconder Notas", "Mostrar Notas"]
const statusValues:string[] = ["visíveis", "ocultas"]

if (noteButton && spanStatus && spanNotes) {
    let hidden:boolean = true

    noteButton.addEventListener("click", () => {
        noteButton.innerText = buttonValues[0]
        spanStatus.innerText = statusValues[0]
        let noteStyle:string = ""

        if (hidden) {
            noteStyle = "none"
            noteButton.innerText = buttonValues[1]
            spanStatus.innerText = statusValues[1]
        }

        hidden = !hidden

        spanNotes.forEach(element => {
            element.style.display = noteStyle
        })
    })
}
