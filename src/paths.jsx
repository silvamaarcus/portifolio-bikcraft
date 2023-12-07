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

const Paths = () => {
  return (
    <>
      {/* Envolvendo estruturas com BrowserRouter */}
      <BrowserRouter>
        {/* Estabelecendo rotas das páginas. */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bicicletas" element={<Bicicletas />} />
          <Route path="/seguros" element={<Seguros />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/termos" element={<Termos />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Paths;
