<?php
session_start();
require_once("connection.php");

var_dump($_SESSION);

if(!isset($_SESSION)) {
    header("Location: ../index.php");
}

echo "Hola, te has conectado ".$_SESSION["nombre_cliente"]. " " .$_SESSION["apellidos_cliente"];

?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <a href="logout.php">Cerrar Sesión</a>
</body>
</html>