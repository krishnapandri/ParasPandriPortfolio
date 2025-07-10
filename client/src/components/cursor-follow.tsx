import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function CursorFollow() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <>
      {/* Large cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          background: 'radial-gradient(circle, rgba(102, 126, 234, 0.3) 0%, transparent 70%)',
        }}
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
          mass: 0.5
        }}
      />
      
      {/* Small cursor */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-[var(--accent-blue)] rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{
          type: "spring",
          damping: 10,
          stiffness: 500,
          mass: 0.1
        }}
      />
    </>
  );
}