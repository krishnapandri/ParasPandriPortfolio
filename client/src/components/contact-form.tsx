import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Linkedin, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }
    contactMutation.mutate(formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/paras-pandri-resume.pdf';
    link.download = 'Paras_Pandri_Resume.pdf';
    link.click();
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "krishnapandri001@gmail.com",
      href: "mailto:krishnapandri001@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "9867096429",
      href: "tel:9867096429"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "paras-pandri-609a95200",
      href: "https://www.linkedin.com/in/paras-pandri-609a95200/"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Mumbai, India",
      href: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-[var(--secondary-dark)]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">Get In Touch</h2>
          <p className="text-[var(--text-secondary)]">Let's discuss how we can work together</p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-purple)] rounded-lg flex items-center justify-center mr-4">
                    <item.icon className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-[var(--text-secondary)]">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-medium text-[var(--accent-blue)] hover:text-[var(--accent-purple)] transition-colors"
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-medium">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Resume Download Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-8"
            >
              <Button
                onClick={handleDownloadResume}
                className="bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-purple)] text-white w-full"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-[var(--primary-dark)] border-gray-800">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-[var(--text-secondary)] mb-2">Name</label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      className="bg-[var(--secondary-dark)] border-gray-600 text-white focus:border-[var(--accent-blue)]"
                    />
                  </div>
                  <div>
                    <label className="block text-[var(--text-secondary)] mb-2">Email</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      className="bg-[var(--secondary-dark)] border-gray-600 text-white focus:border-[var(--accent-blue)]"
                    />
                  </div>
                  <div>
                    <label className="block text-[var(--text-secondary)] mb-2">Message</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder="Your message..."
                      className="bg-[var(--secondary-dark)] border-gray-600 text-white focus:border-[var(--accent-blue)] resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={contactMutation.isPending}
                    className="w-full bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-purple)] text-white hover:shadow-lg hover:shadow-[var(--accent-blue)]/25 transition-all"
                  >
                    {contactMutation.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Floating Resume Download Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <Button
          onClick={handleDownloadResume}
          size="icon"
          className="w-14 h-14 rounded-full bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-purple)] text-white shadow-lg hover:shadow-xl transition-all animate-glow"
        >
          <Download size={20} />
        </Button>
      </motion.div>
    </section>
  );
}
