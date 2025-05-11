import { Link } from "react-router-dom";
import { RevealOnScroll } from "../Components/RevealOnScroll";
import Redes from "../assets/Instalación-y-mantenimiento-de-redes.webp"
import Sistemas from "../assets/Configuración-de-sistemas-operativos.webp"
import Web from "../assets/Desarrollo-de-sitios-web-modernos-y-funcionales.webp"
import Seguridad from "../assets/Ciberseguridad-integral-para-empresas.webp"
import Legal from "../assets/Asesoramiento-legal-y-cumplimiento-normativo-en-tecnología.webp"

export const Services = () => {
    const services = [
        {
            title: "Instalación y optimización de redes empresariales",
            subtitle: "Conectividad estable, rápida y segura para tu negocio",
            description: "Diseñamos, instalamos y damos soporte a infraestructuras de red que permiten a tu empresa trabajar sin interrupciones. Desde cableado estructurado hasta redes WiFi profesionales, todo pensado para escalar.",
            icons: [
                {
                    class: "bx bx-signal-5",
                    text: "Instalación de redes LAN/WiFi"
                },
                {
                    class: "bx bx-buildings",
                    text: "Cableado estructurado (Cat6, fibra)"
                },
                {
                    class: "bx bx-cog",
                    text: "Configuración de routers y switches"
                },
                {
                    class: "bx bxs-hand",
                    text: "Mantenimiento preventivo y correctivo"
                }
            ],
            button: "Solicita auditoría de red gratuita",
            image: Redes
        },
        {
            title: "Configuración profesional de sistemas informáticos",
            subtitle: "Sistemas optimizados para funcionar sin fallos",
            description: "Nos encargamos de que cada dispositivo, servidor o sistema operativo de tu empresa funcione con fluidez, seguridad y esté correctamente configurado para el trabajo diario.",
            icons: [
                {
                    class: "bx bx-laptop",
                    text: "Instalación y configuración de servidores Windows/Linux"
                },
                {
                    class: "bx bxs-leaf",
                    text: "Mantenimiento de equipos informáticos"
                },
                {
                    class: "bx bxs-download",
                    text: "Instalación y actualización de software"
                },
                {
                    class: "bx bx-check-shield",
                    text: "Copias de seguridad automáticas"
                }
            ],
            button: "Solicita auditoría de sistemas gratuita",
            image: Sistemas
        },
        {
            title: "Diseño y desarrollo web profesional",
            subtitle: "Tu negocio online con presencia impecable",
            description: "Creamos sitios web que no solo se ven bien, sino que también funcionan de forma rápida, segura y están preparados para posicionarse en Google.",
            icons: [
                {
                    class: "bx bxs-file-html",
                    text: "Páginas corporativas y portfolios"
                },
                {
                    class: "bx bx-store",
                    text: "Tiendas online con panel de gestión"
                },
                {
                    class: "bx bx-code-alt",
                    text: "Webs responsivas y accesibles"
                },
                {
                    class: "bx bx-up-arrow-alt",
                    text: "Posicionamiento SEO inicial"
                }
            ],
            button: "Solicita auditoría web gratuita",
            image: Web
        },
        {
            title: "Protección total para tus datos y sistemas",
            subtitle: "Anticipamos amenazas y blindamos tu información",
            description: "Protege tu empresa frente a amenazas digitales con nuestras soluciones de ciberseguridad. Desde antivirus avanzados hasta monitorización en tiempo real.",
            icons: [
                {
                    class: "bx bx-signal-5",
                    text: "Análisis de vulnerabilidades"
                },
                {
                    class: "bx bx-buildings",
                    text: "Instalación de firewalls y antivirus"
                },
                {
                    class: "bx bx-cog",
                    text: "Respuesta ante incidentes y recuperación"
                },
                {
                    class: "bx bxs-hand",
                    text: "Seguridad en la nube"
                }
            ],
            button: "Solicita auditoría de seguridad gratuita",
            image: Seguridad
        },
        {
            title: "Cumplimiento legal para empresas digitales",
            subtitle: "Protege tu negocio cumpliendo la ley",
            description: "Ofrecemos asesoramiento legal adaptado al entorno digital. Te ayudamos a cumplir con las normativas como RGPD y LSSI de forma clara y eficiente.",
            icons: [
                {
                    class: "bx bx-signal-5",
                    text: "Redacción de textos legales"
                },
                {
                    class: "bx bx-buildings",
                    text: "Auditoría legal de páginas web"
                },
                {
                    class: "bx bx-cog",
                    text: "Adaptación a RGPD / LOPDGDD"
                },
                {
                    class: "bx bxs-hand",
                    text: "Contratos tecnológicos"
                }
            ],
            button: "Solicita auditoría de seguridad gratuita",
            image: Legal
        }
    ]

    return (
        <div className="min-w-screen min-h-screen flex flex-col gap-10 justify-center items-center">
            {services.map((service) => {
                return (
                    <RevealOnScroll>
                        <div className="servicioUnico w-full flex flex-col gap-3 justify-center items-center">
                            <div className="titulo w-full h-40 md:h-80 bg-cover bg-center flex justify-center items-center back" style={{ backgroundImage: `url(${service.image})` }}>
                                <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-[#e5f6ff] text-center w-screen h-full bg-black/50 backdrop-blur-sm flex justify-center items-center">{service.title}</h2>
                            </div>
                            <h3 className="h3 font-semibold text-3xl text-[#e5f6ff] text-center">{service.subtitle}</h3>
                            <p className="information font-medium text-lg md:text-xl lg:text-2xl text-[#e5f6ff] text-center w-auto md:max-w-1/2">{service.description}</p>
                            <div className="iconos flex gap-20 gap-y-10 md:gap-y-5 md:gap-5 justify-center items-center flex-wrap w-7/10">
                                {service.icons.map((icon) => {
                                    return (
                                        <div className="flex flex-col items-center justify-center gap-3 w-1/5">
                                            <i className={`${icon.class} text-5xl md:text-6xl lg:text-7xl text-[#E5F6FF]`}></i>
                                            <p className="text-[#E5F6FF] font-medium text-[16px] md:text-[18px] lg:text-[20px] text-center">{icon.text}</p>
                                        </div>
                                    )
                                })}
                            </div>
                            <Link to="/contacto" className="botonContacto text-lg md:text-xl lg:text-2xl font-medium border-2 bg-transparent border-[#522bde] hover:bg-[#522bde] rounded-lg transition-all duration-300">{service.button}</Link>
                        </div>
                    </RevealOnScroll>
                )
            })}
        </div>
    );
}