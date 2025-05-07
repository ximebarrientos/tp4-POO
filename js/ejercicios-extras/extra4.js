/*Crea un objeto alumno con propiedades nombre, curso y calificaciones
 (un array de números). Escribe una función que reciba un objeto alumno y un número, y 
 que añada la calificación al array de calificaciones del alumno. Usa un bucle para calcular 
 la calificación más alta del alumno y un switch para clasificar 
al alumno según su calificación más alta (A para 9-10, B para 7-8, C para 5-6, D para 0-4).
 */

let alumno = {
  nombre: "Ximena Barrientos",
  curso: "Full Stack",
  calificaciones: [8, 9, 10],
};

function agregarCalificacion(alumno, calificacion) {
  if (!isNaN(calificacion) && calificacion >= 0 && calificacion <= 10) {
    alumno.calificaciones.push(calificacion);
    console.log(`Calificación ${calificacion} añadida.`);
  } else {
    alert("La calificación debe ser un número entre 0 y 10.");
  }
}

function obtenerNotaMaxima(alumno) {
  let maxNota = 0;
  for (let i = 0; i < alumno.calificaciones.length; i++) {
    if (alumno.calificaciones[i] > maxNota) {
      maxNota = alumno.calificaciones[i];
    }
  }
  return maxNota;
}

function clasificarAlumno(nota) {
  let categoria;
  switch (true) {
    case nota >= 9:
      categoria = "A";
      break;
    case nota >= 7:
      categoria = "B";
      break;
    case nota >= 5:
      categoria = "C";
      break;
    default:
      categoria = "D";
  }

  document.writeln(`La mejor nota es ${nota}. Clasificación: ${categoria}`);
}

agregarCalificacion(alumno, 10);
agregarCalificacion(alumno, 4);
let mejorNota = obtenerNotaMaxima(alumno);
clasificarAlumno(mejorNota);
