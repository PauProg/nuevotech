import "./Nosotros.css";
import { TableNosotros } from "../Components/Sections/TableNosotros";

export const Nosotros = () => {
    const valores = [
        {
            num: "1.",
            text: "Ayudamos a PYMEs a modernizarse con soluciones eficientes y sostenibles, mejorando su productividad y competitividad."
        },
        {
            num: "2.",
            text: "Diseñamos infraestructuras técnicas que crecen con tu negocio, garantizando estabilidad y protección contra amenazas."
        },
        {
            num: "3.",
            text: "Traducimos lo técnico a lo humano. Queremos que te sientas seguro y entiendas cada paso que damos contigo."
        },
        {
            num: "4.",
            text: "Nos aseguramos de que tu empresa no solo sea eficiente, sino también legalmente segura frente a normativas como RGPD y LSSI."
        }
    ]

    return (
        <div className="nosotros min-w-screen flex flex-col justify-center items-center">
            <div className="flex flex-col md:flex-row gap-5 md:gap-0 justify-center items-start max-w-8/10">
                <h2 className="w-full md:w-1/2 font-bold text-3xl md:text-4xl lg:text-5xl text-[#E5F6FF]"><span className="text-[#552CE0]">¿Que es Nuevotech</span> y, porque escogernos a nosotros?</h2>
                <p className="w-full md:w-1/2 text-[#B5B7BF] text-lg md:text-xl lg:text-2xl">Nuevotech nace de la unión de expertos en distintos ámbitos de la tecnología y el derecho. Desde ingenieros de redes hasta abogados especializados en legislación digital, compartimos un objetivo común: acercar soluciones profesionales, claras y seguras a empresas de todos los tamaños. <br /> <br /> Creemos que la tecnología debe estar al servicio de las personas. Por eso trabajamos de forma cercana, accesible y totalmente enfocada a las necesidades reales de nuestros clientes. Nuestro compromiso es ofrecer calidad, confianza y acompañamiento en todo el proceso digital de tu empresa.</p>
            </div>
            <div className="valores w-[90%] md:w-9/10 flex gap-8 justify-center items-center flex-wrap">
                {
                    valores.map((valor) => {
                        return (
                            <div className="bloqueValor w-8/10 md:w-1/5 h-74 bg-[#25284C] border-[#323779] border-2 rounded-lg flex flex-col justify-end items-start">
                                <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl">{valor.num}</h2>
                                <p>{valor.text}</p>
                            </div>
                        )
                    })
                }
            </div>
            <div className="w-[80%] flex gap-6 md:gap-0 justify-between items-start flex-wrap">
                <div className="w-full md:w-2/4">
                    <h2 className="tituloCompanias text-[#e5f6ff] font-bold text-4xl md:text-5xl lg:text-6xl">Compañias con las que hemos trabajado</h2>
                    <p className="text-[#B5B7BF] text-lg md:text-xl lg:text-2xl">En Nuevotech hemos tenido la suerte de poder ayudar a empresas como Google a actualizar su negocio y llevarlo al siguiente nivel.</p>
                </div>
                <TableNosotros />
            </div>
        </div>
    );
}