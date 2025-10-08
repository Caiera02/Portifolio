// script.js (Exemplo simples)

const menuButton = document.getElementById('menu-button'); // ID do botão de menu
const navMenu = document.getElementById('nav-menu'); // ID da lista <ul> da navegação

menuButton.addEventListener('click', () => {
    navMenu.classList.toggle('hidden');
    navMenu.classList.toggle('flex');
});