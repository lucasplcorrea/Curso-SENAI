// Usei parseFloat para comparar numericamente
let x = parseFloat(prompt("Digite o valor de X"));
let y = parseFloat(prompt("Digite o valor de Y"));

console.log("O valor de x é:", x);
console.log("O valor de y é:", y);

function verificarMaior(x, y) {
    if (x > y) {
        return x + " é maior que " + y;
    } else if (y > x) {
        return y + " é maior que " + x;
    } else {
        return "Os números são iguais";
    }
}

function verificarIgualdade(x, y) {
    return x === y;
}

let saoIguais = verificarIgualdade(x, y);

if (saoIguais) {
    alert("Os números são iguais");
    console.log("Os números são iguais");
} else {
    let resultadoMaior = verificarMaior(x, y);
    alert(resultadoMaior);
    console.log(resultadoMaior);
}
