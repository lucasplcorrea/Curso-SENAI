//Terceiro Exercício
let valor = 100;
let valorDoDesconto;
let valorComDesconto;

valorDoDesconto = valor * 0.10;

valorComDesconto = valor - valorDoDesconto;

console.log("O valor original é:")
console.log(valor)
console.log("O desconto foi de:")
console.log(valorDoDesconto)
console.log("O valor final a ser pago é:")
console.log(valorComDesconto)

//Exercicios Switch

let diaDaSemana = 3;

switch (diaDaSemana) {
    case 1:
        console.log('Domingo');
        break;
    case 2:
        console.log('Segunda');
        break;
    case 3:
        console.log('Terça');
        break;
    case 4:
        console.log('Quarta');
        break;
    case 5:
        console.log('Quinta');
        break;
    case 6:
        console.log('Sexta');
        break;
    case 7:
        console.log('Sábado');
        break;
    default:
        console.log('Esse dia da semana ainda não existe');
}

//--------

let mes = 'fevereiro';

switch (mes) {
    case 'dezembro':
    case 'janeiro':
    case 'fevereiro':
        console.log('Verão');
        break;
    case 'março':
    case 'abril':
    case 'maio':
        console.log('Outono');
        break;
    case 'junho':
    case 'julho':
    case 'agosto':
        console.log('Inverno');
        break;
    case 'setembro':
    case 'outubro':
    case 'novembro':
        console.log('Primavera');
        break;
    default:
        console.log('¯\\_(ツ)_/¯');
}

let mesNumero = 2;

switch (diaDaSemana) {
    case 1:
        console.log('Janeiro');
        break;
    case 2:
        console.log('Fevereiro');
        break;
    case 3:
        console.log('Março');
        break;
    case 4:
        console.log('Abril');
        break;
    case 5:
        console.log('Maio');
        break;
    case 6:
        console.log('Junho');
        break;
    case 7:
        console.log('Julho');
        break;
    case 8:
        console.log('Agosto');
        break;
    case 9:
        console.log('Setembro');
        break;
    case 10:
        console.log('Outubro');
        break;
    case 11:
        console.log('Novembro');
        break;
    case 12:
        console.log('Dezembro');
        break;
    default:
        console.log('¯\\_(ツ)_/¯');
}