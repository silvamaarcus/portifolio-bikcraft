//Componentes
import Header from "../../Header";
import Footer from "../../Footer";

import React, { useState } from "react";

const Carrinho = () => {
  // Estado para armazenar o valor selecionado: Bikcraft ou Seguro
  const [escolha, setEscolha] = useState("");
  // Estado para armazenar o valor selecionado: Tipo de Bike
  const [escolhaBike, setEscolhaBike] = useState("");

  const handleEscolha = (event) => {
    setEscolha(event.target.value);
  };

  const handleEscolhaBike = (event) => {
    setEscolhaBike(event.target.value);
  };

  return (
    <>
      <Header />
      <section className="bg-black-dark-soft shaddow-white">
        <div className="container p-0">
          <h5 className="color-gray uppercase mt-8">Cotações no seu email</h5>
          <h1 className="color-white bold mb-8">
            solicite um orçamento<span>.</span>
          </h1>
          <div className="row table-contact">
            <div className="bg-black-dark choice-product">
              <div className="mb-3">
                <h6 className="h7 uppercase bold color-gray relative ml-2">
                  Bikcraft ou Seguro?
                </h6>
                <div className="flex-start-row my-3 prev-choice">
                  <label
                    className={`flex-start-row choice w-50 ${
                      escolha === "bikcraft" ? "selected" : ""
                    }`}
                    htmlFor="bikcraft"
                  >
                    <input
                      type="radio"
                      id="bikcraft"
                      name="escolha"
                      value="bikcraft"
                      checked={escolha === "bikcraft"}
                      onChange={handleEscolha}
                    />
                    <p className="p1 ml-1">Bikcraft</p>
                  </label>

                  <label
                    className={`flex-start-row choice w-50 ml-4 ${
                      escolha === "seguro" ? "selected" : ""
                    }`}
                    htmlFor="seguro"
                  >
                    <input
                      type="radio"
                      id="seguro"
                      name="escolha"
                      value="seguro"
                      checked={escolha === "seguro"}
                      onChange={handleEscolha}
                    />
                    <p className="p1 ml-1">Seguro</p>
                  </label>
                </div>
              </div>

              <div>
                <h6 className="h7 uppercase bold color-gray relative ml-2">
                  Escolha a sua:
                </h6>

                <div className={`choice-bike-container ${escolhaBike === "nimbus" ? "active" : ""}`}>
                  <label
                    className={`choice-bike ${
                      escolhaBike === "nimbus" ? "selected" : ""
                    }`}
                    htmlFor="nimbus"
                  >
                    <input
                      type="radio"
                      id="nimbus"
                      name="escolhaBike"
                      value="nimbus"
                      checked={escolhaBike === "nimbus"}
                      onChange={handleEscolhaBike}
                    />
                    <p className="ml-3">Nimbus Stark</p>
                  </label>
                </div>
              </div>
            </div>

            <div className="bg-white-light">
              <form>
                <div className="flex form-wrap">
                  <div className="w-50 form-mobile">
                    <label for="nome">
                      <p className="bold color-black">Nome</p>
                    </label>
                    <input
                      type="text"
                      name="nome"
                      id="nome"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div className="ml-3 w-50 form-mobile">
                    <label for="tel">
                      <p className="color-black bold">Telefone</p>
                    </label>
                    <input
                      type="number"
                      name="tel"
                      id="tel"
                      placeholder="(21) 9999-9999"
                    />
                  </div>
                </div>

                <div className="my-3">
                  <label for="email">
                    <p className="bold color-black">Email</p>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="contato@email.com"
                  />
                </div>

                <div className="my-3">
                  <label for="messenger">
                    <p className="color-black bold">Mensagem</p>
                  </label>
                  <textarea
                    name="messenger"
                    id="messenger"
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>

                <a href="" className="btn uppercase">
                  Enviar Mensagem
                </a>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};
export default Carrinho;
