//exibindo e escondendo background do cabeçalho
window.addEventListener("scroll", function() {
    const header = document.querySelector('.cabecalho');
    header.classList.toggle('cabecalho-bg', window.scrollY > 0);
});


//menu hambúrguer
const burger = document.querySelector('#burger');
const menu = document.querySelector('.menu');

burger.addEventListener("click", function() {
    menu.classList.toggle('menu-ativado');
    document.body.classList.toggle('bloquear-scroll');
});