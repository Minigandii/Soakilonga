import React, { createContext, useState, useContext } from "react";

const ActualitesContext = createContext();

export const ActualitesProvider = ({ children }) => {
  const [actualites, setActualites] = useState([]);
  const [loading, setLoading] = useState(true);

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

  const fetchActualites = async () => {
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
      console.error("Erreur:", error);
      setLoading(false);
    }
  };

  return (
    <ActualitesContext.Provider
      value={{ actualites, loading, fetchActualites }}
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
