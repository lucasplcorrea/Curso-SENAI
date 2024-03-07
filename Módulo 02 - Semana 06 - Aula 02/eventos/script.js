//Evento Clique

function clique(){
    elementoBotao.style.backgroundColor = 'yellow'
}

let elementoBotao = document.getElementById('elemento')

elementoBotao.addEventListener('click', clique)

// Evento Double Clique
let cliqueDuplo = document.querySelector('.title')

cliqueDuplo.addEventListener('dblclick', function(){
    this.style.color = 'blue'

    console.log(this)
})

// Evento Mouse

let titulo = document.querySelector('.title')

titulo.addEventListener('mouseover', function(){
    this.style.backgroundColor = 'pink'
})

titulo.addEventListener('mouseout', function(){
    this.style.backgroundColor = 'tomato'
})

//evento Teclado
document.addEventListener('keyup', function(event){
    console.log(event)
    window.setTimeout(() => {
        console.log('soltou a tecla')
    }, 3000)
})

document.addEventListener('keydown', function(event){
    console.log(event)
    if(event.key === 'Enter'){
        console.log('pressionou o enter')
    }
})