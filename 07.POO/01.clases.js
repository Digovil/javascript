//Class Declaration
class Clase1{
    constructor(nombre,sueldo){
        this.nombre = nombre;
        this.sueldo = sueldo;
    }
}

//Instanciando la clase
const dilan = new Clase1("Dilan",2000);
console.log(dilan)


//Class expression
const Clase2 = class{
    constructor(nombre,sueldo){
        this.nombre = nombre;
        this.sueldo = sueldo;
    }
}

const yeni = new Clase2("Yenifer",19000000);
console.log(yeni)