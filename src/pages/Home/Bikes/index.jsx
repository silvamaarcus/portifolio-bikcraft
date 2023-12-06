// Imagens
import bike_magic from "../../../img/bike-magic-might.png";
import bike_nimbus from "../../../img/bike-nimbus-stark.png";
import bike_nebula from "../../../img/bike-nebula-cosmic.png";

const Bikes = () => {
  return (
    <>
      <section className="container bikes">
        <h1 className="color-black bold">
          escolha a sua<span>.</span>
        </h1>

        <div className="row mt-5">
          <div className="grid-4 p-0 card-bike">
            <img src={bike_magic} alt="Magic Might" />
            <div className="mt-2 ml-3">
              <h4 className="color-black bold relative">Magic Might</h4>
              <p>R$ 2499</p>
            </div>
          </div>

          <div className="grid-4 p-0 card-bike">
            <img src={bike_nimbus} alt="Nimbus Stark" />
            <div className="mt-2 ml-3">
              <h4 className="color-black bold relative">Nimbus Stark</h4>
              <p>R$ 2499</p>
            </div>
          </div>

          <div className="grid-4 p-0 card-bike">
            <img src={bike_nebula} alt="Nebula Cosmic" />
            <div className="mt-2 ml-3">
              <h4 className="color-black bold relative">Nebula Cosmic</h4>
              <p>R$ 2499</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Bikes;
