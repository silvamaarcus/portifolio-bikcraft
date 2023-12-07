//Componentes
import Header from "../Header";
import Footer from "../Footer";

// Icons
import icon_facebook_p from "../../svg/icon-facebook-p.svg";
import icon_instagram_p from "../../svg/icon-instagram-p.svg";
import icon_youtube_p from "../../svg/icon-youtube-p.svg";

// Imagens
import img_rj from "../../img/img-seguros-rio.png";
import img_sp from "../../img/img-seguros-sp.png";

const Contato = () => {
  return (
    <>
      <Header />

      <section className="bg-black-dark-soft shaddow-white">
        <div className="container p-0">
          <h5 className="color-gray uppercase mt-8">
            Respostas em até 24h
          </h5>
          <h1 className="color-white bold mb-8">
            nosso contato<span>.</span>
          </h1>
          <div className="row table-contact">
            <div className="bg-black-dark p-7">
              <p className="bold color-white">Loja Online</p>
              <div className="mt-7 ml-4">
                <p className="relative icon-local">Rua Ali Perto, 35</p>
                <p>Rio de Janeiro - RJ</p>
                <p>Brasil - Terra - Vita Láctea</p>
              </div>
              <div className="mt-4 ml-4">
                <p className="relative icon-email">vendas@bikcraft.com</p>
                <p>assistencia@bikcraft.com</p>
              </div>
              <div className="mt-4 ml-4">
                <p className="relative icon-telefone">+55 21 9999-9999</p>
              </div>
              <div className="flex-start-row mt-4">
                <a href="">
                  <img src={icon_instagram_p} className="pr-4" />
                </a>
                <a href="">
                  <img src={icon_facebook_p} className="pr-4" />
                </a>
                <a href="">
                  <img src={icon_youtube_p} className="pr-4" />
                </a>
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

      <section className="container">
        <h1 className="bold color-black">
          lojas locais<span>.</span>
        </h1>

        <div className="row">
          <div className="grid-6">
            <img src={img_rj} alt="Rio de Janeiro" />
            <h4 className="color-black bold relative ml-2 mt-4 local">
              Rio de Janeiro
            </h4>
            <div className="flex ml-4 my-4 flex-wrap">
              <div className="bl-black pl-1 mr-6">
                <p>Rua Ali Perto, 25</p>
                <p>Rio de Janeiro - RJ</p>
              </div>
              <div className="bl-black pl-1">
                <p>rj@bikcraft.com</p>
                <p>21 9999-9999</p>
              </div>
            </div>
            <h6 className="bold color-black ml-2 relative clock">
              08-18h de seg à dom
            </h6>
          </div>

          <div className="grid-6">
            <img src={img_sp} alt="São Paulo" />
            <h4 className="color-black bold relative ml-2 mt-4 local">
              São Paulo
            </h4>
            <div className="flex ml-4 my-4 flex-wrap">
              <div className="bl-black pl-1 mr-6">
                <p>Rua Ali Perto, 25</p>
                <p>São Paulo - SP</p>
              </div>
              <div className="bl-black pl-1">
                <p>sp@bikcraft.com</p>
                <p>11 9999-9999</p>
              </div>
            </div>
            <h6 className="bold color-black ml-3 relative clock">
              08-18h de seg à dom
            </h6>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};
export default Contato;
