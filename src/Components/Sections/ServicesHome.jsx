import redImg from "../../assets/Instalación-y-mantenimiento-de-redes.webp";
import sistemasImg from "../../assets/Configuración-de-sistemas-operativos.webp";
import webImg from "../../assets/Desarrollo-de-sitios-web-modernos-y-funcionales.webp";
import legalImg from "../../assets/Asesoramiento-legal-y-cumplimiento-normativo-en-tecnología.webp";
import ciberseguridadImg from "../../assets/Ciberseguridad-integral-para-empresas.webp";
import { RevealOnScroll } from "../../Components/RevealOnScroll";

export const ServicesHome = () => {
    const servicios = [
        {
            titulo: "Instalación y mantenimiento de redes",
            descripcion: "Diseñamos e implementamos infraestructuras de red adaptadas a las necesidades de tu negocio, con garantía de estabilidad, velocidad y seguridad.",
            img: redImg
        },
        {
            titulo: "Configuración de sistemas operativos",
            descripcion: "Optimizamos tus dispositivos, servidores y sistemas operativos para que funcionen con el máximo rendimiento, fiabilidad y seguridad.",
            img: sistemasImg
        },
        {
            titulo: "Desarrollo de sitios web modernos y funcionales",
            descripcion: "Creamos páginas web que transmiten profesionalidad, con diseño responsive, fáciles de usar y optimizadas para buscadores.",
            img: webImg
        },
        {
            titulo: "Asesoramiento legal y cumplimiento normativo en tecnología",
            descripcion: "Te guiamos para cumplir con la normativa vigente (RGPD, LSSI, etc.) y elaboramos documentos legales personalizados para tu actividad online.",
            img: legalImg
        },
        {
            titulo: "Ciberseguridad integral para empresas",
            descripcion: "Protegemos tus datos, equipos y comunicaciones frente a amenazas digitales mediante sistemas de seguridad avanzados y monitorización continua.",
            img: ciberseguridadImg
        }
    ]

    return (
        <div className="servicios min-w-screen min-h-screen flex flex-col items-center">
            <h2 className="h2 font-semibold text-3xl md:text-4xl lg:text-5xl">¿Qué hacemos?</h2>
            <div className="services grid grid-cols-1 md:grid-cols-2 gap-7 max-w-[80%]">
                {
                    servicios.map((servicio) => (
                        <RevealOnScroll>
                            <div className="md:w-auto service bg-[#1C1C1E] border-[#1E3A8A] border-3 rounded-2xl flex flex-col items-center min-h-[250px] max-w-2xl" key={servicio.titulo}>
                                <h3 className="w-9/10 h3 font-semibold text-xl md:text-2xl lg:text-3xl text-center">{servicio.titulo}</h3>
                                <p className="p text-center text-md md:text-lg lg:text-xl">{servicio.descripcion}</p>
                                <img className="w-[70%] h-[50%] rounded-lg object-cover" src={servicio.img} alt={servicio.titulo} />
                            </div>
                        </RevealOnScroll>
                    ))
                }
            </div>
        </div>
    );
};