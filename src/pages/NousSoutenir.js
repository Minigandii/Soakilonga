import React, { useState, useEffect } from "react";
import { Heart, ExternalLink, Clock } from "lucide-react";
import Footer from "../components/Footer";

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
  }, [images.length]);

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

      {/* Section impact des dons */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Clock className="w-6 h-6 text-green-600" />
              <h2 className="text-3xl font-bold text-green-800">
                L'impact de votre soutien
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-green-600 mb-2 text-center">
                10€
              </div>
              <p className="text-gray-600 text-center">
                Finance 5 repas complets et équilibrés pour des enfants
                souffrant de malnutrition
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-green-600 mb-2 text-center">
                30€
              </div>
              <p className="text-gray-600 text-center">
                Permet un suivi médical complet pour 3 enfants pendant un mois
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-green-600 mb-2 text-center">
                50€
              </div>
              <p className="text-gray-600 text-center">
                Finance du matériel éducatif et sportif pour 1 centre pendant un
                mois
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-green-600 mb-2 text-center">
                100€
              </div>
              <p className="text-gray-600 text-center">
                Finance une formation professionnelle pour 5 femmes en situation
                précaire
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-green-600 mb-2 text-center">
                200€
              </div>
              <p className="text-gray-600 text-center">
                Permet de démarrer un projet agricole durable bénéficiant à
                toute une communauté
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-green-600 mb-2 text-center">
                500€
              </div>
              <p className="text-gray-600 text-center">
                Finance la construction de systèmes d'accès à l'eau potable pour
                un village
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://www.helloasso.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-green-600 text-white px-8 py-4 text-lg rounded-full
                         hover:bg-green-500 transition-all duration-300 transform hover:-translate-y-1
                         shadow-lg hover:shadow-xl"
            >
              <Heart className="w-5 h-5" />
              <span>Faire un don maintenant</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default NousSoutenir;
