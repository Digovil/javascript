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

//instancia
const pedro = new Cliente('Pedro',100000);
console.log(pedro.tipoCliente());