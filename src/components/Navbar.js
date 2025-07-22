import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, ArrowRight, Handshake } from "lucide-react"; // Ajout de Handshake pour l'icône des partenaires

const NavLink = ({ to, children }) => (
  <Link
    to={to}
    className="text-green-800 hover:text-green-600 font-medium relative group py-2 transition-colors duration-300"
  >
    <span className="relative z-10">{children}</span>
    <span className="block h-0.5 bg-green-600 absolute left-0 bottom-0 w-0 group-hover:w-full transition-all duration-300"></span>
  </Link>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/images/LogoSkl.jpg"
              alt="Logo"
              className="w-20 h-20 object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/decouvrir">Nous découvrir</NavLink>
            <NavLink to="/actions">Nos actions</NavLink>
            <NavLink to="/centres">Nos Centres</NavLink>
            <NavLink to="/actualite">Actualités</NavLink>
            <NavLink to="/partenaires">Partenaires</NavLink>

            {/* Bouton Nous soutenir amélioré */}
            <Link
              to="/soutenir"
              className="bg-gradient-to-r from-green-600 to-green-500 text-white px-6 py-2 rounded-full 
                         hover:from-green-500 hover:to-green-400 transition-all duration-300 
                         flex items-center gap-2 group hover:translate-y-[-2px] hover:shadow-lg"
            >
              Nous soutenir
              <Heart className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Button avec animation améliorée */}
          <button
            onClick={toggleNavbar}
            className="md:hidden text-green-800 focus:outline-none p-2 hover:bg-green-50 rounded-lg transition-colors duration-200"
          >
            <div className="w-6 h-6 flex items-center justify-center">
              {isOpen ? (
                <svg
                  className="w-6 h-6 transition-transform duration-300 transform rotate-180"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                <svg
                  className="w-6 h-6 transition-transform duration-300"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              )}
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu avec animations améliorées */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="bg-white shadow-lg rounded-b-lg">
          <Link
            to="/decouvrir"
            onClick={handleLinkClick}
            className="block px-6 py-3 text-green-800 hover:bg-green-50 hover:text-green-600 transition-colors flex items-center gap-2"
          >
            Nous découvrir
            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
          <Link
            to="/actions"
            onClick={handleLinkClick}
            className="block px-6 py-3 text-green-800 hover:bg-green-50 hover:text-green-600 transition-colors flex items-center gap-2"
          >
            Nos actions
            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
          <Link
            to="/centres"
            onClick={handleLinkClick}
            className="block px-6 py-3 text-green-800 hover:bg-green-50 hover:text-green-600 transition-colors flex items-center gap-2"
          >
            Nos Centres
            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
          <Link
            to="/actualite"
            onClick={handleLinkClick}
            className="block px-6 py-3 text-green-800 hover:bg-green-50 hover:text-green-600 transition-colors flex items-center gap-2"
          >
            Actualités
            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
          <Link
            to="/partenaires"
            onClick={handleLinkClick}
            className="block px-6 py-3 text-green-800 hover:bg-green-50 hover:text-green-600 transition-colors flex items-center gap-2"
          >
            Partenaires
            <Handshake className="w-4 h-4 ml-1" />
          </Link>
          <Link
            to="/soutenir"
            onClick={handleLinkClick}
            className="block px-6 py-3 text-green-600 hover:bg-green-50 hover:text-green-800 transition-colors flex items-center gap-2"
          >
            Nous soutenir
            <Heart className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
