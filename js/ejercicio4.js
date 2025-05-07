/*4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.
*/
class Producto {
    constructor(codigoParam, nombreParam, precioParam) {
      this.codigo = codigoParam;
      this.nombre = nombreParam;
      this.precio = precioParam;
    }

    imprimeDatos(){
        document.writeln(`<p>Código: ${this.codigo}</p>`);
        document.writeln(`<p>Nombre: ${this.nombre}</p>`);
        document.writeln(`<p>Precio: $${this.precio}</p>`);
    }
}

const producto1=new Producto("AUGE01","AuricularGenius",90)
const producto2=new Producto("AULO01","AuricularLogitech",130)
const producto3=new Producto("AURD01","AuricularRedDragon",110)

const productos=[producto1,producto2,producto3]

for(let i=0; productos.length>i;i++){
    productos[i].imprimeDatos()
}

//producto1.imprimeDatos()
//producto2.imprimeDatos()
//producto3.imprimeDatos()