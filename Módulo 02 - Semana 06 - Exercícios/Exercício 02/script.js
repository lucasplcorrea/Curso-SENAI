var container = document.getElementsByClassName('container')[0]; 

var paragrafos = container.getElementsByTagName('p');

var spans = container.getElementsByTagName('span');

for (var i = 0; i < paragrafos.length; i++) {
    paragrafos[i].innerText = 'Olá, eu sou o novo texto do parágrafo';
}

for (var i = 0; i < spans.length; i++) {
    spans[i].innerText = 'Olá, eu sou o novo texto do span';
}
