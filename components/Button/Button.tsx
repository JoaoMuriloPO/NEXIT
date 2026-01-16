"use client";

import { motion } from "framer-motion";
import { cn } from "@/utils";
import { ThemeVariant } from "@/types";
import styles from "./Button.module.css";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ThemeVariant;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export const Button = ({
  children,
  className,
  variant = "primary",
  style,
  onClick,
  type = "button",
}: ButtonProps) => {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      style={style}
      whileTap={{ scale: 0.98 }}
      className={cn(styles.button, styles[variant], className)}
    >
      <span className={styles.content}>{children}</span>
      <div className={styles.shine} />
    </motion.button>
  );
};