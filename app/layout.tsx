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
        <SectionProvider>
          <BackgroundGlow />
        

          <div style={{ position: "relative", zIndex: 1 }}>
            {children}
          </div>
        </SectionProvider>
      </body>
    </html>
  );
}