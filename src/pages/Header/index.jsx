// Imagens
import logo from "../../svg/bikcraft.svg";

//Link
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <nav className="flex-space flex-wrap">
          <Link to="/">
            <img src={logo} alt="bikcraft" />
          </Link>
          <ul className="menu flex-start-row flex-wrap">
            <li>
              <Link to="/bicicletas">Bicicletas</Link>
            </li>
            <li>
              <Link to="/seguros">Seguros</Link>
            </li>
            <li>
              <Link to="/contato">Contato</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
