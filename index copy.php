<!-- <!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ECOmmerce</title>
    <link rel="stylesheet" href="css/style.css">

</head>

<body>
    <header>
        <h1>Tutti Frutti</h1>
    </header>

    <main>
        <section id="signin"></section>
        <h2>Formulario de acceso</h2>
        <form action="php/signin.php" method="POST">
            <div>
                <label for="email">Email:</label>
                <input type="text" name="email" id="email">
            </div>
            <div>
                <label for="password">Contraseña:</label>
                <input type="text" name="password" id="password">
            </div>
            <div>
                <button type="submit">Acceder</button>
                <button type="reset">Borrar</button>
                <button type="button" onclick="mostrarFormularioAlta()">Nuevo usuario</button>
            </div>
        </form>

        <section id="signup"></section>
        <h2>Por favor, introduzca sus datos</h2>
        <form action="php/signup.php" method="POST"></form>

        <fieldset>
            <legend>Datos personales</legend>
            <div>
                <label for="nombre">Nombre</label>
                <input type="text" name="nombre" id="nombre">
            </div>
            <div>
                <label for="apellidos">Apellidos</label>
                <input type="text" name="apellidos" id="apellidos">
            </div>
            <div>
                <label for="password1">Contraseña elegida</label>
                <input type="text" name="password1" id="password1">
            </div>
            <div>
                <label for="password2">Confirme la contraseña</label>
                <input type="text" name="password2" id="password2">
            </div>
            <label for="email">Email:</label>
            <input type="email" name="email" id="email">
        </fieldset>
        <fieldset>
            <legend>Datos de la compra</legend>
            <div>
                <label for="nif">NIF:</label>
                <input type="text" name="nif" id="nif">
            </div>
            <div>
                <label for="telefono">Teléfono</label>
                <input type="tel" name="telefono" id="telefono">
            </div>
            <div>
                <label for="direccion">Dirección</label>
                <input type="text" name="direccion" id="direccion">
            </div>
            <div>
                <label for="ciudad"></label>
                <input type="text" name="ciudad" id="ciudad">
            </div>
        </fieldset>
        <div>
            <button type="submit">Enviar datos</button>
            <button type="reset">Borrar datos</button>
            <button type="button" onclick="volverInicio()">Cancelar</button>
        </div>
    </main>

    <script src="js/app.js"></script>
</body>

</html> -->


<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>ECommerce</title>
  <link rel="stylesheet" href="css/style.css" />
</head>

<body class="width-content">

  <div class="container">

    <header class="width-content">
      <h1><span>🍍🍉</span> Tutti Frutti <span>🍓🥑</span></h1>
    </header>

    <main class="width-content">

      <section id="signin">
        <h2>Formulario de acceso</h2>
        <form action="php/signin.php" method="post">
          <div>
            <label for="email">Email: </label>
            <input type="email" name="email" id="email" />
          </div>
          <div>
            <label for="password">Contraseña </label>
            <input type="text" name="password" id="password" />
          </div>
          <div>
            <button type="submit">Acceder</button>
            <button type="reset">Borrar</button>
            <button type="button" onclick="mostrarFormularioAlta()">Nuevo usuario</button>
          </div>
        </form>
      </section>

      <section id="signup">
        <h2>Por favor, introduzca sus datos</h2>
        <form id="signupForm">
          <div class="nuevo-usuario">
            <h3>Datos personales</h3>
            <div>
              <label for="nombreUp">Nombre:</label>
              <input type="text" name="nombreUp" id="nombreUp" required min="2" max="20" />
            </div>

            <div>
              <label for="apellidos">Apellidos:</label>
              <input type="text" name="apellidos" id="apellidos" required min="2" max="50" />
            </div>

            <div>
              <label for="password1">Contraseña elegida:</label>
              <input type="password" name="password1" id="password1" required min="8" max="20" />
            </div>

            <div>
              <label for="password2">Confirme la contraseña:</label>
              <input type="password" name="password2" id="password2" required min="8" max="20" />
            </div>
            <div id="errorPassword"></div>
            <div>
              <label for="emailUp">Email:</label>
              <input type="email" name="emailUp" id="emailUp" required />
            </div>
          </div>

          <div class="nuevo-usuario">
            <h3>Datos de la compra</h3>
            <div>
              <label for="nif">NIF:</label>
              <input type="text" name="nif" id="nif" min="9" max="9" required />
            </div>

            <div>
              <label for="telefono">Teléfono</label>
              <input type="text" name="telefono" id="telefono" min="9" max="9" required />
            </div>

            <div>
              <label for="direccion">Dirección:</label>
              <input type="text" name="direccion" id="direccion" required />
            </div>

            <div>
              <label for="ciudad">Ciudad</label>
              <input type="text" name="ciudad" id="ciudad" min="2" max="100" />
            </div>
          </div>

          <div>
            <button type="submit">Enviar datos</button>
            <button type="reset">Borrar datos</button>
            <button type="button" onclick="volverInicio()">Cancelar</button>
          </div>

        </form>
      </section>
    </main>
    <script src="js/app.js"></script>
    <script src="js/corregirNombre.js"></script>

  </div>
</body>

</html>