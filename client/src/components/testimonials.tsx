import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Senior Developer",
      role: "Team Lead at Softcon",
      rating: 5,
      text: "Paras consistently delivers high-quality code and shows excellent problem-solving skills. His dedication to resolving critical bugs has significantly improved our system stability."
    },
    {
      name: "Project Manager",
      role: "Softcon Business Solutions",
      rating: 5,
      text: "Working with Paras has been a great experience. He's always ready to take on new challenges and his implementation of logging mechanisms has been invaluable for our debugging process."
    },
    {
      name: "Colleague",
      role: "Software Engineer",
      rating: 5,
      text: "Paras has a great understanding of full-stack development. His work on optimizing SQL queries has noticeably improved our application performance during high-load operations."
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">What People Say</h2>
          <p className="text-[var(--text-secondary)]">Feedback from colleagues and team members</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <Card className="bg-[var(--secondary-dark)] border-gray-800 h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Quote className="text-[var(--accent-blue)] mr-2" size={20} />
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="text-yellow-400 fill-current" size={16} />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-[var(--text-secondary)] mb-6 italic">
                    "{testimonial.text}"
                  </p>
                  
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-[var(--accent-blue)] text-sm">{testimonial.role}</p>
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