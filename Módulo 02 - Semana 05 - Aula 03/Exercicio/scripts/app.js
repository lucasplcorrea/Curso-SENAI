console.log('app.js')

import { Tamagotchi } from "./tamagotchi.js"

const bicho1 = new Tamagotchi('LAB365') 

// bicho1.brincar()

function brincar() {
    const msg = bicho1.brincar()
    document.getElementById('mensagem').innerText = msg
}

function comer() {
    const msg = bicho1.comer()
    document.getElementById('mensagem').innerText = msg
}

function dormir() {
    const msg = bicho1.dormir()
    document.getElementById('mensagem').innerText = msg
}

function beber() {
    const msg = bicho1.beber()
    document.getElementById('mensagem').innerText = msg

}

function alterarNome() {
    const nome = document.getElementById('nome').value
    bicho1.alterarNome(nome)
}

window.alterarNome = alterarNome
window.brincar = brincar
window.comer = comer
window.dormir = dormir
window.beber = beber