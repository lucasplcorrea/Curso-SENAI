// Removendo Elementos

//removendo elemento filho
let container2 = document.querySelector('#container')

console.log(container2)

let paragrafoCriado = document.querySelector('#container p')

console.log(paragrafoCriado)

container2.removeChild(paragrafoCriado)

//removendo elemento externo
let subtitle = document.querySelector('.subtitle')

console.log(subtitle)

subtitle.remove()

//Trocando Tags
let elementoH3 = document.createElement('h3')

console.log(elementoH3)

let texto = document.createTextNode('O texto do h3')

elementoH3.appendChild(texto)

//Selecionar o elemento a ser trocado
// let elementoAtual = document.getElementById('title')

// console.log(elementoAtual)

// let pai = elementoAtual.parentNode

// pai.replaceChild(elementoAtual, elementoH3)

//Adicionando atributos
let botao = document.querySelector('#btn')

botao.setAttribute('disabled', 'disabled');
botao.setAttribute('style', 'background-color: green;')

let subtitleAtributo = document.querySelector('.subtitle')
console.log(subtitleAtributo)

subtitleAtributo.setAttribute('id', 'titulo-2')

let lista = document.querySelector('#lista')

console.log(lista)

lista.removeAttribute('id')

//Alterando CSS

let titulo4 = document.querySelector('#title')

titulo4.style.color = 'red';


titulo4.style.cssText = 'background-color:pink; font-size: 10px;'