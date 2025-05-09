import { Link } from "react-router-dom";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
    return (
        <div className={`fixed top-0 left-0 w-full bg-[rgba(10, 10, 10, .8)] z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${menuOpen ? "h-screen opacity-100 pointer-events-auto bg-black/50 backdrop-blur-lg" : "h-0 opacity-0 pointer-events-none"}`}>
            <button onClick={() => setMenuOpen(false)} className="absolute top-15 right-10 z-50 text-white text-3xl focus:outline-none cursor-pointer" aria-label="Close Menu">
                <i className="bx bx-x"></i>
            </button>

            <div className="flex flex-col items-center justify-center gap-8">
                <Link to="/" onClick={() => setMenuOpen(false)} className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}> Home </Link>
                <Link to="/servicios" onClick={() => setMenuOpen(false)} className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}> Servicios </Link>
                <Link to="/nosotros" onClick={() => setMenuOpen(false)} className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}> Nosotros </Link>
                <Link to="/contacto" onClick={() => setMenuOpen(false)} className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}> Contacto </Link>
            </div>
        </div>
    );
};