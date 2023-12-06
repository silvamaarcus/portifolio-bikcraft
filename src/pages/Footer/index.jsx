// Imagens
import logo from "../../svg/bikcraft.svg";

// Icons
import icon_instagram from "../../svg/icon-instagram.svg";
import icon_facebook from "../../svg/icon-facebook.svg";
import icon_youtube from "../../svg/icon-youtube.svg";

const Footer = () => {
  return (
    <>
      <section className="bg-black-dark">
        <footer className="container">
          <div className="row">
            <div className="grid-2">
              <img src={logo} className="logo" alt="Bikcraft" />
            </div>

            <div className="grid-1 disappear"></div>

            <div className="grid-4">
              <div className="bb-black-soft pb-3">
                <h5 className="color-white uppercase">Contato</h5>
                <p className="color-gray my-1">+55 21 9999-9999</p>
                <p className="color-gray">contato@bikcraft.com</p>
              </div>

              <div className="bb-black-soft py-3">
                <p className="color-gray my-1">Rua Ali Perto, 42 - Botafogo</p>
                <p className="color-gray">Rio de Janeiro - RJ</p>
              </div>

              <div className="flex-start-row mt-3">
                <a href="">
                  <img src={icon_instagram} className="pr-4" />
                </a>
                <a href="">
                  <img src={icon_facebook} className="pr-4" />
                </a>
                <a href="">
                  <img src={icon_youtube} className="pr-4" />
                </a>
              </div>
            </div>

            <div className="grid-1 disappear"></div>

            <div className="grid-4">
              <h5 className="color-white uppercase">Informações</h5>
              <ul className="mt-1 footer-menu">
                <li>
                  <a href="" className="color-gray">
                    Bicicletas
                  </a>
                </li>
                <li className="py-1">
                  <a href="" className="color-gray">
                    Seguros
                  </a>
                </li>
                <li className="py-1">
                  <a href="" className="color-gray">
                    Contato
                  </a>
                </li>
                <li>
                  <a href="" className="color-gray">
                    Termos e Condições
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
};

export default Footer;
