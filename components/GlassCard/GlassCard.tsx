"use client";

import { useRef, useState, MouseEvent } from "react";
import { cn } from "@/utils";
import { BaseComponentProps } from "@/types";
import styles from "./GlassCard.module.css";

export const GlassCard = ({ children, className }: BaseComponentProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={cn(styles.card, className)}
      style={{
        ["--mouse-x" as string]: `${mousePos.x}px`,
        ["--mouse-y" as string]: `${mousePos.y}px`,
      } as React.CSSProperties}
    >
      <div className={styles.glow} />
      <div className={styles.content}>{children}</div>
    </div>
  );
};