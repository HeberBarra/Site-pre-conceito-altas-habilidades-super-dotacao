const themeButtonSymbol: HTMLImageElement | null = document.querySelector("#botao_de_tema img")
const themeButton: HTMLButtonElement | null = document.querySelector("#botao_de_tema")
const rootElement: HTMLElement | null = document.querySelector(":root")
const iframeFactsMyths: HTMLIFrameElement | null = document.querySelector("iframe")
const mailSymbols: NodeListOf<HTMLImageElement> | null = document.querySelectorAll(".mail_symbol")

const cssVars = [
    {
        "name": "--background_primary_color",
        "values": ["#1f1b1b", "#ffffff"]
    },
    {
        "name": "--font_color",
        "values": ["#ffffff", "#000000"]
    },
    {
        "name": "--link_color",
        "values": ["#68f3c5", "#06724e"]
    }
]

const changeMailSymbol = () => {
    const mailSymbolsSrcs = [
        "img/feather-icons/light-theme/mail.svg",
        "img/feather-icons/dark-theme/mail.svg"
    ]
    
    if (!mailSymbols) { return }

    if (window.localStorage.getItem("theme") == "light") {
        mailSymbols.forEach(mail => mail.src = mailSymbolsSrcs[0])
    } else {
        mailSymbols.forEach(mail => mail.src = mailSymbolsSrcs[1])
    }
}

const changeThemeButton = () => {
    const buttonIcons = [
        "img/feather-icons/light-theme/sun.svg",
        "img/feather-icons/dark-theme/moon.svg"
    ]

    if (!themeButtonSymbol) { return }

    let prefix: "" | "../" = ""

    if (window.location.href.includes("visoes")) {
        prefix = "../"
    } 

    if (window.localStorage.getItem("theme") == "light") {

        themeButtonSymbol.src = prefix + buttonIcons[1]
        return
    }
    
    themeButtonSymbol.src = prefix + buttonIcons[0]
}

const changeSiteTheme = () => {
    let colorIndex: 0 | 1

    if (window.localStorage.getItem("theme") == "light") {
        window.localStorage.setItem("theme", "dark")
        colorIndex = 0
    } else {
        window.localStorage.setItem("theme", "light")
        colorIndex = 1
    }

    changeThemeButton()
    changeMailSymbol()

    if (iframeFactsMyths) {
        let originalSrc = iframeFactsMyths.src.split("?")[0]
        let currentTheme = window.localStorage.getItem("theme")
        iframeFactsMyths.src = `${originalSrc}?theme=${currentTheme}`
    }

    cssVars.forEach(variable => rootElement?.style.setProperty(variable.name, variable.values[colorIndex]))
}

themeButton?.addEventListener("click", changeSiteTheme)

if (!window.localStorage.getItem("theme")) {
    window.localStorage.setItem("theme", matchMedia("(prefers-color-scheme: dark").matches ? "light" : "dark")
}

changeSiteTheme()
changeSiteTheme()
