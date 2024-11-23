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

        :root {
            --border_color: white;
            --item_background_color: rgb(80, 80, 87);
            --global_font_color: white;
            --font_size_mobile: 13pt;
            --font_size_pc: 14pt;
        }

        body {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: rgb(132, 163, 250);
            color: var(--global_font_color);
            font-size: var(--font_size_mobile);
        }

    </style>
    <link rel="stylesheet" href="_css/desabafos.css" media="screen and (min-width: 800px)">
    <link rel="stylesheet" href="_css/desabafos_mobile.css" media="screen and (max-width: 800px)">
</head>
<body>
    <header>
        <nav id="menu">
            <div class="menu-item">
                <a href="index.html">
                    <span>Home</span>
                </a>
            </div>
            <div class="menu-item">
                <a href="fale_conosco.html">
                    <span>Fale Conosco</span>
                </a>
            </div>
        </nav>
    </header>
    <main>
        <article>
            <p>Esta área do site foi construída para quem quiser desabafar ou relatar algum preconceito sofrido por alguém por ele ter Altas Habillidades/Super Dotação, mesmo que eu, o criador deste site, não tenha sofrido preconceito até ao dia de hoje por ter Altas Habilidades/Superdotação, eu considero de suma de importância que exista um lugar para que as pessoas possam desabafar e relatar esses acontecimentos. Há também a opção de responder essas histórias, num sistema similar ao da seção de comentários do Youtube. Por favor, seja gentil e empático, faça o mal e terá tribulação, faça o bem e terá paz.</p>
        </article>
        <div id="desabafos">
            <?php
                $total_page_number = 1;
                $page_number = 1;
                $comment_number = 1;
                echo "<div id='inicio'><p>Desabafos | Página de $page_number de $total_page_number</p></div>";
                for ($c = 1; $c<=10; $c++) {
                    echo "<h2>Fulano <span>#$comment_number</span></h2>";
                    echo "<p class='comentario'>Desabafo de teste</p>";
                }
                echo "<div id='seletor_de_pagina'><button>Voltar</button>$page_number $total_page_number<button>Próxima Página</button></div>"
            ?>
        </div>
    </main>
</body>
</html>
