let followButton = document.getElementById("botao_seguir");
let toggleMenuFollow = true;

followButton.addEventListener("click", function() {
    let header = document.getElementsByTagName("header")[0];
    if (toggleMenuFollow) {
        header.style.position = "relative";
        followButton.innerText = "Voltar a seguir";
        toggleMenuFollow = false;
    } else {
        header.style.position = "sticky";
        followButton.innerText = "Parar de seguir";
        toggleMenuFollow = true;
    }
}
)
