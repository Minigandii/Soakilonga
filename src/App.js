import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Accueil from "./pages/Accueil";
import NousDecouvrir from "./pages/NousDecouvrir";
import NosActions from "./pages/NosActions";
import Actualite from "./pages/Actualite";
import NousSoutenir from "./pages/NousSoutenir";
import Contact from "./pages/Contact";
import Centres from "./pages/Centres";
import Navbar from "./components/Navbar";
import { ActualitesProvider, useActualites } from "./context/ActualitesContext";
import { ImagesProvider, useImages } from "./context/ImagesContext";
import "./tailwind.css";

function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-green-900 z-50 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-white mb-4"></div>
        <p className="text-white text-lg">Chargement des ressources...</p>
      </div>
    </div>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppContent() {
  const { fetchActualites } = useActualites();
  const { preloadAllImages, loading: imagesLoading } = useImages();
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    const initializeApp = async () => {
      await Promise.all([fetchActualites(), preloadAllImages()]);
      setInitialLoading(false);
    };

    initializeApp();
  }, [fetchActualites, preloadAllImages]);

  if (initialLoading || imagesLoading) {
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
          <AppContent />
        </ActualitesProvider>
      </ImagesProvider>
    </Router>
  );
}

export default App;
