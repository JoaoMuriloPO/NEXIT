"use client";

import React, { useEffect, useState, useMemo } from 'react';
import { useSection } from '@/hooks/context/SectionContext';
import styles from './BackgroundGlow.module.css';

export const BackgroundGlow = () => {
  const { activeSection } = useSection();
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Converte a posição do mouse em porcentagem para o CSS
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const sectionClass = useMemo(() => {
    switch (activeSection) {
      case 'hero': return styles.heroGlow;
      case 'process': return styles.processGlow;
      case 'footer': return styles.footerGlow;
      default: return styles.defaultGlow;
    }
  }, [activeSection]);

  return (
    <div 
      className={`${styles.backgroundContainer} ${sectionClass}`}
      style={{
        '--mouse-x': `${mousePos.x}%`,
        '--mouse-y': `${mousePos.y}%`,
      } as React.CSSProperties}
    >
      <div className={styles.gridOverlay} />
      <div className={styles.ambientNoise} />
      {/* Luz volumétrica principal */}
      <div className={styles.volumetricLight} />
    </div>
  );
};