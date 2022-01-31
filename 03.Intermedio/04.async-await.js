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

let getSalario = async empleado =>{

    let salarioEmpleado = salarios.find((element)=> element.id === empleado.id )  

    if(salarioEmpleado){
        return {nombre: empleado.nombre, salario: salarioEmpleado.salario}
    }else{ 
        return `No se encontró un salario para el usuario ${empleado.nombre.toUpperCase()}`
        //throw new Error sirve para mandar un error
    }
}


async function getInfo(id){
    let empleado    = await getEmpleado(id);
    let salario     = await getSalario(empleado);
    return salario;
}

getInfo(3).then(m => console.log(m)).catch(er => console.log(er));
