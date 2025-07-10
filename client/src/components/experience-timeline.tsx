import { motion } from "framer-motion";
import { Briefcase, GraduationCap, CheckCircle } from "lucide-react";

export default function ExperienceTimeline() {
  const timelineItems = [
    {
      type: "work",
      title: "Software Engineer",
      company: "Softcon Business Solutions Pvt Ltd",
      period: "April 2023 - Present",
      location: "Mumbai, India",
      achievements: [
        "Debugged and resolved critical bugs in production environments",
        "Designed new features based on client requirements",
        "Optimized SQL queries improving system performance",
        "Implemented logging and exception tracking mechanisms"
      ]
    },
    {
      type: "education",
      title: "Bachelor of Information Technology",
      company: "SIES College of Commerce And Economics",
      period: "2020 - April 2023",
      location: "CGPA: 9.1",
      achievements: [
        "Specialized in software development and programming",
        "Completed projects in web development and mobile applications",
        "Strong foundation in computer science fundamentals"
      ]
    },
    {
      type: "education",
      title: "Higher Secondary Certificate (HSC) - Science",
      company: "Vani Vidyalaya",
      period: "2018 - 2020",
      location: "Mulund | 67%",
      achievements: [
        "Completed 12th grade with Science stream",
        "Built strong foundation in Mathematics and Physics",
        "Developed analytical and problem-solving skills"
      ]
    },
    {
      type: "education",
      title: "Secondary School Certificate (SSC)",
      company: "St John The Baptist High School",
      period: "2018",
      location: "Thane | 80.40%",
      achievements: [
        "Completed 10th grade with excellent academic performance",
        "Strong foundation in core subjects",
        "Developed discipline and study habits"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-[var(--secondary-dark)]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">Experience</h2>
          <p className="text-[var(--text-secondary)]">My professional journey</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-[var(--accent-blue)] to-[var(--accent-purple)]" />
            
            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.3, duration: 0.8 }}
                className="relative mb-12"
              >
                <div className="flex items-center mb-4">
                  {/* Timeline icon */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-purple)] rounded-full flex items-center justify-center">
                    {item.type === "work" ? 
                      <Briefcase className="text-white" size={16} /> : 
                      <GraduationCap className="text-white" size={16} />
                    }
                  </div>
                  
                  {/* Content positioning */}
                  <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:w-1/2 md:pr-8 md:text-right' : 'md:w-1/2 md:pl-8 md:ml-auto'}`}>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="text-[var(--accent-blue)] font-medium">{item.company}</p>
                    <p className="text-[var(--text-secondary)]">{item.period}</p>
                    <p className="text-[var(--text-secondary)] text-sm">{item.location}</p>
                  </div>
                </div>
                
                {/* Achievements */}
                <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:w-1/2 md:pr-8' : 'md:w-1/2 md:pl-8 md:ml-auto'}`}>
                  <div className="bg-[var(--primary-dark)] p-6 rounded-lg">
                    <h4 className="font-semibold mb-3 text-[var(--accent-blue)]">
                      {item.type === "work" ? "Key Achievements:" : "Highlights:"}
                    </h4>
                    <ul className="space-y-2">
                      {item.achievements.map((achievement, achIndex) => (
                        <motion.li
                          key={achIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.3 + achIndex * 0.1 + 0.5, duration: 0.5 }}
                          className="flex items-start text-[var(--text-secondary)]"
                        >
                          <CheckCircle className="text-[var(--success)] mr-2 mt-1 flex-shrink-0" size={16} />
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
