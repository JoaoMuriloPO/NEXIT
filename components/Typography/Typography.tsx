import { cn } from "@/utils";
import { BaseComponentProps } from "@/types";
import styles from "./Typography.module.css";
import React from "react";

interface TypographyProps extends BaseComponentProps {
  variant?: "h1" | "h2" | "h3" | "p";
  gradient?: boolean;
  style?: React.CSSProperties; // Adicionando o suporte ao style
}

export const Typography = ({
  children,
  variant = "p",
  gradient = false,
  className,
  style, // Capturando a prop style
}: TypographyProps) => {
  const Component = variant === "p" ? "p" : variant;

  return (
    <Component
      style={style} // Aplicando o style ao elemento HTML
      className={cn(
        styles.base,
        variant === "p" ? styles.p : styles.title,
        styles[variant],
        gradient && styles.gradient,
        className
      )}
    >
      {children}
    </Component>
  );
};