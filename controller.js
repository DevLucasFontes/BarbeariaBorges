let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    const nav = document.querySelector(".navegacao");
    if (window.scrollY > lastScrollY) {
        // Scrolando para baixo, esconde o menu
        nav.classList.add("hide");
    } else {
        // Scrolando para cima, mostra o menu
        nav.classList.remove("hide");
    }
    lastScrollY = window.scrollY;
});

function openModal() {
    document.querySelector('.overlay').style.display = 'block';
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.querySelector('.overlay').style.display = 'none';
    document.getElementById('modal').style.display = 'none';
    document.getElementById('modalConfirmacao').style.display = 'none';
}

function selecionarHorario(button) {
    // Remove a classe 'active' de todos os botões
    const horarios = document.querySelectorAll('.horarios button');
    horarios.forEach(btn => btn.classList.remove('active'));

    // Adiciona a classe 'active' ao botão clicado
    button.classList.add('active');
}

function confirmarAgendamento() {
    // Lógica de confirmação (se houver)
    closeModal();

    document.getElementById('modalConfirmacao').style.display = 'block';
    window.open("https://wa.me/5561995938105", "_blank");
}

function fecharConfirmacao() {
    document.getElementById('modalConfirmacao').style.display = 'none';
    document.querySelector('.overlay').style.display = 'none';
}
