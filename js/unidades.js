const seta = document.querySelector('#seta-baixo');
const btnUnidades = document.querySelector('#btn-unidades');
const unidadesOpcoes = document.querySelector('.unidades-opcoes');


//declarando a função que troca a seta para cima e para baixo
function trocaSeta() {
    if (seta.innerHTML == "expand_more") {
        seta.innerHTML = 'expand_less';
    } else {
        seta.innerHTML = 'expand_more';
    };
};


//dropdown no escolha a unidade
btnUnidades.addEventListener("click", function() {
    unidadesOpcoes.classList.toggle('unidades-opcoes-ativado');
    trocaSeta();
});


//exibindo os mapas correspondentes
