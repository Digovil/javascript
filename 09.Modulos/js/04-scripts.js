
export class Persona{

    constructor(nombre,edad){

        this.nombre    = nombre;
        this.edad      = edad;

    }

    
    toString = () => `Hola ${this.nombre}, su edad es ${this.edad}?`;
}