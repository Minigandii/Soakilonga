import React, { createContext, useContext, useState, useCallback } from "react";

// Définition de toutes les images du site
export const SITE_IMAGES = {
  // Images critiques à charger en priorité
  critical: [
    { src: "/images/LogoSkl.jpg", alt: "Logo Soakilonga" },
    { src: "/images/Accueil1.jpg", alt: "Accueil 1" },
    { src: "/images/Accueil2.jpg", alt: "Accueil 2" },
  ],
  accueil: [
    { src: "/images/Accueil1.jpg", alt: "Accueil 1" },
    { src: "/images/Accueil2.jpg", alt: "Accueil 2" },
    { src: "/images/Accueil3.jpg", alt: "Accueil 3" },
    { src: "/images/Accueil4.jpg", alt: "Accueil 4" },
  ],
  actualites: [
    { src: "/images/Accueil4.jpg", alt: "Actualité 1" },
    { src: "/images/Accueil3.jpg", alt: "Actualité 2" },
    { src: "/images/Accueil2.jpg", alt: "Actualité 3" },
    { src: "/images/Accueil1.jpg", alt: "Actualité 4" },
  ],
  nousDecouvrir: [
    { src: "/images/NousDecouvrir1.jpg", alt: "Nous Découvrir 1" },
    { src: "/images/NousDecouvrir2.jpg", alt: "Nous Découvrir 2" },
    { src: "/images/NousDecouvrir3.jpg", alt: "Nous Découvrir 3" },
    { src: "/images/NousDecouvrir4.jpg", alt: "Nous Découvrir 4" },
  ],
  nosActions: [
    { src: "/images/NosActions1.jpg", alt: "Nos Actions 1" },
    { src: "/images/NosActions2.jpg", alt: "Nos Actions 2" },
    { src: "/images/NosActions3.jpg", alt: "Nos Actions 3" },
    { src: "/images/NosActions4.jpg", alt: "Nos Actions 4" },
    { src: "/images/NosActions5.jpg", alt: "Nos Actions 5" },
  ],
  centres: [
    { src: "/images/NosCentres1.jpg", alt: "Nos Centres 1" },
    { src: "/images/NosCentres2.jpg", alt: "Nos Centres 2" },
    { src: "/images/NosCentres3.jpg", alt: "Nos Centres 3" },
    { src: "/images/NosCentres4.jpg", alt: "Nos Centres 4" },
    { src: "/images/NosCentres5.jpg", alt: "Nos Centres 5" },
    { src: "/images/NosCentres6.jpg", alt: "Nos Centres 6" },
  ],
};

const ImagesContext = createContext();

export const ImagesProvider = ({ children }) => {
  const [loadedImages, setLoadedImages] = useState({});
  const [loading, setLoading] = useState(true);

  const preloadImage = useCallback(
    (src) => {
      return new Promise((resolve, reject) => {
        if (loadedImages[src]) {
          resolve(src);
          return;
        }

        const img = new Image();

        img.onload = () => {
          setLoadedImages((prev) => ({ ...prev, [src]: true }));
          resolve(src);
        };

        img.onerror = () => {
          console.error(`Erreur de chargement pour l'image: ${src}`);
          resolve(src); // On résout quand même pour ne pas bloquer le chargement
        };

        img.src = src;
      });
    },
    [loadedImages]
  );

  // Préchargement des images critiques uniquement
  const preloadCriticalImages = useCallback(async () => {
    try {
      const criticalImages = SITE_IMAGES.critical.map((img) => img.src);
      await Promise.all(criticalImages.map(preloadImage));
    } catch (error) {
      console.error("Erreur lors du chargement des images critiques:", error);
    }
  }, [preloadImage]);

  // Préchargement de toutes les images (excluant les critiques déjà chargées)
  const preloadAllImages = useCallback(async () => {
    if (!loading) return; // Éviter les chargements multiples

    try {
      const allImages = Object.entries(SITE_IMAGES)
        .filter(([key]) => key !== "critical") // Exclure les images critiques déjà chargées
        .flatMap(([_, images]) => images);

      const uniqueImages = [...new Set(allImages.map((img) => img.src))];

      // Charger par batch de 5 images avec délai
      const batchSize = 5;
      for (let i = 0; i < uniqueImages.length; i += batchSize) {
        const batch = uniqueImages.slice(i, i + batchSize);
        await Promise.all(batch.map(preloadImage));

        // Délai entre chaque batch pour ne pas surcharger
        if (i + batchSize < uniqueImages.length) {
          await new Promise((resolve) => setTimeout(resolve, 100));
        }
      }
    } catch (error) {
      console.error("Erreur lors du chargement des images:", error);
    } finally {
      setLoading(false);
    }
  }, [loading, preloadImage]);

  return (
    <ImagesContext.Provider
      value={{
        images: SITE_IMAGES,
        loading,
        preloadAllImages,
        preloadCriticalImages,
      }}
    >
      {children}
    </ImagesContext.Provider>
  );
};

export const useImages = () => {
  const context = useContext(ImagesContext);
  if (context === undefined) {
    throw new Error(
      "useImages doit être utilisé à l'intérieur d'un ImagesProvider"
    );
  }
  return context;
};
