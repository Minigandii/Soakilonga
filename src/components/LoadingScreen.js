import React from "react";

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-green-50 z-50 flex items-center justify-center overflow-hidden">
      {/* Dégradé subtil vers blanc sur les bords */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-white/30"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/30"></div>
      {/* Cercles animés en arrière-plan */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-200 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-300 rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-green-100 rounded-full blur-2xl opacity-30 animate-pulse delay-500"></div>
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 flex items-center justify-center animate-fade-in">
        {/* Logo avec animation subtile */}
        <div className="relative w-32 h-32 md:w-40 md:h-40">
          <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600 rounded-full blur-xl opacity-30 animate-pulse"></div>
          <div className="relative bg-white rounded-full p-2 shadow-2xl">
            <img
              src="/images/LogoSkl.jpg"
              alt="Logo Soakilonga"
              className="w-full h-full object-contain rounded-full"
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .delay-500 {
          animation-delay: 0.5s;
        }

        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
