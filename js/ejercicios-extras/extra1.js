/*Crea un objeto persona que contenga las propiedades nombre, edad y hobbies 
(los hobbies son un array de strings). Luego, escribe una función que reciba un 
objeto persona y un nuevo hobby y añada este hobby a la lista de hobbies de la persona. 
Finalmente, imprime los hobbies de la persona usando un bucle. Usa prompt para ingresar los datos 
de la persona y el nuevo hobby. */


const nombre=prompt("Ingrese su nombre")
const edad=parseInt(prompt("Ingrese su edad"))
const hobbie=prompt("Ingrese su hobbie")

const persona={
    nombre: nombre,
    edad: edad,
    hobbies:[hobbie]
}
function agregarHobbie(persona,nuevoHobbie){
    persona.hobbies.push(nuevoHobbie)
}


do{
    const nuevoHobbie=prompt("Ingrese un nuevo hobbie")
    agregarHobbie(persona,nuevoHobbie)
} while (confirm("¿Quiere agregar un nuevo hobbie?"))

console.log(persona)
//mostrar las propiedades del objeto
document.writeln(`<p> Nombre : ${persona.nombre}</p>`)
document.writeln(`<p> Edad : ${persona.edad}</p>`)
document.writeln(`<p> Hobbies : ${persona.hobbies}</p>`)