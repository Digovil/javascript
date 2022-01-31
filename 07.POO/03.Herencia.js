class Persona{
    constructor(nombre,edad,sexo){
        this.nombre = nombre;
        this.edad   = edad;
        this.sexo   = sexo;
    }

    getNombre(){
        return this.nombre;
    }
    setNombre(nombre){
        this.nombre = nombre;
    }

    static bienvenida(){
        console.log("Hola")
    }

    static mensaje(){
        console.log("Nuevo mensaje")
    }
}

class Empleado extends Persona{
    constructor(nombre,edad,sexo,puesto,sueldo){
        super(nombre,edad,sexo);
        this.puesto = puesto;
        this.sueldo = sueldo;
    }

    static mensaje(){ //reescribiendo un método
        console.log("Mensaje viejo")
    }
}

const objPersona = new Empleado('Dilan',22,'masculino','Admin',1000);

objPersona.setNombre("Fabian")
console.log(objPersona.getNombre())

Empleado.bienvenida()
Empleado.mensaje()


