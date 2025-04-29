/*1- Crea un objeto llamado auto que tenga algunas características como el color, 
marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir 
encender y apagar el auto.
*/

const auto={
    //caracteristicas
    color:"azul",
    marca:"peugeut",
    modelo: "208",
    //metodos
    encender: function(){
        console.log(this)
        document.writeln(`<p>Se encendió el auto</p>`)
    },
    apagar: function(){
        console.log(this)
        document.writeln(`<p>Se apagó el auto</p>`)
    }
}

console.log(auto)
document.writeln(`<p>El auto ${auto.marca} ${auto.modelo} es de color ${auto.color}</p>`)

auto.encender()
auto.apagar()