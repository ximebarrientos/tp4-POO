/*Crea un array de objetos, donde cada objeto represente a un estudiante con 
propiedades nombre y nota. Luego, escribe una función que reciba este array y calcule 
la nota media de los estudiantes.
Usa un bucle para recorrer el array. 
Usa prompt para ingresar los datos de los estudiantes.*/

const estudiantes = [];


function fnnotaMedia(estudiantes) {
  let sumaNotas = 0;
  for (let i = 0; estudiantes.length > i; i++) {
   let sumaNotas = sumaNotas + estudiantes[i].nota
  }
  return sumaNotas/estudiantes.length;
}

function mostrarEstudiantes(estudiantes){
    document.writeln(`<h3>Lista estudiantes</h3>`);
    document.writeln(`<ul>`);
    for (let i = 0; i < estudiantes.length; i++) {
      document.writeln(`<li>${estudiantes[i]}</li>`);
    }
    document.writeln(`</ul>`);
};



do {
  const nombre = prompt("Ingrese el nombre del estudiante");
  const nota = Number(prompt("Ingrese nota del estudiante"));

  while (isNaN(nota) || nota < 0 || nota > 10) {
    alert("Ingrese en nota un valor del 0 al 10");
  }

  const estudiante = {
    nombre: nombre,
    nota: nota,
  };
  estudiantes.push(estudiante);
  console.log(estudiantes);
} while (confirm("¿Desea agregar más estudiantes?"));

let finalnotaMedia = fnnotaMedia(estudiantes);

document.writeln(`La nota media de los estudiantes es: ${finalnotaMedia}`);
mostrarEstudiantes(estudiantes)
