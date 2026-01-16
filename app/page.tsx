import { Hero } from "./home/components/Hero/Hero";
import { TrustedBy } from "./home/components/TrustedBy/TrustedBy";
import { ProjectsGrid } from "./home/components/ProjectsGrid/ProjectsGrid";
import { Testimonials } from "./home/components/Testimonials/Testimonials";
import { Footer } from "./home/components/Footer/Footer";
// Garanta que o nome do arquivo seja exatamente ProcessSection.tsx dentro da pasta ProcessSection
import { ProcessSection } from "@/components/ProcessSection/ProcessSection"; 

export default function Home() {
  return (
    <main style={{ 
      maxWidth: '1400px', // Aumentado um pouco para dar mais fôlego aos 3 cards de projetos
      margin: '0 auto', 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '140px', 
    }}>
      
      <Hero />
      <TrustedBy />
      <ProjectsGrid />
      
      {/* 6.4 Seção de Metodologia - O contraste branco entra aqui */}
      <ProcessSection />

      <Testimonials />
      <Footer />
    </main>
  );
}