"use client";

import { GlassCard } from "@/components/GlassCard/GlassCard";
import { Typography } from "@/components/Typography/Typography";
import { Button } from "@/components/Button/Button";
import { ScrollReveal } from "@/components/ScrollReveal/ScrollReveal";
import { NEXIT_CONTENT } from "@/constants/content"; // Importando os dados reais
import styles from "./ProjectsGrid.module.css";

export const ProjectsGrid = () => {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <ScrollReveal>
          {/* Título mais agressivo e em caps como a NEXIT */}
          <Typography variant="h2" gradient style={{ textTransform: 'uppercase', fontWeight: 900 }}>
            Projetos Selecionados
          </Typography>
        </ScrollReveal>
      </div>

      <div className={styles.grid}>
        {NEXIT_CONTENT.projects.map((project, index) => (
          <ScrollReveal key={project.title} delay={index * 0.1} direction="up">
            <GlassCard className={styles.projectCard}>
              <div className={styles.cardContent}>
                <span className={styles.categoryBadge}>
                  {project.category}
                </span>
                <Typography variant="h3" style={{ fontWeight: 800, marginTop: '8px' }}>
                  {project.title}
                </Typography>
                <Typography variant="p" style={{ margin: '16px 0 32px', opacity: 0.6, fontSize: '0.9rem' }}>
                  {project.description}
                </Typography>
                <Button variant="outline" style={{ width: '100%' }}>
                  {project.cta}
                </Button>
              </div>
            </GlassCard>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};