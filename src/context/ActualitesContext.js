import React, { createContext, useState, useContext } from "react";

const ActualitesContext = createContext();

export const ActualitesProvider = ({ children }) => {
  const [actualites, setActualites] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchActualites = async () => {
    try {
      // Charger un fichier JSON généré lors du build
      const response = await fetch("/data/actualites.json");
      if (!response.ok) {
        throw new Error("Impossible de charger les actualités");
      }
      const data = await response.json();
      setActualites(data);
      setLoading(false);
    } catch (error) {
      console.error("Erreur:", error);
      setActualites([]);
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
