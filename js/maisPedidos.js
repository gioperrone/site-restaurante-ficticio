//abrir e fechar modals
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', () => {
        const modalId = card.getAttribute('data-modal-id');
        const modal = document.getElementById(modalId);
        const closeModal = modal.querySelector('.close-modal');

        modal.classList.add('modal-ativado');

        closeModal.addEventListener('click', () => {
            modal.classList.remove('modal-ativado');
        });
    });
});


//mouseover e mouseout no botão Pedir Agora (ifood)
const ifood = document.querySelector('.logo-ifood');
const btnPedirAgora = document.querySelector('.btn-pedir-agora');

btnPedirAgora.addEventListener('mouseover', () => {
    btnPedirAgora.style.backgroundColor = "#ea1d2c";
    btnPedirAgora.style.color = "white";
    ifood.style.filter = "brightness(1000%)";
});


btnPedirAgora.addEventListener("mouseout", () => {
    btnPedirAgora.style.backgroundColor = "white";
    btnPedirAgora.style.color = "#ea1d2c";
    ifood.style.filter = "";
});