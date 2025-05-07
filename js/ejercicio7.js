/* 7- Nos piden realizar una agenda telefónica de contactos.
 Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.
 
Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).
 
Los métodos de la agenda serán los siguientes:
 
●        aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
●        existeContacto(Contacto): indica si el contacto pasado existe o no.
●        listarContactos(): Lista toda la agenda
●        buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
●        eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
●        agendaLlena(): indica si la agenda está llena.
●        huecosLibres(): indica cuántos contactos más podemos ingresar.
 
Crea un menú con opciones que serán seleccionadas por el usuario usando un prompt, las salidas de las operaciones seleccionadas por el usuario se pueden mostrar en pantalla y  por consola.
*/

//variables
//contacto es un objeto (nombre,teléfono)
//agenda[contacto1, contacto2] debe tener por defecto 10 contactos pero el usuario puede seleccionar otra cantidad
//la agenda tiene varios metodos
//crear un menu con todas las operaciones que puede hacer el usuario con mi agenda

class Contacto{
    #nombre;
    #telefono;
    constructor(nombre, telefono){
        this.#nombre = nombre;
        this.#telefono = telefono
    }

    get getNombre(){
        return this.#nombre
    }
    set setNombre(nuevoNombre){
        
        this.#nombre = nuevoNombre
    }
    get getTelefono(){
        return this.#telefono
    }
    set setTelefono(nuevoTelefono){
        this.#telefono = nuevoTelefono
    }

    mostrarContacto(){
        document.writeln(`<p>Nombre: ${this.getNombre}, telefono: ${this.getTelefono}</p>`)
    }
}

class Agenda{
    #contactos;
    #tamanio;
    constructor(tamanio = 10){
        this.#contactos = [];
        this.#tamanio = tamanio
    }

    get getContactos(){
        return this.#contactos
    }
    get getTamanio(){
        return this.#tamanio
    }
    set setTamanio(nuevoTamanio){
        this.#tamanio = nuevoTamanio;
    }

    aniadirContacto(contacto){
        this.#contactos.push(contacto)
        console.log('Agregar contacto a la agenda', this.getContactos)
    }
    
}

const capacidadAgenda = parseInt(prompt('Ingresa el tamaño de la agenda'))

const agendaNueva = new Agenda(capacidadAgenda)

console.log(agendaNueva)
do{

const opcion = parseInt(prompt(`Selecciona una opción:
    1- Añadir contacto,
    2- Eliminar contacto,
    3- Listar contactos`))

switch(opcion){
    case 1:
        
        const nombre = prompt('Ingresa el nombre del contacto')
        const telefono = prompt('Ingresa el telefono del contacto')
       
        const nuevoContacto = new Contacto(nombre,telefono)
        console.log(nuevoContacto)
        
        agendaNueva.aniadirContacto(nuevoContacto)
        console.log(agendaNueva)
        break
    case 2:
        
        break;
    default:
        console.log('Ingreso una opcion invalida')    
}
}while(confirm('¿Queres realizar otra operacion?'))
