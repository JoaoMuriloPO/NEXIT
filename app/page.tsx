"use client";

import { useEffect } from "react";
import { useSection } from "@/hooks/context/SectionContext";
import { useInView } from "react-intersection-observer";

// Importações mantidas
import { Hero } from "./home/components/Hero/Hero";
import { Testimonials } from "./home/components/Testimonials/Testimonials";
import { Footer } from "./home/components/Footer/Footer";
import { ProcessSection } from "@/components/ProcessSection/ProcessSection";

const SectionWrapper = ({ id, type, children }: { id: string, type: any, children: React.ReactNode }) => {
  const { setActiveSection } = useSection();
  const { ref, inView } = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (inView) setActiveSection(type);
  }, [inView, type, setActiveSection]);

  return (
    <section id={id} ref={ref} style={{ width: '100%' }}>
      {children}
    </section>
  );
};

export default function Home() {
  return (
    <main style={{ 
      maxWidth: '1400px', 
      margin: '0 auto', 
      display: 'flex', 
      flexDirection: 'column',
      // Removido o gap global para controle individual de cada seção
    }}>
      
      {/* 1. Hero: Impacto Inicial */}
      <SectionWrapper id="hero" type="hero">
        <Hero />
      </SectionWrapper>

      {/* 2. Processo: A nova joia da coroa (Etapa 3 vindo aí) */}
      <SectionWrapper id="processo" type="process">
        <div style={{ padding: '120px 0' }}> {/* Espaçamento interno para respiração */}
          <ProcessSection />
        </div>
      </SectionWrapper>

      {/* 3. Depoimentos: Prova Social Técnica */}
      <SectionWrapper id="depoimentos" type="default">
        <div style={{ padding: '100px 0' }}>
          <Testimonials />
        </div>
      </SectionWrapper>

      {/* 4. Footer: O fechamento perfeito e transparente */}
      <SectionWrapper id="footer" type="footer">
        <Footer />
      </SectionWrapper>
      
    </main>
  );
}