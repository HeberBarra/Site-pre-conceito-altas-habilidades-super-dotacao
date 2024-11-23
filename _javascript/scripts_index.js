let btns = document.getElementsByTagName("button");
let root = document.querySelector(":root");
let toggleMenuFollow = true;
let darkTheme = false

btns[0].addEventListener("click", function() {
    let header = document.getElementsByTagName("header")[0];
    if (toggleMenuFollow) {
        header.style.position = "relative";
        btns[0].innerText = "Voltar a seguir";
        toggleMenuFollow = false;
    } else {
        header.style.position = "sticky";
        toggleMenuFollow = true;
        btns[0].innerText = "Parar de seguir";
    }
}
)

btns[1].addEventListener("click", function() {
    if (darkTheme) {
        root.style.setProperty('--border_color', 'white');
        root.style.setProperty('--item_background_color', 'rgb(80, 80, 87)');
        root.style.setProperty('--alternative_background_color', 'lightgray');
        root.style.setProperty('--body_color', 'rgb(53, 52, 52)');
        root.style.setProperty('--shadow_color', 'rgba(199, 193, 193, 0.4)');
        root.style.setProperty('--link_color', 'aquamarine');
        root.style.setProperty('--alternative_link_color', 'cyan');
        root.style.setProperty('--global_font_color', 'white');
        darkTheme = false;
    } else {
        root.style.setProperty('--border_color', 'gray');
        root.style.setProperty('--item_background_color', 'white');
        root.style.setProperty('--alternative_background_color', 'lightgray');
        root.style.setProperty('--body_color', 'lightblue');
        root.style.setProperty('--shadow_color', 'rgba(0, 0, 0, 0.4)');
        root.style.setProperty('--link_color', 'lightblue');
        root.style.setProperty('--alternative_link_color', 'blue');
        root.style.setProperty('--global_font_color', 'black');
        darkTheme = true;
    }
}
)
