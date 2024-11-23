<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/x-icon" href="https:\\www.cep.pr.gov.br/sites/cep/themes/custom/cep_2022/favicon.ico">
    <title>Desabafos</title>
    <script src="javascript/change_theme.js" defer></script>
    <script src="javascript/desabafo_scripts.js" defer></script>
    <link rel="stylesheet" href="css/commonStyle.css">
    <link rel="stylesheet" href="css/desabafos.css">
</head>

<body>
    <header>
        <h1>
            <div id="logo-image"></div>
            Desabafos
        </h1>
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
            <div class="menu-item">
                <button title="clique aqui para mudar o tema do site" id="botao_de_tema">
                    <img src="img/feather-icons/light-theme/sun.svg" alt="símbolo do botão de trocar o tema">
                </button>
            </div>
        </nav>
    </header>
    <main>
        <?php
					include "databaseConnector.php";
        ?>
        <article>
            <p>Esta área do site foi construída para quem quiser desabafar ou relatar algum preconceito sofrido por alguém por ter Altas Habilidades/Superdotação, por ter sofrido um certo grau de preconceito por ser inteligente, eu considero de suma de importância que exista um lugar para que as pessoas possam desabafar e relatar esses acontecimentos. Por favor, seja gentil e empático. "Faça o mal e terá tribulação, faça o bem e terá paz."</p>
        </article>
        <article id="adicionar_desabafo">
            <h2>Adicionar desabafo: </h2>
            <form action="desabafos.php" method="post">
                <span class="char_counter" id="username_counter">
                    Limite 40 caracteres ­— total: <span class="char_number">0</span>
                </span>
                <span class="placeholder" id="username_placeholder">
                    Seu nome/apelido (opcional)
                </span>
                <label class="desabafo_field" id="username_input">
                    <input type="text" name="username" placeholder="Seu nome/apelido (opcional)" maxlength="40">
                </label>
                <span class="char_counter" id="vent_counter">
                    Limite 700 caracteres ­— total: <span class="char_number">0</span>
                </span>
                <span class="placeholder" id="vent_placeholder">
                    Digite sua história/relato aqui
                </span>
                <label class="desabafo_field" id="vent_input">
                    <textarea maxlength="700" placeholder="Digite sua história/relato aqui" required name="vent"></textarea>
                </label>
                <button id="enviar">Enviar</button>
            </form>
            <?php
						if (!$conn) {
							return;
						}

            $username = isset($_POST["username"]) ? $_POST["username"] : NULL;
            $vent = isset($_POST["vent"]) ? $_POST["vent"] : NULL;

            if ($username == "") {
                $username = "Anônimo";
            };

            if ($vent) {
                // replaces "script>" and "?php" with "code>" to prevent script injections
                $vent = str_ireplace(["script>", "?php"], "code>", $vent);

                // replaces <? with <code>
                $vent = str_ireplace("<?", "<code>", $vent);

                // replaces ? > with </code> to form a complete code tag
                $vent = str_ireplace("?>", "</code>", $vent);

                // removes whitespace, new lines (\n) and tabs from the start and end of `$vent`
                $vent = trim($vent, "\t\v\n ");

                $sqlInsert = "INSERT INTO vents (username, vent) VALUES (?, ?)";
                $insertIntoDatabase = $conn->prepare($sqlInsert);
                $insertIntoDatabase->bind_param('ss', $username, $vent);
                $insertIntoDatabase->execute();
                $insertIntoDatabase->close();
            };
            ?>
        </article>
        <article id="desabafos" style="margin-bottom: 1.3em;">
            <?php
						if (!$conn) {
							return;
						}
				
						$index = isset($_GET["index"]) ? $_GET["index"] : 1;
						$sqlGetVents = "SELECT * FROM vents WHERE id > ((?) * 10)";
						$getVentsStatment = $conn->prepare($sqlGetVents);
						$getVentsStatment->bind_param("s", $index);
            $ventComments = $getVentsStatment->execute();
            for ($i = ($index - 1) * 10; $i < $index * 10; $i++) {
                $row = $ventComments->fetch_assoc();
                if (!$row) {
                    break;
                };
                print("<div class='vent' style='margin: .3em;'>" .
                    "<h3>" . $row["username"] . " #" . $row["id"] . "</h3>" .
                    "<p>" . $row["vent"] . "</p>" .
                    "</div>"
                );
            };
            ?>
            <form id="buttons" action="desabafos.php" method="get">
                <?php
                $nextIndex = $index + 1;
                $priorIndex = $index == 1 ? 1 : $index - 1;
                print("<button name='index' value=$priorIndex>Voltar</button>");
                print("<button name='index' value=$nextIndex>Próxima Página</button>");
                ?>
            </form>
        </article>
    </main>
</body>

</html>
