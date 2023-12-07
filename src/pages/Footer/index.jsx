// Imagens
import logo from "../../svg/bikcraft.svg";

// Icons
import icon_instagram from "../../svg/icon-instagram.svg";
import icon_facebook from "../../svg/icon-facebook.svg";
import icon_youtube from "../../svg/icon-youtube.svg";

//Link
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <section className="bg-black-dark">
        <footer className="container">
          <div className="row">
            <div className="grid-2">
              <Link to="/">
                <img src={logo} className="logo" alt="Bikcraft" />
              </Link>
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
                <Link to="">
                  <img src={icon_instagram} className="pr-4" />
                </Link>
                <Link to="">
                  <img src={icon_facebook} className="pr-4" />
                </Link>
                <Link to="">
                  <img src={icon_youtube} className="pr-4" />
                </Link>
              </div>
            </div>

            <div className="grid-1 disappear"></div>

            <div className="grid-4">
              <h5 className="color-white uppercase">Informações</h5>
              <ul className="mt-1 footer-menu">
                <li>
                  <Link to="/bicicletas" className="color-gray">
                    Bicicletas
                  </Link>
                </li>
                <li className="py-1">
                  <Link to="/seguros" className="color-gray">
                    Seguros
                  </Link>
                </li>
                <li className="py-1">
                  <Link to="/contato" className="color-gray">
                    Contato
                  </Link>
                </li>
                <li>
                  <Link to="/termos" className="color-gray">
                    Termos e Condições
                  </Link>
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
