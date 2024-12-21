import React, { useState, useEffect, useRef, useCallback } from "react";

// Hook pour détecter la direction du scroll
export const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState("down");
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      const direction = scrollY > lastScroll ? "down" : "up";
      if (
        direction !== scrollDirection &&
        (scrollY - lastScroll > 10 || scrollY - lastScroll < -10)
      ) {
        setScrollDirection(direction);
      }
      setLastScroll(scrollY > 0 ? scrollY : 0);
    };

    window.addEventListener("scroll", updateScrollDirection);
    return () => window.removeEventListener("scroll", updateScrollDirection);
  }, [scrollDirection, lastScroll]);

  return scrollDirection;
};

// Hook pour détecter la visibilité
export const useInView = (options = {}) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  const callback = useCallback((entries) => {
    const [entry] = entries;
    setIsInView(entry.isIntersecting);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(callback, {
      threshold: 0.1,
      ...options,
    });

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [callback, options]);

  return [ref, isInView];
};

// Composant AnimatedSection
export const AnimatedSection = ({
  children,
  className = "",
  direction = "up",
}) => {
  const [ref, isInView] = useInView({ triggerOnce: true });
  const scrollDirection = useScrollDirection();

  const getTransformClass = () => {
    if (scrollDirection === "down") {
      switch (direction) {
        case "left":
          return "md:translate-x-[-100px] translate-y-[50px]";
        case "right":
          return "md:translate-x-[100px] translate-y-[50px]";
        case "up":
        default:
          return "translate-y-[50px]";
      }
    } else {
      switch (direction) {
        case "left":
          return "md:translate-x-[-100px] -translate-y-[50px]";
        case "right":
          return "md:translate-x-[100px] -translate-y-[50px]";
        case "up":
        default:
          return "-translate-y-[50px]";
      }
    }
  };

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-1000 ${
        isInView
          ? "opacity-100 translate-y-0 translate-x-0"
          : `opacity-0 ${getTransformClass()}`
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
