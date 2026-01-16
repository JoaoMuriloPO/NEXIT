"use client";

import { useState, useEffect } from "react";
import { cn } from "@/utils";
import { Button } from "@/components/Button/Button";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={cn(styles.nav, isScrolled && styles.scrolled)}>
      <div className={styles.container}>
        <a href="#" className={styles.logo}>
          NEXIT<span style={{ color: "var(--accent-emerald)" }}>.</span>
        </a>

        <div className={styles.links}>
          <a href="#projetos" className={styles.link}>Projetos</a>
          <a href="#depoimentos" className={styles.link}>Clientes</a>
          <a href="#contato" className={styles.link}>Processo</a>
          <Button variant="glass" style={{ padding: '8px 20px', fontSize: '13px' }}>
            Falar com especialista
          </Button>
        </div>
      </div>
    </nav>
  );
};