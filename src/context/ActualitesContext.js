import React, {
  createContext,
  useState,
  useContext,
  useCallback,
  useEffect,
  useRef,
} from "react";

const ActualitesContext = createContext();

export const ActualitesProvider = ({ children }) => {
  const [actualites, setActualites] = useState([]);
  const [loading, setLoading] = useState(true);
  const initialized = useRef(false);

  const parseMarkdown = (content) => {
    const parts = content.split("---");
    const frontMatter = parts[1];
    const body = parts[2];

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

  const fetchActualites = useCallback(async () => {
    // Si les actualités ont déjà été chargées ou sont en cours de chargement, on ne fait rien
    if (initialized.current) return;

    // On marque comme initialisé immédiatement pour éviter les appels multiples
    initialized.current = true;

    try {
      const repoUrl =
        "https://api.github.com/repos/Minigandii/soakilonga/contents/content/actualites";
      const response = await fetch(repoUrl);
      const data = await response.json();

      const actus = await Promise.all(
        data.map(async (file) => {
          const contentResponse = await fetch(file.download_url);
          const content = await contentResponse.text();
          return parseMarkdown(content);
        })
      );

      const sortedActus = actus.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
      setActualites(sortedActus);
      setLoading(false);
    } catch (error) {
      console.error("Erreur lors du chargement des actualités:", error);
      setLoading(false);
    }
  }, []);

  // Chargement initial automatique - cette approche élimine le besoin d'appeler
  // fetchActualites dans le composant App
  useEffect(() => {
    fetchActualites();
  }, [fetchActualites]);

  return (
    <ActualitesContext.Provider
      value={{
        actualites,
        loading,
        // On garde la fonction disponible mais elle ne fera rien si déjà initialisée
        fetchActualites,
      }}
    >
      {children}
    </ActualitesContext.Provider>
  );
};

export const useActualites = () => {
  const context = useContext(ActualitesContext);
  if (context === undefined) {
    throw new Error(
      "useActualites doit être utilisé à l'intérieur d'un ActualitesProvider"
    );
  }
  return context;
};
