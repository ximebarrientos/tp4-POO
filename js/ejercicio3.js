/*
3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área
*/

class rectangulos{
    
    constructor(altoParam,anchoParam){
        this.alto=altoParam
        this.ancho=anchoParam
    }

    mostrarPerimetro(alto,ancho){
        const perimetro=(alto+ancho)*2
        return document.writeln(`<p>El perimetro del rectangulo es: ${perimetro}</p>`)
    }

    mostrarArea(alto,ancho){
        const area=alto*ancho
        return document.writeln(`<p>El area del rectangulo es: ${area}</p>`)
    }

}
const altoParam=Number(prompt("Ingrese el alto del rectangulo"))
const anchoParam=Number(prompt("Ingrese el ancho del rectangulo"))
const rectangulo1=new rectangulos(altoParam,anchoParam)
rectangulo1.mostrarPerimetro(altoParam,anchoParam)
rectangulo1.mostrarArea(altoParam,anchoParam)