/*CSS Variables Names*/
/*First color in values is the dark mode color and the second is the light mode color*/

const cssVariables = [
    {
        "variableName": "--border_color", 
        "values": ["white", "gray"]
    },
    {
        "variableName": "--item_background_color", 
        "values": ["rgb(80, 80, 87)", "white"]
    },
    {
        "variableName": "--alternative_background_color",
        "values": ["lightgray", "lightgray"]
    },
    {
        "variableName": "--body_color",
        "values": ["rgb(53, 52, 52)", "lightblue"]
    },
    {
        "variableName": "--shadow_color",
        "values": ["rgba(199, 193, 193, 0.4)", "rgba(0, 0, 0, 0.4)"]
    },
    {
        "variableName": "--link_color",
        "values": ["aquamarine", "lightblue"]
    },
    {
        "variableName": "--alternative_link_color",
        "values": ["cyan", "blue"]
    },
    {
        "variableName": "--global_font_color",
        "values": ["white", "black"]
    }
]

const menuAnchors = document.getElementsByClassName("menu-link");
const originalHrefs = []
const url = window.location.href
const themeButton = document.getElementById('botao_de_tema');
const root = document.querySelector(':root');
const iframe = document.getElementsByTagName("iframe")[0];
let siteTheme = null;


/*Functions*/

const getOriginalHrefs = () => {
    for (anchor of menuAnchors) {
        originalHrefs.push(anchor.href);
    };
    console.table(originalHrefs);
};


const getUnpreferredTheme = () => {
    if (matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'light';
    }

    return 'dark';
};

const getUrlTheme = () => {
    if (url.includes("theme=dark")) {
        return "dark";
    } else if (url.includes("theme=light")) {
        return "light";
    } 
    
    return;
};

const changeAnchorsTheme = (theme) => {
    for (let i=0; i < menuAnchors.length; i++) {
        menuAnchors[i].href = `${originalHrefs[i]}?theme=${theme}`;
    };
};

const changeIframe = (theme) => {
    if (!(iframe)) {
        return;
    };
    let originalSrc = iframe.src.split("?")[0];
    iframe.src = `${originalSrc}?theme=${theme}`;
};

const changeTheme = (theme) => {
    let colorIndex = 0

    if (theme === "dark") {
        colorIndex = 0
    } else {
        colorIndex = 1
    }

    for (variable of cssVariables) {
        root.style.setProperty(variable.variableName, variable.values[colorIndex])
    }
}

const changeThemeButton = (theme) => {
    if(!(themeButton)) {
        return;
    };

    if (theme === "dark") {
        themeButton.innerHTML = "<i data-feather='moon'></i>"
    } else {
        themeButton.innerHTML = "<i data-feather='sun'></i>"
    };

    if(!(feather)) {
        throw "Feather was not loaded!"
    };

    feather.replace();
};

const changeThemeOnLoad = () => {
    getOriginalHrefs();
    siteTheme = getUrlTheme();
    if (siteTheme) {
        changeTheme(siteTheme)
        changeAnchorsTheme(siteTheme)
        changeIframe(siteTheme)
        changeTheme(siteTheme)

        if (siteTheme === "dark") {
            siteTheme = "light"
            return;
        };

        siteTheme = "dark"
        return;
    };
    siteTheme = getUnpreferredTheme();
};

changeThemeOnLoad();
if (siteTheme === "dark") {
    changeThemeButton("light");
} else {
    changeThemeButton("dark");
};

if (themeButton) {
    themeButton.addEventListener('click', function () {
        changeThemeButton(siteTheme)
        changeAnchorsTheme(siteTheme)
        changeIframe(siteTheme)
        changeTheme(siteTheme)

        if (siteTheme === "light") {
            siteTheme = "dark";
        } else {
            siteTheme = "light";
        }
})};
