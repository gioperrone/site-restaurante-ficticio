window.addEventListener("scroll", function() {
    let header = document.querySelector('.cabecalho');
    header.classList.toggle('cabecalho-bg', window.scrollY > 0);
});