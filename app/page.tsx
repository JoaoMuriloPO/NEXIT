"use client";

import { useEffect } from "react";
import { useSection } from "@/hooks/context/SectionContext";
import { useInView } from "react-intersection-observer";

// Importação dos componentes mantidos
import { Hero } from "./home/components/Hero/Hero";
import { Testimonials } from "./home/components/Testimonials/Testimonials";
import { Footer } from "./home/components/Footer/Footer";
import { ProcessSection } from "@/components/ProcessSection/ProcessSection";

// Componente Wrapper para detectar a seção ativa
const SectionWrapper = ({ id, type, children }: { id: string, type: 'hero' | 'process' | 'footer' | 'default', children: React.ReactNode }) => {
  const { setActiveSection } = useSection();
  const { ref, inView } = useInView({
    threshold: 0.3, // Ativa quando 30% da seção entra na tela
  });

  useEffect(() => {
    if (inView) {
      setActiveSection(type);
    }
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
      /* Removido o gap fixo para permitir transições de background fluidas */
    }}>
      
      <SectionWrapper id="hero" type="hero">
        <Hero />
      </SectionWrapper>

      {/* "TrustedBy" e "ProjectsGrid" removidos conforme solicitado */}

      <SectionWrapper id="processo" type="process">
        <ProcessSection />
      </SectionWrapper>

      <SectionWrapper id="depoimentos" type="default">
        <Testimonials />
      </SectionWrapper>

      <SectionWrapper id="footer" type="footer">
        <Footer />
      </SectionWrapper>
      
    </main>
  );
}