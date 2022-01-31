
let textArea    = document.querySelector('#exampleFormControlTextarea');
let btn         = document.querySelector('.btn');
let tableBody   = document.querySelector('tbody');
let cont        = tableBody.rows.length;
let len         = textArea.value.toString().length;
let array       = []

eventListeners();

function eventListeners(){
    
    btn.addEventListener('click',clickBtn);
    textArea.addEventListener('keypress',e =>{
        if (e.key === 'Enter'){
            clickBtn(e);
        }
    });    

    document.addEventListener('DOMContentLoaded',() =>{
        array = JSON.parse(localStorage.getItem("mensajes: ")) || [];

        addTableWhenLoad();
    })

}

function clickBtn(e){
    len = textArea.value.toString().length

    if(len!==0 && len<=20){
        const mnj = {
            id: Date.now(),
            mensaje: textArea.value
        }
        array.push(mnj)
        console.log(array)
        textArea.value = "";
        addTable();
        addLocalStorage();
        
    }
}

function addTableWhenLoad(){


    array.forEach((element,i)=>{
        let row = document.createElement('tr');
        row.innerHTML = `<th scope="row">${cont}</th><td>${element.mensaje}</td>`
        tableBody.appendChild(row)

        cont +=1

    });
    



}

function addTable(){
    let row = document.createElement('tr');
    row.innerHTML = `<th scope="row">${cont}</th><td>${array[array.length-1].mensaje}</td>`
    tableBody.appendChild(row)

    cont +=1
}

function addLocalStorage(){
    localStorage.setItem('mensajes: ',JSON.stringify(array))

}

