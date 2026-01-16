"use client";

import styles from "./BackgroundGlow.module.css";

export const BackgroundGlow = () => {
  return (
    <div className={styles.container}>
      <div className={styles.orb} style={{ top: '-100px', left: '-100px' }} />
      <div className={styles.orb2} />
      <div 
        className={styles.orb} 
        style={{ 
          bottom: '-200px', 
          right: '10%', 
          background: 'var(--accent-glow)',
          width: '600px',
          height: '600px'
        }} 
      />
    </div>
  );
};