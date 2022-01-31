//Class Declaration
class Clase{
    constructor(nombre,sueldo){
        this.nombre = nombre;
        this.sueldo = sueldo;
    }

    //Método del objeto
    toString = () => `Cliente: ${this.nombre} su saldo es ${this.sueldo}`;

    //Método de la clase
    static sueldo = (d=0) => `$${d}`;
}

//Instanciando la clase
const dilan = new Clase("Dilan",2000);

console.log(dilan.toString())
//console.log(dilan.sueldo()) dará un error
console.log(Clase.sueldo(4000))
