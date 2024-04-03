const cards = document.querySelectorAll('.card');


cards.forEach(card => {
    card.addEventListener('click', () => {
        const modalId = card.getAttribute('data-modal-id');
        const modal = document.getElementById(modalId);
        const closeModal = modal.querySelector('.close-modal');


        //abrir modals
        modal.classList.add('modal-ativado');


        //fechar modals
        closeModal.addEventListener('click', () => {
            modal.classList.remove('modal-ativado');
        });
    });
});