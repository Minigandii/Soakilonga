import React, { useEffect } from "react";
import { useTeam } from "../context/TeamContext";
import { AnimatedSection } from "./AnimatedSection";

const TeamMemberCard = ({ member, index }) => {
  // Déterminer la direction d'animation basée sur l'index
  const getAnimationDirection = (idx) => {
    const directions = ["left", "up", "down", "right"];
    return directions[idx % directions.length];
  };

  return (
    <AnimatedSection direction={getAnimationDirection(index)}>
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
    </AnimatedSection>
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

  return (
    <div className="space-y-12 w-full">
      {groupsToDisplay.map((group) => (
        <div key={group} className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 w-full mx-auto">
            {membersByGroup[group].map((member, index) => (
              <TeamMemberCard
                key={member.name + index}
                member={member}
                index={index}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamMembers;
