"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/animations";

/**
 * Scroll-reveal wrapper. Fades + slides its children in once on scroll.
 * Usage: <Reveal><YourContent/></Reveal> or <Reveal as="section" delay={0.1}>
 */
const Reveal = ({ children, className = "", delay = 0, variants = fadeUp, as = "div" }) => {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  );
};

export default Reveal;
