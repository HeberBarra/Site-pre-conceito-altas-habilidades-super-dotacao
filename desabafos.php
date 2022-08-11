<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Desabafos</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Kdam+Thmor+Pro&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Nuosu+SIL&display=swap');

        /*Dark theme*/

        @media (prefers-color-scheme: dark) {
            :root {
                --border_color: white;
                --item_background_color: rgb(80, 80, 87);
                --alternative_background_color: lightgray;
                --body_color: rgb(53, 52, 52);
                --shadow_color: rgba(199, 193, 193, 0.4);
                --link_color: aquamarine;
                --alternative_link_color: cyan;
                --global_font_color: white;
            }
        }

        /*Light theme*/ 

        @media (prefers-color-scheme: light) {  
            :root {
                --border_color: gray;
                --item_background_color: white;
                --alternative_background_color: lightgray;
                --shadow_color: rgba(0, 0, 0, 0.4);
                --body_color: lightblue;
                --link_color: lightblue;
                --alternative_link_color: blue;
                --global_font_color: black;
            }
        }

        body{
            background-color: var(--body_color);
            color: var(--global_font_color);
            margin: 0;
            width: 100%;
            height: 100%;
        }

    </style>
    <script src="_javascript/global_scripts.js" defer></script>
    <link rel="stylesheet" href="_css/desabafos_mobile.css" media="screen and (max-width: 800px)">
    <link rel="stylesheet" href="_css/desabafos.css" media="screen and (min-width: 800px)">
</head>
<body>
    <header>
        <nav id="menu">
            <div class="menu-item">
                <a href="index.html" class="menu-link">
                    <span>Home</span>
                </a>
            </div>
            <div class="menu-item">
                <a href="fale_conosco.html" class="menu-link">
                    <span>Fale Conosco</span>
                </a>
            </div>
        </nav>
    </header>
    <main>
        <h1>Desabafos</h1>
        <article>
            <p>Esta área do site foi construída para quem quiser desabafar ou relatar algum preconceito sofrido por alguém por ele ter Altas Habillidades/Super Dotação, mesmo que eu, o criador deste site, não tenha sofrido preconceito até ao dia de hoje por ter Altas Habilidades/Superdotação, eu considero de suma de importância que exista um lugar para que as pessoas possam desabafar e relatar esses acontecimentos. Há também a opção de responder essas histórias, num sistema similar ao da seção de comentários do Youtube. Por favor, seja gentil e empático, faça o mal e terá tribulação, faça o bem e terá paz.</p>
        </article>
        <article id="adicionar_desabafo">
            <h2>Adicionar desabafo: </h2>
            <form action="desabafos.php" method="post">
                <label class="desabafo_field">
                    <input type="text" placeholder="Coloque seu nome (opcional)">
                    <span class="placeholder">Coloque seu nome (opcional)</span>
                </label>
                <label class="desabafo_field">
                    <input type="email" placeholder="Coloque seu e-mail" required>
                    <span class="placeholder">Coloque seu e-mail</span>
                    <span class="ErrorMessage"></span>
                </label>
                <label class="desabafo_field">
                    <input type="text"  placeholder="Digite sua história de preconceito" required>
                    <span class="placeholder">Digite sua história de preconceito</span>
                </label>
                <button id="enviar">Enviar</button>
            </form> 
        </article>
        <article id="desabafos">
        <?php
        ?>
            <button>Voltar</button><button>Próxima Página</button>
        </article>
    </main>
</body>
</html>
