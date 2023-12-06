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
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Paths;
