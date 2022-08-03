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

getTrueTheme = function() {
    if (theme === "dark") {
        return "light";
    } else {
        return "dark";
    }
}

let trueTheme = getTrueTheme();
let iframe = document.getElementsByTagName("iframe")[0];
let iframeOriginalSrc = iframe.src

console.log(url);
console.log(trueTheme);
console.log(iframeOriginalSrc);

changeIframe = function(Theme) {
    iframe.src = `${iframeOriginalSrc}?theme=${Theme}`;
    console.log(iframe.src);
}
