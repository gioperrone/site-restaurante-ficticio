const seta = document.querySelector('#seta-baixo');
const btnUnidades = document.querySelector('#btn-unidades');
const unidadesOpcoes = document.querySelector('.unidades-opcoes');

let dropdownAberto = false;


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
    dropdownAberto = true;
    trocaSeta();
});


window.addEventListener('click', function(evento) {
    if (!btnUnidades.contains(evento.target) && dropdownAberto) {
        unidadesOpcoes.classList.remove('unidades-opcoes-ativado');
        dropdownAberto = false;
        trocaSeta();
    }
});


//exibindo os mapas correspondentes