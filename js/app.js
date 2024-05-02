// // Ocultar formulario de alta
// document.getElementById("signup").style.display = "none";

// function mostrarFormularioAlta() {
//     document.getElementById("signin").style.display = "none";
//     document.getElementById("signup").style.display = "block";
// }

// function volverInicio() {
//     document.getElementById("signin").style.display = "block";
//     document.getElementById("signup").style.display = "none";
// }

// // Capturar el formulario
// let signupForm = document.getElementById("signupForm")

// signupForm.addEventListener("submit", (e) => {
//     e.preventDefault()
//     /*
//     // Método 1 con el id
//     let nombre = document.getElementById("nombreUp").value.trim()
//     // console.log(nombre)
//     let apellidos = document.getElementById("apellidos").value.trim()

//     let password1 = document.getElementById("password1").value;
//     let password2 = document.getElementById("password2").value;

//     let emailUp = document.getElementById("emailUp").value.trim()
//     let nif = document.getElementById("nif").value.trim()
//     let direccion = document.getElementById("direccion").value.trim()
//     let ciudad = document.getElementById("ciudad").value.trim()
//     let telefono = document.getElementById("telefono").value.trim()
//     */

//     const formData = new FormData(signupForm)

//     //obtener cada valor
//     let nombre = formData.get("nombre").trim().toLowerCase()
//     let apellidos = formData.get("apellidos").trim().toLowerCase()
//     let password1 = formData.get("password1").trim()
//     let password2 = formData.get("password2").trim()
//     let nif = formData.get("nif").toUpperCase()





//     // Pattern nombre
//     const patternNombre = /\D+$/
//     // if (!patternNombre.test(nombre)) {
//     //     document.getElementById("errorNombre").style.display = "block"
//     //     document.getElementById("errorNombre").innerHTML = "<p>Nombre no válido</p>"
//     //     return
//     // }

//     const patternApellidos = /\D+$/
//     // if (!patternNombre.test(nombre)) {
//     //     document.getElementById("errorApellidos").style.display = "block"
//     //     document.getElementById("errorApellidos").innerHTML = "<p>Nombre no válido</p>"
//     //     return
//     // }


//     const data = {
//         // "nombre": nombre
//         nombre  // Al ser llave valor iguales se pueden simplificar en un solo valor
//     }

//     let data2 = JSON.stringify(data) // Esto lo convierte en un string
//     // console.log(data2)
//     // console.log(data2["nombre"])

//     fetch("php/signup.php", {
//         method: "POST",
//         body: JSON.stringify(data),
//         headers: {
//             "Content-Type": "application/json",
//         }
//     })
//         .then(res => res.text())
//         .then(text => console.log(text))
//         .catch(error => console.log(error))

//     console.log("Linea 60")

//     console.log(validarNombre(nombre, patternNombre, "Nombre"))
//     console.log(validarNombre(apellidos, patternApellidos, "Apellidos"))

//     if (password1 !== password2) {
//         document.getElementById("errorPassword").innerHTML = "<p> Las contraseñas no coinciden </p>"
//         document.getElementById("password2").value = ""
//         return
//     }

//     const patternNif = /[0-9A-Z][0-9]{7}[A-Z]/

//     if (nif.length < 9) {
//         document.getElementById("errorNif").innerHTML = "<p>NIF incorrecto</p>"
//         document.getElementById("password2").value = ""
//         return
//     } else {

//     }

//     /*
//     let apellidos = document.getElementById("apellidos").value.trim()

//     let password1 = document.getElementById("password1").value;
//     let password2 = document.getElementById("password2").value;

//     let emailUp = document.getElementById("emailUp").value.trim()
//     let nif = document.getElementById("nif").value.trim()
//     let direccion = document.getElementById("direccion").value.trim()
//     let ciudad = document.getElementById("ciudad").value.trim()
//     let telefono = document.getElementById("telefono").value.trim()

//     // signupForm.reset()

//     let datos = {
//         "nombre": nombre,
//         "apellidos": apellidos,
//         "password": password1,
//         "email": emailUp,
//         "nif": nif,
//         "direccion": direccion,
//         "ciudad": ciudad,
//         "telefono": telefono

//     }

//     // Enviar el JSON al fichero destino
//     fetch("signup.php", {
//         method: "POST",
//         body: JSON.stringify(datos),
//         headers: {
//             "Content-Type": "application/json"
//         }
//     })

//     */
// })


// function corregirNombre(nombre) {
//     let excepciones = ["de", "del", "el", "la", "los", "las"]
//     let nombreArray = []
//     let nombreCorregidoArray = nombre.toLowerCase().split(" ")

//     nombreCorregidoArray.forEach(element => {
//         if (excepciones.includes(element)) {
//             nombreArray.push(element)
//         } else {
//             nombreArray.push(element.charAt(0).toUpperCase() + element.slice(1))
//         }
//     });
//     return nombreArray.toString().replaceAll(",", " ")
// }

// function validarNombre(text, pattern, id) {
//     let corregido = text.charAt(0).toUpperCase() + text.slice(1)
//     document.getElementById("error"+id).style.display = "none"
//     document.getElementById("error"+id).innerHTML = ""

//     if (!pattern.test(corregido)) {
//         document.getElementById("error"+id).style.display = "block"
//         document.getElementById("error"+id).innerHTML = `<p>${id} no válido</p>`
//         return
//     }
//     return "error"+corregido

// }

// // function validarNombreProfe() {
// //     if (pattern.test(text)) {
// //         document.getElementById("error"+attribute).style.display =
// //     }
// // }



// ------------------------------------ Codigo del profe -------------------------------------------


// Ocultar formulario de alta
document.getElementById("signup").style.display = "none";

// Funciones para mostrar y ocultar formularios
function mostrarFormularioAlta() {
  document.getElementById("signin").style.display = "none";
  document.getElementById("signup").style.display = "block";
}

function volverInicio() {
  document.getElementById("signin").style.display = "block";
  document.getElementById("signup").style.display = "none";
}

// Capturar el formulario
signupForm = document.getElementById("signupForm"); // esto deberia ser un let

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Método 1 con el id
  // let nombre = document.getElementById("nombre").value.trim();
  // // console.log(nombre);
  // let apellidos = document.getElementById("apellidos").value.trim();

  // let password1 = document.getElementById("password1").value;
  // let password2 = document.getElementById("password2").value;

  // let email = document.getElementById("emailUp").value.trim();
  // let nif = document.getElementById("nif").value.trim();
  // let direccion = document.getElementById("direccion").value.trim();
  // let ciudad = document.getElementById("ciudad").value.trim();
  // let telefono = document.getElementById("telefono").value.trim();

  // Obtener datos del formulario
  const formData = new FormData(signupForm);

  // Obtener cada valor
  let nombre = formData.get("nombre").trim();
  let apellidos = formData.get("apellidos").trim();
  let password1 = formData.get("password1").trim();
  let password2 = formData.get("password2").trim();
  let nif = formData.get("nif").toUpperCase().trim();
  let direccion = formData.get("direccion").trim();
  let ciudad = formData.get("ciudad").trim();
  let telefono = formData.get("telefono").trim();
  let email = formData.get("email").trim();

  // Pattern nombre
  const patternNombre = /^['a-zA-ZáéíóúàèìòùüñÑçÇÁÉÍÓÚÀÈÌÒÙÜ\s]+$/;
  if (!validarItems(nombre, patternNombre, "nombre")) {
    return;
  }
  if (!validarItems(apellidos, patternNombre, "apellidos")) {
    return;
  }
  if (password1 !== password2) {
    document.getElementById("errorPassword").innerHTML =
      "<p>Las contraseñas no coinciden</p>";
    document.getElementById("password2").value = "";
    return;
  }


  const patternNif = /[0-9A-Z][0-9]{7}[A-Z]/;
  // if (nif.length < 9 || validarItems(nif, patternNif, "nif")) {
    console.log(patternNif.test(nif));

  if (nif.length < 9 || !patternNif.test(nif)) {
    document.getElementById("error-nif").style.display = "block";
    document.getElementById("error-nif").innerHTML = "<p>NIF incorrecto</p>";
    return;
  } else {
    document.getElementById("error-nif").style.display = "none";
  }

  const patternDireccion = /^['a-zA-ZáéíóúàèìòùüñÑçÇÁÉÍÓÚÀÈÌÒÙÜ0-9\s,-\/ºª]+$/;
  if (!validarItems(direccion, patternDireccion, "direccion")) {
    return;
  }
  if (!validarItems(ciudad, patternNombre, "ciudad")) {
    return;
  }

  // Generar el objeto con los datos

    const data = {
    nombre,
    apellidos,
    password: password1 ,
    email,
    nif,
    direccion,
    ciudad,
    telefono
  }
  
  // let data2 = JSON.stringify(data);
  // console.log(data["nombre"]);

  fetch("php/signup.php", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.text())
    .then((text) => console.log(text))
    .catch((error) => console.log(error));

  
  signupForm.reset();


});

// function corregirNombre(nombre) {
//   let nombreCorregido = "";
//   let temp = nombre.split(" ");

//   // de del el la los las y i

//   return nombreCorregido;
// }

function validarItems(text, pattern, attribute) {
  if (pattern.test(text)) {
    document.getElementById("error-" + attribute).style.display = "none";
    return true;
  } else {
    console.log(attribute + " is not a valid");
    document.getElementById("error-" + attribute).style.display = "block";
    document.getElementById(
      "error-" + attribute
    ).innerHTML = `<p>${text} no es válido</p>`;
    return false;
  }
}
