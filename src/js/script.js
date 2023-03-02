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

function iniciarAccordionBicicletas() {
  const accordionItems = document.querySelectorAll(".escolha-item");

  accordionItems.forEach((item) => {
    const header = item.querySelector(".escolha-header");
    const content = item.querySelector(".escolha-conteudo");

    header.addEventListener('click', () => {
      // Remove a classe "mostrar-bike" de todos os itens do accordion.
      accordionItems.forEach((item) => {
        item.classList.remove("mostrar-bike");
        item.querySelector(".escolha-conteudo").style.display = "none";
      });
      // Adiciona a classe "mostrar-bike" ao item clicado e exibe o conteúdo correspondente.
      item.classList.add("mostrar-bike");
      content.style.display = "grid";
    });

  });
}
iniciarAccordionBicicletas();