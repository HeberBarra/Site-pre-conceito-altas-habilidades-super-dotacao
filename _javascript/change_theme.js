"use strict";
const themeButtonSymbol = document.querySelector("#botao_de_tema img");
const themeButton = document.querySelector("#botao_de_tema");
const rootElement = document.querySelector(":root");
const iframeFactsMyths = document.querySelector("iframe");
const mailSymbols = document.querySelectorAll(".mail_symbol");
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
];
const changeMailSymbol = () => {
    const mailSymbolsSrcs = [
        "_media/feather-icons/lightTheme/mail.svg",
        "_media/feather-icons/darkTheme/mail.svg"
    ];
    if (!mailSymbols) {
        return;
    }
    if (window.localStorage.getItem("theme") == "light") {
        mailSymbols.forEach(mail => mail.src = mailSymbolsSrcs[0]);
    }
    else {
        mailSymbols.forEach(mail => mail.src = mailSymbolsSrcs[1]);
    }
};
const changeThemeButton = () => {
    const buttonIcons = [
        "_media/feather-icons/lightTheme/sun.svg",
        "_media/feather-icons/darkTheme/moon.svg"
    ];
    if (!themeButtonSymbol) {
        return;
    }
    let prefix = "";
    if (window.location.href.includes("visoes")) {
        prefix = "../";
    }
    if (window.localStorage.getItem("theme") == "light") {
        themeButtonSymbol.src = prefix + buttonIcons[1];
        return;
    }
    themeButtonSymbol.src = prefix + buttonIcons[0];
};
const changeSiteTheme = () => {
    let colorIndex;
    if (window.localStorage.getItem("theme") == "light") {
        window.localStorage.setItem("theme", "dark");
        colorIndex = 0;
    }
    else {
        window.localStorage.setItem("theme", "light");
        colorIndex = 1;
    }
    changeThemeButton();
    changeMailSymbol();
    if (iframeFactsMyths) {
        let originalSrc = iframeFactsMyths.src.split("?")[0];
        let currentTheme = window.localStorage.getItem("theme");
        iframeFactsMyths.src = `${originalSrc}?theme=${currentTheme}`;
    }
    cssVars.forEach(variable => rootElement?.style.setProperty(variable.name, variable.values[colorIndex]));
};
themeButton?.addEventListener("click", changeSiteTheme);
if (!window.localStorage.getItem("theme")) {
    window.localStorage.setItem("theme", matchMedia("(prefers-color-scheme: dark").matches ? "light" : "dark");
}
changeSiteTheme();
changeSiteTheme();
