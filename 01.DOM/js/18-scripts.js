// Event Bubbling evitar

const cardDiv = document.querySelector('.card');

//Delegation
cardDiv.addEventListener('click', e =>{
    if(e.target.classList.contains('titulo') )
        console.log('click en titulo');
    if(e.target.classList.contains('card'))
        console.log('click en card');
    if(e.target.classList.contains('info'))
        console.log('click en info');
});
