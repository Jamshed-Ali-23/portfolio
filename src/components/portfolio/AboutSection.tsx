import { motion, useScroll, useTransform } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Code, Smartphone, Cloud, Brain, Wrench } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  
  const technologies = [
    { name: "Python", icon: "🐍", category: "Data Science" },
    { name: "TensorFlow", icon: "🧠", category: "Data Science" },
    { name: "Pandas", icon: "📊", category: "Data Science" },
    { name: "Scikit-learn", icon: "🔬", category: "Data Science" },
    { name: "HTML", icon: "🌐", category: "Frontend" },
    { name: "CSS", icon: "🎨", category: "Frontend" },
    { name: "JavaScript", icon: "⚡", category: "Frontend" },
    { name: "React", icon: "⚛️", category: "Frontend" },
    { name: "Data Visualization", icon: "📈", category: "Data Science" },
    { name: "SQL", icon: "🗃️", category: "Data Science" },
    { name: "AWS", icon: "☁️", category: "Cloud" },
    { name: "Jupyter", icon: "📓", category: "Data Science" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="about" className="py-20 relative" ref={ref}>
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
              About Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate developer crafting digital experiences with cutting-edge technology
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Info */}
            <motion.div 
              variants={itemVariants}
              className="card-hover hover-lift"
            >
              <Card className="bg-gradient-glass backdrop-blur-md border-border/50 shadow-glass overflow-hidden group hover:shadow-elegant transition-all duration-700 relative">{" "}
                <motion.div
                  className="absolute top-0 left-0 w-full h-1 bg-gradient-primary"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: isVisible ? 1 : 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
                <CardContent className="p-8">
                  <div className="space-y-6">
                    {/* Location */}
                    <div className="flex items-center space-x-3">
                      <div className="p-3 rounded-full bg-primary/20">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">Based in</h3>
                        <p className="text-muted-foreground">Islamabad, Pakistan</p>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold bg-gradient-secondary bg-clip-text text-transparent">
                        Data Scientist & Frontend Developer
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        I'm a passionate developer with expertise in data science and creating stunning user interfaces. 
                        I love bringing ideas to life through data analysis, machine learning, and seamless user experiences.
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        My journey spans from analyzing complex datasets and building predictive models 
                        to crafting responsive web applications with modern frontend technologies. 
                        I'm constantly exploring new technologies and pushing the boundaries of what's possible in data-driven applications.
                      </p>
                    </div>

                    {/* Experience Highlights */}
                    <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border/50">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">3+</div>
                        <div className="text-sm text-muted-foreground">Years Experience</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-secondary">50+</div>
                        <div className="text-sm text-muted-foreground">Projects Built</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-accent">12+</div>
                        <div className="text-sm text-muted-foreground">Technologies</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Right side - Tech Stack */}
            <motion.div 
              variants={itemVariants}
              className="card-hover hover-lift"
            >
              <Card className="bg-gradient-glass backdrop-blur-md border-border/50 shadow-glass overflow-hidden group hover:shadow-elegant transition-all duration-700 relative">
                <motion.div
                  className="absolute top-0 left-0 w-full h-1 bg-gradient-secondary"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: isVisible ? 1 : 0 }}
                  transition={{ duration: 1, delay: 0.8 }}
                />
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold bg-gradient-accent bg-clip-text text-transparent">
                      Tech Expertise
                    </h3>
                    
                    <div className="grid grid-cols-2 gap-4">
                      {technologies.map((tech, index) => (
                        <motion.div
                          key={tech.name}
                          initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                          animate={{ 
                            opacity: isVisible ? 1 : 0, 
                            scale: isVisible ? 1 : 0.8,
                            rotateY: isVisible ? 0 : 90
                          }}
                          transition={{ 
                            delay: index * 0.1 + 1, 
                            duration: 0.6,
                            type: "spring",
                            damping: 15
                          }}
                          whileHover={{ 
                            scale: 1.08, 
                            y: -8,
                            rotateX: 5
                          }}
                          className="group magnetic"
                        >
                          <Badge
                            variant="secondary"
                            className="w-full justify-start py-4 px-5 bg-muted/50 hover:bg-primary/20 border border-border/50 hover:border-primary/50 transition-all duration-500 cursor-pointer relative overflow-hidden backdrop-blur-sm"
                          >
                            <motion.div
                              className="absolute inset-0 bg-gradient-primary/10"
                              initial={{ x: "-100%" }}
                              whileHover={{ x: "100%" }}
                              transition={{ duration: 0.8 }}
                            />
                            <motion.span 
                              className="text-2xl mr-3 relative z-10"
                              whileHover={{ 
                                scale: 1.2,
                                rotate: [0, -10, 10, 0]
                              }}
                              transition={{ 
                                type: "spring",
                                damping: 10
                              }}
                            >
                              {tech.icon}
                            </motion.span>
                            <div className="text-left relative z-10">
                              <div className="font-semibold">{tech.name}</div>
                              <div className="text-xs text-muted-foreground">
                                {tech.category}
                              </div>
                            </div>
                          </Badge>
                        </motion.div>
                      ))}
                    </div>

                    {/* Specialties */}
                    <div className="pt-6 border-t border-border/50 space-y-4">
                      <h4 className="text-lg font-semibold text-primary">Specializing In:</h4>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <Brain className="w-5 h-5 text-primary" />
                          <span>Machine Learning & Data Analysis</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Code className="w-5 h-5 text-secondary" />
                          <span>Interactive Frontend Development</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Wrench className="w-5 h-5 text-accent" />
                          <span>Data Visualization & Dashboards</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Cloud className="w-5 h-5 text-primary" />
                          <span>Cloud-based Data Solutions</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};