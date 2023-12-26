function calcular() {
    var num1 = parseFloat(document.getElementById("numero1").value);
    var num2 = parseFloat(document.getElementById("numero2").value);
    var operacao = document.getElementById("operacao").value;

    var resultado;

    switch (operacao) {
        case "soma":
            resultado = num1 + num2;
            break;
        case "subtracao":
            resultado = num1 - num2;
            break;
        case "multiplicacao":
            resultado = num1 * num2;
            break;
        case "divisao":
            resultado = num1 / num2;
            break;
        default:
            resultado = "Operação inválida";
    }

    document.getElementById("resposta").innerText = "Resultado: " + resultado;

    return resultado;
}

function validar() {
    var input1 = document.getElementById("numero1").value;
    var input2 = document.getElementById("numero2").value;
    var operacao = document.getElementById("operacao").value;
    var operacaoPorExtenso;

    switch (operacao) {
        case "soma":
            operacaoPorExtenso = "adição";
            break;
        case "subtracao":
            operacaoPorExtenso = "subtração";
            break;
        case "multiplicacao":
            operacaoPorExtenso = "multiplicação";
            break;
        case "divisao":
            operacaoPorExtenso = "divisão";
            break;
        default:
            operacaoPorExtenso = "Operação inválida";
    }

    var resultado = calcular();

    var resposta = "O primeiro número foi: " + input1 +
        "\nO segundo número foi: " + input2 +
        "\nA operação lógica escolhida foi: " + operacaoPorExtenso +
        "\nO resultado dessa operação é: " + resultado;

    alert(resposta);
}
