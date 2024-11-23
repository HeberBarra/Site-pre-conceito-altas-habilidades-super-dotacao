const textAreaInput = document.getElementsByTagName("textarea")[0];
const wordNum = document.getElementById("word_num");

textAreaInput.addEventListener("input", () => {
    wordNum.innerText = textAreaInput.textLength;
});
