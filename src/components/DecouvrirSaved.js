import React from "react";
import { Link } from "react-router-dom";
import {
  Heart,
  ArrowRight,
  Users,
  History,
  Target,
  Sparkles,
  Medal,
} from "lucide-react";

const NousDecouvrir = () => {
  return (
    <div className="min-h-screen">
      {/* Espaceur pour navbar fixe */}
      <div className="h-20"></div>

      {/* Hero Section avec fond et overlay */}
      <div className="relative h-[60vh] bg-green-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-green-900/90 to-green-800/75 z-10" />
          <img
            src="/api/placeholder/1200/800"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-20 h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Nous découvrir
              </h1>
              <p className="text-lg md:text-xl text-white/90">
                Depuis 2009, Soakilonga œuvre pour offrir un avenir meilleur aux
                enfants malgaches à travers des actions concrètes et durables.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section Qui sommes-nous */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-green-600">
                <Users className="w-5 h-5" />
                <span className="uppercase tracking-wider text-sm font-semibold">
                  Qui sommes-nous
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-green-800">
                À l'avant-garde de la lutte contre la malnutrition
              </h2>
              <p className="text-gray-600">
                Depuis sa création en 2009, Soakilonga est à l'avant-garde de la
                lutte contre la malnutrition à Madagascar. À travers des actions
                concrètes et durables, notre association vise à offrir un avenir
                meilleur aux enfants malgaches.
              </p>
              <p className="text-gray-600">
                Nous croyons fermement que chaque enfant mérite une alimentation
                adéquate, des soins de santé de qualité et un accès à
                l'éducation. C'est pourquoi nous avons développé un réseau de
                centres qui agit sur plusieurs fronts.
              </p>
            </div>
            <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-lg shadow-xl">
              <img
                src="/api/placeholder/800/600"
                alt="Notre mission"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section Histoire */}
      <section className="py-16 md:py-24 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-lg shadow-xl order-2 md:order-1">
              <img
                src="/api/placeholder/800/600"
                alt="Notre histoire"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <div className="flex items-center gap-2 text-green-600">
                <History className="w-5 h-5" />
                <span className="uppercase tracking-wider text-sm font-semibold">
                  Notre histoire
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-green-800">
                Une histoire de cœur et d'engagement
              </h2>
              <p className="text-gray-600">
                L'histoire de Soakilonga commence en 2008 avec une première
                distribution de nourriture dans les communautés rurales touchées
                par la pauvreté. En 2009, la nécessité de créer une structure
                permanente s'impose, et le premier centre est inauguré à
                Mahitsy.
              </p>
              <p className="text-gray-600">
                L'origine du nom "Soakilonga", qui signifie "les beaux enfants",
                reflète notre mission profonde : prendre soin des jeunes
                générations, ces acteurs de demain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Mission */}
      <section className="py-16 md:py-24 bg-green-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-green-300">
                <Target className="w-5 h-5" />
                <span className="uppercase tracking-wider text-sm font-semibold">
                  Notre mission
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">
                Enrayer la malnutrition infantile
              </h2>
              <p className="text-gray-200">
                Soakilonga a été fondée avec une mission simple mais essentielle
                : enrayer la malnutrition infantile à Madagascar. Nos équipes
                travaillent sans relâche pour dépister les enfants souffrant de
                malnutrition et leur offrir une prise en charge médicale
                complète.
              </p>
              <Link
                to="/actions"
                className="inline-flex items-center gap-2 bg-white text-green-900 px-6 py-3 rounded-full hover:bg-green-50 transition-colors"
              >
                Découvrir nos actions
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-lg shadow-xl">
              <img
                src="/api/placeholder/800/600"
                alt="Notre mission"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section Valeurs */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 text-green-600 mb-4">
              <Sparkles className="w-5 h-5" />
              <span className="uppercase tracking-wider text-sm font-semibold">
                Nos valeurs
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-green-800">
              Ce qui nous anime
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Égalité",
                description:
                  "Parce que chaque être humain sur terre a le droit fondamental de vivre en toute dignité.",
              },
              {
                title: "Solidarité",
                description:
                  "Nous avons compris l'importance de travailler main dans la main pour éradiquer la pauvreté.",
              },
              {
                title: "Sécurité",
                description:
                  "Nos centres sont des lieux ressourçants qui garantissent le développement personnel.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-green-50 p-8 rounded-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-bold text-green-800 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Équipe */}
      <section className="py-16 md:py-24 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 text-green-600 mb-4">
              <Medal className="w-5 h-5" />
              <span className="uppercase tracking-wider text-sm font-semibold">
                Notre équipe
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-6">
              Une équipe passionnée
            </h2>
            <p className="max-w-3xl mx-auto text-gray-600">
              L'équipe Soakilonga est composée de professionnels passionnés et
              dévoués. Nos centres sont dirigés par des médecins, infirmières,
              sage-femmes et éducateurs, qui veillent quotidiennement au
              bien-être des enfants et des familles.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                name: "Dr. Josette Rakotohery",
                role: "Médecin en chef",
              },
              {
                name: "Marie Randria",
                role: "Infirmière",
              },
              {
                name: "Jean Rakoto",
                role: "Coordinateur",
              },
              {
                name: "Sophie Razafy",
                role: "Éducatrice",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                  <img
                    src="/api/placeholder/96/96"
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-green-800 text-center mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-600 text-center">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-green-900 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Rejoignez notre mission
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Ensemble, nous pouvons faire la différence dans la vie des enfants
            malgaches.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/soutenir"
              className="inline-flex items-center gap-2 bg-white text-green-900 px-8 py-3 rounded-full hover:bg-green-50 transition-colors"
            >
              Nous soutenir
              <Heart className="w-5 h-5" />
            </Link>
            <Link
              to="/benevolat"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white/10 transition-colors"
            >
              Devenir bénévole
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NousDecouvrir;
