// Ocultar formulario de alta
document.getElementById("signup").style.display= "none";


function mostrarFormularioAlta() {
    document.getElementById("signin").style.display = "none";
    document.getElementById("signup").style.display = "block";
}

function volverInicio() {
    document.getElementById("signin").style.display = "block";
    document.getElementById("signup").style.display = "none";
}

const signupForm = document.getElementById("signupForm")

signupForm.addEventListener("submit", (e) => {

    e.preventDefault()

    let nombre = document.getElementById("nombreUp").value.trim()
    console.log(nombre)
    let apellidos = document.getElementById("apellidos").value.trim()
    let emailUp = document.getElementById("emailUp").value.trim()
    let nif = document.getElementById("nif").value.trim()
    let direccion = document.getElementById("direccion").value.trim()
    let ciudad = document.getElementById("ciudad").value.trim()
    let telefono = document.getElementById("telefono").value.trim()



    let password1 = document.getElementById("password1").value;
    let password2 = document.getElementById("password2").value;

    if (password1 !== password2) {
        document.getElementById("errorPassword").innerHTML = "<p> Las contraseñas no coinciden </p>"
        document.getElementById("password2").value = ""
        return
    }
    // else {
    //     document.getElementById("errorPassword").innerHTML = "<p> Las contraseñas coinciden </p>"
    //     return
    // }

    // signupForm.reset()

    let datos = {
        "nombre": nombre,
        "apellidos": apellidos,
        "password": password1,
        "email": emailUp,
        "nif": nif,
        "direccion": direccion,
        "ciudad": ciudad,
        "telefono": telefono

    }

    // Enviar el JSON al fichero destino
    fetch("signup.php", {
        method: "POST",
        body: JSON.stringify(datos),
        headers: {
            "Content-Type": "application/json"
        }
    })
})

function corregirNombre(nombre) {

    let nombreCorregido = nombre.toLowerCase().split(" ")

    // de del el la los las

    return nombreCorregido
}
