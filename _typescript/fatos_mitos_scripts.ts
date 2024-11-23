const url: string = window.location.href
const root:HTMLElement | null = document.querySelector(":root")
/*CSS Variables
The first color in the values is the dark mode color and second one is the light mode color
*/
const cssVariables = [
    {
        "variableName": "--body_color",
        "values": ["#1f1b1b", "#ffffff"]
    },
    {
        "variableName": "--global_font_color",
        "values": ["#ffffff", "#000000"]
    }
]

const changeTheme = (): void => {
    const parameters = url.split("?")
    let colorIndex = 0

    if (parameters.length === 1 || !root) {
        return
    }

    if (parameters[1] === "theme=dark") {
        colorIndex = 0
    } else {
        colorIndex = 1
    }

    cssVariables.forEach(cssVariable => {
        root.style.setProperty(cssVariable.variableName, cssVariable.values[colorIndex]) 
    })
}

changeTheme()
