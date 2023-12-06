// Imagens
import img_diferencial from "../../../img/img-diferencial.png";

// Icons
import icon_eletrica from "../../../svg/icon-eletrica.svg";
import icon_rastreador from "../../../svg/icon-rastreador.svg";

const Tecnologia = () => {
  return (
    <>
      <section className="bg-black-dark-soft shaddow-white-full">
        <div className="container tecnologia p-0">
          <div className="row flex-space">
            <div className="grid-6">
              <div>
                <p className="p1 color-gray uppercase">Tecnologia Avançada</p>
                <h1 className="color-white bold mt-3 fix-title">
                  você escolhe as suas cores e componentes<span>.</span>
                </h1>
                <p className="color-gray my-4">
                  Cada Bikcraft é única e possui a sua identidade. As medidas
                  serão exatas para o seu corpo e altura, garantindo maior
                  conforto e ergonomia na sua pedalada. Você pode também
                  personalizar completamente as suas cores.
                </p>
                <a href="" className="link uppercase">
                  Escolha um modelo
                </a>
              </div>

              <div className="flex-start-row mt-7 tecnologia-info">
                <div>
                  <img src={icon_eletrica} className="icon" />
                  <h5 className="color-white bold my-1">Motor Elétrico</h5>
                  <p className="color-gray">
                    Toda Bikcraft é equipada com um motor elétrico que possui
                    duração de até 120h. A bateria é recarregada com a sua
                    energia gasta ao pedalar.
                  </p>
                </div>

                <div>
                  <img src={icon_rastreador} className="icon" />
                  <h5 className="color-white bold my-1">Rastreador</h5>
                  <p className="color-gray">
                    Sabemos o quão preciosa é a sua Bikcraft, por isso
                    adicionamos rastreadores e sistemas anti-furto para garantir
                    o seu sossego.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid-6 p-0 disappear">
              <img src={img_diferencial} alt="Ferramentas" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tecnologia;
