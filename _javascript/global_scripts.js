/*CSS Variables Names*/

const cssVariables = [
    '--border_color',
    '--item_background_color',
    '--alternative_background_color',
    '--body_color',
    '--shadow_color',
    '--link_color',
    '--alternative_link_color',
    '--global_font_color'
];

/*Dark Theme Colors*/

const darkColors = [
    'white', /*--border color*/
    'rgb(80, 80, 87)', /*--item_background_color*/
    'lightgray', /*--alternative_background_color*/
    'rgb(53, 52, 52)', /*--body_color*/
    'rgba(199, 193, 193, 0.4)', /*--shadow_color*/
    'aquamarine', /*--link_color*/
    'cyan', /*alternative_link_color*/
    'white' /*--global_font_color*/
];

/*Light Theme Colors*/

const lightColors = [
    'gray', /*--border_color*/
    'white', /*--item_background_color*/
    'lightgray', /*--alternative_background_color*/
    'lightblue', /*--body_color*/
    'rgba(0, 0, 0, 0.4)', /*--shadow_color*/
    'lightblue', /*--link_color*/
    'blue', /*--alternative_link_color*/
    'black' /*--global_font_color*/
];

/*Anchors Variables*/

const menuAnchors = document.getElementsByClassName("menu-link");
const originalHrefs = []
const url = window.location.href

/*Variables*/ 

let themeButton = document.getElementById('botao_de_tema');
let root = document.querySelector(':root');
let siteTheme = null;
let iframe = document.getElementsByTagName("iframe")[0];

/*Functions*/

getOriginalHrefs = function() {
    for (let i = 0; i < menuAnchors.length; i++) {
        originalHrefs.push(menuAnchors[i].href)
    }
    console.table(originalHrefs)
}

getOriginalIframeSrc = function () {
    if (!(iframe)) {
        return;
    }

    return iframe.src.split('?')[0]
}

getCurrentTheme = function() {
    if (matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'light';
    }

    return 'dark';  
}

getUrlTheme = function() {
    let urlParameters = url.split('?');
    if (urlParameters.length === 1) {
        return;
    }

    if (urlParameters[1] === "theme=dark") {
        return 'dark';
    }

    return 'light';
}

changeAnchorsherfs = function(theme) {
    for (let i = 0; i < menuAnchors.length; i++) {
        menuAnchors[i].href = `${originalHrefs[i]}?theme=${theme}`;
    } 
}

changeTheme = function(colorList) {
    for (let i = 0; i < cssVariables.length; i++) {
        root.style.setProperty(cssVariables[i], colorList[i]);
    }
}

changeIframe = function(theme) {
    iframeSrc = getOriginalIframeSrc()
    if (!(iframeSrc)) {
        return;
    }

    iframe.src = `${iframeSrc}?theme=${theme}`;
}

changeThemeOnLoad = function() {
    getOriginalHrefs()
    siteTheme = getUrlTheme()
    if(siteTheme != null) {
        if (siteTheme === 'light') {
            changeTheme(lightColors)
            changeIframe('light')
            changeAnchorsherfs('light')
            siteTheme = 'dark';
            return;
        }

        changeTheme(darkColors)
        changeIframe('dark')
        changeAnchorsherfs('dark')
        siteTheme = 'light'
        return;
    }
    
    siteTheme = getCurrentTheme()
}

changeThemeOnLoad()

if (themeButton != null) {
    themeButton.addEventListener('click', function () {
        changeAnchorsherfs(siteTheme)
        changeIframe(siteTheme)

        if (siteTheme == "light") {
            changeTheme(lightColors);
            console.log('changed to light theme');
            siteTheme = "dark";
            themeButton.innerHTML = '<i data-feather="sun"></i>'
        } else {
            changeTheme(darkColors);
            console.log('changed to dark theme');
            siteTheme = "light";
            themeButton.innerHTML = '<i data-feather="moon"></i>'
        }
        feather.replace()
})}
