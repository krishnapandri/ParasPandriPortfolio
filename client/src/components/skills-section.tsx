import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Layers, Settings } from "lucide-react";

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      color: "var(--accent-blue)",
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "C#", level: 80 },
        { name: "SQL", level: 75 },
      ]
    },
    {
      title: "Frameworks",
      icon: Layers,
      color: "var(--accent-purple)",
      skills: [
        { name: "Angular", level: 95 },
        { name: "React", level: 50 },
        { name: ".NET Framework", level: 75 },
        { name: "Bootstrap", level: 85 },
      ]
    },
    {
      title: "Tools",
      icon: Settings,
      color: "var(--success)",
      skills: [
        { name: "Git", level: 85 },
        { name: "MSSQL", level: 80 },
        { name: "Socket.io", level: 75 },
        { name: "Android Studio", level: 70 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">Technical Skills</h2>
          <p className="text-[var(--text-secondary)]">Technologies and tools I work with</p>
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.2, duration: 0.8 }}
              className="bg-[var(--secondary-dark)] p-6 rounded-xl"
            >
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <category.icon 
                  className="mr-3" 
                  style={{ color: category.color }}
                  size={24}
                />
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span>{skill.name}</span>
                      <span className="text-[var(--text-secondary)]">{skill.level}%</span>
                    </div>
                    <div className="bg-gray-700 h-2 rounded-full overflow-hidden">
                      <motion.div
                        className="h-2 rounded-full bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-purple)]"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5, 
                          duration: 1.5,
                          ease: "easeOut"
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
