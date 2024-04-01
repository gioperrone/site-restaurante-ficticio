const seta = document.querySelector('#seta-baixo');
const btnUnidades = document.querySelector('#btn-unidades');
const unidadesOpcoes = document.querySelector('.unidades-opcoes');

btnUnidades.addEventListener("click", function() {
    unidadesOpcoes.classList.toggle('unidades-opcoes-ativado');
});



function trocaSeta() {
    if (seta.innerHTML == "expand_more") {
        seta.innerHTML = 'expand_less';
    } else {
        seta.innerHTML = 'expand_more';
    };
};