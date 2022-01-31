//Object Constructor
function Cliente(nombre,saldo){
    this.nombre = nombre;
    this.saldo  = saldo;
}

Cliente.prototype.tipoCliente = function(){
    let tipo 

    this.saldo >= 10000 ? tipo = 'Gold' : this.saldo > 5000 ? tipo = 'Platinum': tipo = 'Normal';


    return tipo
}

function Persona(nombre, saldo, telefono){
    Cliente.call(this,nombre,saldo); //Heredando las propiedades
    this.telefono = telefono;
}

Persona.prototype = Object.create(Cliente.prototype); //Heredando los prototype
Persona.prototype.constructor = Cliente; //Heredando el constructor


const juan = new Persona('Juan',5000,1014184);
console.log(juan)
console.log(juan.tipoCliente())
