"use client";

import { Typography } from "@/components/Typography/Typography";
import { ScrollReveal } from "@/components/ScrollReveal/ScrollReveal";
import { AudioPlayer } from "../AudioPlayer/AudioPlayer";
import styles from "./Testimonials.module.css";

const FEEDBACKS = [
  {
    id: 1,
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
  },
  {
    id: 2,
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka"
  }
];

export const Testimonials = () => {
  return (
    <section className={styles.container}>
      {/* Lado Esquerdo: Título imponente que preenche a tela */}
      <div className={styles.header}>
        <ScrollReveal direction="left">
          <Typography variant="h2" gradient className={styles.title}>
            O que nossos <br/> clientes dizem
          </Typography>
        </ScrollReveal>
      </div>
      
      {/* Lado Direito: Lista de players com delay de entrada */}
      <div className={styles.list}>
        {FEEDBACKS.map((item, index) => (
          <ScrollReveal key={item.id} delay={index * 0.2} direction="right">
            <AudioPlayer 
              src={item.audio}
              avatarUrl={item.avatar}
            />
          </ScrollReveal>
        ))}
        
        {/* Detalhe técnico decorativo estilo Dark Tech */}
        <div className={styles.techDecoration}>
          <span>VOICE_REPORTS_ENCRYPTED</span>
          <div className={styles.line} />
        </div>
      </div>
    </section>
  );
};