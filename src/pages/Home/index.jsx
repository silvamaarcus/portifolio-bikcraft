// Componentes
import Header from "../Header";
import Hero from "./Hero";
import Bikes from "./Bikes";
import Tecnologia from "./Tecnologia";
import Parceiros from "./Parceiros";
import Depoimento from "./Depoimento";
import Seguro from "../Seguro";
import Footer from "../Footer";

const Home = () => {
  return (
    <>
      <Header />

      <Hero />
      <Bikes />
      <Tecnologia />
      <Parceiros />
      <Depoimento />

      <Seguro />

      <Footer />
    </>
  );
};

export default Home;
