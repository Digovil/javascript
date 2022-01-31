
//Callback es una función dentro de otra función
//setTimeout(()=>console.log("Hola mundo"),3000);

// let getUsuarioById = (id,fn) => {
//     let usuario = {
//         name: 'Dilan',
//         id
//     }
//     id === 20? fn(`El usuario con id ${id}, no existe en la BD`) :   fn(null,usuario)

// }

// getUsuarioById(10,(error,usuario)=>{
    
//     error ? console.log(error) :  console.log('Usuario de base de datos: ',usuario)

// });

let empleados = [
    {id:1,nombre:'Dilan'},
    {id:2,nombre:'Diana'},
    {id:3,nombre:'Felipe'}
]

let salarios  = [
    {id: 1, salario: 1000},
    {id: 2, salario: 2000}
] 

let getEmpleado = (id, fn) =>{
    let empleadoDB = empleados.find(empleados => empleados.id === id )
    !empleadoDB ? fn(`No existe un empleado con el ID ${id}`) : fn (null,empleadoDB)
}


let getSalario = (empleado, fn)=>{ //empleado es el que esta en el array, la funcion es la que recibe 

    let salarioEmpleado = salarios.find((element)=> element.id === empleado.id )  

    salarioEmpleado? fn(null,{nombre: empleado.nombre, salario: salarioEmpleado.salario}) : fn(`No se encontró un salario para el usuario ${empleado.nombre.toUpperCase()}`) 
}

getEmpleado(2,(error,empleado) => {
    
    if(error){
        console.log(error);
    }
    
    getSalario(empleado,(error,resp)=>{
        error ? console.log(error) :  console.log(resp)
    })
});
