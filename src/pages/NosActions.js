import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Heart,
  ArrowRight,
  GraduationCap,
  Dumbbell,
  Leaf,
  Users,
  Phone,
  Mail,
  MapPinned,
} from "lucide-react";

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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="min-h-screen">
      {/* Espaceur pour navbar fixe */}
      <div className="h-20"></div>

      {/* Hero Section */}
      <div className="relative h-[85vh] md:h-[90vh] bg-green-900">
        {/* Fond et overlay avec carousel */}
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

        {/* Contenu centré */}
        <div className="relative z-20 h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
                Nos Actions
              </h1>
              <p className="text-xl md:text-2xl text-white/90">
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
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-green-800">
                <div className="bg-green-100 rounded-full p-3">
                  <Heart className="w-6 h-6 text-green-700" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-green-700">
                  Malnutrition et accès à la santé
                </h2>
              </div>
              <p className="text-gray-700">
                À Madagascar, la malnutrition infantile reste l'un des défis les
                plus pressants. Nous mettons en place des cures nutritionnelles
                pour les enfants souffrant de dénutrition modérée à sévère.
              </p>
              <ul className="space-y-2 text-gray-700">
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
              <p className="text-gray-700">
                En parallèle, nous avons structuré un système de soins de santé
                primaires dans nos centres. Dans chaque centre, il y a un
                salarié professionnel de santé (infirmière ou sage-femme) qui
                assure des consultations régulières ou des soins médicaux
                d'urgence. En plus de cela, tous les salariés sont formés à la
                sensibilisation sanitaire des populations.
              </p>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-lg shadow-xl">
              {images2.map((image, index) => (
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
          </div>
        </div>
      </section>

      {/* Section Éducation */}
      <section className="py-16 md:py-24 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] overflow-hidden rounded-lg shadow-xl order-2 md:order-1">
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
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <div className="flex items-center gap-2 text-green-800">
                <div className="bg-green-100 rounded-full p-3">
                  <GraduationCap className="w-6 h-6 text-green-700" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-green-700">
                  Éducation
                </h2>
              </div>
              <p className="text-gray-700">
                Chacun de nos centres dispose d'une bibliothèque à destination
                des tout-petits comme des adultes. Vecteur de culture et
                d'éducation, nous mettons un point d'honneur à ce que chaque
                enfant prenne la liberté de consulter des livres pour
                s'instruire en toute autonomie.
              </p>
              <p className="text-gray-700">
                Nos salariés dispensent de cours de français ou de séances de
                soutien scolaire pour les enfants bénéficiaires. Maîtriser la
                langue française est la clé d’une ascension sociale et d’un
                accès à l’emploi. Toujours dans l’optique d’égalité des chances,
                il est essentiel pour nous d’intervenir aussi sur ce secteur.
              </p>
              <p className="text-gray-700">
                <p className="text-gray-700">
                  Nous offrons également des formations professionnelles aux
                  femmes (couture, broderie, vannerie, cuisine), afin de
                  renforcer leur indépendance économique. Ces initiatives visent
                  à améliorer le statut des femmes dans la société malgache.
                </p>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Sport */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-green-800">
                <div className="bg-green-100 rounded-full p-3">
                  <Dumbbell className="w-6 h-6 text-green-700" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-green-700">
                  Sport
                </h2>
              </div>
              <p className="text-gray-700">
                Très lié au domaine sanitaire de nutrition, le sport joue un
                rôle important dans les actions de Soakilonga. Il permet de
                renforcer les liens sociaux, de promouvoir l’égalité entre les
                sexes, et d'apprendre des valeurs comme le respect et la
                solidarité. Nous mettons un point d’honneur à avoir du matériel
                sportif de qualité pour une pratique optimale et une découverte
                de sports méconnus des populations (tennis de table, ultimate,
                slakline…).
              </p>
              <p className="text-gray-700">
                Nous organisons régulièrement des événements sportifs pour les
                jeunes, avec un accent particulier sur l'inclusion des jeunes
                filles dans des sports traditionnellement dominés par les
                garçons.
              </p>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-lg shadow-xl">
              {images4.map((image, index) => (
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
          </div>
        </div>
      </section>

      {/* Section Agriculture */}
      <section className="py-16 md:py-24 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] overflow-hidden rounded-lg shadow-xl order-2 md:order-1">
              {images5.map((image, index) => (
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
            <div className="space-y-6 order-1 md:order-2">
              <div className="flex items-center gap-2 text-green-800">
                <div className="bg-green-100 rounded-full p-3">
                  <Leaf className="w-6 h-6 text-green-700" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-green-700">
                  Agriculture durable
                </h2>
              </div>
              <p className="text-gray-700">
                En réponse aux crises alimentaires récurrentes, Soakilonga a mis
                en place des potagers pédagogiques dans ses centres. Ces
                initiatives permettent d'améliorer l'approvisionnement
                alimentaire tout en formant les familles à des pratiques
                agricoles écologiques. Par cela, elle accompagne les familles
                vers une auto-suffisance alimentaire et sensibilise à la
                nécessité d’une alimentation équilibrée et variée.
              </p>
              <p className="text-gray-700">
                Nous avons également sur des projets agricoles générateurs de
                revenus, comme la production de miel, qui permet aux familles
                d’obtenir un revenu supplémentaire.
              </p>
              <p className="text-gray-700">
                Ces projets d’agricultures sont en lien avec une de nos action
                sous-jacente : la sensibilisation écologique. Pour lutter contre
                la crise climatique, véritable fléau dans les régions du Sud, il
                est important pour nous que nos centres soient reboisés et
                deviennent des ambassadeurs du développement durable. Nous
                travaillons sur des sensibilisations et des actions de collectes
                de déchets ainsi que sur le désastre que cause le brûlage des
                déchets.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Promotion féminine */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-green-800">
                <div className="bg-green-100 rounded-full p-3">
                  <Users className="w-6 h-6 text-green-700" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-green-700">
                  Promotion féminine
                </h2>
              </div>
              <p className="text-gray-700">
                Dans ce pays en développement, les femmes sont plus touchées par
                la précarité. Dans nos trois centres, les sessions de promotion
                féminines sont régulièrement mises en place pour créer un lieu
                de confiance où les femmes peuvent s'épanouir et apprendre des
                techniques professionnelles.
              </p>
              <p className="text-gray-700">
                Des ateliers de confiance en soi, d'empowerment et de sports
                réservés aux femmes sont proposés, ainsi que des formations en
                couture, broderie, crochet, vannerie et cuisine équilibrée.
              </p>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-lg shadow-xl">
              {images6.map((image, index) => (
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

export default NosActions;
