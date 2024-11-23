<?php
	$host = getenv('MYSQL_HOST');
	$username = "usuario";
	$password = getenv('MYSQL_SENHA_USUARIO');
	$database = getenv('MYSQL_DATABASE');

	$conn = null;
	try {
		$conn = mysqli_connect($host, $username, $password, $database);
	} catch(Exception $e) {}
?>
