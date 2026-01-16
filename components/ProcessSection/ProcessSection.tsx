"use client";

import { Typography } from "../Typography/Typography";
import { ScrollReveal } from "../ScrollReveal/ScrollReveal";
import styles from "./ProcessSection.module.css";

const STEPS = [
  {
    id: "01",
    title: "Descoberta",
    text: "Mergulhamos no seu negócio para identificar gargalos operacionais.",
    tech: "ANALYZE_PHASE // OP_01"
  },
  {
    id: "02",
    title: "Estratégia",
    text: "Desenhamos o fluxo de automação focado em escala e performance.",
    tech: "ARCH_DESIGN // SYS_02"
  },
  {
    id: "03",
    title: "Engenharia",
    text: "Construímos a solução com tecnologia de ponta e foco total em ROI.",
    tech: "PROD_READY // BUILD_03"
  }
];

export const ProcessSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <ScrollReveal>
          <Typography variant="h2" gradient>Nosso Processo</Typography>
        </ScrollReveal>
      </div>

      <div className={styles.grid}>
        {STEPS.map((step, index) => (
          <ScrollReveal key={step.id} delay={index * 0.1}>
            <div className={styles.processCard}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <span className={styles.stepNumber}>{step.id}</span>
                <div className={styles.techInfo}>
                  {step.tech} <br/>
                  SYS_STATUS: OK
                </div>
              </div>

              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>

              <div className={styles.techInfo} style={{ borderTop: '1px solid rgba(125,125,125,0.2)', paddingTop: '15px' }}>
                NEXIT_CORE_ENGINE v1.0 // 2024
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};