import {Persona} from './04-scripts.js';


class Empleado extends Persona{
    constructor(nombre,edad,rango){
        super(nombre,edad);
        this.rango  = rango;
    }
}


const objEmpleado = new Empleado('Dilan',23,'Principiante');

console.log(objEmpleado.toString())