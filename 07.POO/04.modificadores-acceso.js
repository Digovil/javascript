class Persona{

    #nombre;
    #edad;
    #sexo;
    constructor(){
        this.#nombre = "";
        this.#edad   = 0;
        this.#sexo   = "";
    }

    getNombre(){
        return this.#nombre;
    }

    setNombre(nombre){
        this.#nombre = nombre;
    }

    getEdad(){
        return this.#edad;
    }
    setEdad(edad){
        this.#edad = edad;
    }

    getSexo(){
        return this.#sexo;
    }
    setSexo(sexo){
        this.#sexo = sexo;
    }

}


const objPersona = new Persona();

objPersona.setNombre("Fabian")

console.log(objPersona.getNombre())

