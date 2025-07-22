import React, { useState, useEffect } from "react";
import {
  Heart,
  ArrowRight,
  GraduationCap,
  Dumbbell,
  Leaf,
  Users,
  Target,
} from "lucide-react";
import { AnimatedSection } from "../components/AnimatedSection";
import Footer from "../components/Footer";

const NosActions = () => {
  const images = [
    { src: "/images/NosActions1.jpg", alt: "Madagascar 1" },
    { src: "/images/NosActions2.jpg", alt: "Madagascar 2" },
    { src: "/images/NosActions3.jpg", alt: "Madagascar 3" },
    { src: "/images/NosActions4.jpg", alt: "Madagascar 4" },
    { src: "/images/NosActions5.jpg", alt: "Madagascar 5" },
  ];

  const images2 = [
    { src: "/images/Soin1.jpg", alt: "Soin1" },
    { src: "/images/Soin2.jpg", alt: "Soin2" },
    { src: "/images/Soin3.jpg", alt: "Soin3" },
    { src: "/images/Soin4.jpg", alt: "Soin4" },
    { src: "/images/Soin5.jpg", alt: "Soin5" },
  ];

  const images3 = [
    { src: "/images/Educ1.jpg", alt: "Soin1" },
    { src: "/images/Educ2.jpg", alt: "Soin2" },
    { src: "/images/Educ3.jpg", alt: "Soin3" },
    { src: "/images/Educ4.jpg", alt: "Soin4" },
    { src: "/images/Educ5.jpg", alt: "Soin5" },
  ];

  const images4 = [
    { src: "/images/Sport1.jpg", alt: "Sport1" },
    { src: "/images/Sport2.jpg", alt: "Sport2" },
    { src: "/images/Sport3.jpg", alt: "Sport3" },
    { src: "/images/Sport4.jpg", alt: "Sport4" },
    { src: "/images/Sport5.jpg", alt: "Sport5" },
  ];

  const images5 = [
    { src: "/images/Agri1.jpg", alt: "Agri1" },
    { src: "/images/Agri2.jpg", alt: "Agri2" },
    { src: "/images/Agri3.jpg", alt: "Agri3" },
    { src: "/images/Agri4.jpg", alt: "Agri4" },
    { src: "/images/Agri1.jpg", alt: "Agri5" },
  ];

  const images6 = [
    { src: "/images/Femme1.jpg", alt: "Femme1" },
    { src: "/images/Femme2.jpg", alt: "Femme2" },
    { src: "/images/Femme1.jpg", alt: "Femme3" },
    { src: "/images/Femme2.jpg", alt: "Femme4" },
    { src: "/images/Femme1.jpg", alt: "Femme5" },
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
    <div className="min-h-screen overflow-x-hidden">
      {/* Espaceur pour navbar fixe */}
      <div className="h-20"></div>

      {/* Hero Section */}
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

        {/* Contenu centré avec animation */}
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
                  <Target className="w-12 h-12 text-white/90 animate-pulse" />
                </div>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6">
                Nos Actions
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-white/90">
                Un engagement multi-facettes pour un impact durable, ciblant les
                besoins urgents des communautés vulnérables de Madagascar.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section Malnutrition et santé */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left" className="space-y-6">
              <div className="flex items-center gap-2 text-green-800">
                <div className="bg-green-100 rounded-full p-3">
                  <Heart className="w-6 h-6 text-green-700" />
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-700">
                  Malnutrition et accès à la santé
                </h2>
              </div>
              <p className="text-base sm:text-lg text-gray-700">
                À Madagascar, la malnutrition infantile reste l'un des défis les
                plus pressants. Nous mettons en place des cures nutritionnelles
                pour les enfants souffrant de dénutrition modérée à sévère.
              </p>
              <ul className="space-y-2 text-base sm:text-lg text-gray-700">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 mt-1 text-green-600 flex-shrink-0" />
                  <span>
                    Hygiène bucco-dentaire, procédé du brossage des dents
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 mt-1 text-green-600 flex-shrink-0" />
                  <span>Procédé et importance du lavage des mains</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 mt-1 text-green-600 flex-shrink-0" />
                  <span>
                    Hygiène de la jeune mère allaitante face à son nourrisson
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 mt-1 text-green-600 flex-shrink-0" />
                  <span>Hygiène menstruelle</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 mt-1 text-green-600 flex-shrink-0" />
                  <span>Hygiène hydrique, dangers de l'eau non potable</span>
                </li>
              </ul>
              <p className="text-base sm:text-lg text-gray-700">
                En parallèle, nous avons structuré un système de soins de santé
                primaires dans nos centres. Dans chaque centre, il y a un
                salarié professionnel de santé (infirmière ou sage-femme) qui
                assure des consultations régulières ou des soins médicaux
                d'urgence. En plus de cela, tous les salariés sont formés à la
                sensibilisation sanitaire des populations.
              </p>
            </AnimatedSection>
            <AnimatedSection
              direction="right"
              className="relative h-[300px] md:h-[400px] overflow-hidden rounded-lg shadow-xl"
            >
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
          </div>
        </div>
      </section>

      {/* Section Éducation */}
      <section className="py-16 md:py-24 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection
              direction="left"
              className="relative h-[300px] md:h-[400px] overflow-hidden rounded-lg shadow-xl order-2 md:order-1"
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
            <AnimatedSection
              direction="right"
              className="space-y-6 order-1 md:order-2"
            >
              <div className="flex items-center gap-2 text-green-800">
                <div className="bg-green-100 rounded-full p-3">
                  <GraduationCap className="w-6 h-6 text-green-700" />
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-700">
                  Éducation
                </h2>
              </div>
              <p className="text-base sm:text-lg text-gray-700">
                Chacun de nos centres dispose d'une bibliothèque à destination
                des tout-petits comme des adultes. Vecteur de culture et
                d'éducation, nous mettons un point d'honneur à ce que chaque
                enfant prenne la liberté de consulter des livres pour
                s'instruire en toute autonomie.
              </p>
              <p className="text-base sm:text-lg text-gray-700">
                Nos salariés dispensent de cours de français ou de séances de
                soutien scolaire pour les enfants bénéficiaires. Maîtriser la
                langue française est la clé d'une ascension sociale et d'un
                accès à l'emploi. Toujours dans l'optique d'égalité des chances,
                il est essentiel pour nous d'intervenir aussi sur ce secteur.
              </p>
              <p className="text-base sm:text-lg text-gray-700">
                Nous offrons également des formations professionnelles aux
                femmes (couture, broderie, vannerie, cuisine), afin de renforcer
                leur indépendance économique. Ces initiatives visent à améliorer
                le statut des femmes dans la société malgache.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Section Sport */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left" className="space-y-6">
              <div className="flex items-center gap-2 text-green-800">
                <div className="bg-green-100 rounded-full p-3">
                  <Dumbbell className="w-6 h-6 text-green-700" />
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-700">
                  Sport
                </h2>
              </div>
              <p className="text-base sm:text-lg text-gray-700">
                Très lié au domaine sanitaire de nutrition, le sport joue un
                rôle important dans les actions de Soakilonga. Il permet de
                renforcer les liens sociaux, de promouvoir l'égalité entre les
                sexes, et d'apprendre des valeurs comme le respect et la
                solidarité. Nous mettons un point d'honneur à avoir du matériel
                sportif de qualité pour une pratique optimale et une découverte
                de sports méconnus des populations (tennis de table, ultimate,
                slakline…).
              </p>
              <p className="text-base sm:text-lg text-gray-700">
                Nous organisons régulièrement des événements sportifs pour les
                jeunes, avec un accent particulier sur l'inclusion des jeunes
                filles dans des sports traditionnellement dominés par les
                garçons.
              </p>
            </AnimatedSection>
            <AnimatedSection
              direction="right"
              className="relative h-[300px] md:h-[400px] overflow-hidden rounded-lg shadow-xl"
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
          </div>
        </div>
      </section>

      {/* Section Agriculture */}
      <section className="py-16 md:py-24 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection
              direction="left"
              className="relative h-[300px] md:h-[400px] overflow-hidden rounded-lg shadow-xl order-2 md:order-1"
            >
              {images5.map((image5, index) => (
                <img
                  key={`${image5.src}-${index}`}
                  src={image5.src}
                  alt={image5.alt}
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
                  <Leaf className="w-6 h-6 text-green-700" />
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-700">
                  Agriculture durable
                </h2>
              </div>
              <p className="text-base sm:text-lg text-gray-700">
                En réponse aux crises alimentaires récurrentes, Soakilonga a mis
                en place des potagers pédagogiques dans ses centres. Ces
                initiatives permettent d'améliorer l'approvisionnement
                alimentaire tout en formant les familles à des pratiques
                agricoles écologiques. Par cela, elle accompagne les familles
                vers une auto-suffisance alimentaire et sensibilise à la
                nécessité d'une alimentation équilibrée et variée.
              </p>
              <p className="text-base sm:text-lg text-gray-700">
                Nous avons également sur des projets agricoles générateurs de
                revenus, comme la production de miel, qui permet aux familles
                d'obtenir un revenu supplémentaire.
              </p>
              <p className="text-base sm:text-lg text-gray-700">
                Ces projets d'agricultures sont en lien avec une de nos action
                sous-jacente : la sensibilisation écologique. Pour lutter contre
                la crise climatique, véritable fléau dans les régions du Sud, il
                est important pour nous que nos centres soient reboisés et
                deviennent des ambassadeurs du développement durable. Nous
                travaillons sur des sensibilisations et des actions de collectes
                de déchets ainsi que sur le désastre que cause le brûlage des
                déchets.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Section Promotion féminine */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left" className="space-y-6">
              <div className="flex items-center gap-2 text-green-800">
                <div className="bg-green-100 rounded-full p-3">
                  <Users className="w-6 h-6 text-green-700" />
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-700">
                  Promotion féminine
                </h2>
              </div>
              <p className="text-base sm:text-lg text-gray-700">
                Dans ce pays en développement, les femmes sont plus touchées par
                la précarité. Dans nos trois centres, les sessions de promotion
                féminines sont régulièrement mises en place pour créer un lieu
                de confiance où les femmes peuvent s'épanouir et apprendre des
                techniques professionnelles.
              </p>
              <p className="text-base sm:text-lg text-gray-700">
                Des ateliers de confiance en soi, d'empowerment et de sports
                réservés aux femmes sont proposés, ainsi que des formations en
                couture, broderie, crochet, vannerie et cuisine équilibrée.
              </p>
            </AnimatedSection>
            <AnimatedSection
              direction="right"
              className="relative h-[300px] md:h-[400px] overflow-hidden rounded-lg shadow-xl"
            >
              {images6.map((image6, index) => (
                <img
                  key={`${image6.src}-${index}`}
                  src={image6.src}
                  alt={image6.alt}
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
      <Footer />
    </div>
  );
};

export default NosActions;
