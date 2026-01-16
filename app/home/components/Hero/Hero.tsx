"use client";

import { Button } from "@/components/Button/Button";
import { Typography } from "@/components/Typography/Typography";
import { ScrollReveal } from "@/components/ScrollReveal/ScrollReveal";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <ScrollReveal delay={0.1}>
        {/* Badge atualizada para o estilo Terminal da NEXIT */}
        <div className={styles.badge}>
          SOFTWARE ENTHUSIAST_
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        {/* Título com o texto real extraído da referência */}
        <Typography variant="h1" gradient>
          SUA PRÓXIMA SAÍDA PARA <br />
          AUTOMAÇÃO INTELIGENTE
        </Typography>
      </ScrollReveal>

      <ScrollReveal delay={0.3} className={styles.description}>
        {/* Subtítulo focado em resultados e escala */}
        <Typography variant="p">
          Transformamos processos complexos em fluxos automatizados que escalam seu negócio. 
          Soluções personalizadas que entregam resultados mensuráveis desde o primeiro dia.
        </Typography>
      </ScrollReveal>

      <ScrollReveal delay={0.4} className={styles.actions}>
        {/* CTAs atualizados conforme o novo design */}
        <Button variant="primary">Comece Sua Transformação</Button>
        <Button variant="glass">Fale com NEX</Button>
      </ScrollReveal>

      {/* Elemento de auxílio visual presente na referência */}
      {/* <div className={styles.scrollNote}>ROLE PARA DESCOBRIR</div> */}
    </section>
  );
};