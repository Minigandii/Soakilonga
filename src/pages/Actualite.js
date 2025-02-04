import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock } from "lucide-react";

const Actualite = () => {
  const [actualites, setActualites] = useState([
    {
      title: "Distribution de repas dans le centre de Mahitsy",
      date: "2024-02-01",
      image: "/images/actualites/distribution.jpg",
      description:
        "Cette semaine, notre équipe a organisé une distribution massive de repas pour les enfants du centre de Mahitsy. Plus de 200 enfants ont pu bénéficier d'un repas équilibré.",
      slug: "distribution-repas-mahitsy",
    },
    {
      title: "Nouveau programme d'éducation à Tsarazaza",
      date: "2024-01-25",
      image: "/images/actualites/education.jpg",
      description:
        "Lancement d'un nouveau programme d'éducation à Tsarazaza, incluant des cours de français et des activités parascolaires pour les enfants de 6 à 12 ans.",
      slug: "programme-education-tsarazaza",
    },
    {
      title: "Formation en agriculture durable à Ihosy",
      date: "2024-01-15",
      image: "/images/actualites/agriculture.jpg",
      description:
        "Une session de formation en agriculture durable a été organisée pour 30 familles du centre d'Ihosy, leur permettant d'apprendre des techniques de culture respectueuses de l'environnement.",
      slug: "formation-agriculture-ihosy",
    },
  ]);

  // Plus tard, vous remplacerez ceci par un appel API à votre CMS Netlify

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="h-20" /> {/* Espace pour la navbar */}
      {/* Hero section */}
      <div className="bg-green-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Actualités</h1>
          <p className="text-xl text-green-100">
            Découvrez les dernières nouvelles de nos centres et de nos actions à
            Madagascar
          </p>
        </div>
      </div>
      {/* Liste des actualités */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {actualites.map((actu, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <img
                  src={actu.image}
                  alt={actu.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-green-600 mb-3">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{formatDate(actu.date)}</span>
                </div>
                <h3 className="text-xl font-bold text-green-900 mb-3">
                  {actu.title}
                </h3>
                <p className="text-gray-600 mb-4">{actu.description}</p>
                <Link
                  to={`/actualites/${actu.slug}`}
                  className="inline-flex items-center text-green-600 font-semibold hover:text-green-700 transition-colors gap-2"
                >
                  Lire la suite
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Actualite;
