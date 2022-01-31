let empleados = [
    {id:1,nombre:'Dilan'},
    {id:2,nombre:'Diana'},
    {id:3,nombre:'Felipe'}
]

let salarios  = [
    {id: 1, salario: 1000},
    {id: 2, salario: 2000}
] 

let getEmpleado = id =>{

    //resolver, rechazar
    return new Promise((resolve,reject) => {
        let empleadoDB = empleados.find(empleados => empleados.id === id )
        !empleadoDB ? reject(`No existe un empleado con el ID ${id}`) : resolve(empleadoDB)
    });

}

let getSalario = empleado =>{

    return new Promise((resolve,reject)=>{

        let salarioEmpleado = salarios.find((element)=> element.id === empleado.id )  

        salarioEmpleado? resolve({nombre: empleado.nombre, salario: salarioEmpleado.salario}) : reject(`No se encontró un salario para el usuario ${empleado.nombre.toUpperCase()}`) 
    });
}
/*
    getEmpleado(3).then(empleado =>{

        getSalario(empleado).then(resp =>{
            console.log(resp);
        },error => console.log(error))

    },error => console.log(error))
*/

getEmpleado(4)
.then(empleado => getSalario(empleado)) //Regreso una promesa
.then(resp => console.log(resp))
.catch(error =>console.log(error))