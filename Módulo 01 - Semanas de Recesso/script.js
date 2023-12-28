// FECHA MENU
const button = document.getElementById('avatar-navbar');
const closeButton = document.querySelector('.close-button');
const navigationMenu = document.querySelector('.navigation__menu');

button.addEventListener('click', () => {
    navigationMenu.classList.remove('none');
    navigationMenu.classList.remove('hide');
});

closeButton.addEventListener('click', () => {
    navigationMenu.classList.add('hide');
});

// --------------------------- FINAL FECHA MENU

// MUDA COR ARTICLES

// Obtém todas as seleções de título h2 dentro dos artigos
const articleTitles = document.querySelectorAll('.articles article h2');

// Obtém todas as âncoras dentro dos artigos
const articleLinks = document.querySelectorAll('.articles article a');

// Função para lidar com o evento de mouseover
function handleMouseOver(event) {
    // Armazena a cor original do texto
    const originalColor = getComputedStyle(event.target).color;

    // Define a cor do texto como a variável --notification
    event.target.style.color = 'var(--notification)';

    // Adiciona um ouvinte de evento de mouseout para restaurar a cor original
    event.target.addEventListener('mouseout', function handleMouseOut() {
        event.target.style.color = originalColor;
        // Remove o ouvinte de evento para evitar múltiplos registros
        event.target.removeEventListener('mouseout', handleMouseOut);
    });
}

// Adiciona o evento de mouseover a cada título h2
articleTitles.forEach(title => {
    title.addEventListener('mouseover', handleMouseOver);
});

// Adiciona o evento de mouseover a cada âncora
articleLinks.forEach(link => {
    link.addEventListener('mouseover', handleMouseOver);
});

// ----------------------------- FINAL MUDA COR ARTICLES

// ----------------------------- ALERTA REDIRECIONAMENTO

// Função para lidar com o clique no link
function handleLinkClick(event) {
    // Obtém o elemento pai (article) do link clicado
    const article = event.target.closest('article');

    // Obtém o título do projeto do elemento h2 dentro do mesmo article
    const projectTitle = article.querySelector('h2').innerText;

    // Exibe o alerta com a mensagem desejada
    alert(`Você será redirecionado para uma página externa.\nTítulo do Projeto: ${projectTitle}`);
}

// Adiciona o evento de clique a cada âncora
articleLinks.forEach(link => {
    link.addEventListener('click', handleLinkClick);
});

// ---------------------------- FINAL ALERTA REDIRECIONAMENTO

function showTheThing() {
    console.log('Siga o 🐇');
}

// Seleciona todos os botões com a classe "action-button"
const actionButtons = document.querySelectorAll('.action-button');

// Adiciona um ouvinte de clique a cada botão
actionButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Exibe o easter egg de coelho no console ao clicar
        showTheThing();
    });
});