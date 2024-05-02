<?php

// require_once("connection.php");

// echo "PHP obtiene: ".file_get_contents("php://input");



$data = json_decode(file_get_contents("php: //input"), true);

// Comprobar el post
// echo "<pre>";
// var_dump($data);
// echo "</echo>";

$nombre = $data["nombre"];
$apellidos = $data["apellidos"];
$password = $data["password1"];
// $password2 = $data["password2"];
$email = $data["email"];
$nif = $data["nif"];
$telefono = $data["telefono"];
$direccion = $data["direccion"];
$ciudad = $data["ciudad"];

// Password encriptado
$password_encriptado = password_hash($password, PASSWORD_DEFAULT);

// echo strlen($password1); Solo fue utilizado para ver la longitud del password


$select = "SELECT * FROM clientes WHERE email = ?";
$query = $conn->prepare($select);
$query->execute([$email]);
$result = $query->fetch();

// Comprobar el usuario
// echo "<pre>";
// var_dump($result);
// echo "</echo>";

//Si el email ya existe el codigo se corta con el die()
if ($result) {
    echo "El email ya existe.";
    die();
}


// Obtener el id de la ciudad
$select = "SELECT id_ciudad FROM ciudades WHERE nombre_ciudad = ?";
$query = $conn->prepare($select);
$query->execute([$ciudad]);
$result = $query->fetch();

// var_dump($result);

// echo "<pre>";
// echo $result["id_ciudad"];
// echo "</echo>";


// Si la ciudad no existe sera insertada en la tabla
if (!$result) {
    // Insertar la ciudad
    $insert = "INSERT INTO ciudades (nombre_ciudad) VALUES (?)";
    $query = $conn->prepare($insert);
    $query->execute([$ciudad]);

    // Obtener el id de la ciudad
    $select = "SELECT id_ciudad FROM ciudades WHERE nombre_ciudad = ?";
    $query = $conn->prepare($select);
    $query->execute([$ciudad]);
    $result = $query->fetch();

    // echo "<pre>";
    // echo $result['id_ciudad'];
    // echo "</pre>";
}

$id_ciudad = $result["id_ciudad"];

$insert = "INSERT INTO clientes (nombre_cliente, apellidos_cliente, password, email, nif, telefono, direccion_cliente, id_ciudad) VALUES (?,?,?,?,?,?,?,?)";
$query = $conn->prepare($insert);
$query->execute([$nombre, $apellidos, $password_encriptado, $email, $nif, $telefono, $direccion, $id_ciudad]);


$conn = null;
$insert = null;
$select = null;

header("Location: ecommerce.php");
