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

let themeButton = document.getElementById('botao_de_tema');
let root = document.querySelector(':root');
let theme = null;

function getOriginalHrefs() {
    let c = 0
    for (anchor of menuAnchors) {
        console.log(anchor)
        originalHrefs.push(anchor.href)
        console.log(originalHrefs[c])
        c++
    }
    console.log(originalHrefs)
}

function changeTheme() {
    for (let anchorIndex = 0; anchorIndex < menuAnchors.length;anchorIndex++) {
        menuAnchors[anchorIndex].href = originalHrefs[anchorIndex] + `?theme=${theme}`;
    }

    if (theme === "dark") {
        for (index in cssVariables) {
                root.style.setProperty(cssVariables[index], darkColors[index]);
                console.log(`${cssVariables[index]}: ${darkColors[index]}`);
        }
        theme = "light";
    } else {
        for (index in cssVariables) {
        root.style.setProperty(cssVariables[index], lightColors[index]);
        console.log(`${cssVariables[index]}: ${lightColors[index]}`);
        theme = "dark";
    }
    }

}

function decideTheme() {
    if (window.matchMedia("prefers-color-scheme: dark")) {
        theme = "light";
    } else {
        theme = "dark";
    }

    const parameters = url.split("?");

    if (parameters.length == 1) {
        return;
    }
    console.log("Has parameters!");
    if (parameters[1] === 'theme=dark') {
        theme = "dark";
    } else {
        theme = "light";
    }

    changeTheme()
}

getOriginalHrefs()
decideTheme()

let truetheme = null

themeButton.addEventListener("click", function() {
    changeTheme();
    if (theme === "dark") {
        truetheme = "light";
    } else {
        truetheme = "dark";
    }
    changeIframe(truetheme);
})
