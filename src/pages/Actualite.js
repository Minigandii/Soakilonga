import React, { useState, useEffect, useRef } from "react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import {
  Newspaper,
  Calendar,
  ArrowUp,
  Phone,
  Mail,
  MapPinned,
} from "lucide-react";
import { useActualites } from "../context/ActualitesContext";
import { useLocation, Link } from "react-router-dom";
import { AnimatedSection } from "../components/AnimatedSection";

const Actualite = () => {
  const { actualites, loading } = useActualites();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();

  // Références aux actualités pour le défilement
  const actuRefs = useRef([]);

  // Images pour le carousel du hero
  const images = [
    { src: "/images/Accueil4.jpg", alt: "Actualité 1" },
    { src: "/images/Accueil3.jpg", alt: "Actualité 2" },
    { src: "/images/Accueil2.jpg", alt: "Actualité 3" },
    { src: "/images/Accueil1.jpg", alt: "Actualité 4" },
    { src: "/images/Accueil1.jpg", alt: "Actualité 5" },
    { src: "/images/Accueil2.jpg", alt: "Actualité 6" },
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []); // Effet pour l'animation initiale

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, [images.length]); // Ajout de la dépendance images.length

  // Effet pour détecter le scroll et afficher le bouton "retour en haut"
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fonction pour remonter en haut de la page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Effet pour défiler jusqu'à l'actualité spécifique si un hash est présent
  useEffect(() => {
    if (location.hash && !loading && actualites.length > 0) {
      const hash = location.hash.replace("#", "");
      const index = parseInt(hash.replace("actu-", ""));

      if (
        !isNaN(index) &&
        index >= 0 &&
        index < actualites.length &&
        actuRefs.current[index]
      ) {
        // Petit délai pour s'assurer que le rendu est terminé
        setTimeout(() => {
          actuRefs.current[index].scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 500);
      }
    }
  }, [location.hash, loading, actualites.length]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen overflow-x-hidden">
      <div className="h-20"></div>

      {/* Hero Section avec carousel */}
      <div className="relative h-[85vh] md:h-[90vh] bg-green-900">
        {/* Fond et overlay avec carousel */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-green-900/90 to-green-800/75 z-10" />
          {images.map((image, index) => (
            <img
              key={`${image.src}-${index}`}
              src={image.src}
              alt={image.alt}
              className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>

        {/* Contenu du hero avec animations */}
        <div className="relative z-20 flex items-center h-full">
          <div className="container mx-auto px-4 text-center">
            <div
              className={`max-w-3xl mx-auto transform transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <div className="flex justify-center mb-8">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-full">
                  <Newspaper className="w-12 h-12 text-white/90 animate-pulse" />
                </div>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6">
                Actualités
              </h1>
              <p className="text-lg sm:text-xl text-white/90">
                Découvrez les dernières nouvelles de nos centres et de nos
                actions à Madagascar
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section des actualités */}
      <div className="bg-gray-50 py-10 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            {actualites.length === 0 ? (
              <AnimatedSection>
                <div className="text-center text-gray-600 bg-white p-10 rounded-lg shadow-md">
                  <Newspaper className="w-12 h-12 mx-auto text-green-500 mb-4" />
                  <h2 className="text-2xl font-bold text-green-800 mb-2">
                    Aucune actualité disponible
                  </h2>
                  <p>Revenez bientôt pour découvrir nos dernières nouvelles.</p>
                </div>
              </AnimatedSection>
            ) : (
              <div className="space-y-12">
                {actualites.map((actualite, index) => (
                  <AnimatedSection
                    key={index}
                    direction={index % 2 === 0 ? "left" : "right"}
                  >
                    <article
                      id={`actu-${index}`}
                      ref={(el) => (actuRefs.current[index] = el)}
                      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow scroll-mt-24"
                    >
                      <div className="md:flex">
                        {/* Image - plus grande et responsive */}
                        {actualite.image && (
                          <div className="md:w-2/5 lg:w-1/3">
                            <div className="h-64 md:h-full">
                              <img
                                src={actualite.image}
                                alt={actualite.title}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        )}

                        {/* Contenu */}
                        <div
                          className={`p-6 md:p-8 ${
                            actualite.image ? "md:w-3/5 lg:w-2/3" : "w-full"
                          }`}
                        >
                          <div className="flex items-center gap-2 text-green-600 mb-4">
                            <Calendar className="w-5 h-5" />
                            <p className="text-sm font-medium">
                              {format(new Date(actualite.date), "d MMMM yyyy", {
                                locale: fr,
                              })}
                            </p>
                          </div>

                          <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-4">
                            {actualite.title}
                          </h2>

                          {actualite.description && (
                            <div className="text-gray-700 font-medium mb-6 italic border-l-4 border-green-200 pl-4">
                              {actualite.description}
                            </div>
                          )}

                          <div className="prose max-w-none text-gray-600 mb-4">
                            {actualite.body}
                          </div>

                          {/* Séparateur entre les actualités */}
                          {index < actualites.length - 1 && (
                            <div className="mt-4 pt-4 md:hidden">
                              <div className="border-t border-gray-200"></div>
                            </div>
                          )}
                        </div>
                      </div>
                    </article>
                  </AnimatedSection>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bouton retour en haut */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg transition-all z-50"
          aria-label="Retour en haut"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Footer */}
      <footer className="bg-green-900 text-white">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+261 34 12 345 67</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a
                  href="mailto:contact@soakilonga.org"
                  className="hover:text-green-300 transition-colors"
                >
                  contact@soakilonga.org
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPinned className="w-4 h-4" />
                <span>Antananarivo, Madagascar</span>
              </div>
            </div>

            {/* Liens rapides */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold mb-4">Liens rapides</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <li>
                  <Link
                    to="/decouvrir"
                    className="hover:text-green-300 transition-colors"
                  >
                    Nous découvrir
                  </Link>
                </li>
                <li>
                  <Link
                    to="/actions"
                    className="hover:text-green-300 transition-colors"
                  >
                    Nos actions
                  </Link>
                </li>
                <li>
                  <Link
                    to="/centres"
                    className="hover:text-green-300 transition-colors"
                  >
                    Nos centres
                  </Link>
                </li>
                <li>
                  <Link
                    to="/soutenir"
                    className="hover:text-green-300 transition-colors"
                  >
                    Nous soutenir
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 mt-12 pt-8 text-center">
            <p className="text-sm">
              © {new Date().getFullYear()} Soakilonga. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Actualite;
