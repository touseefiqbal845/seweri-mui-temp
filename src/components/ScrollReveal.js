import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ScrollReveal = ({ children, animationVariants, threshold = 0.2 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = React.useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => { 
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    }; 
  }, [threshold]);
  


  return (
    <motion.div
      ref={containerRef}
      variants={animationVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
    