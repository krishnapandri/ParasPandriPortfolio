import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function ProjectsShowcase() {
  const projects = [
    {
      title: "Smart Business Solution (ERP)",
      description: "Comprehensive ERP software for business management with Angular, C#, TypeScript, and SQL Server.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      technologies: ["Angular", "C#", "SQL Server", "TypeScript"],
      achievements: [
        "Resolved 150+ critical bugs and incidents",
        "Enhanced system monitoring capabilities", 
        "Improved application stability significantly"
      ]
    },
    {
      title: "Sumato Pro App",
      description: "Android application developed using Android Studio with Angular, C#, Bootstrap, and CSS/SQL.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      technologies: ["Android Studio", "Angular", "Bootstrap", "C#"],
      achievements: [
        "Led team through full development lifecycle",
        "Implemented rigorous debugging protocols",
        "Achieved 40% improvement in stability"
      ]
    },
    {
      title: "CollabWithCode",
      description: "Real-time collaborative coding platform with React, Node.js, Express.js, Socket.io, and Tailwind CSS.",
      image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      technologies: ["React", "Node.js", "Socket.io", "Tailwind CSS"],
      achievements: [
        "Real-time collaborative coding environment",
        "Enhanced user-client communication",
        "Features syntax highlighting and code folding"
      ]
    }
  ];

  const techColors: { [key: string]: string } = {
    "Angular": "bg-red-500/20 text-red-400",
    "React": "bg-blue-500/20 text-blue-400",
    "C#": "bg-purple-500/20 text-purple-400",
    "TypeScript": "bg-blue-600/20 text-blue-300",
    "SQL Server": "bg-orange-500/20 text-orange-400",
    "Node.js": "bg-green-500/20 text-green-400",
    "Socket.io": "bg-gray-500/20 text-gray-300",
    "Bootstrap": "bg-purple-600/20 text-purple-300",
    "Android Studio": "bg-green-600/20 text-green-300",
    "Tailwind CSS": "bg-cyan-500/20 text-cyan-400"
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">Featured Projects</h2>
          <p className="text-[var(--text-secondary)]">Some of my notable work and contributions</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <Card className="bg-[var(--secondary-dark)] border-gray-800 overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>
                  <p className="text-[var(--text-secondary)] mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        className={`${techColors[tech] || 'bg-gray-500/20 text-gray-300'} border-none`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    {project.achievements.map((achievement, achIndex) => (
                      <p key={achIndex} className="text-[var(--text-secondary)] text-sm flex items-start">
                        <span className="text-[var(--success)] mr-2">•</span>
                        {achievement}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
