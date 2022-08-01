const url = window.location.href
let root = document.querySelector(":root")

/*CSS Variables Names*/

cssVariables = [
    "--body_color",
    "--global_font_color"
]

/*Dark Theme Colors*/

darkColors = [
    "rgb(80, 80, 87)",
    "white"
]

/*Light Theme Colors*/

lightColors = [
    "white",
    "black"
]

changeTheme = function() {
    const parameters = url.split("?")
    if (parameters.length === 1) {
        return;
    }

    if (parameters[1] === "theme=dark") {
        theme = "dark";
    } else {
        theme = "light";
    }


    if (theme === "dark") {
        for (index in cssVariables) {
            root.style.setProperty(cssVariables[index], darkColors[index]);
        }
    } else {
        for (index in cssVariables) {
            root.style.setProperty(cssVariables[index], lightColors[index]);
        }
    }

}
changeTheme()