console.log("funciona")


// console.log(excepciones.includes("lo"))

function corregirNombre(nombre) {

    let excepciones = ["de", "del", "el", "la", "los", "las"]


    let nombreArray = []

    let nombreCorregidoArray = nombre.toLowerCase().split(" ")
    nombreCorregidoArray.forEach(element => {
        if (excepciones.includes(element)) {
            nombreArray.push(element)
        } else {
            nombreArray.push(element.charAt(0).toUpperCase() + element.slice(1))
        }
    });

    return nombreArray.toString().replaceAll(",", " ")


    // return nombreCorregido
}

console.log(corregirNombre("IvONNe ALUMNado de la CaSA"))
