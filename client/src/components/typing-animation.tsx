import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypingAnimationProps {
  texts: string[];
  speed?: number;
  deleteSpeed?: number;
  delayBetween?: number;
}

export default function TypingAnimation({ 
  texts, 
  speed = 100, 
  deleteSpeed = 50, 
  delayBetween = 2000 
}: TypingAnimationProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullText = texts[currentTextIndex];
      
      if (!isDeleting) {
        // Typing
        if (currentText.length < fullText.length) {
          setCurrentText(fullText.substring(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), delayBetween);
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(fullText.substring(0, currentText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentTextIndex, texts, speed, deleteSpeed, delayBetween]);

  return (
    <div className="inline-flex items-center">
      <span>{currentText}</span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="ml-1 text-[var(--accent-blue)]"
      >
        |
      </motion.span>
    </div>
  );
}