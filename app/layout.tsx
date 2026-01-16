import type { Metadata } from "next";
import "./globals.css";
import { BackgroundGlow } from "@/components/BackgroundGlow/BackgroundGlow";
import { Navbar } from "@/components/Navbar/Navbar"; // 1. Adicione esta linha

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
        <BackgroundGlow />
        
        {/* 2. Adicione a Navbar aqui, fora da div relativa */}
        <Navbar /> 

        <div style={{ position: "relative", zIndex: 1 }}>
          {children}
        </div>
      </body>
    </html>
  );
}