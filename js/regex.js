let nombre = "María"
let nombre2 = "Pep"
let nombre3 = "anna"

const pattern = /\D/

console.log(nombre.match(pattern))
console.log(nombre.search(pattern))
console.log(nombre.replace(pattern, "A"))
console.log(pattern.test(nombre))
console.log(pattern.test(nombre2))
console.log(pattern.test(nombre3))

