import React, { useState, useEffect } from "react";
import { MapPinned, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatedSection } from "../components/AnimatedSection";
import Footer from "../components/Footer";

const Centres = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndexMahitsy, setCurrentIndexMahitsy] = useState(0);
  const [currentIndexTsarazaza, setCurrentIndexTsarazaza] = useState(0);
  const [currentIndexIhosy, setCurrentIndexIhosy] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // États pour les contrôles tactiles
  const [showControlsMahitsy, setShowControlsMahitsy] = useState(false);
  const [showControlsTsarazaza, setShowControlsTsarazaza] = useState(false);
  const [showControlsIhosy, setShowControlsIhosy] = useState(false);

  // Images pour le carousel du hero
  const images = [
    { src: "/images/NosCentres1.jpg", alt: "Madagascar 1" },
    { src: "/images/NosCentres2.jpg", alt: "Madagascar 2" },
    { src: "/images/NosCentres3.jpg", alt: "Madagascar 3" },
    { src: "/images/NosCentres4.jpg", alt: "Madagascar 4" },
    { src: "/images/NosCentres5.jpg", alt: "Madagascar 5" },
    { src: "/images/NosCentres6.jpg", alt: "Madagascar 6" },
  ];

  const images2 = [
    { src: "/images/Mahitsy1.jpg", alt: "Mahitsy1" },
    { src: "/images/Mahitsy2.jpg", alt: "Mahitsy2" },
    { src: "/images/Mahitsy3.jpg", alt: "Mahitsy3" },
    { src: "/images/Mahitsy1.jpg", alt: "Mahitsy4" },
    { src: "/images/Mahitsy2.jpg", alt: "Mahitsy5" },
    { src: "/images/Mahitsy3.jpg", alt: "Mahitsy6" },
  ];

  const images3 = [
    { src: "/images/Tsarazaza1.jpg", alt: "Tsarazaza1" },
    { src: "/images/Tsarazaza2.jpg", alt: "Tsarazaza2" },
    { src: "/images/Tsarazaza3.jpg", alt: "Tsarazaza3" },
    { src: "/images/Tsarazaza4.jpg", alt: "Tsarazaza4" },
    { src: "/images/Tsarazaza1.jpg", alt: "Tsarazaza5" },
    { src: "/images/Tsarazaza2.jpg", alt: "Tsarazaza6" },
  ];

  const images4 = [
    { src: "/images/Ihosy1.jpg", alt: "Ihosy1" },
    { src: "/images/Ihosy2.jpg", alt: "Ihosy2" },
    { src: "/images/Ihosy3.jpg", alt: "Ihosy3" },
    { src: "/images/Ihosy1.jpg", alt: "Ihosy4" },
    { src: "/images/Ihosy2.jpg", alt: "Ihosy5" },
    { src: "/images/Ihosy3.jpg", alt: "Ihosy6" },
  ];

  // Fonctions de navigation pour Mahitsy
  const goToPreviousMahitsy = () => {
    setCurrentIndexMahitsy((prevIndex) =>
      prevIndex === 0 ? images2.length - 1 : prevIndex - 1
    );
  };

  const goToNextMahitsy = () => {
    setCurrentIndexMahitsy((prevIndex) =>
      prevIndex === images2.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Fonctions de navigation pour Tsarazaza
  const goToPreviousTsarazaza = () => {
    setCurrentIndexTsarazaza((prevIndex) =>
      prevIndex === 0 ? images3.length - 1 : prevIndex - 1
    );
  };

  const goToNextTsarazaza = () => {
    setCurrentIndexTsarazaza((prevIndex) =>
      prevIndex === images3.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Fonctions de navigation pour Ihosy
  const goToPreviousIhosy = () => {
    setCurrentIndexIhosy((prevIndex) =>
      prevIndex === 0 ? images4.length - 1 : prevIndex - 1
    );
  };

  const goToNextIhosy = () => {
    setCurrentIndexIhosy((prevIndex) =>
      prevIndex === images4.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Gestion du swipe pour Mahitsy
  const handleTouchStartMahitsy = (e) => {
    setShowControlsMahitsy(true);
    const touch = e.touches[0];
    e.currentTarget.startX = touch.clientX;
    e.currentTarget.startY = touch.clientY;
  };

  const handleTouchMoveMahitsy = (e) => {
    if (!e.currentTarget.startX || !e.currentTarget.startY) return;

    const touch = e.touches[0];
    const diffX = e.currentTarget.startX - touch.clientX;
    const diffY = e.currentTarget.startY - touch.clientY;

    // Vérifier que le swipe est plus horizontal que vertical
    if (Math.abs(diffX) > Math.abs(diffY)) {
      e.preventDefault(); // Empêcher le scroll de la page
    }
  };

  const handleTouchEndMahitsy = (e) => {
    if (!e.currentTarget.startX || !e.currentTarget.startY) return;

    const touch = e.changedTouches[0];
    const diffX = e.currentTarget.startX - touch.clientX;
    const diffY = e.currentTarget.startY - touch.clientY;

    // Seuil minimum pour déclencher le swipe
    const threshold = 50;

    // Vérifier que le swipe est plus horizontal que vertical
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > threshold) {
      if (diffX > 0) {
        goToNextMahitsy(); // Swipe vers la gauche = image suivante
      } else {
        goToPreviousMahitsy(); // Swipe vers la droite = image précédente
      }
    }

    // Masquer les contrôles après 3 secondes
    setTimeout(() => setShowControlsMahitsy(false), 3000);

    // Nettoyer
    e.currentTarget.startX = null;
    e.currentTarget.startY = null;
  };

  // Gestion du swipe pour Tsarazaza
  const handleTouchStartTsarazaza = (e) => {
    setShowControlsTsarazaza(true);
    const touch = e.touches[0];
    e.currentTarget.startX = touch.clientX;
    e.currentTarget.startY = touch.clientY;
  };

  const handleTouchMoveTsarazaza = (e) => {
    if (!e.currentTarget.startX || !e.currentTarget.startY) return;

    const touch = e.touches[0];
    const diffX = e.currentTarget.startX - touch.clientX;
    const diffY = e.currentTarget.startY - touch.clientY;

    if (Math.abs(diffX) > Math.abs(diffY)) {
      e.preventDefault();
    }
  };

  const handleTouchEndTsarazaza = (e) => {
    if (!e.currentTarget.startX || !e.currentTarget.startY) return;

    const touch = e.changedTouches[0];
    const diffX = e.currentTarget.startX - touch.clientX;
    const diffY = e.currentTarget.startY - touch.clientY;

    const threshold = 50;

    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > threshold) {
      if (diffX > 0) {
        goToNextTsarazaza();
      } else {
        goToPreviousTsarazaza();
      }
    }

    setTimeout(() => setShowControlsTsarazaza(false), 3000);

    e.currentTarget.startX = null;
    e.currentTarget.startY = null;
  };

  // Gestion du swipe pour Ihosy
  const handleTouchStartIhosy = (e) => {
    setShowControlsIhosy(true);
    const touch = e.touches[0];
    e.currentTarget.startX = touch.clientX;
    e.currentTarget.startY = touch.clientY;
  };

  const handleTouchMoveIhosy = (e) => {
    if (!e.currentTarget.startX || !e.currentTarget.startY) return;

    const touch = e.touches[0];
    const diffX = e.currentTarget.startX - touch.clientX;
    const diffY = e.currentTarget.startY - touch.clientY;

    if (Math.abs(diffX) > Math.abs(diffY)) {
      e.preventDefault();
    }
  };

  const handleTouchEndIhosy = (e) => {
    if (!e.currentTarget.startX || !e.currentTarget.startY) return;

    const touch = e.changedTouches[0];
    const diffX = e.currentTarget.startX - touch.clientX;
    const diffY = e.currentTarget.startY - touch.clientY;

    const threshold = 50;

    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > threshold) {
      if (diffX > 0) {
        goToNextIhosy();
      } else {
        goToPreviousIhosy();
      }
    }

    setTimeout(() => setShowControlsIhosy(false), 3000);

    e.currentTarget.startX = null;
    e.currentTarget.startY = null;
  };

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, [images.length]);

  // Timers séparés pour chaque carousel
  useEffect(() => {
    const timerMahitsy = setInterval(() => {
      setCurrentIndexMahitsy((prevIndex) =>
        prevIndex === images2.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(timerMahitsy);
  }, [images2.length]);

  useEffect(() => {
    const timerTsarazaza = setInterval(() => {
      setCurrentIndexTsarazaza((prevIndex) =>
        prevIndex === images3.length - 1 ? 0 : prevIndex + 1
      );
    }, 4500);

    return () => clearInterval(timerTsarazaza);
  }, [images3.length]);

  useEffect(() => {
    const timerIhosy = setInterval(() => {
      setCurrentIndexIhosy((prevIndex) =>
        prevIndex === images4.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timerIhosy);
  }, [images4.length]);

  return (
    <div className="min-h-screen overflow-x-hidden">
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
                  <MapPinned className="w-12 h-12 text-white/90 animate-pulse" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Nos Centres
              </h1>
              <p className="text-xl text-white/90">
                Découvrez nos trois centres principaux à Madagascar, chacun
                offrant des services essentiels pour lutter contre la
                malnutrition, améliorer la santé et promouvoir l'éducation dans
                les communautés locales.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Centre: Mahitsy */}
      <section className="py-16 md:py-24 relative">
        <div className="bg-green-50/50 absolute inset-0 w-full h-full" />

        <div className="container mx-auto px-4 relative">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <AnimatedSection
              direction="left"
              className="space-y-6 bg-green-50/80 p-8 rounded-2xl backdrop-blur-sm order-2 md:order-1"
            >
              <h2 className="text-3xl font-bold text-green-900">
                Centre de Mahitsy
              </h2>
              <p className="text-gray-700">
                Le centre de Mahitsy est le premier centre établi par
                Soakilonga. Situé en zone péri-urbaine, à 30 minutes
                d'Antananarivo, la capitale, il est devenu un modèle de succès
                dans la lutte contre la malnutrition infantile. Nous y offrons
                des cures nutritionnelles pour les enfants souffrant de
                dénutrition, ainsi que des consultations de santé primaires pour
                les familles vulnérables.
              </p>
              <p className="text-gray-700">
                En plus de cela, nous développons beaucoup nos actions
                éducatives, sportives et d'agriculture. En effet, ce centre
                principal fait aussi office de référence principale aux autres
                centres de Ihosy et Tsarazaza.
              </p>
              <p className="text-gray-700">
                Grâce à une équipe dédiée et à des programmes éducatifs pour les
                jeunes, nous avons observé une baisse significative des taux de
                malnutrition dans cette région.
              </p>
            </AnimatedSection>

            <AnimatedSection
              direction="right"
              className="relative h-[300px] md:h-[500px] rounded-lg overflow-hidden shadow-xl order-1 md:order-2 group"
            >
              <div
                className="w-full h-full"
                onTouchStart={handleTouchStartMahitsy}
                onTouchMove={handleTouchMoveMahitsy}
                onTouchEnd={handleTouchEndMahitsy}
              >
                {images2.map((image2, index) => (
                  <img
                    key={`${image2.src}-${index}`}
                    src={image2.src}
                    alt={image2.alt}
                    className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
                      index === currentIndexMahitsy
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                  />
                ))}

                {/* Flèche gauche */}
                <button
                  onClick={goToPreviousMahitsy}
                  className={`absolute left-4 top-1/2 transform -translate-y-1/2 
                             bg-white/80 hover:bg-white text-gray-800 
                             rounded-full p-2 shadow-lg transition-all duration-200
                             ${
                               showControlsMahitsy
                                 ? "opacity-100"
                                 : "opacity-0 group-hover:opacity-100"
                             }`}
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Flèche droite */}
                <button
                  onClick={goToNextMahitsy}
                  className={`absolute right-4 top-1/2 transform -translate-y-1/2 
                             bg-white/80 hover:bg-white text-gray-800 
                             rounded-full p-2 shadow-lg transition-all duration-200
                             ${
                               showControlsMahitsy
                                 ? "opacity-100"
                                 : "opacity-0 group-hover:opacity-100"
                             }`}
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Indicateurs */}
                <div
                  className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 
                                flex space-x-2 transition-opacity
                                ${
                                  showControlsMahitsy
                                    ? "opacity-100"
                                    : "opacity-0 group-hover:opacity-100"
                                }`}
                >
                  {images2.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndexMahitsy(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentIndexMahitsy
                          ? "bg-white"
                          : "bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Centre: Tsarazaza */}
      <section className="py-16 md:py-24 relative">
        <div className="bg-green-50/50 absolute inset-0 w-full h-full" />

        <div className="container mx-auto px-4 relative">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <AnimatedSection
              direction="left"
              className="relative h-[300px] md:h-[500px] rounded-lg overflow-hidden shadow-xl group"
            >
              <div
                className="w-full h-full"
                onTouchStart={handleTouchStartTsarazaza}
                onTouchMove={handleTouchMoveTsarazaza}
                onTouchEnd={handleTouchEndTsarazaza}
              >
                {images3.map((image3, index) => (
                  <img
                    key={`${image3.src}-${index}`}
                    src={image3.src}
                    alt={image3.alt}
                    className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
                      index === currentIndexTsarazaza
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                  />
                ))}

                {/* Flèche gauche */}
                <button
                  onClick={goToPreviousTsarazaza}
                  className={`absolute left-4 top-1/2 transform -translate-y-1/2 
                             bg-white/80 hover:bg-white text-gray-800 
                             rounded-full p-2 shadow-lg transition-all duration-200
                             ${
                               showControlsTsarazaza
                                 ? "opacity-100"
                                 : "opacity-0 group-hover:opacity-100"
                             }`}
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Flèche droite */}
                <button
                  onClick={goToNextTsarazaza}
                  className={`absolute right-4 top-1/2 transform -translate-y-1/2 
                             bg-white/80 hover:bg-white text-gray-800 
                             rounded-full p-2 shadow-lg transition-all duration-200
                             ${
                               showControlsTsarazaza
                                 ? "opacity-100"
                                 : "opacity-0 group-hover:opacity-100"
                             }`}
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Indicateurs */}
                <div
                  className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 
                                flex space-x-2 transition-opacity
                                ${
                                  showControlsTsarazaza
                                    ? "opacity-100"
                                    : "opacity-0 group-hover:opacity-100"
                                }`}
                >
                  {images3.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndexTsarazaza(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentIndexTsarazaza
                          ? "bg-white"
                          : "bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection
              direction="right"
              className="space-y-6 bg-green-50/80 p-8 rounded-2xl backdrop-blur-sm"
            >
              <h2 className="text-3xl font-bold text-green-900">
                Centre de Tsarazaza
              </h2>
              <p className="text-gray-700">
                Situé dans une région rurale, à 13h de route de la capitale et
                2h de la plus grande ville, Fandriana, le centre est très
                reculé, isolé de toutes véritables infrastructures (électricité,
                eau potable, éducation…).
              </p>
              <p className="text-gray-700">
                Fortement touchée par la crise alimentaire due à la destruction
                des rizières et la pollution des rivières, le centre de
                Tsarazaza est au cœur de la lutte pour la sécurité alimentaire.
                Nous y avons mis en place un programme de nutrition renforcé et
                un soutien médical pour prévenir les maladies liées à la
                malnutrition.
              </p>
              <p className="text-gray-700">
                En plus des soins de santé, nous offrons des formations
                agricoles pour aider les familles à adopter des pratiques plus
                durables et résilientes face aux crises environnementales.
              </p>
              <p className="text-gray-700">
                Les axes éducatifs et sportifs sont aussi développés dans ce
                centre. Nous mettons en place des séances de français destinés
                aux jeunes enfants et aux adolescents ainsi que des séances
                sportives (baskets, football, ping-pong, slackline).
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Centre: Ihosy */}
      <section className="py-16 md:py-24 relative">
        <div className="bg-green-50/50 absolute inset-0 w-full h-full" />

        <div className="container mx-auto px-4 relative">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <AnimatedSection
              direction="left"
              className="space-y-6 bg-green-50/80 p-8 rounded-2xl backdrop-blur-sm order-2 md:order-1"
            >
              <h2 className="text-3xl font-bold text-green-900">
                Centre d'Ihosy
              </h2>
              <p className="text-gray-700">
                Le centre d'Ihosy est spécialisé dans la mise en œuvre de
                projets agricoles innovants pour lutter contre la pénurie
                alimentaire. Nos initiatives comprennent des potagers
                pédagogiques et des formations sur l'agriculture durable pour
                aider les familles à améliorer leurs rendements et à subvenir à
                leurs besoins.
              </p>
              <p className="text-gray-700">
                Nous intervenons aussi sur de nombreux sites (écoles et
                villages) pour les cures alimentaires et les sensibilisation
                sanitaires.
              </p>
              <p className="text-gray-700">
                Ce centre offre également des services de santé et d'éducation,
                avec un accent particulier sur l'autonomisation des femmes grâce
                à des programmes de formation professionnelle et
                d'alphabétisation.
              </p>
            </AnimatedSection>

            <AnimatedSection
              direction="right"
              className="relative h-[300px] md:h-[500px] rounded-lg overflow-hidden shadow-xl order-1 md:order-2 group"
            >
              <div
                className="w-full h-full"
                onTouchStart={handleTouchStartIhosy}
                onTouchMove={handleTouchMoveIhosy}
                onTouchEnd={handleTouchEndIhosy}
              >
                {images4.map((image4, index) => (
                  <img
                    key={`${image4.src}-${index}`}
                    src={image4.src}
                    alt={image4.alt}
                    className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
                      index === currentIndexIhosy ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}

                {/* Flèche gauche */}
                <button
                  onClick={goToPreviousIhosy}
                  className={`absolute left-4 top-1/2 transform -translate-y-1/2 
                             bg-white/80 hover:bg-white text-gray-800 
                             rounded-full p-2 shadow-lg transition-all duration-200
                             ${
                               showControlsIhosy
                                 ? "opacity-100"
                                 : "opacity-0 group-hover:opacity-100"
                             }`}
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Flèche droite */}
                <button
                  onClick={goToNextIhosy}
                  className={`absolute right-4 top-1/2 transform -translate-y-1/2 
                             bg-white/80 hover:bg-white text-gray-800 
                             rounded-full p-2 shadow-lg transition-all duration-200
                             ${
                               showControlsIhosy
                                 ? "opacity-100"
                                 : "opacity-0 group-hover:opacity-100"
                             }`}
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Indicateurs */}
                <div
                  className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 
                                flex space-x-2 transition-opacity
                                ${
                                  showControlsIhosy
                                    ? "opacity-100"
                                    : "opacity-0 group-hover:opacity-100"
                                }`}
                >
                  {images4.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndexIhosy(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentIndexIhosy ? "bg-white" : "bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Centres;
