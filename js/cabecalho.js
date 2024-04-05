//rolagem do cabeçalho
window.addEventListener('scroll', function() {
    const header = document.querySelector('.cabecalho');
    header.classList.toggle('cabecalho-bg', window.scrollY > 0);
});


//menu hambúrguer
const burger = document.querySelector('#burger');
const menu = document.querySelector('.menu');

burger.addEventListener('click', function() {
    menu.classList.toggle('menu-ativado');
    document.body.classList.toggle('bloquear-scroll');
});

function trocaBotao() {
    if (burger.innerHTML == "menu") {
        burger.innerHTML = "close";
    } else {
        burger.innerHTML = "menu";
    };
};


//removendo bug de quando o menu hambúrguer está aberto e redimensiona a tela para a partir de 1200px
function verificarLarguraTela() {
    const larguraTela = window.innerWidth;
    const menu = document.querySelector('.menu');
    
    if (larguraTela > 1200) {
        menu.classList.remove('menu-ativado');
        burger.innerHTML = "menu";
        document.body.classList.remove('bloquear-scroll');
    };
};

window.addEventListener('resize', verificarLarguraTela);

verificarLarguraTela();