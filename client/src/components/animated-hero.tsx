import { motion } from "framer-motion";
import { Download, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import TypingAnimation from "./typing-animation";

export default function AnimatedHero() {
  const codeSnippets = [
    { code: 'const developer = "Paras";', delay: 0 },
    { code: 'function solve() { return "innovative"; }', delay: 1 },
    { code: 'npm install excellence', delay: 2 },
    { code: 'git commit -m "Ship it!"', delay: 3 },
  ];

  const handleDownloadResume = async () => {
    try {
      const response = await fetch('/paras-pandri-resume.pdf');
      if (!response.ok) {
        throw new Error('Resume not found');
      }
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Paras_Pandri_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading resume:', error);
      alert('Resume is not available for download at the moment.');
    }
  };

  const scrollToWork = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-blue)]/10 to-[var(--accent-purple)]/10" />
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, var(--accent-blue) 1px, transparent 1px),
                           radial-gradient(circle at 75% 75%, var(--accent-purple) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Floating Code Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {codeSnippets.map((snippet, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              x: [0, 10, 0]
            }}
            transition={{ 
              delay: snippet.delay,
              duration: 0.8,
              x: { repeat: Infinity, duration: 6 + index }
            }}
            className={`code-block absolute p-4 rounded-lg ${
              index === 0 ? 'top-20 left-10' :
              index === 1 ? 'top-40 right-20' :
              index === 2 ? 'bottom-40 left-20' :
              'bottom-20 right-10'
            }`}
          >
            <code className={`font-mono text-sm ${
              index % 2 === 0 ? 'text-[var(--accent-blue)]' : 'text-[var(--accent-purple)]'
            }`}>
              {snippet.code}
            </code>
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Hi, I'm <span className="gradient-text">Paras Pandri</span>
          </motion.h1>
          
          <motion.div 
            className="text-xl md:text-2xl text-[var(--text-secondary)] mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <TypingAnimation
              texts={[
                "Software Engineer crafting innovative solutions",
                "Full-stack developer with expertise in React & Angular",
                "Problem solver debugging production environments",
                "Code optimizer improving system performance"
              ]}
              speed={80}
              deleteSpeed={40}
              delayBetween={3000}
            />
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Button
              onClick={scrollToWork}
              className="bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-purple)] text-white px-8 py-3 hover:shadow-lg hover:shadow-[var(--accent-blue)]/25 transition-all"
            >
              View My Work
            </Button>
            <Button
              onClick={handleDownloadResume}
              variant="outline"
              className="border-[var(--accent-blue)] text-[var(--accent-blue)] hover:bg-[var(--accent-blue)] hover:text-white px-8 py-3 transition-all"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ArrowDown className="text-[var(--text-secondary)] h-6 w-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
