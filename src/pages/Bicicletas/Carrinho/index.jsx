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

// Hooks
import React, { useState, useEffect } from "react";
// Link
import { Link } from "react-router-dom";
// Axios
import axios from "axios";

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

  // -----------//---------------

  // Validação de CPF:

  const [cpf, setCpf] = useState("");
  const [isValidCpf, setIsValidCpf] = useState(true);

  // Função para zerar e atualizar o CPF digitado...
  const handleCpfChange = (event) => {
    const newCpf = event.target.value;
    setCpf(newCpf);
    setIsValidCpf(true); // Resetar o estado de validação ao alterar o CPF
    validateCpf(newCpf);
  };

  // Função para validar o CPF digitado...
  const validateCpf = (inputCpf) => {
    // Exemplo de lógica simples de validação
    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    const isValidFormat = cpfRegex.test(inputCpf);

    // Verificar se o CPF tem apenas números e se possui mais de 11 dígitos
    const isValidLength = /^\d{11}$/.test(inputCpf);

    setIsValidCpf(isValidFormat || isValidLength);
  };

  // -----------//---------------

  // Validação de Email:

  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  // Função para validar o email digitado...
  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    setIsValidEmail(true); // Resetar o estado de validação ao alterar o Email
    validateEmail(newEmail);
  };

  const validateEmail = (inputEmail) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmailFormat = emailRegex.test(inputEmail);

    setIsValidEmail(isValidEmailFormat);
  };

  // -----------//---------------

  // Busca e validação de CEP
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState({});

  useEffect(() => {
    const fetchAddress = async () => {
      // Validação do CEP para conter 8 digitos.
      if (cep.length === 8) {
        // Requisição do CEP...
        try {
          const response = await axios.get(
            `https://viacep.com.br/ws/${cep}/json/`
          );
          setAddress(response.data); // Armazenando resultados (data) na variável (response).
        } catch (error) {
          console.error("Erro na busca do CEP", error);
        }
      }
    };
    // O fetchAddress() é chamada automaticamente sempre que o estado do cep é alterado.
    fetchAddress();
  }, [cep]);

  const handleCepChange = (event) => {
    // Remover caracteres não numéricos do CEP
    const cleanedCep = event.target.value.replace(/\D/g, "");

    // Limitar o CEP a 8 dígitos
    if (cleanedCep.length <= 8) {
      setCep(cleanedCep);
    }
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
                {/* NOME E SOBRENOME */}
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
                {/* CPF */}
                <div className="my-3">
                  <label for="cpf">
                    <p className="bold color-black">CPF</p>
                  </label>
                  <input
                    type="text"
                    name="cpf"
                    id="cpf"
                    placeholder="000.000.000-00"
                    value={cpf}
                    onChange={handleCpfChange}
                  />
                  {!isValidCpf && (
                    <p className="error-message mt-1 p4 color-red ">
                      Tente novamente...
                    </p>
                  )}
                </div>
                {/* EMAIL */}
                <div className="my-3">
                  <label for="email">
                    <p className="bold color-black">Email</p>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="contato@email.com"
                    value={email}
                    onChange={handleEmailChange}
                  />
                  {!isValidEmail && (
                    <p className="error-message mt-1 p4 color-red ">
                      Tente novamente...
                    </p>
                  )}
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
                      type="text"
                      name="cep"
                      id="cep"
                      placeholder="00000-000"
                      value={cep}
                      onChange={handleCepChange}
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
                  {address && (
                    <div className="w-50 form-mobile">
                      <label for="logradouro">
                        <p className="bold color-black">Logradouro</p>
                      </label>
                      <input
                        type="text"
                        name="logradouro"
                        id="logradouro"
                        placeholder="Rua, avenida..."
                        value={address.logradouro || ""}
                      />
                    </div>
                  )}
                  {address && (
                    <div className="ml-3 w-50 form-mobile">
                      <label for="bairro">
                        <p className="color-black bold">Bairro</p>
                      </label>
                      <input
                        type="text"
                        name="bairro"
                        id="bairro"
                        value={address.bairro || ""}
                      />
                    </div>
                  )}
                </div>

                <div className="flex form-wrap mt-3">
                  {address && (
                    <div className="w-50 form-mobile">
                      <label for="cidade">
                        <p className="bold color-black">Cidade</p>
                      </label>
                      <input
                        type="text"
                        name="cidade"
                        id="cidade"
                        value={address.localidade || ""}
                      />
                    </div>
                  )}
                  {address && (
                    <div className="ml-3 w-50 form-mobile">
                      <label for="estado">
                        <p className="color-black bold">Estado</p>
                      </label>
                      <input
                        type="text"
                        name="estado"
                        id="estado"
                        value={address.uf || ""}
                      />
                    </div>
                  )}
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
