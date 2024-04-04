const seta = document.querySelector('#seta-baixo');
const btnUnidades = document.querySelector('#btn-unidades');
const unidadesOpcoes = document.querySelector('.unidades-opcoes'); //div com opções
const unidadesOpcaoLista = document.querySelectorAll('.unidades-opcao'); //lista com cada opção

let dropdownAberto = false;


//declarando a função que troca a seta para cima e para baixo
function trocaSeta() {
    if (seta.innerHTML == "expand_more") {
        seta.innerHTML = 'expand_less';
    } else {
        seta.innerHTML = 'expand_more';
    };
};


//abrindo e fechando dropdown
btnUnidades.addEventListener("click", function() {
    unidadesOpcoes.classList.toggle('unidades-opcoes-ativado');
    dropdownAberto = true;
    trocaSeta();
});


//fechando dropdown ao clicar fora ou ao escolher um item
window.addEventListener('click', function(evento) {
    if (!btnUnidades.contains(evento.target) && dropdownAberto) {
        unidadesOpcoes.classList.remove('unidades-opcoes-ativado');
        dropdownAberto = false;
        trocaSeta();
    }
});


//exibindo os mapas correspondentes
unidadesOpcaoLista.forEach(unidadesOpcao => {
    unidadesOpcao.addEventListener('click', () => {
        const mapaId = unidadesOpcao.getAttribute('data-map-id');
        const map = document.getElementById(mapaId);

        map.classList.add('map-ativado');
    });
});