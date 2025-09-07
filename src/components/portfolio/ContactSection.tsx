import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Mail, Github, Linkedin, Send, MapPin, Phone, Globe } from "lucide-react";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 2000);
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/Jamshed-Ali-23",
      color: "hover:text-primary",
      bg: "hover:bg-primary/10"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/jamshedali23/",
      color: "hover:text-secondary",
      bg: "hover:bg-secondary/10"
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:jamshedsaiin@gmail.com",
      color: "hover:text-accent",
      bg: "hover:bg-accent/10"
    }
  ];

  const contactInfo = [
    {
      icon: MapPin,
      label: "Location",
      value: "Islamabad, Pakistan",
      color: "text-primary"
    },
    {
      icon: Mail,
      label: "Email",
      value: "jamshedsaiin@gmail.com",
      color: "text-secondary"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+92 340 3798 802",
      color: "text-accent"
    },
    {
      icon: Globe,
      label: "Website",
      value: "jamshedali.dev",
      color: "text-primary"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your next project!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <Card className="bg-gradient-glass backdrop-blur-md border-border/50 shadow-glass overflow-hidden hover:shadow-neon transition-all duration-500">
                <CardHeader>
                  <CardTitle className="text-2xl bg-gradient-secondary bg-clip-text text-transparent">
                    Send a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                        className="bg-muted/20 border-border/50 focus:border-primary transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                        className="bg-muted/20 border-border/50 focus:border-primary transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-foreground">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me about your project..."
                        rows={5}
                        required
                        className="bg-muted/20 border-border/50 focus:border-primary transition-colors resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-primary hover:shadow-neon transition-all duration-300 py-6 text-lg font-semibold"
                    >
                      {isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-background border-t-transparent rounded-full"
                        />
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Contact Details */}
              <Card className="bg-gradient-glass backdrop-blur-md border-border/50 shadow-glass overflow-hidden hover:shadow-glow transition-all duration-500">
                <CardHeader>
                  <CardTitle className="text-2xl bg-gradient-accent bg-clip-text text-transparent">
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.label}
                      whileHover={{ x: 10, scale: 1.02 }}
                      className="flex items-center space-x-4 p-3 rounded-lg hover:bg-muted/20 transition-all duration-300 cursor-pointer"
                    >
                      <div className={`p-3 rounded-full bg-muted/30 ${info.color}`}>
                        <info.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">{info.label}</div>
                        <div className="text-muted-foreground">{info.value}</div>
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="bg-gradient-glass backdrop-blur-md border-border/50 shadow-glass overflow-hidden hover:shadow-glow transition-all duration-500">
                <CardHeader>
                  <CardTitle className="text-xl bg-gradient-primary bg-clip-text text-transparent">
                    Follow Me
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        className={`p-4 rounded-full bg-muted/20 border border-border/30 ${social.bg} ${social.color} transition-all duration-300 group`}
                      >
                        <social.icon className="w-6 h-6 group-hover:animate-bounce" />
                      </motion.a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Response Card */}
              <Card className="bg-gradient-glass backdrop-blur-md border-border/50 shadow-glass overflow-hidden">
                <CardContent className="p-6 text-center">
                  <motion.div
                    animate={{ 
                      boxShadow: [
                        "0 0 20px hsl(var(--primary) / 0.3)",
                        "0 0 40px hsl(var(--primary) / 0.6)",
                        "0 0 20px hsl(var(--primary) / 0.3)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <Mail className="w-8 h-8 text-primary-foreground" />
                  </motion.div>
                  <h3 className="text-lg font-semibold mb-2">Quick Response</h3>
                  <p className="text-sm text-muted-foreground">
                    I typically respond within 24 hours. Let's discuss your project!
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <div className="bg-gradient-glass backdrop-blur-md border border-border/50 rounded-2xl p-8 shadow-glass">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Whether you need a stunning website, a mobile app, or want to integrate cutting-edge 3D experiences, 
                I'm here to help bring your vision to life with clean code and beautiful design.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-primary hover:shadow-neon px-8 py-6"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Start Your Project
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-accent/50 text-accent hover:bg-accent/10 px-8 py-6"
                  onClick={() => document.getElementById("resume")?.scrollIntoView({ behavior: "smooth" })}
                >
                  View My Resume
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};