import "./Footer.css";
import Icon from "/favicon.webp";
import { useLocation, Link } from "react-router-dom";
import { Separador } from "./Separador";

export const Footer = () => {
    const location = useLocation();

    const contacto = [
        {
            title: "contact@nuevotech.com",
            href: "mailto:contact@nuevotech.com"
        },
        {
            title: "+34 653 85 38 61",
            href: "tel:+34653853861"
        }
    ];

    const redes = [
        {
            title: "Github",
            href: "https://github.com/PauProg"
        },
        {
            title: "Youtube",
            href: "https://www.youtube.com"
        },
        {
            title: "Tiktok",
            href: "https://www.tiktok.com"
        },
        {
            title: "Instagram",
            href: "https://www.instagram.com"
        }
    ];

    return (
        <div className="w-19/20 md:min-w-screen flex justify-center items-center">
            <div className="footer w-[95%] flex flex-col justify-center items-center rounded-4xl shadow-[0_0_40px_0_rgba(255,255,255,0.25)]">
                <img src={Icon} alt="Favicon" className="favicon w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24" />
                <h3 className="h3 text-center font-medium lg:font-semibold w-7/10 text-3xl md:text-4xl lg:text-5xl">Lleva tu negocio al siguiente nivel</h3>
                {
                    location.pathname !== "/contacto" && (
                        <div className="contactos flex flex-col md:flex-row gap-5">
                            {
                                contacto.map((item) => {
                                    return (
                                        <a href={item.href} className="item flex justify-center items-center text-xl md:text-2xl lg:text-3xl bg-[rgba(250,250,250,0.1)] rounded-full hover:bg-[rgba(250,250,250,0.2)] border-[#555990] border-2 transition-all duration-300">{item.title}</a>
                                    )
                                })
                            }
                        </div>
                    )
                }
                <Separador />
                <div className="flex flex-wrap justify-center items-center gap-5 lg:gap-6">
                    {
                        redes.map((item) => {
                            return (
                                <a href={item.href} className="socialMedia text-[21px] bg-[#2F3361] hover:bg-[#575EFE] rounded-full transition-all duration-300">{item.title}</a>
                            )
                        })
                    }
                </div>
                <Separador />
                <p className="text-base w-7/10 md:w-8/10 lg:w-full text-center opacity-40">© 2025 Nuevotech by PauProg | <Link to="/legal">All Rights Reserved</Link> | Powered by ReactJS</p>
            </div>
        </div>
    );
}