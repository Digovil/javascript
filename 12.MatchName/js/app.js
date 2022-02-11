const btnEnviar     = document.querySelector('#btnEnviar');
const name1         = document.querySelector('#name1');
const name2         = document.querySelector('#name2');
const formNames     = document.querySelector('#form-names');
let   tableBody     = document.querySelector('tbody');
let   allArraysName = [];



eventListener();
function eventListener(){

    btnEnviar.addEventListener('click',loadNames)

}

function loadNames(){
    
    
    allArraysName       = []  
    tableBody.innerHTML = "";
    const band          = createHTML(name1.value.trim().length ===0 || name2.value.trim().length ===0) || false;

    if(!band){
        return;
    }

    const auxName1 = name1.value.trim();
    const auxName2 = name2.value.trim();

    createName(auxName1,auxName2)
    
    updateTable();
}

function createHTML(band){

    if(band &&  validateDiv()){

        const div = document.createElement('divAux');

        formNames.appendChild(div)

        div.classList.add('mb-3');

        div.innerHTML = `
            <div class="alert alert-danger h-2" role="alert">
                Fill in all the fields! 
            </div>
        `


        formNames.appendChild(div)

        setTimeout(()=>{
            formNames.removeChild(div);
        },2000)

    }else{
        return true
    }
}

function validateDiv(){
    if (!(document.querySelector("divAux"))){
        return true;
    }else{
        return false;
    }
}

function createName(name,otherName){

    const objName = Object.assign({},silabaJS.getSilabas(name).silabas) ;

    const objOtherName = Object.assign({},silabaJS.getSilabas(otherName).silabas) ;
    
    const arrayName1 = [];
    const arrayName2 = [];
    //console.log(Object.keys(objName).length)
    //console.log(Object.keys(objOtherName).length)

    for (const keyName in objName) {
        
        for (const keyOtherName in objOtherName) {
            allArraysName.push(`${objName[keyName].silaba}${objOtherName[keyOtherName].silaba}`)
            arrayName1.push(`${objName[keyName].silaba}${objOtherName[keyOtherName].silaba}`)
        }
    }


    for (const keyOtherName in  objOtherName) {
        
        for (const keyName in objName) {

            allArraysName.push(`${objOtherName[keyOtherName].silaba}${objName[keyName].silaba}`)
            arrayName2.push(`${objOtherName[keyOtherName].silaba}${objName[keyName].silaba}`)
        }
    }


    arrayName1.forEach(resp=>{       
        arrayName2.forEach(resp2 =>{
            
            allArraysName.push(`${resp}${resp2}`);
        })

    })

    arrayName2.forEach(resp=>{       
        arrayName1.forEach(resp2 =>{
            allArraysName.push(`${resp2}${resp}`);
        })

    })

    console.log(allArraysName)

}

function updateTable(){
    allArraysName.forEach((element,i)=>{
        let row = document.createElement('tr');
        row.innerHTML = `<th scope="row">${i+1}</th><td>${element}</td>`
        tableBody.appendChild(row)

    });
}

    
