import Equipo from "../../assets/Equipo-multidisciplinar-con-experiencia-real.webp";
import Solucion from "../../assets/Soluciones-100-personalizadas.webp";
import Atencion from "../../assets/Atención-cercana-y-sin-tecnicismos.webp";
import Tecnologia from "../../assets/Tecnología-con-garantía-de-futuro.webp";
import { RevealOnScroll } from "../../Components/RevealOnScroll";

export const AboutHome = () => {
    return (
        <div className="about min-w-screen min-h-screen flex flex-col items-center">
            <h2 className="h2 text-center text-3xl md:text-4xl lg:text-5xl text-[#E5F6FF] font-semibold">¿Porqué escogernos a nosotros?</h2>
            <RevealOnScroll>
                <div className="bloqueInfo w-full flex flex-col gap-5 lg:gap-0 justify-center items-center lg:flex-row">
                    <div className="texto flex flex-col items-center justify-center w-full lg:w-1/2 gap-3">
                        <h3 className="text-center lg:text-left text-3xl md:text-4xl lg:text-6xl font-semibold text-[#E5F6FF]">Equipo multidisciplinar con experiencia real</h3>
                        <p className="text-center lg:text-left font-medium text-lg md:text-xl lg:text-2xl">Contamos con profesionales especializados en redes, sistemas, ciberseguridad, desarrollo web y derecho digital. Esto nos permite ofrecerte una solución completa desde una sola empresa.</p>
                    </div>
                    <img src={Equipo} alt="Equipo multidisciplinar con experiencia real" className="w-1/2 object-cover" />
                </div>
            </RevealOnScroll>
            <RevealOnScroll>
                <div className="bloqueInfo w-full flex flex-col-reverse gap-5 lg:gap-0 justify-center items-center lg:flex-row">
                    <img src={Solucion} alt="Equipo multidisciplinar con experiencia real" className="w-1/2 object-cover" />
                    <div className="texto flex flex-col items-center justify-center w-full lg:w-1/2 gap-3">
                        <h3 className="text-center lg:text-left text-3xl md:text-4xl lg:text-6xl font-semibold text-[#E5F6FF]">Soluciones 100% personalizadas</h3>
                        <p className="text-center lg:text-left font-medium text-lg md:text-xl lg:text-2xl">Cada negocio es distinto. Por eso, analizamos tus necesidades concretas y diseñamos un plan tecnológico a medida para maximizar tu productividad.</p>
                    </div>
                </div>
            </RevealOnScroll>
            <RevealOnScroll>
                <div className="bloqueInfo w-full flex flex-col gap-5 lg:gap-0 justify-center items-center lg:flex-row">
                    <div className="texto flex flex-col items-center justify-center w-full lg:w-1/2 gap-3">
                        <h3 className="text-center lg:text-left text-3xl md:text-4xl lg:text-6xl font-semibold text-[#E5F6FF]">Atención cercana y sin tecnicismos</h3>
                        <p className="text-center lg:text-left font-medium text-lg md:text-xl lg:text-2xl">Te explicamos todo de forma clara, sin lenguaje complicado, y te acompañamos en todo el proceso con soporte directo y resolutivo.</p>
                    </div>
                    <img src={Atencion} alt="Equipo multidisciplinar con experiencia real" className="w-1/2 object-cover" />
                </div>
            </RevealOnScroll>
            <RevealOnScroll>
                <div className="bloqueInfo w-full flex flex-col-reverse gap-5 lg:gap-0 justify-center items-center lg:flex-row">
                    <img src={Tecnologia} alt="Equipo multidisciplinar con experiencia real" className="w-1/2 object-cover" />
                    <div className="texto flex flex-col items-center justify-center w-full lg:w-1/2 gap-3">
                        <h3 className="text-center lg:text-left text-3xl md:text-4xl lg:text-6xl font-semibold text-[#E5F6FF]">Tecnología con garantía de futuro</h3>
                        <p className="text-center lg:text-left font-medium text-lg md:text-xl lg:text-2xl">Nos mantenemos actualizados con las últimas tendencias y normativas para ofrecerte siempre herramientas actuales, seguras y escalables.</p>
                    </div>
                </div>
            </RevealOnScroll>
        </div>
    );
};