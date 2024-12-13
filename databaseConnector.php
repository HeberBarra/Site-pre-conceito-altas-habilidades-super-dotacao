<?php
	$host = "mysql-server";
	$username = "usuario";
	$password = getenv("MYSQL_SENHA_USUARIO");
	$database = getenv('MYSQL_DATABASE');

	$conn = new mysqli($host, $username, $password, $database);
