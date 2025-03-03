import React, { useEffect } from "react";
import { useTeam } from "../context/TeamContext";

// Version simplifiée sans animation
const TeamMemberCard = ({ member }) => {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow h-full">
      <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-3 sm:mb-4 rounded-full overflow-hidden">
        <img
          src={member.photo || "/images/Lolo.jpg"}
          alt={member.name}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-base sm:text-lg font-bold text-green-800 text-center mb-1 sm:mb-2">
        {member.name}
      </h3>
      <p className="text-sm sm:text-base text-gray-600 text-center mb-1">
        {member.role}
      </p>
      {member.center && member.center !== "fondateurs" && (
        <p className="text-xs sm:text-sm text-green-600 text-center font-medium">
          Centre de{" "}
          {member.center.charAt(0).toUpperCase() + member.center.slice(1)}
        </p>
      )}
    </div>
  );
};

const TeamMembers = () => {
  const { teamMembers, loading, fetchTeamMembers } = useTeam();
  useEffect(() => {
    fetchTeamMembers();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  }

  // Regrouper les membres par centre
  const membersByGroup = teamMembers.reduce((groups, member) => {
    const center = member.center || "other";
    if (!groups[center]) {
      groups[center] = [];
    }
    groups[center].push(member);
    return groups;
  }, {});

  // Ordre d'affichage des groupes
  const groupOrder = ["fondateurs", "mahitsy", "tsarazaza", "ihosy", "other"];

  // Filtrer les groupes qui contiennent réellement des membres
  const groupsToDisplay = groupOrder.filter(
    (group) => membersByGroup[group] && membersByGroup[group].length > 0
  );

  // Titres pour chaque groupe
  const groupTitles = {
    fondateurs: "Fondateurs",
    mahitsy: "Centre de Mahitsy",
    tsarazaza: "Centre de Tsarazaza",
    ihosy: "Centre d'Ihosy",
    other: "Autres membres",
  };

  // Fonction pour déterminer la classe de grille en fonction du nombre de membres
  const getGridClass = (memberCount) => {
    if (memberCount === 1) {
      return "grid-cols-1 max-w-xs mx-auto"; // Un seul membre centré
    } else if (memberCount === 2) {
      return "grid-cols-1 sm:grid-cols-2 max-w-lg mx-auto"; // Deux membres centrés
    } else if (memberCount === 3) {
      return "grid-cols-1 sm:grid-cols-3 max-w-3xl mx-auto"; // Trois membres centrés
    } else {
      return "grid-cols-1 sm:grid-cols-2 md:grid-cols-4"; // Disposition standard
    }
  };

  return (
    <div className="space-y-16">
      {groupsToDisplay.map((group) => {
        const members = membersByGroup[group];
        const gridClass = getGridClass(members.length);

        return (
          <div key={group} className="space-y-6">
            {/* Titre du groupe */}
            <div className="flex items-center justify-center gap-2 text-green-700 mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-center">
                {groupTitles[group]}
              </h3>
            </div>

            {/* Grille de membres avec classes adaptatives */}
            <div className={`grid ${gridClass} gap-6 md:gap-8`}>
              {members.map((member, index) => (
                <TeamMemberCard
                  key={`${member.name}-${index}`}
                  member={member}
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TeamMembers;
