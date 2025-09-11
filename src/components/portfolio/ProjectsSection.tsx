import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const projects = [
    // Data Science & Analytics Projects
    {
      id: 1,
      title: "Titanic Survival Prediction",
      description: "Performed EDA, feature engineering & ML modeling achieving 82% accuracy with Random Forest classifier.",
      techStack: ["Python", "Pandas", "NumPy", "Seaborn", "Matplotlib", "Scikit-learn", "XGBoost"],
      githubUrl: "https://github.com/Jamshed-Ali-23/Titanic-dataset-Kaggle-Analysis-",
      liveUrl: "#",
  image: "titanic.webp",
      category: "Data Science"
    },
    {
      id: 2,
      title: "Walmart Sales Forecasting",
      description: "Sales analysis & forecasting with interactive Power BI dashboard for data-driven decision making.",
      techStack: ["Python", "Pandas", "Seaborn", "Power BI"],
      githubUrl: "https://github.com/Jamshed-Ali-23/Walmart-Sales-Analysis",
      liveUrl: "#",
  image: "walmart.webp",
      category: "Data Science"
    },
    {
      id: 3,
      title: "Retail Insights Dashboard",
      description: "Built interactive Power BI dashboard with DAX & KPIs for comprehensive retail analytics.",
      techStack: ["Power BI", "DAX", "Data Modeling", "SQL"],
      githubUrl: "https://github.com/Jamshed-Ali-23/Sales-Dashboard-PowerBI",
      liveUrl: "#",
  image: "retail.webp",
      category: "Data Science"
    },
    {
      id: 4,
      title: "Customer Segmentation (RFM)",
      description: "Segmented customers into groups using RFM Analysis for targeted retention & marketing strategies.",
      techStack: ["Python", "Pandas", "Matplotlib", "Power BI"],
      githubUrl: "https://github.com/Jamshed-Ali-23/-Customer-Segmentation-with-RFM-Analysis",
      liveUrl: "#",
  image: "rfm.webp",
      category: "Data Science"
    },
    {
      id: 5,
      title: "Asia Cup 2025 Predictor",
      description: "Cricket outcome predictor deployed with Streamlit, using historical match data and ML models.",
      techStack: ["Python", "Streamlit", "Scikit-learn", "Pandas"],
      githubUrl: "https://github.com/Jamshed-Ali-23/Asia-Cup-2025-Predictor-Dashboard",
      liveUrl: "#",
  image: "asiacup.webp",
      category: "Data Science"
    },
    {
      id: 6,
      title: "Multivariable Calculus Tool",
      description: "Interactive app to visualize gradient descent & optimization concepts in calculus.",
      techStack: ["Python", "SymPy", "NumPy", "Plotly", "Streamlit"],
      githubUrl: "https://github.com/Jamshed-Ali-23/MVC-Graph-Plotter",
      liveUrl: "#",
  image: "calculus.webp",
      category: "Data Science"
    },
    // Frontend Development Projects
    {
      id: 7,
      title: "Business Nexus",
      description: "Business management solution with task & project tracking capabilities.",
      techStack: ["React", "TypeScript", "Vite", "Tailwind CSS"],
      githubUrl: "https://github.com/Jamshed-Ali-23/Nexus",
      liveUrl: "#",
  image: "business.webp",
      category: "Web App"
    },
    {
      id: 8,
      title: "CricketVerse PSL Dream XI",
      description: "Semester project: fantasy cricket app with live match simulation functionality.",
      techStack: ["Blazor WebAssembly", "Bootstrap", "EF Core", "C#"],
      githubUrl: "https://github.com/Jamshed-Ali-23/CricketVerse-PSL-DreamXI",
      liveUrl: "#",
  image: "dream xi.webp",
      category: "Web App"
    },
    {
      id: 9,
      title: "Advanced Music Player",
      description: "Responsive music player with playlist management, audio controls & autoplay features.",
      techStack: ["HTML", "CSS", "JavaScript", "Web Audio API"],
      githubUrl: "https://github.com/Jamshed-Ali-23/Music-Player",
      liveUrl: "#",
  image: "music player.webp",
      category: "Web App"
    },
    {
      id: 10,
      title: "Responsive Image Gallery",
      description: "Minimalist, mobile-friendly gallery using CSS Grid & JavaScript for smooth interactions.",
      techStack: ["HTML", "CSS", "JavaScript", "CSS Grid"],
    githubUrl: "https://github.com/Jamshed-Ali-23/Image-Gallery",
    liveUrl: "#",
  image: "image gallery.webp",
    category: "Web App"
    },
    {
      id: 11,
      title: "E-Commerce Website",
      description: "Internship project: fully responsive desktop shopping website with modern UI.",
      techStack: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/Jamshed-Ali-23/ecommerce-website",
    liveUrl: "#",
  image: "e commerece.webp",
    category: "Web App"
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

  const projectVariants = {
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

  // Filter projects by category
  const [filter, setFilter] = useState<string>("All");
  
  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="max-w-7xl mx-auto"
        >
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {["All", "Data Science", "Web App"].map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                onClick={() => setFilter(category)}
                className={`${filter === category ? "bg-primary text-primary-foreground" : "bg-background text-foreground"} transition-all duration-300`}
              >
                {category}
              </Button>
            ))}  
          </div>
          {/* Section Title */}
          <motion.div variants={projectVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-secondary bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Showcasing my latest work in data science and web development
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={projectVariants}
                initial={{ opacity: 0, y: 100, rotateX: 45 }}
                animate={{ 
                  opacity: isVisible ? 1 : 0, 
                  y: isVisible ? 0 : 100,
                  rotateX: isVisible ? 0 : 45
                }}
                transition={{ 
                  delay: index * 0.2,
                  duration: 0.8,
                  type: "spring",
                  damping: 12
                }}
                whileHover={{ 
                  y: -15, 
                  rotateY: 8,
                  rotateX: -5,
                  scale: 1.02
                }}
                className="group perspective-1000 hover-tilt"
              >
                <Card className="h-full overflow-hidden rounded-lg shadow-lg transform transition-all hover:-translate-y-3 hover:shadow-2xl">
                  <div className="relative">
                          {(() => {
                            const defaultImg = `${import.meta.env.BASE_URL}placeholder.svg`;
                            let imgSrc = defaultImg;
                            if (project.image) {
                              if (project.image.startsWith("/")) {
                                imgSrc = `${import.meta.env.BASE_URL}${project.image.replace(/^\//, "")}`;
                              } else {
                                imgSrc = `${import.meta.env.BASE_URL}project-images/${project.image}`;
                              }
                            }

                            return (
                              <img
                                src={imgSrc}
                                alt={project.title}
                                loading="lazy"
                                decoding="async"
                                className="w-full h-48 md:h-56 object-cover"
                              />
                            );
                          })()}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute left-4 bottom-4 text-white">
                      <div className="text-sm font-semibold bg-black/50 px-3 py-1 rounded">{project.category}</div>
                    </div>
                  </div>

                  <CardContent className="p-5">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg font-bold">{project.title}</CardTitle>
                        <p className="text-sm text-muted-foreground mt-2 line-clamp-3">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mt-3">
                          {project.techStack.slice(0,4).map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">{tech}</Badge>
                          ))}
                        </div>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <Button asChild size="sm" variant="outline" className="flex items-center">
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* View More Button */}
          <motion.div
            variants={projectVariants}
            className="text-center mt-12"
          >
            <Button
              size="lg"
              variant="outline"
              className="border-accent/50 text-accent hover:bg-accent/10 hover:shadow-glow px-8 py-6"
            >
              View All Projects
              <ExternalLink className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};