const followButton = document.getElementById("botao_seguir");
const videoContainer = document.getElementsByTagName("figure")[0];
const giftedKidsVideo = document.getElementsByTagName("video")[0];
const videoControls = document.getElementById("video-controls");

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

/*Video*/
giftedKidsVideo.controls = false;
let isFullscreen = false

/*Video buttons*/
const playPlauseButton = document.getElementById("play-pause");
const resetButton = document.getElementById("reset_video");
const muteButton = document.getElementById("mute_video");
const volumeIncreaseButton = document.getElementById("volume_increase");
const volumeDecreaseButton = document.getElementById("volume_decrease");
const progressBar = document.getElementById("video_progress_bar");
const subtitlesButton = document.getElementById("subtitles");
const fullscreenButton = document.getElementById("fullscreen");
const subtitlesMenuButtons = []

if (!document?.fullscreenEnabled) {
    fullscreenButton.style.display = "none";
}

for (let index = 0; index < giftedKidsVideo.textTracks.length; index++) {
    giftedKidsVideo.textTracks[index].mode = "hidden";
}

/*Video buttons functions */
playPlauseButton.addEventListener("click", () => {
    if (giftedKidsVideo.paused || giftedKidsVideo.ended) {
        giftedKidsVideo.play()
        playPlauseButton.innerHTML = '<i data-feather="pause"><i>'
        feather.replace()
        return;
    }
    giftedKidsVideo.pause()
    playPlauseButton.innerHTML = '<i data-feather="play"><i>'
    feather.replace()
})

resetButton.addEventListener("click", () => {
    giftedKidsVideo.pause()
    giftedKidsVideo.currentTime = 0
    progressBar.value = 0
    giftedKidsVideo.play()
})

muteButton.addEventListener("click", () => {
    giftedKidsVideo.muted = !giftedKidsVideo.muted
    if(giftedKidsVideo.muted) {
        muteButton.innerHTML = '<i data-feather="volume-x"></i>'
        feather.replace();
        return;
    }

    muteButton.innerHTML = '<i data-feather="volume-2"><i>'
    feather.replace()
})

function alterGiftedKidsVideoVolume(direction) {
    const currentVideoVolume = Math.floor(giftedKidsVideo.volume * 10) / 10;

    if (direction === '+' && currentVideoVolume < 1) {
        giftedKidsVideo.volume += 0.1;
        return;
    }

    giftedKidsVideo.volume -= 0.1;
}

volumeIncreaseButton.addEventListener("click", () => { alterGiftedKidsVideoVolume("+") });
volumeDecreaseButton.addEventListener("click", () => { alterGiftedKidsVideoVolume("-") });

giftedKidsVideo.addEventListener("timeupdate", () => {
    if (!progressBar.getAttribute("max")) {
        progressBar.setAttribute("max", giftedKidsVideo.duration)
    }
    progressBar.value = giftedKidsVideo.currentTime
})

giftedKidsVideo.addEventListener('fullscreenchange', () => {
    giftedKidsVideo.controls = !giftedKidsVideo.controls
})

progressBar.addEventListener("click", (param) => {
    const rect = progressBar.getBoundingClientRect()
    const pos = (param.pageX - rect.left) / progressBar.offsetWidth
    giftedKidsVideo.currentTime = pos * giftedKidsVideo.duration
})

subtitlesButton.addEventListener("click", () => {
    giftedKidsVideo.textTracks[0].mode = 'showing'
})

fullscreenButton.addEventListener("click", () => {
    if (isFullscreen) {
        document.exitFullscreen()
        giftedKidsVideo.setAttribute('data-fullscreen', false)
        isFullscreen = false
        return
    }

    giftedKidsVideo.requestFullscreen()
    giftedKidsVideo.setAttribute('data-fullscreen', true)
    isFullscreen = true
})

document.addEventListener('fullscreenchange', () => {
    videoContainer.setAttribute('data-fullscreen', !!document.fullscreenElement)
})
