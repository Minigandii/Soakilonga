import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { Newspaper } from "lucide-react";

const Actualite = () => {
  const [actualites, setActualites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fonction qui récupère les actualités directement depuis l'API Netlify CMS
    const fetchActualites = async () => {
      try {
        // L'API Git Gateway de Netlify CMS est accessible via ce endpoint
        const response = await fetch("/admin/config.yml");
        if (!response.ok)
          throw new Error("Erreur de chargement de la configuration");

        // En local, on peut utiliser un mock des données pour le développement
        if (window.location.hostname === "localhost") {
          const mockActualites = [
            {
              title: "ACTU 1",
              date: "2025-02-04T22:15:47.835Z",
              image: "/images/actualites/resume-lucky-strike.png",
              description: "TEST1",
              body: "TEST 1",
            },
          ];
          setActualites(mockActualites);
          setLoading(false);
          return;
        }

        // En production, on utilise l'API Netlify Identity pour l'authentification
        if (!window.netlifyIdentity) {
          const script = document.createElement("script");
          script.src =
            "https://identity.netlify.com/v1/netlify-identity-widget.js";
          script.async = true;
          document.head.appendChild(script);
        }

        // Une fois authentifié, on peut accéder aux données
        window.netlifyIdentity.on("init", (user) => {
          if (!user) {
            window.netlifyIdentity.on("login", () => {
              window.location.href = "/admin/";
            });
          }
        });

        const contentResponse = await fetch(
          "/admin/collections/actualites/entries"
        );
        if (!contentResponse.ok)
          throw new Error("Erreur de chargement des actualités");

        const data = await contentResponse.json();
        const sortedActualites = data.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
        setActualites(sortedActualites);
        setLoading(false);
      } catch (err) {
        console.error("Erreur:", err);
        setError("Une erreur est survenue lors du chargement des actualités.");
        setLoading(false);
      }
    };

    fetchActualites();
  }, []);

  // Rendu pendant le chargement
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
          </div>
        </div>
      </div>
    );
  }

  // Rendu en cas d'erreur
  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-red-600 min-h-[400px] flex items-center justify-center">
            {error}
          </div>
        </div>
      </div>
    );
  }

  // Rendu principal
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="h-20"></div>

      {/* En-tête */}
      <div className="bg-green-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Newspaper className="w-8 h-8" />
            <h1 className="text-4xl font-bold">Actualités</h1>
          </div>
          <p className="text-center text-lg text-green-100">
            Découvrez les dernières nouvelles de nos centres et de nos actions à
            Madagascar
          </p>
        </div>
      </div>

      {/* Liste des actualités */}
      <div className="container mx-auto px-4 py-12">
        {actualites.length === 0 ? (
          <div className="text-center text-gray-600">
            Aucune actualité n'est disponible pour le moment.
          </div>
        ) : (
          <div className="grid gap-8">
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
                    {format(new Date(actualite.date), "d MMMM yyyy 'à' HH:mm", {
                      locale: fr,
                    })}
                  </p>
                  <h2 className="text-2xl font-bold text-green-800 mb-4">
                    {actualite.title}
                  </h2>
                  {actualite.description && (
                    <p className="text-gray-600 mb-4">
                      {actualite.description}
                    </p>
                  )}
                  <div className="prose max-w-none">{actualite.body}</div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Actualite;
