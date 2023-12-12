// Link
import { Link } from "react-router-dom";

const Seguro = () => {
  return (
    <>
      <section className="bg-black-dark-soft">
        <section className="container">
          <h1 className="color-white bold mb-8">
            seguros<span>.</span>
          </h1>

          <div className="row flex-center flex-wrap">
            <div className="grid-6 bg-black-dark seguros-card">
              <div>
                <div className="flex-space flex-wrap seguros-title">
                  <h3 className="uppercase bold color-gray">Prata</h3>
                  <div>
                    <h3 className="bold color-white">R$ 199</h3>
                    <blockquote className="p3 color-gray text-right">
                      mensal
                    </blockquote>
                  </div>
                </div>

                <ul className="seguros-beneficios">
                  <li className="p1 color-white mt-3">Duas trocas por ano</li>
                  <li className="p1 color-white mt-3">Assistência técnica</li>
                  <li className="p1 color-white mt-3">Suporte 08h às 18h</li>
                  <li className="p1 color-white mt-3">Cobertura estadual</li>
                  <Link to="/seguros" className="btn-2 mt-4">
                    INSCREVA-SE
                  </Link>
                </ul>
              </div>
            </div>

            <div className="grid-6 bg-black-dark seguros-card">
              <div>
                <div className="flex-space flex-wrap seguros-title">
                  <h3 className="uppercase bold color-primary">Ouro</h3>
                  <div>
                    <h3 className="bold color-white">R$ 299</h3>
                    <blockquote className="p3 color-gray text-right">
                      mensal
                    </blockquote>
                  </div>
                </div>

                <ul className="seguros-beneficios">
                  <li className="p1 color-white mt-3">Cinco trocas por ano</li>
                  <li className="p1 color-white mt-3">Assistência especial</li>
                  <li className="p1 color-white mt-3">Suporte 24h</li>
                  <li className="p1 color-white mt-3">Cobertura nacional</li>
                  <li className="p1 color-white mt-3">Desconto em parceiros</li>
                  <li className="p1 color-white mt-3">
                    Acesso ao Clube Bikcraft
                  </li>
                  <Link to="/seguros" className="btn mt-4">
                    INSCREVA-SE
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};
export default Seguro;
