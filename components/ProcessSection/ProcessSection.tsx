"use client";

import { Typography } from "../Typography/Typography";
import { ScrollReveal } from "../ScrollReveal/ScrollReveal";
import styles from "./ProcessSection.module.css";

const STEPS = [
  {
    id: "01",
    title: "Descoberta",
    text: "Mergulhamos no seu negócio para identificar gargalos operacionais.",
    tech: "ANALYZE_PHASE // OP_01",
    rotation: "-8deg", // Proximidade aumentada (era -15deg)
    offset: "40px"
  },
  {
    id: "02",
    title: "Estratégia",
    text: "Desenhamos o fluxo de automação focado em escala e performance.",
    tech: "ARCH_DESIGN // SYS_02",
    rotation: "0deg",
    offset: "0px"
  },
  {
    id: "03",
    title: "Engenharia",
    text: "Construímos a solução com tecnologia de ponta e foco total em ROI.",
    tech: "PROD_READY // BUILD_03",
    rotation: "8deg", // Proximidade aumentada (era 15deg)
    offset: "-40px"
  }
];

export const ProcessSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <ScrollReveal>
          <Typography variant="h2" gradient>PROCESSO_DE_EXECUÇÃO</Typography>
        </ScrollReveal>
      </div>

      <div className={styles.fanContainer}>
        {STEPS.map((step, index) => (
          <ScrollReveal key={step.id} delay={index * 0.1}>
            <div 
              className={styles.flipCard} 
              style={{ 
                '--rotation': step.rotation,
                '--offset': step.offset 
              } as React.CSSProperties}
            >
              <div className={styles.cardInner}>
                {/* FRENTE: Estética de Cartão de Acesso Tech */}
                <div className={styles.cardFront}>
                  <div className={styles.cardTopInfo}>
                    <span className={styles.idBadge}>ID_{step.id}</span>
                    <span className={styles.scanLine}>EXT_SCAN_OK</span>
                  </div>
                  
                  <div className={styles.frontMain}>
                    <h3 className={styles.frontTitle}>{step.title}</h3>
                    <div className={styles.gridMiniature} />
                  </div>

                  <div className={styles.frontFooter}>
                    <div className={styles.techTag}>INIT_PROTOCOL</div>
                    <div className={styles.hexCode}>0x{step.id}FB92</div>
                  </div>
                </div>

                {/* VERSO: Interface de Comando Detalhada */}
                <div className={styles.cardBack}>
                  <div className={styles.backHeader}>
                    <span className={styles.terminalText}>TERMINAL_V2.6 // {step.tech}</span>
                  </div>
                  
                  <div className={styles.backBody}>
                    <p className={styles.description}>{step.text}</p>
                    <div className={styles.dataLog}>
                      <span>LOADING_RESOURCES... 100%</span>
                      <span>MEMORY_ALLOCATION: STABLE</span>
                    </div>
                  </div>

                  <div className={styles.backFooter}>
                    <div className={styles.footerBrand}>NEXIT_SYSTEMS</div>
                    <div className={styles.statusPulse}>● LIVE</div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};