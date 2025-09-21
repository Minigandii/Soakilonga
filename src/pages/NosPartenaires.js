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

  // Liste des partenaires avec leurs vrais logos
  const partenaires = [
    {
      nom: "Wakamoun",
      logo: "/images/partners/wakamoun.jpg",
      url: "https://www.wakamoun.fr",
      categorie: "Associatif",
    },
    {
      nom: "Secours Populaire Français",
      logo: "/images/partners/secours-populaire.jpg",
      url: "https://www.secourspopulaire.fr",
      categorie: "Associatif",
    },
    {
      nom: "Département de la Réunion",
      logo: "/images/partners/reunion.jpg",
      url: "https://www.departement974.fr",
      categorie: "Institutionnel",
    },
    {
      nom: "Médecins de l'Océan Indien",
      logo: "/images/partners/moi.jpg",
      url: "https://www.moi-asso.com",
      categorie: "Médical",
    },
    {
      nom: "Mieux Nourrir et Grandir",
      logo: "/images/partners/mieux-nourrir.jpg",
      url: "https://www.mieuxnourriretgrandir.org/",
      categorie: "Institutionnel",
    },
    {
      nom: "Epigasy",
      logo: "/images/partners/epigasy.jpg",
      url: "https://www.epigasy.org/",
      categorie: "Formation professionnelle",
    },
    {
      nom: "Shumei Natural Agriculture",
      logo: "/images/partners/shumei.jpg",
      url: "https://shumeinaturalagriculture.com",
      categorie: "Agriculture",
    },
    {
      nom: "Nehemia",
      logo: "/images/partners/nehemia.jpg",
      url: "https://www.nehemia.org",
      categorie: "Associatif",
    },
    {
      nom: "Fondation EcoFormation",
      logo: "/images/partners/ecoformation.jpg",
      url: "http://ecoformation.org/fr/accueil/",
      categorie: "Environnement",
    },
    {
      nom: "Agri Nature Madagascar",
      logo: "/images/partners/agrinature.jpg",
      url: "https://www.facebook.com/p/Agrinature-Madagascar-100009956809257/",
      categorie: "Agriculture",
    },
    {
      nom: "Ville de Mulhouse",
      logo: "/images/partners/mulhouse.jpg",
      url: "https://www.mulhouse.fr",
      categorie: "Institutionnel",
    },
    {
      nom: "Artisans du Monde",
      logo: "/images/partners/artisans-du-monde.jpg",
      url: "https://www.artisansdumonde.org",
      categorie: "Commerce équitable",
    },
    {
      nom: "Aviation Sans Frontières",
      logo: "/images/partners/aviation.jpg",
      url: "https://www.aviation-sans-frontieres.org",
      categorie: "Logistique",
    },
    {
      nom: "Scouts et Guides de France",
      logo: "/images/partners/scouts.jpg",
      url: "https://www.sgdf.fr",
      categorie: "Éducation",
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

      {/* Grille des partenaires */}
      <section className="py-12 bg-green-50">
        <div className="container mx-auto px-4">
          {/* Affichage en grille simple */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {partenaires.map((partenaire, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full group"
              >
                {/* Logo */}
                <div className="h-32 bg-gray-50 mb-4 rounded-lg flex items-center justify-center overflow-hidden">
                  <img
                    src={partenaire.logo}
                    alt={partenaire.nom}
                    className="max-w-full max-h-full object-contain filter group-hover:brightness-110 transition-all duration-300"
                  />
                </div>

                {/* Contenu */}
                <div className="flex flex-col flex-grow">
                  <div className="mb-3">
                    <span className="text-xs font-medium bg-green-100 text-green-800 px-2 py-1 rounded-full">
                      {partenaire.categorie}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-green-800 mb-2 flex items-center">
                    {partenaire.nom}
                    {partenaire.url && (
                      <ExternalLink className="w-4 h-4 ml-2 text-green-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </h3>
                </div>

                {/* Lien invisible pour toute la carte */}
                {partenaire.url && (
                  <a
                    href={partenaire.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 z-10"
                    aria-label={`Visiter le site de ${partenaire.nom}`}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Message de remerciement */}
          <div className="text-center">
            <div className="bg-green-100 rounded-2xl p-8 max-w-3xl mx-auto">
              <p className="text-green-800 text-lg font-medium">
                Cette collaboration avec nos partenaires nous permet de
                maximiser notre impact et d'atteindre plus d'enfants et de
                familles dans le besoin. Ensemble, nous construisons un avenir
                plus solidaire pour Madagascar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default NosPartenaires;
