import { Link } from "react-router-dom";
import { useEffect } from "react";

export const Navbar = ({menuOpen, setMenuOpen}) => {
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    return (
        <nav className="navbar w-9/10 lg:w-[1000px] bg-[#0a0f2c]/60 rounded-3xl flex justify-between items-center">
            <Link to="/" className="font-semibold text-2xl md:text-3xl lg:text-4xl">Nuevotech</Link>
            <ul className="hidden lg:flex gap-5 text-2xl font-medium">
                <li><Link to="/" >Home</Link></li>
                <li><Link to="/servicios">Servicios</Link></li>
                <li><Link to="/nosotros">Nosotros</Link></li>
            </ul>
            <Link to="/contacto" className="text-2xl w-52 h-14 border-[#522BDE] border-2 hidden lg:flex justify-center items-center rounded-xl hover:bg-[#522BDE] transition-all duration-300 font-medium">
                Contacto
            </Link>
            <div className="text-3xl z-40 block lg:hidden" onClick={() => setMenuOpen(prev => !prev)}>
                <i className="bx bx-menu cursor-pointer"></i>
            </div>
        </nav>
    );
};