import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/navigation";
import AnimatedHero from "@/components/animated-hero";
import SkillsSection from "@/components/skills-section";
import ExperienceTimeline from "@/components/experience-timeline";
import ProjectsShowcase from "@/components/projects-showcase";
import ContactForm from "@/components/contact-form";
import ThemeToggle from "@/components/theme-toggle";
import ScrollProgress from "@/components/scroll-progress";

import InteractiveBackground from "@/components/interactive-background";
import StatCounter from "@/components/stats-counter";
import BackToTop from "@/components/back-to-top";
import CursorFollow from "@/components/cursor-follow";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "experience", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--primary-dark)] dark:bg-[var(--primary-dark)] bg-white text-[var(--text-primary)] dark:text-[var(--text-primary)] text-gray-900 relative">
      <CursorFollow />
      <InteractiveBackground />
      <ScrollProgress />
      <ThemeToggle />
      <BackToTop />
      <Navigation activeSection={activeSection} />
      
      <AnimatedHero />

      {/* About Section */}
      <section id="about" className="py-20 bg-[var(--secondary-dark)]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 gradient-text">About Me</h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Passionate software engineer with expertise in full-stack development, 
              dedicated to creating efficient and scalable solutions.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Code visualization with data flowing through geometric patterns"
                className="rounded-xl shadow-2xl"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold">Software Engineer at Softcon Business Solutions</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                Currently working as a Software Engineer at Softcon Business Solutions Pvt Ltd since April 2023. 
                I specialize in debugging and resolving critical bugs in production environments, 
                designing new features, and optimizing system performance.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="text-center p-4 bg-[var(--primary-dark)] rounded-lg"
                >
                  <div className="text-2xl font-bold gradient-text">
                    <StatCounter end={2} suffix="+" />
                  </div>
                  <div className="text-[var(--text-secondary)]">Years Experience</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="text-center p-4 bg-[var(--primary-dark)] rounded-lg"
                >
                  <div className="text-2xl font-bold gradient-text">
                    <StatCounter end={150} suffix="+" />
                  </div>
                  <div className="text-[var(--text-secondary)]">Bugs Resolved</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="text-center p-4 bg-[var(--primary-dark)] rounded-lg"
                >
                  <div className="text-2xl font-bold gradient-text">
                    <StatCounter end={10} suffix="+" />
                  </div>
                  <div className="text-[var(--text-secondary)]">Projects Completed</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="text-center p-4 bg-[var(--primary-dark)] rounded-lg"
                >
                  <div className="text-2xl font-bold gradient-text">
                    <StatCounter end={91} suffix="%" />
                  </div>
                  <div className="text-[var(--text-secondary)]">Academic Score</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <SkillsSection />
      <ExperienceTimeline />
      <ProjectsShowcase />
      <ContactForm />

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-[var(--text-secondary)] mb-4 md:mb-0">
              © 2024 Paras Pandri. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a
                href="https://www.linkedin.com/in/paras-pandri-609a95200/"
                className="text-[var(--text-secondary)] hover:text-[var(--accent-blue)] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"/>
                </svg>
              </a>
              <a
                href="mailto:krishnapandri001@gmail.com"
                className="text-[var(--text-secondary)] hover:text-[var(--accent-blue)] transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
