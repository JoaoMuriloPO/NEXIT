import type { Metadata } from "next";
import "./globals.css";
import { BackgroundGlow } from "@/components/BackgroundGlow/BackgroundGlow";
// Importamos o Provider que você criou em hooks/context/SectionContext
import { SectionProvider } from "@/hooks/context/SectionContext"; 

export const metadata: Metadata = {
  title: "NEXIT | Software House de Alta Performance",
  description: "Soluções digitais premium com estética de alto nível.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>
        {/* O Provider deve envolver TUDO que precisa saber em qual sessão o usuário está */}
        <SectionProvider>
          {/* O BackgroundGlow agora poderá "ouvir" a sessão ativa no 1.2 */}
          <BackgroundGlow />
          
          {/* Navbar comentada conforme seu plano de limpeza */}
          {/* <Navbar />  */}

          <div style={{ position: "relative", zIndex: 1 }}>
            {children}
          </div>
        </SectionProvider>
      </body>
    </html>
  );
}