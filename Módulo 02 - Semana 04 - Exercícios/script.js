window.alert("Bem-vindo! Espero que goste do meu site.");

let novoNomeUsuario = "Lucas Pedro";
let novaDescricao = "Um desenvolvedor em desenvolvimento.";
let nomeUsuarioElemento = document.querySelector("#perfil h2");
let descricao = document.querySelector("#perfil p");

nomeUsuarioElemento.textContent = novoNomeUsuario;

descricao.textContent = novaDescricao;