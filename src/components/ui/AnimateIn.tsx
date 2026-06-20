"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

interface AnimateInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: Direction;
  className?: string;
  once?: boolean;
}

const offsets: Record<Direction, { x: number; y: number }> = {
  up:    { x: 0,   y: 40  },
  down:  { x: 0,   y: -40 },
  left:  { x: -50, y: 0   },
  right: { x: 50,  y: 0   },
  none:  { x: 0,   y: 0   },
};

export default function AnimateIn({
  children,
  delay = 0,
  duration = 0.6,
  direction = "up",
  className,
  once = true,
}: AnimateInProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: "-60px 0px" });
  const { x, y } = offsets[direction];

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, x, y }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x, y }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* Stagger wrapper — animates children one by one */
export function Stagger({
  children,
  className,
  staggerDelay = 0.1,
  baseDelay = 0,
  direction = "up",
  duration = 0.6,
}: {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  baseDelay?: number;
  direction?: Direction;
  duration?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px 0px" });
  const { x, y } = offsets[direction];

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay, delayChildren: baseDelay } },
      }}
    >
      {Array.isArray(children)
        ? children.map((child, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, x, y },
                visible: { opacity: 1, x: 0, y: 0, transition: { duration, ease: [0.22, 1, 0.36, 1] } },
              }}
            >
              {child}
            </motion.div>
          ))
        : children}
    </motion.div>
  );
}
