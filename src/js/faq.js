const perguntas = document.querySelectorAll('.pergunta');

perguntas.forEach(pergunta => {
  pergunta.addEventListener('click', function () {
    this.classList.toggle('active');
    const conteudo = this.nextElementSibling;
    if (conteudo.style.maxHeight) {
      conteudo.style.maxHeight = null;
    } else {
      conteudo.style.maxHeight = conteudo.scrollHeight + "px";
    }
  });
});

