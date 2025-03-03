import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Heart,
  Info,
  MapPin,
  Newspaper,
  Phone,
  Mail,
  MapPinned,
  Target,
  Calendar,
} from "lucide-react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { useActualites } from "../context/ActualitesContext";

// Hook personnalisé pour détecter la direction du scroll
const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState("down");
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      const direction = scrollY > lastScroll ? "down" : "up";
      if (
        direction !== scrollDirection &&
        (scrollY - lastScroll > 10 || scrollY - lastScroll < -10)
      ) {
        setScrollDirection(direction);
      }
      setLastScroll(scrollY > 0 ? scrollY : 0);
    };

    window.addEventListener("scroll", updateScrollDirection);
    return () => window.removeEventListener("scroll", updateScrollDirection);
  }, [scrollDirection, lastScroll]);

  return scrollDirection;
};

// Hook personnalisé pour détecter la visibilité
const useInView = (options = {}) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  const callback = useCallback((entries) => {
    const [entry] = entries;
    setIsInView(entry.isIntersecting);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(callback, {
      threshold: 0.1,
      ...options,
    });

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [callback, options]);

  return [ref, isInView];
};

// Composant AnimatedSection modifié
const AnimatedSection = ({ children, className = "", direction = "up" }) => {
  const [ref, isInView] = useInView({ triggerOnce: true });
  const scrollDirection = useScrollDirection();

  const getTransformClass = () => {
    if (scrollDirection === "down") {
      switch (direction) {
        case "left":
          return "md:translate-x-[-100px] translate-y-[50px]";
        case "right":
          return "md:translate-x-[100px] translate-y-[50px]";
        case "up":
        default:
          return "translate-y-[50px]";
      }
    } else {
      switch (direction) {
        case "left":
          return "md:translate-x-[-100px] -translate-y-[50px]";
        case "right":
          return "md:translate-x-[100px] -translate-y-[50px]";
        case "up":
        default:
          return "-translate-y-[50px]";
      }
    }
  };

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-1000 ${
        isInView
          ? "opacity-100 translate-y-0 translate-x-0"
          : `opacity-0 ${getTransformClass()}`
      } ${className}`}
    >
      {children}
    </div>
  );
};

const ActualiteCard = ({ actualite, onClick }) => {
  const formattedDate = actualite.date
    ? format(new Date(actualite.date), "d MMMM yyyy", { locale: fr })
    : "";

  return (
    <div
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer h-full flex flex-col"
      onClick={onClick}
    >
      <div className="relative h-48">
        <img
          src={actualite.image || `/images/actualite-default.jpg`}
          alt={actualite.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        {formattedDate && (
          <div className="flex items-center gap-2 text-green-600 mb-3">
            <Calendar className="w-4 h-4 flex-shrink-0" />
            <span className="text-sm">{formattedDate}</span>
          </div>
        )}
        <h3 className="font-bold text-xl mb-2 text-green-800 line-clamp-2">
          {actualite.title}
        </h3>
        <p className="text-gray-600 mb-4 flex-grow line-clamp-3">
          {actualite.description || ""}
        </p>
        <div className="text-green-600 font-semibold hover:text-green-700 transition-colors flex items-center gap-2 mt-auto">
          Lire la suite
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

const Accueil = () => {
  const images = [
    { src: "/images/Accueil1.jpg", alt: "Madagascar 1" },
    { src: "/images/Accueil2.jpg", alt: "Madagascar 2" },
    { src: "/images/Accueil3.jpg", alt: "Madagascar 3" },
    { src: "/images/Accueil4.jpg", alt: "Madagascar 4" },
    { src: "/images/Accueil1.jpg", alt: "Madagascar 5" },
    { src: "/images/Accueil2.jpg", alt: "Madagascar 6" },
  ];
  const images2 = [
    { src: "/images/NousDecouvrir1.jpg", alt: "NousDecouvrir1" },
    { src: "/images/NousDecouvrir2.jpg", alt: "NousDecouvrir2" },
    { src: "/images/NousDecouvrir3.jpg", alt: "NousDecouvrir3" },
    { src: "/images/NousDecouvrir4.jpg", alt: "NousDecouvrir4" },
    { src: "/images/NousDecouvrir1.jpg", alt: "NousDecouvrir5" },
    { src: "/images/NousDecouvrir2.jpg", alt: "NousDecouvrir6" },
  ];
  const images3 = [
    { src: "/images/NosActions1.jpg", alt: "NosActions1" },
    { src: "/images/NosActions2.jpg", alt: "NosActions2" },
    { src: "/images/NosActions3.jpg", alt: "NosActions3" },
    { src: "/images/NosActions4.jpg", alt: "NosActions4" },
    { src: "/images/NosActions5.jpg", alt: "NosActions5" },
    { src: "/images/NosActions1.jpg", alt: "NosActions6" },
  ];
  const images4 = [
    { src: "/images/NosCentres1.jpg", alt: "NosCentres1" },
    { src: "/images/NosCentres2.jpg", alt: "NosCentres2" },
    { src: "/images/NosCentres3.jpg", alt: "NosCentres3" },
    { src: "/images/NosCentres4.jpg", alt: "NosCentres4" },
    { src: "/images/NosCentres5.jpg", alt: "NosCentres5" },
    { src: "/images/NosCentres6.jpg", alt: "NosCentres6" },
  ];

  // Récupérer les actualités depuis le contexte
  const { actualites, loading } = useActualites();
  const navigate = useNavigate();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, [images.length]);

  // Fonction pour naviguer vers une actualité spécifique
  const navigateToActualite = (index) => {
    // Accéder à la page d'actualités avec un hash pour cibler l'actualité spécifique
    navigate(`/actualite#actu-${index}`);
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Espaceur pour navbar fixe */}
      <div className="h-20"></div>
      <div className="relative h-[85vh] md:h-[90vh] bg-green-900">
        {/* Fond et overlay */}
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

        {/* Contenu centré avec animations */}
        <div className="relative z-20 flex items-center h-full">
          <div className="container mx-auto px-4">
            <div
              className={`max-w-3xl transform transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <h1 className="text-2xl sm:text-3xl md:text-6xl font-bold text-white leading-tight mb-6">
                Ensemble contre la malnutrition à Madagascar
              </h1>
              <p className="mt-4 text-base sm:text-lg md:text-xl text-white/90 mb-8">
                Depuis 2009, Soakilonga lutte contre la malnutrition et promeut
                le développement communautaire à travers des projets concrets et
                durables.
              </p>
              <div className="mt-6">
                <Link to="/soutenir" className="block sm:inline-block">
                  <button
                    className="w-full sm:w-auto bg-green-500 hover:bg-green-400 
                       text-white px-8 sm:px-12 py-4 sm:py-6 rounded-full 
                       text-base sm:text-xl
                       flex items-center justify-center gap-3 
                       transition-all duration-300 transform hover:-translate-y-1
                       shadow-lg hover:shadow-xl group"
                  >
                    Nous soutenir
                    <Heart className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section Nous découvrir avec animation */}
      <section className="py-16 md:py-24 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection className="relative h-[300px] md:h-[400px] overflow-hidden rounded-lg shadow-xl order-2 md:order-1">
              {images2.map((image2, index) => (
                <img
                  key={`${image2.src}-${index}`}
                  src={image2.src}
                  alt={image2.alt}
                  className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
                    index === currentIndex ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </AnimatedSection>
            <AnimatedSection
              direction="right"
              className="space-y-6 order-1 md:order-2"
            >
              <div className="flex items-center gap-2 text-green-800">
                <div className="bg-green-100 rounded-full p-3">
                  <Info className="w-6 h-6 text-green-700" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-green-700">
                  Nous découvrir
                </h2>
              </div>
              <p className="text-base md:text-lg text-gray-600">
                Depuis sa création, Soakilonga est en première ligne de la lutte
                contre la malnutrition à Madagascar. Nous œuvrons pour améliorer
                les conditions de vie des enfants et des familles grâce à des
                initiatives axées sur la santé, l'éducation et le développement
                durable.
              </p>
              <Link
                to="/decouvrir"
                className="group inline-flex items-center gap-2 text-green-600 font-semibold hover:text-green-700 transition-colors"
              >
                En savoir plus
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>
      {/* Section Nos actions avec animation */}
      <section className="py-16 md:py-24 bg-green-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="up" className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="bg-green-800 rounded-full p-3">
                  <Target className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-green-600">
                  Nos Actions
                </h2>
              </div>
              <p className="text-base md:text-lg text-gray-200">
                Soakilonga agit sur plusieurs fronts pour répondre aux défis de
                la malnutrition et du sous-développement à Madagascar. Découvrez
                nos projets de santé, d'éducation, de sport et d'agriculture
                durable pour améliorer la vie des communautés.
              </p>
              <Link
                to="/actions"
                className="inline-flex w-full md:w-auto justify-center items-center gap-2 
                           bg-white text-green-900 px-6 py-3 rounded-full 
                           hover:bg-green-50 transition-colors"
              >
                Découvrir nos actions
                <ArrowRight className="w-4 h-4" />
              </Link>
            </AnimatedSection>
            <AnimatedSection
              direction="right"
              className="relative h-[300px] md:h-[400px] overflow-hidden rounded-lg shadow-xl"
            >
              {images3.map((image3, index) => (
                <img
                  key={`${image3.src}-${index}`}
                  src={image3.src}
                  alt={image3.alt}
                  className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
                    index === currentIndex ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </AnimatedSection>
          </div>
        </div>
      </section>
      {/* Section Nos centres */}
      <section className="py-16 md:py-24 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection
              direction="left"
              className="relative h-[300px] md:h-[400px] overflow-hidden rounded-lg shadow-xl order-2 md:order-1"
            >
              {images4.map((image4, index) => (
                <img
                  key={`${image4.src}-${index}`}
                  src={image4.src}
                  alt={image4.alt}
                  className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
                    index === currentIndex ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </AnimatedSection>
            <AnimatedSection
              direction="right"
              className="space-y-6 order-1 md:order-2"
            >
              <div className="flex items-center gap-2 text-green-800">
                <div className="bg-green-100 rounded-full p-3">
                  <MapPin className="w-6 h-6 text-green-700" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-green-700">
                  Nos centres
                </h2>
              </div>
              <p className="text-base md:text-lg text-gray-600">
                Nos centres sont des lieux de vie et de développement, offrant
                des services essentiels en matière de nutrition, de santé, et
                d'éducation pour les enfants et familles de Madagascar.
              </p>
              <Link
                to="/centres"
                className="group inline-flex items-center gap-2 text-green-600 font-semibold hover:text-green-700 transition-colors"
              >
                En savoir plus
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Section Actualités avec animation - Avec cartes uniformes */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection direction="up" className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 text-green-600 mb-4">
              <Newspaper className="w-5 h-5" />
              <span className="uppercase tracking-wider text-sm font-semibold">
                Actualités
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-green-800">
              Dernières nouvelles
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {loading ? (
              <div className="col-span-3 text-center py-10">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500 mx-auto"></div>
              </div>
            ) : actualites.length === 0 ? (
              <div className="col-span-3 text-center py-10 text-gray-600">
                Aucune actualité disponible pour le moment.
              </div>
            ) : (
              actualites
                .slice(0, 3) // Prendre les 3 premières actualités (les plus récentes)
                .map((actualite, index) => (
                  <AnimatedSection
                    key={index}
                    direction={
                      index === 0 ? "left" : index === 1 ? "up" : "right"
                    }
                    className="h-full"
                  >
                    <ActualiteCard
                      actualite={actualite}
                      onClick={() => navigateToActualite(index)}
                    />
                  </AnimatedSection>
                ))
            )}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/actualite"
              className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-500 transition-colors"
            >
              Voir toutes les actualités
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
      {/* Footer avec animation */}
      <footer className="bg-green-900 text-white">
        <div className="container mx-auto px-6 py-12">
          <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                    to="/missions"
                    className="hover:text-green-300 transition-colors"
                  >
                    Nos missions
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
                    to="/benevolat"
                    className="hover:text-green-300 transition-colors"
                  >
                    Devenir bénévole
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dons"
                    className="hover:text-green-300 transition-colors"
                  >
                    Faire un don
                  </Link>
                </li>
              </ul>
            </div>
          </AnimatedSection>

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

export default Accueil;
