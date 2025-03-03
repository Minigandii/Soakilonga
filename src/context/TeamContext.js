import React, { createContext, useState, useContext } from "react";

const TeamContext = createContext();

export const TeamProvider = ({ children }) => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  const parseMarkdown = (content) => {
    const parts = content.split("---");
    const frontMatter = parts[1];
    const body = parts[2] || "";

    const metadata = {};
    frontMatter.split("\n").forEach((line) => {
      const [key, ...values] = line.split(":");
      if (key && values.length) {
        metadata[key.trim()] = values.join(":").trim().replace(/"/g, "");
      }
    });

    return {
      ...metadata,
      description: body.trim(),
    };
  };

  const fetchTeamMembers = async () => {
    try {
      // Vous pourriez devoir adapter cette URL à votre structure GitHub
      const repoUrl =
        "https://api.github.com/repos/Minigandii/soakilonga/contents/content/team";
      const response = await fetch(repoUrl);
      const data = await response.json();

      // Si aucun membre n'est encore ajouté, utiliser des données fictives pour le développement
      if (!Array.isArray(data) || data.length === 0) {
        console.warn(
          "Aucun membre d'équipe trouvé, utilisation de données fictives"
        );
        const dummyMembers = getDummyTeamMembers();
        setTeamMembers(dummyMembers);
        setLoading(false);
        return;
      }

      const members = await Promise.all(
        data.map(async (file) => {
          try {
            const contentResponse = await fetch(file.download_url);
            const content = await contentResponse.text();
            return parseMarkdown(content);
          } catch (error) {
            console.error(
              `Erreur lors du chargement du fichier ${file.name}:`,
              error
            );
            return null;
          }
        })
      );

      // Filtrer les membres null (erreurs de chargement) et trier par ordre
      const validMembers = members
        .filter((member) => member !== null)
        .sort((a, b) => (parseInt(a.order) || 99) - (parseInt(b.order) || 99));

      setTeamMembers(validMembers);
      setLoading(false);
    } catch (error) {
      console.error(
        "Erreur lors du chargement des membres de l'équipe:",
        error
      );
      // En cas d'erreur, utiliser des données fictives
      const dummyMembers = getDummyTeamMembers();
      setTeamMembers(dummyMembers);
      setLoading(false);
    }
  };

  // Fonction pour fournir des données fictives pendant le développement
  const getDummyTeamMembers = () => {
    return [
      {
        name: "Dr. Josette Rakotohery",
        role: "Fondatrice et Présidente",
        center: "fondateurs",
        photo: "/images/Lolo.jpg",
        order: 1,
        description: "Fondatrice de l'association et médecin de formation.",
      },
      {
        name: "Marc Rakotondrainibe",
        role: "Directeur",
        center: "fondateurs",
        photo: "/images/Lolo.jpg",
        order: 2,
        description: "Co-fondateur et directeur général des opérations.",
      },
      {
        name: "Lolo",
        role: "Responsable Centre",
        center: "mahitsy",
        photo: "/images/Lolo.jpg",
        order: 1,
        description:
          "Responsable des opérations quotidiennes du centre de Mahitsy.",
      },
      {
        name: "Soa",
        role: "Infirmière",
        center: "mahitsy",
        photo: "/images/Lolo.jpg",
        order: 2,
        description: "Infirmière spécialisée dans les soins pédiatriques.",
      },
      {
        name: "Mamy",
        role: "Responsable Centre",
        center: "tsarazaza",
        photo: "/images/Lolo.jpg",
        order: 1,
        description: "Coordinateur des activités du centre de Tsarazaza.",
      },
      {
        name: "Vero",
        role: "Responsable Agricole",
        center: "ihosy",
        photo: "/images/Lolo.jpg",
        order: 1,
        description:
          "Spécialiste en agriculture durable et formation des agriculteurs locaux.",
      },
    ];
  };

  return (
    <TeamContext.Provider
      value={{
        teamMembers,
        loading,
        fetchTeamMembers,
      }}
    >
      {children}
    </TeamContext.Provider>
  );
};

export const useTeam = () => {
  const context = useContext(TeamContext);
  if (context === undefined) {
    throw new Error(
      "useTeam doit être utilisé à l'intérieur d'un TeamProvider"
    );
  }
  return context;
};
