function ativarLinksMenu() {
  // Ativar links do Menu
  const links = document.querySelectorAll('.header-menu a')

  function ativarLink(link) {
    const url = location.href;
    const href = link.href;

    if (url.includes(href)) {
      link.classList.add('ativo');
    }
  }

  links.forEach(ativarLink)
}
ativarLinksMenu();

function iniciarAccordion() {
  const perguntas = document.querySelectorAll('.pergunta');
  if (perguntas.length) {
    //Fazer com que o 1° accordion esteja iniciado ao carregar a página.
    perguntas[0].classList.add('ativo');
    perguntas[0].nextElementSibling.classList.add('ativo');

    function ativarAccordion() {
      this.classList.toggle('ativo');
      this.nextElementSibling.classList.toggle('ativo');
    }

    perguntas.forEach((pergunta) => {
      pergunta.addEventListener('click', ativarAccordion);
    });
  }
}
iniciarAccordion();