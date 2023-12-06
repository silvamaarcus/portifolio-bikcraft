// Imagens
import img_hero from "../../../img/img-hero.png";

const Hero = () => {
  return (
    <>
      <section className="bg-black-dark shaddow-white">
        <main className="container p-0">
          <div className="row flex-center hero">
            <div className="grid-6 p-0">
              <h1 className="color-white bold">
                Bicicletas feitas sob medida<span>.</span>
              </h1>
              <p className="color-gray mt-4">
                Bicicletas elétricas de alta precisão e qualidade, feitas sob
                medida para o cliente. Explore o mundo na sua velocidade com a
                Bikcraft.
              </p>
              <a href="" className="btn uppercase mt-3">
                Selecione a sua
              </a>
            </div>
            <div className="grid-6 p-0 mb-0 img-hero">
              <img src={img_hero} alt="Bike" />
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Hero;
