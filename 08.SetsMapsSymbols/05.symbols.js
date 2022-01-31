//No existen dos symbols iguales

const s1    = Symbol('1');
const s2    = Symbol('1');

console.log(s1 === s2? `Son iguales` : `Son diferentes`);

console.log(s1)


//Agregar datos en un symbol
const nombre        = Symbol('Nombre'); //Definir la descripción del symbol
const apellido      = Symbol('Apellido');

const persona = {}


persona[nombre]     = 'Juan'; //Se agregan siempre con corchetes
persona[apellido]   = 'Gonzalez'; 
persona.tipoCliente = 'Premium';
persona.saldo       = 500;

console.log(persona);

//Las propiedades que utilizan un symbol no son iterables
for (const i in persona) { //Objetos
    console.log(i)
}
