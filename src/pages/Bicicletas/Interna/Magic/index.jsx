// Componentes
import Header from "../../../Header";
import Footer from "../../../Footer";

// Imagens
import bike_nimbus_landscape from "../../../../img/bike-nimbus-stark-landscape.png";
import bike_magic_landscape from "../../../../img/bike-magic-might-landscape.png";
import bike_nebula_landscape from "../../../../img/bike-nebula-cosmic-landscape.png";

import img_seguro from "../../../../img/img-seguros.png";

// Icons
import icon_eletrica from "../../../../svg/icon-eletrica.svg";
import icon_carbono from "../../../../svg/icon-carbono.svg";
import icon_velocidade from "../../../../svg/icon-velocidade.svg";
import icon_rastreador from "../../../../svg/icon-rastreador.svg";
import icon_entrega from "../../../../svg/icon-entrega.svg";
import icon_estoque from "../../../../svg/icon-estoque.svg";

// Link
import { Link } from "react-router-dom";

const Nebula = () => {
  return (
    <>
      <Header />

      <section className="bg-black-dark-soft">
        <div className="container">
          <div>
            <h5 className="color-gray">R$ 2499</h5>
            <h1 className="color-white bold">
              Magic Might<span>.</span>
            </h1>
          </div>

          <section className="row">
            <section className="grid-6">
              <div>
                <img src={bike_magic_landscape} />
              </div>
              <div className="flex-start-row mt-2">
                <div className="w-50">
                <Link to="/bicicletas/nebula">
                    <img src={bike_nebula_landscape} />
                  </Link>
                </div>

                <div className="w-50 ml-2">
                  <Link to="/bicicletas/nimbus">
                    <img src={bike_nimbus_landscape} />
                  </Link>
                </div>
              </div>
            </section>

            <section className="grid-6">
              <div>
                <p className="p1 color-gray">
                  A Magic Might é a melhor Bikcraft já criada pela nossa
                  equipe. Ela vem equipada com os melhores acessórios, o que
                  garante maior velocidade.
                </p>
                <div className="flex-start-row mt-4 bike-action">
                  <a href="" className="btn uppercase">
                    Comprar agora
                  </a>
                  <div className="ml-2 w-50 pills">
                    <div className="pill flex-start-row">
                      <img src={icon_entrega} className="icon" />
                      <p className="p1 ml-1">entrega em 5 dias</p>
                    </div>
                    <div className="pill flex-start-row">
                      <img src={icon_estoque} className="icon" />
                      <p className="p1 ml-1">48 em estoque</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <h6 className="h7 uppercase color-white">Informações</h6>
                <div className="bike-internal-tech mt-2 bg-black-dark p-4">
                  <div>
                    <div>
                      <img src={icon_eletrica} className="icon" />
                      <h5 className="color-white bold mb-1">Motor Elétrico</h5>
                      <p className="color-gray">
                        Permite você viajar distâncias inimaginaveis com a sua
                        bike.
                      </p>
                    </div>
                    <div className="mt-4">
                      <img src={icon_rastreador} className="icon" />
                      <h5 className="color-white bold mb-1">Rastreador</h5>
                      <p className="color-gray">
                        Rastreador e sistema anti-furto para garantir o seu
                        sossego.
                      </p>
                    </div>
                  </div>

                  <div>
                    <div>
                      <img src={icon_velocidade} className="icon" />
                      <h5 className="color-white bold mb-1">40 km/h</h5>
                      <p className="color-gray">
                        A mais rápida bicicleta elétrica disponível hoje no
                        mercado.
                      </p>
                    </div>
                    <div className="mt-4">
                      <img src={icon_carbono} className="icon" />
                      <h5 className="color-white bold mb-1">
                        Fibra de Carbono
                      </h5>
                      <p className="color-gray">
                        Maior proteção possível para a sua Bikcraft com fibra de
                        carbono.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <h6 className="h7 uppercase color-white">Ficha técnica</h6>
                <ul className="mt-3 p-4 bg-black-dark bike-datasheet">
                  <li className="flex-space bb-black py-1">
                    <p className="color-gray">Peso</p>
                    <p className="color-gray">9 kg</p>
                  </li>
                  <li className="flex-space bb-black py-1">
                    <p className="color-gray">Altura</p>
                    <p className="color-gray">60 cm</p>
                  </li>
                  <li className="flex-space bb-black py-1">
                    <p className="color-gray">Largura</p>
                    <p className="color-gray">120 cm</p>
                  </li>
                  <li className="flex-space bb-black py-1">
                    <p className="color-gray">Profundidade</p>
                    <p className="color-gray">10 cm</p>
                  </li>
                  <li className="flex-space bb-black py-1">
                    <p className="color-gray">Marchas</p>
                    <p className="color-gray">16</p>
                  </li>
                  <li className="flex-space py-1">
                    <p className="color-gray">Roda</p>
                    <p className="color-gray">29</p>
                  </li>
                </ul>
              </div>
            </section>
          </section>
        </div>
      </section>

      <section className="container">
        <h1 className="color-black bold">
          escolha a sua<span>.</span>
        </h1>
        <div className="row mt-5">
          <div className="grid-6 p-0 card-bike">
            <Link to="/bicicletas/nebula">
              <img src={bike_nebula_landscape} />
            </Link>
            <div className="mt-2 ml-3">
              <h4 className="color-black bold relative">Nebula Cosmic</h4>
              <p>R$ 3999</p>
            </div>
          </div>
          <div className="grid-6 p-0 card-bike">
            <Link to="/bicicletas/nimbus">
              <img src={bike_nimbus_landscape} />
            </Link>
            <div className="mt-2 ml-3">
              <h4 className="color-black bold relative">Nimbus Stark</h4>
              <p>R$ 4999</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black-dark-soft shaddow-white-full-bw">
        <div className="container p-0 seguros-mobile">
          <div className="row flex-center flex-wrap">
            <div className="grid-6">
              <img src={img_seguro} />
            </div>
            <div className="grid-6">
              <h2 className="color-white bold">
                Pedale mais tranquilo com o nosso <span>seguro.</span>
              </h2>
              <p className="mt-4">
                Inscreva-se em um dos planos do nosso seguro Bikcraft e
                aproveite diversos benefícios.
              </p>
              <Link to="/seguros" className="btn uppercase mt-2">
                Conheça mais
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Nebula;
