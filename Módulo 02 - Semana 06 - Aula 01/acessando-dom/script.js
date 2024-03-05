//TAG
let titulo = document.getElementsByTagName('h1')[0];

console.log(titulo);

//ID
let paragrafoTag = document.getElementById('paragrafo');

console.log(paragrafoTag);

//CLASS
let itemLista = document.getElementsByClassName('item')[2];

console.log(itemLista);

//Query Selector All

let itensQuery = document.querySelectorAll('#lista2 li')
console.log(itensQuery)

let itensQuery2 = document.querySelectorAll('#lista1 .item')

console.log(itensQuery2)

// Query Selector
let listaQuery = document.querySelector('#lista1')

console.log(listaQuery)

let listaTagQuery = document.querySelector('ul')

console.log(listaQuery)

