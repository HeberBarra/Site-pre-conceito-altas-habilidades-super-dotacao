const placeholdersSpans: NodeListOf<HTMLSpanElement> | null = document.querySelectorAll(".placeholder")
const desabafoInputs: NodeListOf<HTMLInputElement | HTMLTextAreaElement> | null = document.querySelectorAll(".desabafo_field *")
const charCounters: NodeListOf<HTMLSpanElement> | null = document.querySelectorAll(".char_number")

for (let i = 0; i < placeholdersSpans.length; i++) {
    if (!desabafoInputs) { break }
    let gridRowValues: string[] = ["1", "3"]
    let gridRowDefaultValues: string[] = ["2", "4"]

    placeholdersSpans[i].addEventListener("click", () => desabafoInputs[i].focus())
    desabafoInputs[i].addEventListener("input", () => {
        if (charCounters) { charCounters[i].innerText = `${desabafoInputs[i].value.length}`}

        if (desabafoInputs[i].value.length !== 0) {
            placeholdersSpans[i].style.gridRow = gridRowValues[i]
            placeholdersSpans[i].style.color = "var(--font-color)"
        } else {
            placeholdersSpans[i].style.gridRow = gridRowDefaultValues[i]
            placeholdersSpans[i].style.color = "#808080" 
        }
    })
}

if (matchMedia("screen and (min-width: 551px)").matches) {
    desabafoInputs.forEach(input => input.placeholder = "")
}
