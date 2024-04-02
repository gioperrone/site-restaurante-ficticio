//abrir e fechar modals
const modalContainer = document.querySelector('.modal-container');


function abrirModal() {
    modalContainer.classList.add('modal-container-ativado');
};

function fecharModal() {
    modalContainer.classList.remove('modal-container-ativado');
};