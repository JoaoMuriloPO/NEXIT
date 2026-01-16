"use client";

import styles from "./Footer.module.css";
import { Mail, MapPin, Linkedin, Github, Instagram, ArrowUpRight } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        {/* Marca e CTA alinhados para ocupar menos espaço vertical */}
        <div className={styles.topRow}>
          <h2 className={styles.giantText}>NEXIT</h2>
          <a href="https://wa.me/5522992238470" target="_blank" className={styles.mainCta}>
            VAMOS CONSTRUIR O FUTURO? <ArrowUpRight size={20} />
          </a>
        </div>

        <div className={styles.contentGrid}>
          {/* Coluna 01 */}
          <div className={styles.infoBox}>
            <span className={styles.techLabel}>// LOCALIZATION</span>
            <div className={styles.dataRow}><MapPin size={14} /> <span>CABO FRIO, RJ - BR</span></div>
            <div className={styles.dataRow}><Mail size={14} /> <span>CONTATO@NEXIT.TECH</span></div>
          </div>

          {/* Coluna 02 */}
          <div className={styles.infoBox}>
            <span className={styles.techLabel}>// DIRECTORY</span>
            <nav className={styles.navLinks}>
              <a href="#metodologia">METODOLOGIA</a>
              <a href="#portfolio">PORTFÓLIO</a>
              <a href="/termos">TERMOS_DE_USO</a>
            </nav>
          </div>

          {/* Coluna 03 */}
          <div className={styles.infoBox}>
            <span className={styles.techLabel}>// SOCIAL_SYNC</span>
            <div className={styles.socialIcons}>
              <a href="#" className={styles.iconCircle}><Linkedin size={18} /></a>
              <a href="#" className={styles.iconCircle}><Github size={18} /></a>
              <a href="#" className={styles.iconCircle}><Instagram size={18} /></a>
            </div>
          </div>
        </div>

        {/* Barra de Status */}
        <div className={styles.bottomStatus}>
          <div className={styles.systemInfo}>
            <span>STATUS: <span className={styles.online}>OPERATIONAL</span></span>
            <span>BUILD: 2026.01.V</span>
          </div>
          <p className={styles.copyright}>© {currentYear} NEXIT_SYSTEMS_INC.</p>
        </div>
      </div>
    </footer>
  );
};