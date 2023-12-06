// Imagens
import logo_parceiro_1 from "../../../img/parceiro-caravan.png";
import logo_parceiro_2 from "../../../img/parceiro-ranek.png";
import logo_parceiro_3 from "../../../img/parceiro-handel.png";
import logo_parceiro_4 from "../../../img/parceiro-dogs.png";
import logo_parceiro_5 from "../../../img/parceiro-lescone.png";
import logo_parceiro_6 from "../../../img/parceiro-flexblog.png";
import logo_parceiro_7 from "../../../img/parceiro-wildbeast.png";
import logo_parceiro_8 from "../../../img/parceiro-surfbot.png";

const Parceiros = () => {
  return (
    <>
      <section className="container parceiros">
        <h1 className="color-black bold mb-8">
          nossos parceiros<span>.</span>
        </h1>

        <div className="row flex-start-row bb-white parceiros-grid fix-line">
          <div className="grid-3 flex-center">
            <img src={logo_parceiro_1} alt="Caravan" />
          </div>
          <div className="grid-3 flex-center">
            <img src={logo_parceiro_2} alt="Ranek" />
          </div>
          <div className="grid-3 flex-center">
            <img src={logo_parceiro_3} alt="Handel" />
          </div>
          <div className="grid-3 flex-center">
            <img src={logo_parceiro_4} alt="Dogs" />
          </div>
        </div>

        <div className="row flex-start-row parceiros-grid fix-line">
          <div className="grid-3 flex-center">
            <img src={logo_parceiro_5} alt="LeScone" />
          </div>
          <div className="grid-3 flex-center">
            <img src={logo_parceiro_6} alt="Flexblog" />
          </div>
          <div className="grid-3 flex-center">
            <img src={logo_parceiro_7} alt="wildbeast" />
          </div>
          <div className="grid-3 flex-center">
            <img src={logo_parceiro_8} alt="Surfbot" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Parceiros;
