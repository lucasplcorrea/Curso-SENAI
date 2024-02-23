// Exercicio 08
let novoNomeUsuario = "Lucas Pedro";
let novaDescricao = "Um desenvolvedor em desenvolvimento.";
let nomeUsuarioElemento = document.querySelector("#perfil h2");
let descricao = document.querySelector("#perfil p");

nomeUsuarioElemento.textContent = novoNomeUsuario;

descricao.textContent = novaDescricao;

//Exercicio 10
function mostrarAlerta() {
    window.alert("Bem-vindo! Espero que goste do meu site.");
}

// Associando a função ao evento de clique do botão
document.getElementById("btnAlerta").addEventListener("click", mostrarAlerta);