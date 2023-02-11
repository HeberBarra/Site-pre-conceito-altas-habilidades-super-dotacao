const followButton = document.getElementById("botao_seguir");
const giftedKidsVideo = document.getElementById("video");

/*header*/
let toggleMenuFollow = true;

followButton.addEventListener("click", () => {
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
