import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './Components/Navbar';
import { MobileMenu } from './Components/MobileMenu';
import { Header } from './Components/Sections/Header';
import { Home } from './Pages/Home';
import { Services } from './Pages/Services';
import { Nosotros } from './Pages/Nosotros';
import { Contact } from './Pages/Contact';
import { Footer } from './Components/Footer';
import { NotFound } from './Pages/NotFound';
import { useState } from 'react';

export default function App() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const isDefaultPage = location.pathname === "/" || location.pathname === "/servicios" || location.pathname === "/nosotros" || location.pathname === "/contacto";

  return (
    <>
      <div className="w-screen flex flex-col items-center">
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        {location.pathname !== "/contacto" ? <Header /> : null}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/servicios' element={<Services />} />
          <Route path='/nosotros' element={<Nosotros />} />
          <Route path='/contacto' element={<Contact />} />
          <Route path="*" element={<NotFound />} /> {/* Ruta 404 */}
        </Routes>
        {
          isDefaultPage && 
          <Footer />
        }
      </div>
    </>
  )
}