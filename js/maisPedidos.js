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
const btnPedirAgoraList = document.querySelectorAll('.btn-pedir-agora');
const logoIfoodList = document.querySelectorAll('.logo-ifood');

btnPedirAgoraList.forEach((btnPedirAgora, index) => {
    const logoIfood = logoIfoodList[index];
    
    btnPedirAgora.addEventListener('mouseover', () => {
        btnPedirAgora.style.backgroundColor = "#ea1d2c";
        btnPedirAgora.style.color = "white";
        logoIfood.style.filter = "brightness(1000%)";
    });
    
    btnPedirAgora.addEventListener("mouseout", () => {
        btnPedirAgora.style.backgroundColor = "white";
        btnPedirAgora.style.color = "#ea1d2c";
        logoIfood.style.filter = "";
    });
});