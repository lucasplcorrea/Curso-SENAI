let elementosClasse2 = document.querySelectorAll('.classe2');

elementosClasse2.forEach(elemento => {
    elemento.classList.remove('classe2');
    console.log(`A classe 'classe2' foi removida do elemento: ${elemento.tagName}`);
});
