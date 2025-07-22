import React, { useState, useEffect } from "react";
import { Handshake, ExternalLink } from "lucide-react";
import Footer from "../components/Footer";

const NosPartenaires = () => {
  const images = [
    { src: "/images/NosCentres1.jpg", alt: "Partenaires 1" },
    { src: "/images/NosCentres2.jpg", alt: "Partenaires 2" },
    { src: "/images/NosCentres3.jpg", alt: "Partenaires 3" },
    { src: "/images/NosCentres4.jpg", alt: "Partenaires 4" },
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

  // Liste des partenaires avec leurs liens
  const partenaires = [
    {
      nom: "Wakamoun",
      description: "Partenaire principal en France",
      logo: "/images/logo-wakamoun.jpg",
      url: "https://www.wakamoun.fr",
      categorie: "Associatif",
    },
    {
      nom: "Vozama",
      description: "Collaboration sur les projets d'eau potable",
      logo: "/images/logo-vozama.jpg",
      url: "https://www.vozama.org",
      categorie: "Associatif",
    },
    {
      nom: "Antenna",
      description: "Partenaire institutionnel",
      logo: "/images/logo-sante.jpg",
      url: "https://antenna.ch",
      categorie: "Institutionnel",
    },
    {
      nom: "Association locale 1",
      description: "Partenaire local à Madagascar",
      logo: "/images/logo-asso1.jpg",
      url: "https://www.asso1.org",
      categorie: "Associatif",
    },
    {
      nom: "Entreprise 1",
      description: "Soutien financier de nos projets",
      logo: "/images/logo-entreprise1.jpg",
      url: "https://www.entreprise1.com",
      categorie: "Privé",
    },
    {
      nom: "Entreprise 2",
      description: "Partenaire pour la formation professionnelle",
      logo: "/images/logo-entreprise2.jpg",
      url: "https://www.entreprise2.com",
      categorie: "Privé",
    },
    {
      nom: "Fondation 1",
      description: "Soutien de nos actions éducatives",
      logo: "/images/logo-fondation1.jpg",
      url: "https://www.fondation1.org",
      categorie: "Associatif",
    },
    {
      nom: "Organisation internationale",
      description: "Partenaire pour la lutte contre la malnutrition",
      logo: "/images/logo-org1.jpg",
      url: "https://www.orgint.org",
      categorie: "Institutionnel",
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="h-20"></div>

      {/* Hero Section avec carousel - aligné avec les autres pages */}
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
                    <Handshake className="w-16 h-16 text-white/90 animate-pulse" />
                  </div>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  Nos Partenaires
                </h1>
                <p className="text-xl text-white/90 mb-6">
                  Des collaborations précieuses qui nous permettent de
                  poursuivre notre mission et d'accroître notre impact à
                  Madagascar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <p className="text-xl font-semibold text-green-700 italic mb-6">
              "Ensemble, luttons contre la malnutrition"
            </p>
            <p className="text-gray-600">
              Au niveau régional, national et international, nous sommes les
              témoins d'une forte solidarité. Nos partenaires sont convaincus du
              bien-fondé de nos actions et nous font confiance pour poursuivre
              nos missions. Nous leur en sommes très reconnaissants.
            </p>
          </div>
        </div>
      </section>

      {/* Grille des partenaires */}
      <section className="py-12 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {partenaires.map((partenaire, index) => (
              <a
                key={index}
                href={partenaire.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col h-full"
              >
                <div className="h-40 bg-gray-100 mb-4 rounded-md flex items-center justify-center">
                  <span className="text-gray-400">Logo {partenaire.nom}</span>
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-2 flex items-center">
                  {partenaire.nom}
                  <ExternalLink className="w-4 h-4 ml-2 text-green-600" />
                </h3>
                <div className="mb-2">
                  <span className="text-xs font-medium bg-green-100 text-green-800 px-2 py-1 rounded-full">
                    {partenaire.categorie}
                  </span>
                </div>
                <p className="text-gray-600 mt-auto">
                  {partenaire.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default NosPartenaires;
