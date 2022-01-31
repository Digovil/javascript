

/*  

    PARADIGMA DE PROGRAMACION:

    Son estilos documentados para programar con buenas prácticas,
    estos estilos se dividen en declarativa e imperactiva:

    Las imperactiva: son aquellas que son detalladas y van instrucción a instrucción.

    La programación: declarativa son aquellos donde se utilizan métodos que realizan lo que se espera,
    es decir entiendes lo que vas hacer con eso pero no sabes cómo lo va hacer.

    PROGRAMACIÓN ESTRUCTURADA: Es secuencial, de arriba hacia bajo.

    PROGRAMACIÓN ORIENTADA A OBJETOS: Separa el software en objetos, dichos objetos contiene caracteristicas o atributos y metodos o funciones.

    PROGRAMACIÓN FUNCIONAL: Cada función tiene una función, no utiliza ciclos ni condicionales 

    PROGRAMACIÓN REACTIVA: Consiste en reaccionar a los cambios de los flujos de datos, se utiliza una libreria llamada RXJS.

    B.

    Metodos para strings:

    length       - propiedad para conocer el tamaño de una cadena
    indexOf("")  - función buscar una cadena dentro de otra, te devuelve la posición
    includes("") - otra función de busqueda, pero te devuelve un booleano
    trimStart()  - eliminar el espacio en blanco dentro de una cadena de texto
    trimEnd()    - eliminar del final
    trim()       - eliminar los espacios

    CONCEPTO DE ELEVACIÓN O HOISTING

    Mueve las declaraciones al principio del código.
    La diferencia de las dos funciones anteriores es que la declarativa,
    se puede utilizar antes ya que con el hoisting las declaraciones se mueven al principio,
    en cambio la de expresión no.

*/

"use stict";

//Banners function
function Banners(name){
    let strng   = `=== ${name} ===`;
    let len     = strng.length;
    let aux     = ``;
    let i       = 0;
    while(i<len){
        aux += `=`;
        i +=1;
    }

    console.log(`\n${aux}\n${strng}\n${aux}\n`);
    
}


Banners("A. Consola");

console.log("Hola mundo"); //Imprimir mensajes
console.error("Mensaje de error..."); //Imprimir mensajes de errores 
console.warn("Mensaje de advertencia..."); //Imprimir mensajes de advertencia
console.time("Tiempo en ejecución: ");//Cuanto tiempo demora en ejecutar una tarea (Apertura)
console.log("1");
console.log("2");
console.log("3");
console.log("4");
console.timeEnd("Tiempo en ejecución: ");//Cuanto tiempo demora en ejecutar una tarea (Cierre)

Banners("B. Variables & Constantes");

let nombreB   = "Dilan"; //Tipo cadena
let edadB     = 22; //Entero
let estaturaB = 1.78; //Flotante
let activoB   = false; //Booleano

console.log(`\nSu nombre ${nombreB}\nSu edad ${edadB}\nSu estatura ${estaturaB}\nActivo ${activoB}`); 

nombreB   = "Yeni";
edadB     = 29;
estaturaB = 1.63;
activoB   = true;

console.log(`\nSu nombre ${nombreB}\nSu edad ${edadB}\nSu estatura ${estaturaB}\nActivo ${activoB}`);

const PIB           = 3.14;
const MaximoB       = 3000;
const tallaZapatosB = 43;

console.log("Los que son declarados como constantes\nno cambiaran su valor a lo largo del programa...");

console.log(PIB);
console.log(MaximoB);
console.log(tallaZapatosB);



Banners("C. Strings");
//Existen 3 formas de crear strings

let miNombreC = "Dilan";
let miNoviaC  = String("Yeni");
let miMamaC   = new String("Biceth");

//Existen 4 formas de concatenar strings la primera es la recomendada
console.log(`${miNombreC} es bonito `);
console.log(miNoviaC.concat(" es bonita"));
console.log(miMamaC+" es linda");
console.log(miMamaC," es linda");

console.log("Es capando con \\ ");
console.log("Tengo un monitor de 19\"");

let productoC;

productoC = "     Monitor 12 pulgadas";

//.replace para remplazar
productoC = productoC.replace("pulgadas","\"");

console.log(productoC.trim());
console.log(productoC.indexOf("i"));
console.log(productoC.includes("ia"));
console.log(productoC.length);

//.slice para cortar
console.log(productoC.trim().slice(0,10));
console.log(productoC.trim().slice(10));

//Alternative slice substring()
console.log(productoC.trim().substring(0,4));

//Extraer el primer digito
console.log(productoC.trim().charAt(0));

//.repeat para repetir un string
let textoC = " en promoción".repeat(3);

console.log(`${productoC.trim()} ${textoC} !!!`);

//.split para dividir un string en array
console.log(productoC.trim().split(" "));

//.toUpperCase() todo a mayuscula
console.log(productoC.trim().toUpperCase());
//.toLowerCase() todo a minusculas
console.log(productoC.trim().toLowerCase());

let numeroC = 30;

let cadenaC = numeroC.toString();

console.log(typeof(cadenaC));


Banners("D. Objetos");

const productoD = {
    nombre: "Monitor",
    precio: 420000,
    stock : true
};

//Sirve para congelar un objeto, es decir no se podrá modificar
Object.freeze(productoD);

//Preguntando si el objeto está congelado
console.log(Object.isFrozen(productoD));

const compraD = {
    cantidad: 2,
    total   : productoD.precio*2
};

//No se puede agregar propiedades pero se pueden modificar las existentes
Object.seal(compraD);

compraD.cantidad = 3;
compraD.total    = productoD.precio*3;

console.log(compraD);

//Preguntando si el objeto está sellado
console.log(Object.isSealed(compraD));

let obj1D = {nombre  : "Dilan"},
    obj2D = {apellido: "Gonzalez"};

console.log(obj1D);
console.log(obj2D);

//Uniendo dos objetos
console.log(Object.assign(obj1D,obj2D));

//spread operator o rest operator (los ... significa asigna y copia)
console.log({...obj1D,...obj2D});

//Object Literal
const obj3D = {
    name    : "N",
    old     : 12,
    toString: function(){

        //this hace referencia a las propiedades del objeto
        console.log(`Su nombre es ${this.name} y su edad es ${this.old}`);
    }
};

console.log(obj3D.toString());


Banners("E. Objeto constructor");

//Esto era la POO antes de que hubieran clases en JS
function AnimalE(tipo,nombre){

    this.tipo   = tipo;
    this.nombre = nombre;

}

//Instanciando un objeto tipo animal
const obj4E = new AnimalE("Terrestre","Perro");

console.log(obj4E);

//Para retornar todas las llaves
console.log(Object.keys(obj4E));

//Para retornar todas los valores
console.log(Object.values(obj4E));

//Para retornar todo en pares
console.log(Object.entries(obj4E));

Banners("F. Scope");

let aF = 5;

if (true){

    let bF = 4; 
    console.log(aF);
}

//console.log(b); No es posible porque el alcance de b se reduce al bloque

//var ya no se usa
var variableF;
variableF = "Dilan";
console.log(variableF);
variableF = 5;
console.log(variableF);

Banners("G. Operaciones");

let aG = 2,
    bG = 2,
    cG = 4,
    sumaG,
    restaG,
    multiplicacionG,
    divisionG,
    moduloG;
    
sumaG = aG+cG,
restaG = aG-bG,
multiplicacionG = cG*bG,
divisionG = aG/bG,
moduloG = aG%bG;

console.log(sumaG);
console.log(restaG);
console.log(multiplicacionG);
console.log(divisionG);
console.log(moduloG);


Banners("H. Objeto MATH");


console.log(Math.PI);
//Redondea 
console.log(Math.round(2.96));
//Redondea hacia arriba
console.log(Math.ceil(2.1));
//Redondea hacia bajo
console.log(Math.floor(2.1));
//Raiz cuadrada
console.log(Math.sqrt(16));
//Valor absoluto
console.log(Math.abs(-42));
//Valor maximo
console.log(Math.max(1,3,4,5,7));
console.log(Math.min(1,3,4,5,7));
//Aleatorio hasta el 30
console.log(`Numero aleatorio: ${Math.floor(Math.random()*30)}`);


Banners("I. Operadores");

console.log(40<42);
console.log(44>42);
console.log(44<=42);
console.log(44=="44");
console.log(44==="44");


let I1 = null;
let I2 = undefined;

console.log(I1 == I2);

Banners("J. Arreglos");

//Cómo crearlos?
const J1 = [1,2,3,4,5];
console.log(J1);

//Inidice desde el 0 hasta el 5
const J2 = new Array(1,2,3,4,5,6);
console.log(J2);

const J3 = [1,true,null,{},["d"]];
console.log(J3);


//Cómo acceder al arreglo?
console.log(J1[2]);

//Así se imprime una matriz
const J4 = [1,2,3,4,5,[9,2,4]];
console.log(J4[5][0]);

//Cómo recorrer un arreglo?
//Creciente
for(let i = 0; i<J1.length;i++){
    console.log(J1[i]);
}

//Decreciente
for (let i = J1.length-1; i >=0; i--) {
    console.log(J1[i]);    
}

//Cómo agregar un valor a un arreglo?
const J5 = [1,2,3,4,5];

//push sirve para agregar al final en un arreglo
J5.push("Dilan");

//unshift sirve para agregar al inicio en un arreglo
J5.unshift("Nuevo dato");
console.log(J5);

//La tabla del arreglo 5
console.table(J5);

//Eliminando el ultimo elemento de un arreglo
console.log(J5.pop());

//Mostrando
console.log(J5);

//Eliminando el primer elemento de un arreglo
console.log(J5.shift());

//Mostrando
console.log(J5);

//Destructuring with arrays
const J6 = [5,6,7,4,2,1];

const [f,s,t,...ult] = J6;

console.log("Imprimiendo array 6");
console.table(J6);

console.log(f);
console.log(s);
console.log(t);
console.log(ult);


//forEach
const carrito1J = [
    {nombre: 'Monitor 12"', precio: 200},
    {nombre: 'Celular', precio: 500},
    {nombre: 'Parlante', precio: 50},
];

//Imprimiendo el carrito
carrito1J.forEach(element => {
    console.log(`producto: ${element.nombre} - precio: ${element.precio}`);
});

//.map crea un nuevo arreglo pero .forEach no

//Llendo el segundo carro
const carrito2J = carrito1J.map(element =>{
    return `producto: ${element.nombre} - precio: ${element.precio}`;
});

console.log(carrito2J);

Banners("K. Funciones");

//Declaración de funcion 
function sumarK(){
    return 2+4;
}

console.log(sumarK());

//Expresión de función
const sumar2K = function(){
    return 2+43;
};

console.log(sumar2K());


//Diferencias entre funciones y métodos

const K1 = 20;
const K2 = "20";

console.log(parseInt(K2)); //Función con argumento "20"

console.log(K1.toString());//Método

console.log(resta2K(400,23));

function resta2K(a,b){
    return a-b;
}

console.log(resta2K(1,4));

//Valores por defecto en funciones
function saludarK(nombre = "desconocido"){
    console.log(`Hola ${nombre}`);
}

saludarK();

//Cómo se comunican las funciones?
iniciarAppK();

function iniciarAppK(){
    segundaFuncionK();
}

function segundaFuncionK() {
    console.log("Esta es la segunda funcion");
}

//Arrow Functions
const K3 = () => 5+6;

console.log(K3());

const K4 = params => `Su nombre es ${params}`;

console.log(K4("Dilan"));

//Set & Get en funciones
const reproductorK = {
    cancion: '',
    reproducir: id => console.log(`Reproduciendo la cancion con el id ${id}`),
    set nuevaCancion(cancion){
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    },

    get obtenerCancion(){
        console.log(`${this.cancion}`);
    }
};

reproductorK.nuevaCancion = "Felices";
reproductorK.obtenerCancion;

//Callbacks

function nfuncionK(fn) {
    fn();
}

nfuncionK(() => {
    console.log("Funciona el callback!");
});


Banners("L. Condicionales");


const puntajeL = 1000;

if(puntajeL >= '999'){
    console.log("Cumple con el puntaje");
}

//=== operador estricto
if(puntajeL === '999'){
    console.log("Cumple con el puntaje");
}else{
    console.log("No cumple con el puntaje");
}


if(puntajeL === '999'){
    console.log("Cumple con el puntaje");
}else if(puntajeL === 1000){
    console.log("Es exactamente igual al puntaje");
}

//switch case

const opcL = 1;

switch (opcL) {
    case 0:
        console.log("Hola!");
        break;
    case 1:
        console.log("Buenos dias!");
        break;
    
    default:
        console.log("Adios!");
        break;
}

//Condicional ternario
puntajeL === '999' ?  console.log("Cumple con el puntaje") : console.log("No cumple con el puntaje");

Banners("M. Iteradores");

const M7 = [1,23,3,4,14,5,6,37,241];

console.log("Imprimiendo array 7");
//For loop
for (let i = 0; i <  M7.length; i++) {

    if( M7[i] === 37){
        break; //Termina el ciclo
    }
    console.log( M7[i]);
}

//For loop
for (let i = 0; i <  M7.length; i++) {

    if(M7[i] === 5){
        continue; //Salta el ciclo
    }
    console.log(M7[i]);
}

//While loop
let iM = 0;

while (iM<=40){
    console.log("Hola");
    iM +=1;
}

//do while loop
iM = 0;

do{
    console.log(`Hola ${iM}`);
    iM+=1;
}while(iM<=10);

//forEach and map
const M8 = ['enero','febrero','marzo'];

M8.forEach((meses,i)=>console.log(`mes: ${meses} - numero: ${i}`));
const M9 = M8.map((meses,i)=> `mes: ${meses} - numero: ${i}`);
console.log(M9);

//for of itera sobre un arreglo
const objM = [
    {
        nombre  : "Dilan",
        edad    : 12,
        sueldo  : 200,
        estatura: 189
    },
    {
        nombre  : "Dilan",
        edad    : 12,
        sueldo  : 200,
        estatura: 189
    }
];

for (const persona of objM) {
    console.log(persona.nombre);
}

//for in itera sobre un objeto
for (const persona in objM[0]) {
    console.log(objM[0][persona]);
}

Banners("N. Array Methods");


//Comprobar si un elemento existe en un arreglo
const N10 = [32,42,52,25,12,34];

//Forma imperativa
N10.forEach( edad =>{
    if (edad===42) {console.log(true);}
});

//Forma declarativa
console.log(N10.includes(42)); //true

//En un arreglo de objetos
const N11 = [{nombre: "Dilan",edad:22,plata:999999},{nombre: "Yenifer",edad:29,plata:3000}];
console.log(N11.some(persona => persona.nombre === "Dilan")); //true

//Encontrar a través del indice

//Forma imperativa
N10.forEach( edad =>{
    if (edad===25) {console.log(`1. Edad: ${edad}`);}
});

//Forma declarativa
let iN = N10.findIndex(edad => edad === 25);
console.log(`2. Edad: ${N10[iN]}`);

//Sumar valores de objetos dentro de un array

//Forma imperativa
let totalN = 0;
N11.forEach(persona => totalN += persona.plata);
console.log(`1. El total es: ${totalN}`);

//Forma declarativa
totalN = N11.reduce( (totalN, persona) => totalN + persona.plata, 0 );
console.log(`2. El total es: ${totalN}`);

//Filtros
const carritoN = [
    {nombre: 'Monitor 27 pulgadas', precio: 500},
    {nombre: 'Televisión', precio: 100},
    {nombre: 'Tablet', precio: 100},
    {nombre: 'Audifonos', precio: 300},
    {nombre: 'Teclados', precio: 400},
    {nombre: 'Celular', precio: 700}
];

//Filter
let resultadoN;

resultadoN = carritoN.filter( producto => producto.precio > 400);

console.log(resultadoN);

//Find imperativo

console.time("Tiempo en ejecución: ");
resultadoN = '';
carritoN.forEach((producto,i)=>{
    if(producto.nombre === 'Tablet') {
        resultadoN = carritoN[i];
    }
});

console.log(resultadoN);
console.timeEnd("Tiempo en ejecución: ");

//Find declarativo

console.time("Tiempo en ejecución: ");
resultadoN = carritoN.find(producto => producto.nombre === "Tablet");
console.log(resultadoN);
console.timeEnd("Tiempo en ejecución: ");

//True si todos los elementos de un array de objetos cumple con la condición

resultadoN = carritoN.every(producto => producto.precio < 1000);

console.log(resultadoN);//true

//Unir dos arreglos
const meses1N = ['enero','febrero','marzo'];
const meses2N = ['abril','mayo'];
const meses3N = ['Junio','Julio','Agosto'];

//.concat
resultadoN = meses1N.concat(meses2N,meses3N);
console.log(resultadoN);

//spread operator u operador de propagación
resultadoN = "";
resultadoN = [...meses1N,...meses2N];
console.log(resultadoN);

const productoN = {nombre:'Disco duro',precio:230};
resultadoN = [...carritoN,productoN];

console.log(carritoN);
console.log(resultadoN);