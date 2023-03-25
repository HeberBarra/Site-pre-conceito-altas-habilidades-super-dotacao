const followButton:HTMLButtonElement | null = document.querySelector("#botao_seguir")
const giftedKidsVideo:HTMLIFrameElement | null = document.querySelector("#video")
const header:HTMLElement | null = document.querySelector("header")

let toggleMenuFollow = true

if (followButton && header) {
    followButton.addEventListener("click", () => {
        if (toggleMenuFollow) {
            header.style.position = "relative"
            followButton.innerHTML = "Voltar a seguir"
            toggleMenuFollow = false
            return;
        }

        header.style.position = "sticky"
        followButton.innerHTML = "Parar de seguir"
        toggleMenuFollow = true
    })
}
