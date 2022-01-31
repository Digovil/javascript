
/*
    Es un problema porque no esta claro de que objeto pertenece
    cada función.

*/

//Object Constructor
function Cliente(nombre,saldo){
    this.nombre = nombre;
    this.saldo  = saldo;
}

const juan = new Cliente('Juan',400);//Instanciando al objeto juan de Cliente

function formatearCliente(cliente){ 
    const {nombre, saldo} = cliente; //Destructurando el objeto cliente 

    return `El Cliente ${nombre} tiene un sueldo de ${saldo}`; 
}

function formatearEmpresa(empresa){
    const {nombre, saldo, categoria} = empresa;

    return `El cliente ${nombre} tiene un saldo de ${saldo} y pertenece a la categoria ${categoria}`;
}

console.log(formatearCliente(juan));

function Empresa(nombre, saldo, categoria){
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

const juacar = new Empresa('Danza juacar',40000,'Danza folclorika');//Instanciando al objeto juacar de Empresa
console.log(formatearEmpresa(juacar));