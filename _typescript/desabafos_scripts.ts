const sendForm: HTMLFormElement | null = document.querySelectorAll("form")[0]
const formWithButtons: HTMLFormElement | null = document.querySelectorAll("form")[1]
const textArea: HTMLTextAreaElement | null = document.querySelector("textarea")
const wordNum: HTMLSpanElement | null = document.querySelector("#word_num")

sendForm.action = location.href

if (textArea && wordNum) {
    textArea.addEventListener("input", () => {wordNum.innerText = String(textArea.textLength)})
}
