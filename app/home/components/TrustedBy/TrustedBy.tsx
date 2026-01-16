"use client";

import { Typography } from "@/components/Typography/Typography";
import { ScrollReveal } from "@/components/ScrollReveal/ScrollReveal";
import styles from "./TrustedBy.module.css";

export const TrustedBy = () => {
  // Mock de logos - você pode substituir por SVGs reais futuramente
  const brands = ["Google", "Stripe", "Airbnb", "Meta", "Amazon"];

  return (
    <section className={styles.container}>
      <ScrollReveal delay={0.1}>
        <Typography variant="p" style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '2px', opacity: 0.5 }}>
          Trusted by industry leaders
        </Typography>
      </ScrollReveal>

      <div className={styles.grid}>
        {brands.map((brand, index) => (
          <ScrollReveal key={brand} delay={0.2 + index * 0.1}>
             {/* Aqui você usaria <img> ou <svg> */}
            <span className={styles.logo}>{brand}</span>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};