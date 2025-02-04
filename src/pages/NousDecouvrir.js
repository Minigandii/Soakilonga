import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Users,
  History,
  Target,
  Sparkles,
  Medal,
  Phone,
  Mail,
  MapPinned,
} from "lucide-react";

const NousDecouvrir = () => {
  const images = [
    { src: "/images/NousDecouvrir1.jpg", alt: "Madagascar 1" },
    { src: "/images/NousDecouvrir2.jpg", alt: "Madagascar 2" },
    { src: "/images/NousDecouvrir3.jpg", alt: "Madagascar 3" },
    { src: "/images/NousDecouvrir4.jpg", alt: "Madagascar 4" },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Effet pour le défilement automatique
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
      <div className="min-h-screen">
        <div className="relative h-[85vh] md:h-[90vh] bg-green-900">
          {/* Fond et overlay avec carousel - reste identique */}
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

          {/* Contenu centré ajusté */}
          <div className="relative z-20 h-full flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold text-white mb-4 md:mb-8">
                  Nous découvrir
                </h1>
                <p className="text-base sm:text-lg md:text-2xl text-white/90">
                  Depuis 2009, Soakilonga œuvre pour offrir un avenir meilleur
                  aux enfants malgaches à travers des actions concrètes et
                  durables.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Qui sommes-nous */}
      <section className="py-8 sm:py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* En-tête de section */}
            <div className="flex items-center gap-3 mb-8 md:mb-12">
              <div className="bg-green-100 rounded-full p-3">
                <Users className="w-5 h-5 md:w-6 md:h-6 text-green-600" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-800">
                Qui sommes-nous ?
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              <div className="col-span-full md:col-span-2 space-y-4 md:space-y-6">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Depuis sa création en 2009, Soakilonga est à l'avant-garde de
                  la lutte contre la malnutrition à Madagascar. À travers des
                  actions concrètes et durables, notre association vise à offrir
                  un avenir meilleur aux enfants malgaches.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Nous croyons fermement que chaque enfant mérite une
                  alimentation adéquate, des soins de santé de qualité et un
                  accès à l'éducation. C'est pourquoi nous avons développé un
                  réseau de centres qui agit sur plusieurs fronts : nutrition,
                  santé, éducation, sport et développement agricole. Notre
                  engagement va au-delà de la simple distribution de nourriture.
                  Il s'agit d'une approche globale pour offrir aux familles des
                  opportunités de croissance et de réussite.
                </p>
              </div>

              {/* Stats - déjà bien configuré avec hidden md:block */}
              <div
                className="hidden md:block bg-green-50 p-8 rounded-2xl space-y-8"
                style={{ transform: "translateY(-2rem)" }}
              >
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">
                    2009
                  </div>
                  <div className="text-gray-600">Année de création</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">
                    3
                  </div>
                  <div className="text-gray-600">Centres actifs</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">
                    1000+
                  </div>
                  <div className="text-gray-600">Enfants accompagnés</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Histoire avec timeline */}
      <section className="py-8 sm:py-12 md:py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* En-tête */}
            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <div className="bg-green-200 rounded-full p-3">
                <History className="w-5 h-5 md:w-6 md:h-6 text-green-600" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-800">
                Notre histoire
              </h2>
            </div>

            {/* Texte d'introduction */}
            <div className="mb-8 md:mb-16">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                L'histoire de Soakilonga commence en 2008 avec une première
                distribution de nourriture dans les communautés rurales touchées
                par la pauvreté. En 2009, la nécessité de créer une structure
                permanente s'impose, et le premier centre est inauguré à
                Mahitsy, en périphérie de la capitale. Officiellement reconnue
                par l'État malgache en 2014, l'association a depuis étendu ses
                activités, avec l'ouverture de deux autres centres en 2016 et
                2019, situés respectivement à Tsarazaza et Ihosy.
              </p>

              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Chaque centre est une réponse adaptée aux défis uniques de les
                régions : crise alimentaire, sécheresse, impact environnemental
                de l'exploitation minière, insuffisance éducative... Nos équipes
                locales agissent en permanence pour améliorer la qualité de vie
                des bénéficiaires, en distribuant des repas et en assurant un
                suivi médical régulier. Nos centres sont des lieux de vie,
                d'éducation et de réhabilitation, où enfants et familles
                trouvent espoir et soutien.
              </p>
            </div>

            {/* Timeline */}
            <div className="hidden md:block relative">
              {/* Ligne verticale */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-green-200"></div>

              {/* Événements */}
              <div className="space-y-12">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="md:w-1/2 md:text-right">
                    <div className="text-2xl font-bold text-green-700 mb-2">
                      2008
                    </div>
                    <p className="text-gray-600">
                      Première distribution de nourriture dans les communautés
                      rurales
                    </p>
                  </div>
                  <div className="hidden md:block w-4 h-4 bg-green-500 rounded-full relative z-10"></div>
                  <div className="md:w-1/2"></div>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="md:w-1/2"></div>
                  <div className="hidden md:block w-4 h-4 bg-green-500 rounded-full relative z-10"></div>
                  <div className="md:w-1/2">
                    <div className="text-2xl font-bold text-green-700 mb-2">
                      2009
                    </div>
                    <p className="text-gray-600">
                      Inauguration du premier centre à Mahitsy, en périphérie de
                      la capitale.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="md:w-1/2 md:text-right">
                    <div className="text-2xl font-bold text-green-700 mb-2">
                      2014
                    </div>
                    <p className="text-gray-600">
                      Reconnaissance officielle par l'État malgache
                    </p>
                  </div>
                  <div className="hidden md:block w-4 h-4 bg-green-500 rounded-full relative z-10"></div>
                  <div className="md:w-1/2"></div>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="md:w-1/2"></div>
                  <div className="hidden md:block w-4 h-4 bg-green-500 rounded-full relative z-10"></div>
                  <div className="md:w-1/2">
                    <div className="text-2xl font-bold text-green-700 mb-2">
                      2016-2019
                    </div>
                    <p className="text-gray-600">
                      Ouverture des centres de Tsarazaza et Ihosy
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Citation */}
            <div className="relative max-w-3xl mx-auto text-center py-6 md:py-8">
              <div className="text-4xl md:text-5xl text-green-300 absolute left-4 top-0">
                "
              </div>
              <div className="text-4xl md:text-5xl text-green-300 absolute right-4 bottom-0">
                "
              </div>
              <p className="text-base sm:text-lg text-gray-700 italic px-8 md:px-12">
                L'origine du nom{" "}
                <span className="text-green-700 font-semibold">Soakilonga</span>
                , qui signifie "les beaux enfants", reflète notre mission
                profonde : prendre soin des jeunes générations, ces acteurs de
                demain, pour que chacun puisse s'épanouir et se développer dans
                les conditions dignes qu'il mérite.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Mission avec cards */}
      <section className="py-8 sm:py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* En-tête de section */}
            <div className="flex items-center gap-3 mb-8 md:mb-12">
              <div className="bg-green-100 rounded-full p-3">
                <Target className="w-5 h-5 md:w-6 md:h-6 text-green-600" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-800">
                Notre mission
              </h2>
            </div>

            <div className="md:col-span-2 space-y-4 md:space-y-6">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Soakilonga a été fondée avec une mission simple mais essentielle
                : enrayer la malnutrition infantile à Madagascar. Le pays étant
                confronté à des défis économiques et environnementaux majeurs,
                la malnutrition est l'une des principales causes de morbidité
                infantile. Nos équipes travaillent sans relâche pour dépister
                les enfants souffrant de malnutrition et leur offrir une prise
                en charge médicale complète, allant des cures nutritionnelles à
                des soins de santé spécialisés. Mais notre engagement ne
                s'arrête pas là.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Soakilonga croit en une approche holistique pour améliorer les
                conditions de vie des populations. Nous avons mis en place des
                programmes d'éducation pour les enfants et des formations pour
                les femmes, afin de leur permettre de générer des revenus par
                des activités artisanales (couture, broderie, vannerie,
                cuisine). De plus, en intégrant le sport dans nos centres, nous
                offrons aux jeunes un espace de développement personnel, de
                partage, et de diversité en termes d'activités. Par nos actions,
                nous mettons un point d'honneur à ce que chacun ait les mêmes
                chances et opportunités : les familles aisées comme les plus
                démunies, les hommes comme les femmes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Valeurs */}
      <section className="py-8 sm:py-16 md:py-24 bg-green-800">
        <div className="container mx-auto px-4">
          {/* En-tête avec icône */}
          <div className="flex items-center justify-center gap-3 mb-8 md:mb-16">
            <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-green-200" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-100">
              Nos valeurs
            </h2>
          </div>

          {/* Grille des valeurs */}
          <div className="max-w-6xl mx-auto">
            {/* Première rangée - 3 valeurs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-4 md:mb-6">
              {/* Égalité */}
              <div className="bg-green-700/30 backdrop-blur p-4 md:p-6 rounded-lg hover:bg-green-700/40 transition-all">
                <h3 className="text-lg sm:text-xl font-bold text-green-100 mb-2 md:mb-3">
                  Égalité
                </h3>
                <p className="text-sm sm:text-base text-green-100/90 leading-relaxed">
                  Chaque être humain a le droit fondamental de vivre en toute
                  dignité.
                </p>
              </div>

              {/* Solidarité */}
              <div className="bg-green-700/30 backdrop-blur p-4 md:p-6 rounded-lg hover:bg-green-700/40 transition-all">
                <h3 className="text-lg sm:text-xl font-bold text-green-100 mb-2 md:mb-3">
                  Solidarité
                </h3>
                <p className="text-sm sm:text-base text-green-100/90 leading-relaxed">
                  Travailler main dans la main pour éradiquer la pauvreté.
                </p>
              </div>

              {/* Sécurité */}
              <div className="bg-green-700/30 backdrop-blur p-4 md:p-6 rounded-lg hover:bg-green-700/40 transition-all">
                <h3 className="text-lg sm:text-xl font-bold text-green-100 mb-2 md:mb-3">
                  Sécurité
                </h3>
                <p className="text-sm sm:text-base text-green-100/90 leading-relaxed">
                  Des lieux ressourçants qui garantissent le développement
                  personnel.
                </p>
              </div>
            </div>

            {/* Deuxième rangée - 2 valeurs centrées */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 md:w-2/3 mx-auto">
              {/* Opportunité */}
              <div className="bg-green-700/30 backdrop-blur p-4 md:p-6 rounded-lg hover:bg-green-700/40 transition-all">
                <h3 className="text-lg sm:text-xl font-bold text-green-100 mb-2 md:mb-3">
                  Opportunité
                </h3>
                <p className="text-sm sm:text-base text-green-100/90 leading-relaxed">
                  Nous offrons à tous des opportunités d'épanouissement et
                  d'autonomie.
                </p>
              </div>

              {/* Proximité */}
              <div className="bg-green-700/30 backdrop-blur p-4 md:p-6 rounded-lg hover:bg-green-700/40 transition-all">
                <h3 className="text-lg sm:text-xl font-bold text-green-100 mb-2 md:mb-3">
                  Proximité
                </h3>
                <p className="text-sm sm:text-base text-green-100/90 leading-relaxed">
                  Nos actions sont au plus près de la population, jusque dans
                  les villages reculés.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Équipe */}
      <section className="py-8 sm:py-16 md:py-24 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <div className="flex items-center justify-center gap-2 text-green-600 mb-3 md:mb-4">
              <Medal className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="uppercase tracking-wider text-xs sm:text-sm font-semibold">
                Notre équipe
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-green-800 mb-4 md:mb-6">
              Une équipe passionnée
            </h2>
            <p className="max-w-3xl mx-auto text-sm sm:text-base text-gray-600">
              L'équipe Soakilonga est composée de professionnels passionnés et
              dévoués. Nos centres sont dirigés par des médecins, infirmières,
              sage-femmes et éducateurs, qui veillent quotidiennement au
              bien-être des enfants et des familles.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {[
              {
                name: "Dr. Josette Rakotohery",
                role: "Fondatrice",
              },
              {
                name: "Lolo",
                role: "Responsable centre de Tsarazaza",
              },
              {
                name: "Lolo",
                role: "Responsable centre de Tsarazaza",
              },
              {
                name: "Lolo",
                role: "Responsable centre de Tsarazaza",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-3 sm:mb-4 rounded-full overflow-hidden">
                  <img
                    src="/images/Lolo.jpg"
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-green-800 text-center mb-1 sm:mb-2">
                  {member.name}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 text-center">
                  {member.role}
                </p>
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

export default NousDecouvrir;
