let placa;
let marca;
let modelo;
let anofab;
let anomod;
let cor;

function obterInformacoes() {
    placa = prompt("Digite a placa do carro:");
    marca = prompt("Digite a marca do carro:");
    modelo = prompt("Digite o modelo do carro:");
    anofab = prompt("Digite o ano de fabricação do carro:");
    anomod = prompt("Digite o ano do modelo do carro:");
    cor = prompt("Digite a cor do carro:");
}

function exibirDadosCarro() {
    console.log("Carro gravado no banco de dados:");
    console.log("Placa: " + placa);
    console.log("Marca: " + marca);
    console.log("Modelo: " + modelo);
    console.log("Ano de Fabricação: " + anofab);
    console.log("Ano do Modelo: " + anomod);
    console.log("Cor: " + cor);
}

function cadastrarCarro() {
    obterInformacoes();
    exibirDadosCarro();

    let cadastrarNovo = confirm("Deseja cadastrar um novo carro?");

    if (cadastrarNovo) {
        cadastrarCarro();
    } else {
        console.log("Programa encerrado.");
    }
}

cadastrarCarro();