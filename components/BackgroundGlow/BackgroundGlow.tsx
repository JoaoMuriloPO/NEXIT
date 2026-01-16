"use client";

import React, { useState, useEffect, useMemo } from 'react';
import styles from './BackgroundGlow.module.css';
import { useSection } from '@/hooks/context/SectionContext';

export const BackgroundGlow = () => {
  const { activeSection } = useSection();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Segue a posição do mouse para o rastro de luz
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Define a intensidade do brilho baseado na sessão
  const glowStyle = useMemo(() => {
    switch (activeSection) {
      case 'hero': return styles.heroGlow;
      case 'process': return styles.processGlow;
      case 'footer': return styles.footerGlow; // Transparência total aqui
      default: return styles.defaultGlow;
    }
  }, [activeSection]);

  return (
    <div className={`${styles.backgroundContainer} ${glowStyle}`}>
      {/* Camada 01: O Grid Quadriculado Fixo */}
      <div className={styles.gridOverlay} />
      
      {/* Camada 02: O Spotlight Reativo (Mouse) */}
      <div 
        className={styles.mouseSpotlight} 
        style={{ 
          left: `${mousePos.x}px`, 
          top: `${mousePos.y}px` 
        }} 
      />
      
      {/* Camada 03: Ambiência de Profundidade */}
      <div className={styles.ambientNoise} />
    </div>
  );
};