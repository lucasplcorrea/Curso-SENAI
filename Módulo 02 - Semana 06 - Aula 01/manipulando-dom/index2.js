// innerHtml
let title = document.querySelector('#title')

title.innerHTML = "Testando a propriedade do innerHtml"

console.log(title.innerHTML)

// textContent
let subtitle = document.querySelector('.subtitle')

subtitle.textContent = "Testando textContent"
console.log(subtitle.textContent)

//---Criando Elementos---
let novoP = document.createElement('p')

let texto = document.createTextNode('Aoooba')

novoP.appendChild(texto)

console.log(novoP)

let body = document.querySelector('body')

body.appendChild(novoP)