<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Desabafos</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Kdam+Thmor+Pro&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Nuosu+SIL&display=swap');

        
        /*Light theme*/ 

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

        body{
            background-color: var(--body_color);
            color: var(--global_font_color);
            margin: 0;
            width: 100%;
            height: 100%;
        }

    </style>
    <script src="_javascript/global_scripts.js" defer></script>
    <script src="_javascript/desabafo_scripts.js" defer></script>
    <link rel="stylesheet" href="_css/desabafos.css">
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
        <h1>Desabafos</h1>
    </header>
    <main>
        <?php
            require_once "databaseConnector.php";
        ?>
        <article>
            <p>Esta área do site foi construída para quem quiser desabafar ou relatar algum preconceito sofrido por alguém por ter Altas Habillidades/Superdotação, por ter certo sofrido um certo grau de preconceito por ser inteligente, eu considero de suma de importância que exista um lugar para que as pessoas possam desabafar e relatar esses acontecimentos. Por favor, seja gentil e empático, eu apagarei qualquer desabafo que fuja do tema do site ou que seja má de índole, faça o mal e terá tribulação, faça o bem e terá paz.</p>
        </article>
        <article id="adicionar_desabafo">
            <h2>Adicionar desabafo: </h2>
            <form action="desabafos.php" method="post">
                <label class="desabafo_field">
                    <input type="text" placeholder=" " name="username">
                    <span class="placeholder">Seu nome/apelido (opcional e limite de 50 caracteres)</span>
                </label>
                <span id="word_counter">Caracteres: <span id="word_num">0</span></span>
                <label class="desabafo_field">
                    <textarea maxlength="700" placeholder=" " style="height: 3em;" required name="vent"></textarea>
                    <span class="placeholder">Digite sua história/relato aqui (Limite de 700 caracteres)</span>
                </label>
                <button id="enviar">Enviar</button>
            </form>
            <?php
                $username = isset($_POST["username"])?$_POST["username"]:NULL;
                $vent = isset($_POST["vent"])?$_POST["vent"]:NULL;

                if ($username == "") {
                    $username = "Anônimo";
                };

                if ($vent) {
                    $sqlInsert = "INSERT INTO vents (username, vent) VALUES (?, ?)";
                    $insertIntoDatabase = $conn->prepare($sqlInsert);   
                    $insertIntoDatabase->bind_param('ss', $username, $vent);
                    $insertIntoDatabase->execute();
                    $insertIntoDatabase->close();
                };  
            ?>
        </article>
        <article id="desabafos">
        <?php
            $index = isset($_GET["index"])?$_GET["index"]:1;
            $sqlGetVents = "SELECT * FROM vents WHERE id > (($index - 1) * 10)";
            $ventComments = mysqli_query($conn, $sqlGetVents);
            for ($i=($index - 1) * 10; $i < $index * 10; $i++) {
                $row = $ventComments->fetch_assoc();
                if (!$row) {
                    break;
                };
                print(
                    "<div class='vent'>" . 
                    "<h3>" . $row["username"] . " #" . $row["id"] . "</h3>" . 
                    "<p>" . $row["vent"] . "</p>" .
                    "</div>"
                );
            };
        ?>
            <form id="buttons" action="desabafos.php" method="get">
                <?php
                    $theme = isset($_GET["theme"])?$_GET["theme"]:"None";
                    $nextIndex = $index + 1;    
                    $priorIndex = $index==1?1:$index - 1;
                    print("<input type='text' name='theme' style='display: none;' readonly value=$theme>");   
                    print("<button name='index' value=$nextIndex>Próxima Página</button>");
                    print("<button name='index' value=$priorIndex>Voltar</button>")
                ?>
            </form>
        </article>
    </main>
</body>
</html>
