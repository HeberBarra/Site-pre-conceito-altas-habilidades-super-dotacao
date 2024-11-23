const followButton:HTMLButtonElement | null = document.querySelector("#botao_seguir")
const changeAudioButton:HTMLButtonElement | null = document.querySelector("#mudar_audio")
const giftedKidsVideo:HTMLIFrameElement | null = document.querySelector("#video")
const header:HTMLElement | null = document.querySelector("header")
const spoilerParagraph:HTMLParagraphElement | null = document.querySelector("#spoiler-wrapper")
const spoiler:HTMLSpanElement | null = document.querySelector(".spoiler")
const audio:HTMLAudioElement | null = document.querySelector("audio")

let toggleMenuFollow = true
let audioLang: "pt" | "en" = "en"

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

if (spoilerParagraph && spoiler) {
    spoilerParagraph.addEventListener("click", () => {
        if (spoiler.classList.contains("spoiler")) {
            spoiler.classList.remove("spoiler")
            return
        }
        
        spoiler.classList.add("spoiler")
    })
}

if (changeAudioButton) {
    changeAudioButton.addEventListener("click", () => {
        audio.currentTime = player.getMediaReferenceTime()
        player.playVideo()
        audio.play()

        if (audioLang === "en") {
            player.mute()
            audio.play()
            audioLang = "pt"
            return
        }
        player.unMute()
        audio.pause() 
        audioLang = "en"
    })
}

const onPlayerStateChange = (event) => {
    if (event.data === 2) {
        audio.pause()
    }
    if (event.data === 1) {
        if (audioLang === "pt") {audio.play()}
        audio.currentTime = player.getMediaReferenceTime()
    }
}
