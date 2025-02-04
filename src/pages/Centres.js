import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPinned } from "lucide-react";
import { AnimatedSection } from "../components/AnimatedSection";

const Centres = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

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
    { src: "/images/Mahitsy4.jpg", alt: "Mahitsy4" },
    { src: "/images/Mahitsy1.jpg", alt: "Mahitsy5" },
    { src: "/images/Mahitsy2.jpg", alt: "Mahitsy6" },
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
    <div className="min-h-screen overflow-x-hidden">
      <div className="h-20"></div>

      <div className="relative h-[85vh] md:h-[90vh] bg-green-900">
        {/* Fond et overlay */}
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
              className="relative h-[300px] md:h-[500px] rounded-lg overflow-hidden shadow-xl order-1 md:order-2"
            >
              {images2.map((image2, index) => (
                <img
                  key={image2.src}
                  src={image2.src}
                  alt={image2.alt}
                  className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
                    index === currentIndex ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
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
              className="relative h-[300px] md:h-[500px] rounded-lg overflow-hidden shadow-xl"
            >
              {images3.map((image, index) => (
                <img
                  key={image.src}
                  src={image.src}
                  alt={image.alt}
                  className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
                    index === currentIndex ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
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
              className="relative h-[300px] md:h-[500px] rounded-lg overflow-hidden shadow-xl order-1 md:order-2"
            >
              {images4.map((image2, index) => (
                <img
                  key={image2.src}
                  src={image2.src}
                  alt={image2.alt}
                  className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
                    index === currentIndex ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </AnimatedSection>
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

export default Centres;
