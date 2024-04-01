const seta = document.querySelector('#seta-baixo');

function trocaSeta() {
    if (seta.innerHTML == "expand_more") {
        seta.innerHTML = 'expand_less';
    } else {
        seta.innerHTML = 'expand_more';
    };
};