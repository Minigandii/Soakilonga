import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { Newspaper } from "lucide-react";

const Actualite = () => {
  const [actualites, setActualites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fonction pour récupérer les données
    const fetchActualites = async () => {
      try {
        // Le point d'entrée de l'API Git de Netlify
        const repoUrl =
          "https://api.github.com/repos/Minigandii/soakilonga/contents/content/actualites";
        const response = await fetch(repoUrl);
        const data = await response.json();

        // Pour chaque fichier markdown, récupérer son contenu
        const actus = await Promise.all(
          data.map(async (file) => {
            const contentResponse = await fetch(file.download_url);
            const content = await contentResponse.text();
            return parseMarkdown(content);
          })
        );

        // Trier par date décroissante
        const sortedActus = actus.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
        setActualites(sortedActus);
        setLoading(false);
      } catch (error) {
        console.error("Erreur:", error);
        setLoading(false);
      }
    };

    fetchActualites();
  }, []);

  // Fonction pour parser le markdown
  const parseMarkdown = (content) => {
    const parts = content.split("---");
    const frontMatter = parts[1];
    const body = parts[2];

    // Parser le frontmatter
    const metadata = {};
    frontMatter.split("\n").forEach((line) => {
      const [key, ...values] = line.split(":");
      if (key && values.length) {
        metadata[key.trim()] = values.join(":").trim().replace(/"/g, "");
      }
    });

    return {
      ...metadata,
      body: body.trim(),
    };
  };

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
  );
};

export default Actualite;
