//abrir e fechar modals
const modalContainer = document.querySelector('.modal-container');
let modal = document.querySelector('.modal');



function abrirModal() {
    modalContainer.classList.add('modal-container-ativado');
    document.body.classList.add('bloquear-scroll');
};

function fecharModal() {
    modalContainer.classList.remove('modal-container-ativado');
    document.body.classList.remove('bloquear-scroll');
};