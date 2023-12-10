//Componentes
import Header from "../../Header";
import Footer from "../../Footer";

// Imagens
import bike_nimbus_landscape from "../../../img/bike-nimbus-stark-landscape.png";
import bike_magic_landscape from "../../../img/bike-magic-might-landscape.png";
import bike_nebula_landscape from "../../../img/bike-nebula-cosmic-landscape.png";

// Icons
import icon_eletrica from "../../../svg/icon-eletrica.svg";
import icon_carbono from "../../../svg/icon-carbono.svg";
import icon_velocidade from "../../../svg/icon-velocidade.svg";
import icon_rastreador from "../../../svg/icon-rastreador.svg";

import React, { useState } from "react";
import { Link } from "react-router-dom";

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
      <section className="bg-black-dark-soft shaddow-white mb-9">
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
                {/* Nimbus */}
                <div
                  className={`choice-bike-container flex-column ${
                    escolhaBike === "nimbus" ? "active" : ""
                  }`}
                >
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

                  <div className="bike-info flex-start-row pb-2">
                    <div className="mx-2 w-50">
                      <div className="flex-start-row">
                        <img src={icon_eletrica} className="icon" />
                        <h6 className="color-black ml-1 h7 bold">
                          Motor Elétrico
                        </h6>
                      </div>
                      <div className="flex-start-row mt-1">
                        <img src={icon_carbono} className="icon" />
                        <h6 className="color-black ml-1 h7 bold">
                          Fibra de Carbono
                        </h6>
                      </div>
                      <div className="flex-start-row mt-1">
                        <img src={icon_velocidade} className="icon" />
                        <h6 className="color-black ml-1 h7 bold">40 km/h</h6>
                      </div>
                      <div className="flex-start-row mt-1">
                        <img src={icon_rastreador} className="icon" />
                        <h6 className="color-black ml-1 h7 bold">Rastreador</h6>
                      </div>
                    </div>

                    <div className="mx-2 w-50">
                      <img src={bike_nimbus_landscape} alt="Nimbus Stark" />
                    </div>
                  </div>
                </div>
                {/* Magic */}
                <div
                  className={`choice-bike-container flex-column ${
                    escolhaBike === "magic" ? "active" : ""
                  }`}
                >
                  <label
                    className={`choice-bike ${
                      escolhaBike === "magic" ? "selected" : ""
                    }`}
                    htmlFor="magic"
                  >
                    <input
                      type="radio"
                      id="magic"
                      name="escolhaBike"
                      value="magic"
                      checked={escolhaBike === "magic"}
                      onChange={handleEscolhaBike}
                    />
                    <p className="ml-3">Magic Might</p>
                  </label>

                  <div className="bike-info flex-start-row pb-2">
                    <div className="mx-2 w-50">
                      <div className="flex-start-row">
                        <img src={icon_eletrica} className="icon" />
                        <h6 className="color-black ml-1 h7 bold">
                          Motor Elétrico
                        </h6>
                      </div>
                      <div className="flex-start-row mt-1">
                        <img src={icon_carbono} className="icon" />
                        <h6 className="color-black ml-1 h7 bold">
                          Fibra de Carbono
                        </h6>
                      </div>
                      <div className="flex-start-row mt-1">
                        <img src={icon_velocidade} className="icon" />
                        <h6 className="color-black ml-1 h7 bold">40 km/h</h6>
                      </div>
                      <div className="flex-start-row mt-1">
                        <img src={icon_rastreador} className="icon" />
                        <h6 className="color-black ml-1 h7 bold">Rastreador</h6>
                      </div>
                    </div>

                    <div className="mx-2 w-50">
                      <img src={bike_magic_landscape} alt="Nimbus Stark" />
                    </div>
                  </div>
                </div>
                {/* Nebula */}
                <div
                  className={`choice-bike-container flex-column ${
                    escolhaBike === "nebula" ? "active" : ""
                  }`}
                >
                  <label
                    className={`choice-bike ${
                      escolhaBike === "nebula" ? "selected" : ""
                    }`}
                    htmlFor="nebula"
                  >
                    <input
                      type="radio"
                      id="nebula"
                      name="escolhaBike"
                      value="nebula"
                      checked={escolhaBike === "nebula"}
                      onChange={handleEscolhaBike}
                    />
                    <p className="ml-3">Nebula Cosmic</p>
                  </label>

                  <div className="bike-info flex-start-row pb-2">
                    <div className="mx-2 w-50">
                      <div className="flex-start-row">
                        <img src={icon_eletrica} className="icon" />
                        <h6 className="color-black ml-1 h7 bold">
                          Motor Elétrico
                        </h6>
                      </div>
                      <div className="flex-start-row mt-1">
                        <img src={icon_carbono} className="icon" />
                        <h6 className="color-black ml-1 h7 bold">
                          Fibra de Carbono
                        </h6>
                      </div>
                      <div className="flex-start-row mt-1">
                        <img src={icon_velocidade} className="icon" />
                        <h6 className="color-black ml-1 h7 bold">40 km/h</h6>
                      </div>
                      <div className="flex-start-row mt-1">
                        <img src={icon_rastreador} className="icon" />
                        <h6 className="color-black ml-1 h7 bold">Rastreador</h6>
                      </div>
                    </div>

                    <div className="mx-2 w-50">
                      <img src={bike_nebula_landscape} alt="Nimbus Stark" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white-light personal-data">
              <h6 className="h7 uppercase bold color-black relative ml-2">
                Dados pessoais
              </h6>
              <form className="mt-3 p-0">
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
                    <label for="sobrenome">
                      <p className="color-black bold">Sobrenome</p>
                    </label>
                    <input
                      type="text"
                      name="sobrenome"
                      id="sobrenome"
                      placeholder="Seu sobrenome"
                    />
                  </div>
                </div>

                <div className="my-3">
                  <label for="cpf">
                    <p className="bold color-black">CPF</p>
                  </label>
                  <input
                    type="number"
                    name="cpf"
                    id="cpf"
                    placeholder="000.000.000-00"
                  />
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
              </form>

              <h6 className="h7 uppercase bold color-black relative ml-2">
                Entrega
              </h6>
              <form className="mt-3 p-0">
                <div className="flex form-wrap mt-3">
                  <div className="w-50 form-mobile">
                    <label for="cep">
                      <p className="bold color-black">CEP</p>
                    </label>
                    <input
                      type="number"
                      name="cep"
                      id="cep"
                      placeholder="00000-000"
                    />
                  </div>
                  <div className="ml-3 w-50 form-mobile">
                    <label for="numero">
                      <p className="color-black bold">Número</p>
                    </label>
                    <input type="number" name="numero" id="numero" />
                  </div>
                </div>

                <div className="flex form-wrap mt-3">
                  <div className="w-50 form-mobile">
                    <label for="logradouro">
                      <p className="bold color-black">Logradouro</p>
                    </label>
                    <input
                      type="text"
                      name="logradouro"
                      id="logradouro"
                      placeholder="Rua, avenida..."
                    />
                  </div>
                  <div className="ml-3 w-50 form-mobile">
                    <label for="bairro">
                      <p className="color-black bold">Bairro</p>
                    </label>
                    <input type="text" name="bairro" id="bairro" />
                  </div>
                </div>

                <div className="flex form-wrap mt-3">
                  <div className="w-50 form-mobile">
                    <label for="cidade">
                      <p className="bold color-black">Cidade</p>
                    </label>
                    <input type="text" name="cidade" id="cidade" />
                  </div>
                  <div className="ml-3 w-50 form-mobile">
                    <label for="estado">
                      <p className="color-black bold">Estado</p>
                    </label>
                    <input type="text" name="estado" id="estado" />
                  </div>
                </div>

                <Link to="" className="btn uppercase mt-4">
                  Solicitar orçamento
                </Link>
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
