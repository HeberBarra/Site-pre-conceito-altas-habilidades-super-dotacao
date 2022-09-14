const textAreaInput = document.getElementsByTagName("textarea")[0];
const wordNum = document.getElementById("word_num");
const formWithButtonsTheme = document.getElementsByName("theme")[0];

textAreaInput.addEventListener("input", () => {
    wordNum.innerText = textAreaInput.textLength;
});

changeFormTheme = () => { 
    if (siteTheme === "dark") {
        formWithButtonsTheme.value = "light";
    } else {
        formWithButtonsTheme.value = "dark";
    };
};

changeFormTheme()
