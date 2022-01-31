//Object Literal
const objeCliente = {
    nombre  : "Juan",
    saldo   : 200000, 

}

console.log(typeof objeCliente)
console.log(objeCliente)

//Object Constructor
function Cliente(nombre,saldo){
    this.nombre = nombre;
    this.saldo  = saldo;
}

const juan = new Cliente('Juan',400);

console.log(typeof juan);
console.log(juan);