/*2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.

*/

const cuenta={
    titular:"Alex",
    saldo: 0,

    ingresar:function(cantidad){
        this.saldo=this.saldo+cantidad
    },

    extraer: function(cantidad){
        this.saldo=this.saldo-cantidad
    },

    informar: function(){
        return document.writeln(`El saldo de la cuenta de ${this.titular} es de: ${this.saldo}`)
    }
}

cuenta.informar()
document.writeln("<h3>Ingresamos 200 a la cuenta</h3>")
cuenta.ingresar(200)
cuenta.informar()
document.writeln("<h3>Sacamos 100 de la cuenta</h3>")
cuenta.extraer(100)
cuenta.informar()

