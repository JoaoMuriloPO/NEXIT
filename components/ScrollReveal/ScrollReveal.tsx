"use client";

import { motion } from "framer-motion";
import { BaseComponentProps } from "@/types";

interface ScrollRevealProps extends BaseComponentProps {
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

export const ScrollReveal = ({ 
  children, 
  delay = 0, 
  direction = "up",
  className 
}: ScrollRevealProps) => {
  const directions = {
    up: { y: 20, x: 0 },
    down: { y: -20, x: 0 },
    left: { x: 20, y: 0 },
    right: { x: -20, y: 0 },
  };

  return (
    <motion.div
      className={className}
      initial={{ 
        opacity: 0, 
        y: directions[direction].y, 
        x: directions[direction].x 
      }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.8, 
        delay: delay, 
        ease: [0.21, 0.47, 0.32, 0.98] 
      }}
    >
      {children}
    </motion.div>
  );
};