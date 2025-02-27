import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { Newspaper } from "lucide-react";
import { useActualites } from "../context/ActualitesContext";

const Actualite = () => {
  const { actualites, loading } = useActualites();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

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
    <div className="min-h-screen">
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
                  <Newspaper className="w-12 h-12 text-white/90" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Actualités
              </h1>
              <p className="text-xl text-white/90">
                Découvrez les dernières nouvelles de nos centres et de nos
                actions à Madagascar
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Liste des actualités */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          {actualites.length === 0 ? (
            <div className="text-center text-gray-600">
              Aucune actualité n'est disponible pour le moment.
            </div>
          ) : (
            <div className="grid gap-8 max-w-4xl mx-auto">
              {actualites.map((actualite, index) => (
                <article
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  {actualite.image && (
                    <div className="relative h-64">
                      <img
                        src={actualite.image}
                        alt={actualite.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <p className="text-sm text-gray-500 mb-2">
                      {format(
                        new Date(actualite.date),
                        "d MMMM yyyy 'à' HH:mm",
                        {
                          locale: fr,
                        }
                      )}
                    </p>
                    <h2 className="text-2xl font-bold text-green-800 mb-4">
                      {actualite.title}
                    </h2>
                    {actualite.description && (
                      <p className="text-gray-600 mb-4">
                        {actualite.description}
                      </p>
                    )}
                    <div className="prose max-w-none whitespace-pre-wrap">
                      {actualite.body}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Actualite;
