import { useLocation, Link } from "react-router-dom";

export const Header = () => {
    const location = useLocation();

    const texts = [
        {
            title: "Soluciones tecnológicas integrales para tu empresa",
            description: "Redes, sistemas, seguridad, web y legalidad en un solo lugar"
        },
        {
            title: "Servicios",
            description: "Ofrecemos instalaciones completas de redes, sistemas operativos, desarrollo web, seguridad para tu empresa y te ayudamos con la legalidad de tu empresa"
        },
        {
            title: "Nosotros",
            description: "Ofrecemos instalaciones completas de redes, sistemas operativos, desarrollo web, seguridad para tu empresa y te ayudamos con la legalidad de tu empresa"
        },
        {
            title: "404",
            description: "Página no encontrada"
        }
    ];

    const isDefaultPage = location.pathname === "/" || location.pathname === "/servicios" || location.pathname === "/nosotros";

    return (
        <div className={`header bg-cover ${location.pathname === "/" ? "bg-center" : location.pathname === "/servicios" ? "bg-top" : location.pathname === "/nosotros" ? "bg-bottom" : ""} min-h-screen min-w-screen flex flex-col items-center justify-center`}>
            <h1 className={`${!isDefaultPage ? "lg:text-9xl" : ""} text-4xl md:text-5xl lg:text-6xl text-center w-2/3 md:w-8/10 lg:w-5xl font-semibold titulo`}>
                {
                    location.pathname === "/" 
                    ? texts[0].title 
                    : location.pathname === "/servicios" 
                    ? texts[1].title 
                    : location.pathname === "/nosotros" 
                    ? texts[2].title
                    : texts[3].title
                }
            </h1>
            <p className={`text-xl md:text-2xl lg:text-3xl ${!isDefaultPage ? "lg:text-5xl" : ""} text-center max-w-[60%]`}>
                {
                    location.pathname === "/" 
                    ? texts[0].description 
                    : location.pathname === "/servicios" 
                    ? texts[1].description 
                    : location.pathname === "/nosotros" 
                    ? texts[2].description
                    : texts[3].description
                }
            </p>
            {
                isDefaultPage &&
                <Link to="/contacto" className="bg-[#1E3A8A] button text-xl md:text-2xl rounded-xl hover:bg-[#2979ff] transition-all duration-300">
                    Solicita tu consulta gratuita
                </Link>
            }
            {
                !isDefaultPage &&
                <Link to="/" className="bg-[#1E3A8A] button text-xl md:text-2xl rounded-xl hover:bg-[#2979ff] transition-all duration-300">
                    Vuelve a la página de inicio
                </Link>
            }
        </div>
    );
};