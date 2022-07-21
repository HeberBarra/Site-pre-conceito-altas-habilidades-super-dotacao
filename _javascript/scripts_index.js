let toggleButton = document.getElementsByTagName("button")[0];
let toggle = true;

toggleButton.addEventListener("click", function() {
    let header = document.getElementsByTagName("header")[0];
    if (toggle) {
        header.style.position = "relative";
        toggleButton.innerText = "Voltar a seguir";
        toggle = false;
    } else {
        header.style.position = "sticky";
        toggle = true;
        toggleButton.innerText = "Parar de seguir";
    }
}
)
