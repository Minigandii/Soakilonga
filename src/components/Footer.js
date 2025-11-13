import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPinned } from "lucide-react";

// Hook personnalisé pour détecter la visibilité
const useInView = (options = {}) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        ...options,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options]);

  return [ref, isInView];
};

const Footer = () => {
  const [footerRef, isFooterVisible] = useInView({ triggerOnce: true });

  return (
    <footer ref={footerRef} className="bg-green-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 transform transition-all duration-1000 ${
            isFooterVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+261 38 35 355 18</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <a
                href="mailto:soakilonga1@gmail.com"
                className="hover:text-green-300 transition-colors"
              >
                soakilonga1@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MapPinned className="w-4 h-4" />
              <span>Antananarivo, Madagascar</span>
            </div>
          </div>
          {/* Liens rapides */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Liens rapides</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <li>
                <Link
                  to="/decouvrir"
                  className="hover:text-green-300 transition-colors"
                >
                  Nous découvrir
                </Link>
              </li>
              <li>
                <Link
                  to="/actions"
                  className="hover:text-green-300 transition-colors"
                >
                  Nos actions
                </Link>
              </li>
              <li>
                <Link
                  to="/centres"
                  className="hover:text-green-300 transition-colors"
                >
                  Nos centres
                </Link>
              </li>
              {/* <li>
                <Link
                  to="/partenaires"
                  className="hover:text-green-300 transition-colors"
                >
                  Nos partenaires
                </Link>
              </li> */} {/* Temporairement caché */}
              <li>
                <Link
                  to="/soutenir"
                  className="hover:text-green-300 transition-colors"
                >
                  Nous soutenir
                </Link>
              </li>
              <li>
                <Link
                  to="/actualite"
                  className="hover:text-green-300 transition-colors"
                >
                  Actualités
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div
          className={`border-t border-white/20 mt-12 pt-8 text-center transform transition-all duration-1000 delay-200 ${
            isFooterVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-sm">
            © {new Date().getFullYear()} Soakilonga. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
