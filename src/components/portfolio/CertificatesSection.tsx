import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Award } from "lucide-react";
import { FC } from 'react';

type Certificate = {
  id: number;
  title: string;
  platform: string;
  issueDate: string;
  credentialUrl: string;
  logo: string;
  description: string;
};

export const CertificatesSection = () => {
  const certificates = [
    {
      id: 1,
      title: "AWS Cloud Practitioner Essentials",
      platform: "Amazon Web Services",
      issueDate: "2023",
      credentialUrl: "/Certificates/Aws Cloud Practitioner Essentials.pdf",
      logo: "☁️",
      color: "primary",
      description: "Foundational knowledge of AWS cloud services, architecture, and best practices"
    },
    {
      id: 2,
      title: "Basic in Machine Learning",
      platform: "Coursera",
      issueDate: "2023",
      credentialUrl: "/Certificates/Basic in Machine Learning.pdf",
      logo: "🧠",
      color: "secondary",
      description: "Fundamentals of machine learning algorithms, models, and applications"
    },
    {
      id: 3,
      title: "Basic of Data Science",
      platform: "DataCamp",
      issueDate: "2023",
      credentialUrl: "/Certificates/Basic of Data science.pdf",
      logo: "📊",
      color: "accent",
      description: "Core concepts in data science including data analysis, visualization, and interpretation"
    },
    {
      id: 4,
      title: "Data Analytics",
      platform: "Google",
      issueDate: "2023",
      credentialUrl: "/Certificates/Data Analytics.pdf",
      logo: "📈",
      color: "primary",
      description: "Comprehensive training in data analytics techniques and tools"
    },
    {
      id: 5,
      title: "Introduction to Frontend Development",
      platform: "Meta",
      issueDate: "2022",
      credentialUrl: "/Certificates/Introduction to Frontend Development.pdf",
      logo: "⚛️",
      color: "secondary",
      description: "Fundamentals of frontend web development including HTML, CSS, and JavaScript"
    },
    {
      id: 6,
      title: "Machine Learning Using Python",
      platform: "IBM",
      issueDate: "2022",
      credentialUrl: "/Certificates/Machine Learning Using Phyton.pdf",
      logo: "🐍",
      color: "accent",
      description: "Applied machine learning techniques using Python libraries and frameworks"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const certificateVariants = {
    hidden: { opacity: 0, y: 50, rotateY: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateY: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return "border-primary/50 hover:border-primary hover:shadow-neon bg-primary/5";
      case "secondary":
        return "border-secondary/50 hover:border-secondary hover:shadow-glow bg-secondary/5";
      case "accent":
        return "border-accent/50 hover:border-accent hover:shadow-glow bg-accent/5";
      default:
        return "border-border/50 hover:border-primary";
    }
  };

  return (
    <div className="py-20 bg-white" id="certificates">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Professional Certifications</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Continuous learning and professional development achievements
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
        >
            {certificates.map((certificate, index) => (
              <motion.div
                key={certificate.id}
                variants={certificateVariants}
                whileHover={{ 
                  y: -10, 
                  rotateY: 5,
                  scale: 1.02
                }}
                className="group perspective-1000"
              >
                <Card className={`h-full bg-gradient-glass backdrop-blur-md border overflow-hidden transition-all duration-500 transform-gpu ${getColorClasses(certificate.color)}`}>
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <motion.div
                          className="text-4xl"
                          whileHover={{ scale: 1.2, rotate: 10 }}
                          transition={{ type: "spring", bounce: 0.5 }}
                        >
                          {certificate.logo}
                        </motion.div>
                        <div className="flex-1">
                          <CardTitle className="text-lg font-bold line-clamp-2 group-hover:text-primary transition-colors">
                            {certificate.title}
                          </CardTitle>
                          <p className="text-sm text-muted-foreground font-medium">
                            {certificate.platform}
                          </p>
                        </div>
                      </div>
                      
                      <Badge 
                        variant="secondary" 
                        className="shrink-0 bg-muted/50 text-xs"
                      >
                        <Calendar className="w-3 h-3 mr-1" />
                        {certificate.issueDate}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {certificate.description}
                    </p>

                    {/* Certificate Stats */}
                    <div className="flex items-center justify-between text-xs text-muted-foreground pt-2 border-t border-border/30">
                      <div className="flex items-center space-x-1">
                        <Award className="w-3 h-3" />
                        <span>Verified Certificate</span>
                      </div>
                      <div className="text-right">
                        <span>Credential ID</span>
                      </div>
                    </div>

                    {/* View Certificate Button */}
                    <Button
                      size="sm"
                      variant="outline"
                      className={`w-full mt-4 transition-all duration-300 ${
                        certificate.color === "primary" 
                          ? "border-primary/50 text-primary hover:bg-primary/10 hover:shadow-neon"
                          : certificate.color === "secondary"
                          ? "border-secondary/50 text-secondary hover:bg-secondary/10"
                          : "border-accent/50 text-accent hover:bg-accent/10"
                      }`}
                      asChild
                    >
                      <a 
                        href={certificate.credentialUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group/btn"
                      >
                        <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                        View Certificate
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Achievement Summary */}
          <motion.div
            variants={certificateVariants}
            className="mt-16 text-center"
          >
            <Card className="inline-block bg-gradient-glass backdrop-blur-md border-border/50 shadow-glass">
              <CardContent className="p-8">
                <div className="flex items-center justify-center space-x-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">6</div>
                    <div className="text-sm text-muted-foreground">Certificates</div>
                  </div>
                  <div className="w-px h-12 bg-border/50" />
                  <div className="text-center">
                    <div className="text-3xl font-bold text-secondary mb-2">4</div>
                    <div className="text-sm text-muted-foreground">Platforms</div>
                  </div>
                  <div className="w-px h-12 bg-border/50" />
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent mb-2">100%</div>
                    <div className="text-sm text-muted-foreground">Verified</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};