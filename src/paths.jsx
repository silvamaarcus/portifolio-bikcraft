import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  BrowserRouter,
} from "react-router-dom";

//Pages
import Home from "./pages/Home";
import Bicicletas from "./pages/Bicicletas";
import Seguros from "./pages/Seguros";
import Contato from "./pages/Contato";
import Termos from "./pages/Termos";

// Páginas internas
import Nimbus from "./pages/Bicicletas/Interna";
import Magic from "./pages/Bicicletas/Interna/Magic";
import Nebula from "./pages/Bicicletas/Interna/Nebula";
// Carrinho
import Carrinho from "./pages/Bicicletas/Carrinho";

const Paths = () => {
  return (
    <>
      {/* Envolvendo estruturas com BrowserRouter */}
      <BrowserRouter>
        {/* Estabelecendo rotas das páginas. */}
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/bicicletas" element={<Bicicletas />} />
          <Route path="/bicicletas/nimbus" element={<Nimbus />} />
          <Route path="/bicicletas/magic" element={<Magic />} />
          <Route path="/bicicletas/nebula" element={<Nebula />} />

          <Route path="/carrinho" element={<Carrinho />} />

          <Route path="/seguros" element={<Seguros />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/termos" element={<Termos />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Paths;
