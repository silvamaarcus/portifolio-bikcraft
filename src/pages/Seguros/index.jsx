import React, { useState } from "react";

//Componentes
import Header from "../Header";
import Footer from "../Footer";

// Icons
import icon_eletrica from "../../svg/icon-eletrica.svg";
import icon_carbono from "../../svg/icon-carbono.svg";
import icon_velocidade from "../../svg/icon-velocidade.svg";
import icon_rastreador from "../../svg/icon-rastreador.svg";
import icon_sustentavel from "../../svg/icon-sustentavel.svg";
import icon_seguranca from "../../svg/icon-seguro.svg";

const AccordionItem = ({ title, content, isActive, onClick }) => (
  <div
    className={`accordion-item ${isActive ? "active" : ""}`}
    onClick={onClick}
  >
    <div className="accordion-title">{title}</div>
    {isActive && <div className="accordion-content">{content}</div>}
  </div>
);

const Seguros = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const items = [
    {
      title: "Qual forma de pagamento vocês aceitam?",
      content:
        "Aceitamos cartões de crédito com as bandeiras: Visa, Mastercard, ELO e American Express. Para pagamentos à vista também aceitamos PIX e Boleto através do PagSeguro.",
    },
    { title: "Como posso entrar em contato?", content: "Conteúdo do Item 2" },
    { title: "Vocês possuem algum desconto?", content: "Conteúdo do Item 3" },
    { title: "Qual a garantia que possuo?", content: "Conteúdo do Item 4" },
    { title: "Posso parcelar no boleto?", content: "Conteúdo do Item 5" },
    {
      title: "Quantas trocas posso fazer ao ano?",
      content: "Conteúdo do Item 6",
    },
    {
      title: "Qual Bikcraft devo escolher para o meu tamanho?",
      content: "Conteúdo do Item 7",
    },
  ];

  const handleItemClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <Header />

      <section className="bg-black-dark-soft">
        <section className="container">
          <h5 className="color-gray uppercase">Escolha o seguro</h5>
          <h1 className="color-white bold mb-8">
            você seguro<span>.</span>
          </h1>

          <div className="row flex-center flex-wrap">
            <div className="grid-6 bg-black-dark seguros-card">
              <div>
                <div className="flex-space flex-wrap seguros-title">
                  <h3 className="uppercase bold color-gray">Prata</h3>
                  <div>
                    <h3 className="bold color-white">R$ 199</h3>
                    <blockquote className="p3 color-gray text-right">
                      mensal
                    </blockquote>
                  </div>
                </div>

                <ul className="seguros-beneficios">
                  <li className="p1 color-white mt-3">Duas trocas por ano</li>
                  <li className="p1 color-white mt-3">Assistência técnica</li>
                  <li className="p1 color-white mt-3">Suporte 08h às 18h</li>
                  <li className="p1 color-white mt-3">Cobertura estadual</li>
                  <a href="" className="btn-2 mt-4">
                    INSCREVA-SE
                  </a>
                </ul>
              </div>
            </div>

            <div className="grid-6 bg-black-dark seguros-card">
              <div>
                <div className="flex-space flex-wrap seguros-title">
                  <h3 className="uppercase bold color-primary">Ouro</h3>
                  <div>
                    <h3 className="bold color-white">R$ 299</h3>
                    <blockquote className="p3 color-gray text-right">
                      mensal
                    </blockquote>
                  </div>
                </div>

                <ul className="seguros-beneficios">
                  <li className="p1 color-white mt-3">Cinco trocas por ano</li>
                  <li className="p1 color-white mt-3">Assistência especial</li>
                  <li className="p1 color-white mt-3">Suporte 24h</li>
                  <li className="p1 color-white mt-3">Cobertura nacional</li>
                  <li className="p1 color-white mt-3">Desconto em parceiros</li>
                  <li className="p1 color-white mt-3">
                    Acesso ao Clube Bikcraft
                  </li>
                  <a href="" className="btn mt-4">
                    INSCREVA-SE
                  </a>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section className="bg-black-dark">
        <div className="container">
          <h1 className="color-white bold mb-8">
            nossas vantagens<span>.</span>
          </h1>
          <div className="row flex-start-row flex-wrap">
            <div className="grid-4">
              <img src={icon_eletrica} className="icon" />
              <h5 className="color-white bold mb-1">Reparo Elétrico</h5>
              <p className="color-gray">
                Garantimos o reparo completo do seu motor em caso de falhas.
                Sabemos que falhas são raras, mas estamos aqui para caso ocorra.
              </p>
            </div>
            <div className="grid-4">
              <img src={icon_carbono} className="icon" />
              <h5 className="color-white bold mb-1">Material</h5>
              <p className="color-gray">
                Nossos quadros são feitos para durar para sempre. Mas caso algo
                ocorra, ficamos felizes em reparar.
              </p>
            </div>
            <div className="grid-4">
              <img src={icon_sustentavel} className="icon" />
              <h5 className="color-white bold mb-1">Sustentável</h5>
              <p className="color-gray">
                Trabalhamos com a filosofia de desperdício zero. Qualquer parte
                defeituosa é reciclada e reutilizada em outro projeto.
              </p>
            </div>
          </div>
          <div className="row flex-start-row flex-wrap">
            <div className="grid-4">
              <img src={icon_rastreador} className="icon" />
              <h5 className="color-white bold mb-1">Recuperação</h5>
              <p className="color-gray">
                A sua Bikcraft ficará pronta para uso no mesmo dia, caso você
                traga ela para ser reparada em uma das filiais.
              </p>
            </div>
            <div className="grid-4">
              <img src={icon_seguranca} className="icon" />
              <h5 className="color-white bold mb-1">Segurança</h5>
              <p className="color-gray">
                A sua Bikcraft ficará pronta para uso no mesmo dia, caso você
                traga ela para ser reparada em uma das filiais.
              </p>
            </div>
            <div className="grid-4">
              <img src={icon_velocidade} className="icon" />
              <h5 className="color-white bold mb-1">Rapidez</h5>
              <p className="color-gray">
                A sua Bikcraft ficará pronta para uso no mesmo dia, caso você
                traga ela para ser reparada em uma das filiais.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <h1 className="color-black bold">
          perguntas frequentes<span>.</span>
        </h1>

        <div className="row mt-7 accordion-container">
          {items.map((item, index) => (
            <AccordionItem
              key={index}
              title={item.title}
              content={item.content}
              isActive={index === activeIndex}
              onClick={() => handleItemClick(index)}
            />
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Seguros;
