import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Heart,
  Info,
  MapPin,
  Newspaper,
  Phone,
  Mail,
  MapPinned,
  Users,
  Target,
  ExternalLink,
} from "lucide-react";
import { Link } from "react-router-dom";

const NousSoutenir = () => {
  const images = [
    { src: "/images/Accueil1.jpg", alt: "Madagascar 1" },
    { src: "/images/Accueil2.jpg", alt: "Madagascar 2" },
    { src: "/images/Accueil3.jpg", alt: "Madagascar 3" },
    { src: "/images/Accueil4.jpg", alt: "Madagascar 4" },
    { src: "/images/Accueil1.jpg", alt: "Madagascar 5" },
    { src: "/images/Accueil2.jpg", alt: "Madagascar 6" },
  ];

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
  }, []);

  return (
    <div className="min-h-screen">
      <div className="h-20"></div>

      {/* Hero Section avec nouveau design */}
      <div className="relative h-[85vh] md:h-[90vh] bg-green-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-green-900/90 to-green-800/75 z-10" />
          {images.map((image, index) => (
            <img
              key={image.src}
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
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div
                className={`transform transition-all duration-1000 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                <div className="flex justify-center mb-8">
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-full">
                    <Heart className="w-16 h-16 text-white/90 animate-pulse" />
                  </div>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  Soutenez Soakilonga
                </h1>
                <p className="text-xl text-white/90 mb-6">
                  Votre soutien est essentiel pour continuer notre combat contre
                  la malnutrition à Madagascar
                </p>
                <br />
                <a
                  href="https://www.helloasso.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-green-500 text-white px-12 py-6 text-xl rounded-full
                           hover:bg-green-400 transition-all duration-300 transform hover:-translate-y-1
                           shadow-lg hover:shadow-xl group w-full md:w-auto"
                >
                  <span>Faire un don sur HelloAsso</span>
                  <ExternalLink className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Partenaires */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Users className="w-6 h-6 text-green-600" />
              <h2 className="text-3xl font-bold text-green-800">
                Nos partenaires
              </h2>
            </div>
            <div className="space-y-6 text-gray-600">
              <p>
                Au niveau régional, national et international, nous sommes les
                témoins d'une forte solidarité. Chacun d'entre eux est persuadé
                du bien fondé de nos actions. Ils nous font ainsi confiance pour
                poursuivre nos convictions. Nous leur en sommes très
                reconnaissants et souhaitons que chacun de ces partenariats
                perdure.
              </p>
              <p>Grâce à eux, notre crédo prend vie :</p>
              <p className="text-xl font-semibold text-green-700 italic">
                "Ensemble, luttons contre la malnutrition"
              </p>
              <p className="text-2xl font-bold text-green-800 mt-8">MERCI</p>
            </div>
          </div>

          {/* Grille des logos partenaires */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((partner) => (
              <div
                key={partner}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">
                    Logo partenaire {partner}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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

export default NousSoutenir;
