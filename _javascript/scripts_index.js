const followButton = document.querySelector("#botao_seguir");
const giftedKidsVideo = document.querySelector("#video");
const header = document.querySelector("header");
let toggleMenuFollow = true;
if (followButton && header) {
    followButton.addEventListener("click", () => {
        if (toggleMenuFollow) {
            header.style.position = "relative";
            followButton.innerHTML = "Voltar a seguir";
            toggleMenuFollow = false;
            return;
        }
        header.style.position = "sticky";
        followButton.innerHTML = "Parar de seguir";
        toggleMenuFollow = true;
    });
}
