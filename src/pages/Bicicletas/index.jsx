//Componentes
import Header from "../Header";
import Footer from "../Footer";

// Imagens
import bike_nimbus_landscape from "../../img/bike-nimbus-stark-landscape.png";
import bike_magic_landscape from "../../img/bike-magic-might-landscape.png";
import bike_nebula_landscape from "../../img/bike-nebula-cosmic-landscape.png";

// Icons
import icon_eletrica from "../../svg/icon-eletrica.svg";
import icon_carbono from "../../svg/icon-carbono.svg";
import icon_velocidade from "../../svg/icon-velocidade.svg";
import icon_rastreador from "../../svg/icon-rastreador.svg";

// Link
import { Link } from "react-router-dom";

const Bicicletas = () => {
  return (
    <>
      <Header />

      <section className="bg-black-dark-soft">
        <div className="container">
          <div>
            <p className="p1 color-gray uppercase">
              Escolha a melhor para você
            </p>
            <h1 className="color-white bold">
              nossas bicicletas<span>.</span>
            </h1>
          </div>
        </div>
      </section>

      <section className="container mt-8 mb-6 p-0">
        <div className="row flex-center flex-wrap">
          <div className="grid-6 bike-img relative">
            <img src={bike_nimbus_landscape} alt="Nimbus Stark" />
          </div>

          <div className="grid-6 pb-0 bike-info">
            <h4 className="color-black bold relative pt-3">Nimbus Stark</h4>
            <p className="color-black mt-3">
              A Nimbus Stark é a melhor Bikcraft já criada pela nossa equipe.
              Ela vem equipada com os melhores acessórios, o que garante maior
              velocidade.
            </p>
            <div className="mt-3">
              <div className="flex-start-row">
                <img src={icon_eletrica} className="icon" />
                <h6 className="color-black ml-1">Motor Elétrico</h6>
              </div>
              <div className="flex-start-row mt-2">
                <img src={icon_carbono} className="icon" />
                <h6 className="color-black ml-1">Fibra de Carbono</h6>
              </div>
              <div className="flex-start-row mt-2">
                <img src={icon_velocidade} className="icon" />
                <h6 className="color-black ml-1">40 km/h</h6>
              </div>
              <div className="flex-start-row mt-2">
                <img src={icon_rastreador} className="icon" />
                <h6 className="color-black ml-1">Rastreador</h6>
              </div>
            </div>
            <div className="flex-end-row btn-more">
              <Link to="/bicicletas/nimbus" className="btn uppercase">
                Mais sobre ➔
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container container-black mt-8 mb-6 p-0">
        <div className="row flex-center flex-wrap">
          <div className="grid-6 bike-img relative">
            <img src={bike_magic_landscape} alt="Magic Might" />
          </div>

          <div className="grid-6 pb-0 bike-info">
            <h4 className="color-white bold relative pt-3">Magic Might</h4>
            <p className="color-gray mt-3">
              A Magic Might é a melhor Bikcraft já criada pela nossa equipe. Ela
              vem equipada com os melhores acessórios, o que garante maior
              velocidade.
            </p>
            <div className="mt-3">
              <div className="flex-start-row">
                <img src={icon_eletrica} className="icon" />
                <h6 className="color-gray ml-1">Motor Elétrico</h6>
              </div>
              <div className="flex-start-row mt-2">
                <img src={icon_carbono} className="icon" />
                <h6 className="color-gray ml-1">Fibra de Carbono</h6>
              </div>
              <div className="flex-start-row mt-2">
                <img src={icon_velocidade} className="icon" />
                <h6 className="color-gray ml-1">40 km/h</h6>
              </div>
              <div className="flex-start-row mt-2">
                <img src={icon_rastreador} className="icon" />
                <h6 className="color-gray ml-1">Rastreador</h6>
              </div>
            </div>
            <div className="flex-end-row btn-more">
              <Link to="/bicicletas/magic" className="btn uppercase">
                Mais sobre ➔
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section class="container mt-8 mb-6 p-0">
        <div class="row flex-center flex-wrap">
          <div class="grid-6 bike-img relative">
            <img src={bike_nebula_landscape} alt="Nebula Cosmic" />
          </div>

          <div class="grid-6 pb-0 bike-info">
            <h4 class="color-black bold relative pt-3">Nebula Cosmic</h4>
            <p class="color-black mt-3">
              A Nebula Cosmic é a melhor Bikcraft já criada pela nossa equipe.
              Ela vem equipada com os melhores acessórios, o que garante maior
              velocidade.
            </p>
            <div class="mt-3">
              <div class="flex-start-row">
                <img src={icon_eletrica} class="icon" />
                <h6 class="color-black ml-1">Motor Elétrico</h6>
              </div>
              <div class="flex-start-row mt-2">
                <img src={icon_carbono} class="icon" />
                <h6 class="color-black ml-1">Fibra de Carbono</h6>
              </div>
              <div class="flex-start-row mt-2">
                <img src={icon_velocidade} class="icon" />
                <h6 class="color-black ml-1">40 km/h</h6>
              </div>
              <div class="flex-start-row mt-2">
                <img src={icon_rastreador} class="icon" />
                <h6 class="color-black ml-1">Rastreador</h6>
              </div>
            </div>
            <div class="flex-end-row btn-more">
              <Link to="/bicicletas/nebula" className="btn uppercase">
                Mais sobre ➔
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};
export default Bicicletas;
