// Event Bubbling evitar

const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const titulo = document.querySelector('.titulo');

// .stopPropagation()

cardDiv.addEventListener('click',()=>{
    console.log('click en card');
});

infoDiv.addEventListener('click',()=>{
    console.log('click en info');
});

titulo.addEventListener('click',e =>{
    e.stopPropagation()
    console.log('click en titulo');
});
