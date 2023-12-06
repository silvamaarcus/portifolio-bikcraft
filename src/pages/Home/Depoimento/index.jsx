// Imagens
import img_depoimento from "../../../img/img-depoimento.png";

const Depoimento = () => {
  return (
    <>
      <section className="row bg-black-dark-soft">
        <div className="flex depoimento">
          <div className="w-50 bg">
            <img src={img_depoimento} />
          </div>
          <div className="w-50 depoimento-info pl-8">
            <h4 className="color-black">
              Pedalar sempre foi a minha paixão, o que o pessoal da Bikcraft fez
              foi intensificar o meu amor por esta atividade. Recomendo à todos
              que amo.
            </h4>
            <h6 className="color-black mt-4">Ana Júlia</h6>
          </div>
        </div>

        <div className="depoimento-mobile">
          <div>
            <p className="p1 color-black bold text-center pt-3 px-3">
              "Pedalar sempre foi a minha paixão, o que o pessoal da Bikcraft
              fez foi intensificar o meu amor por esta atividade. Recomendo à
              todos que amo."
            </p>
          </div>
          <div className="flex-center py-2">
            <img src={img_depoimento} className="profile" />
            <p className="color-black ml-1">Ana Júlia</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Depoimento;
