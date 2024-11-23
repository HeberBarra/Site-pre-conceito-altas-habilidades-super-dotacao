const url = window.location.href
const root = document.querySelector(":root")

/*CSS Variables*/
/*The first color in values is the dark mode color and second one is light mode color */
const cssVariables = [
    {
        "variableName": "--body_color",
        "values": ["rgb(80, 80, 87)", "white"]
    },
    {
        "variableName": "--global_font_color",
        "values": ["white", "black"]
    }
];

const changeTheme = () => {
    const parameters = url.split("?");
    let colorIndex = 0

    if (parameters.length === 1) {
        return;
    };

    if (parameters[1] === "theme=dark") {
        colorIndex = 0;
    } else {
        colorIndex = 1;
    };

    for (variable of cssVariables) {
        root.style.setProperty(variable.variableName, variable.values[colorIndex]);
    };
};

changeTheme();