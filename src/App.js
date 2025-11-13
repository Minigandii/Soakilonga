import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import LoadingScreen from "./components/LoadingScreen";
import Accueil from "./pages/Accueil";
import NousDecouvrir from "./pages/NousDecouvrir";
import NosActions from "./pages/NosActions";
import Actualite from "./pages/Actualite";
import NousSoutenir from "./pages/NousSoutenir";
// import NosPartenaires from "./pages/NosPartenaires"; // Temporairement caché
import Contact from "./pages/Contact";
import Centres from "./pages/Centres";
import { ActualitesProvider, useActualites } from "./context/ActualitesContext";
import { ImagesProvider, useImages } from "./context/ImagesContext";
import { TeamProvider } from "./context/TeamContext";
import "./tailwind.css";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppContent() {
  const { loading: actualitesLoading } = useActualites();
  const { preloadAllImages, preloadCriticalImages } = useImages();
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    const initializeApp = async () => {
      try {
        // Étape 1: Charger les images critiques
        await preloadCriticalImages();

        // Étape 2: Attendre le chargement des actualités
        await new Promise((resolve) => {
          const checkActualites = setInterval(() => {
            if (!actualitesLoading) {
              clearInterval(checkActualites);
              resolve();
            }
          }, 100);
        });

        // Étape 3: Charger les autres images en arrière-plan (non-bloquant)
        preloadAllImages();

        // Petit délai pour une transition fluide
        await new Promise((resolve) => setTimeout(resolve, 300));
        setInitialLoading(false);
      } catch (error) {
        console.error("Erreur lors de l'initialisation:", error);
        setInitialLoading(false);
      }
    };

    initializeApp();
  }, [preloadCriticalImages, preloadAllImages, actualitesLoading]);

  if (initialLoading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/decouvrir" element={<NousDecouvrir />} />
          <Route path="/actions" element={<NosActions />} />
          <Route path="/centres" element={<Centres />} />
          <Route path="/actualite" element={<Actualite />} />
          <Route path="/soutenir" element={<NousSoutenir />} />
          {/* <Route path="/partenaires" element={<NosPartenaires />} /> */}
          {/* Temporairement caché */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <ImagesProvider>
        <ActualitesProvider>
          <TeamProvider>
            <AppContent />
          </TeamProvider>
        </ActualitesProvider>
      </ImagesProvider>
    </Router>
  );
}

export default App;
