import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-24 right-6 z-40"
        >
          <Button
            onClick={scrollToTop}
            size="icon"
            className="w-12 h-12 rounded-full bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-purple)] text-white shadow-lg hover:shadow-xl transition-all"
          >
            <ArrowUp size={20} />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}