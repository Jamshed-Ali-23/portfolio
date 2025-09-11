import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Download, Eye } from "lucide-react";

export const ResumeSection = () => {
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

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Resume/Jamshed_Ali_Resume.pdf';
    link.download = 'Jamshed_Ali_Resume.pdf';
    link.click();
  };

  return (
    <section id="resume" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-accent bg-clip-text text-transparent">
              Resume
            </h2>
            <p className="text-lg text-muted-foreground">
              Complete overview of my experience, skills, and achievements
            </p>
          </motion.div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 border-y border-border/50">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">3+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">12+</div>
              <div className="text-sm text-muted-foreground">Technologies Mastered</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  className="bg-gradient-primary hover:shadow-neon transition-all duration-300 px-8 py-6 text-lg font-semibold"
                >
                  <Eye className="w-5 h-5 mr-2" />
                  Preview Resume
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-5xl h-[90vh] bg-background/95 backdrop-blur-md border-border/50">
                <DialogHeader>
                  <DialogTitle className="text-2xl bg-gradient-primary bg-clip-text text-transparent">
                    Resume Preview
                  </DialogTitle>
                </DialogHeader>
                <div className="flex-1 bg-white rounded-lg overflow-hidden">
                  <iframe 
                    src="/Resume/Jamshed_Ali_Resume.pdf" 
                    className="w-full h-full" 
                    style={{ minHeight: "80vh" }}
                    title="Resume Preview"
                  />
                </div>
              </DialogContent>
            </Dialog>

            <Button
              variant="outline"
              size="lg"
              onClick={handleDownload}
              className="border-accent/50 text-accent hover:bg-accent/10 hover:shadow-glow transition-all duration-300 px-8 py-6 text-lg"
            >
              <Download className="w-5 h-5 mr-2" />
              Download PDF
            </Button>
          </div>

          <motion.div
            className="text-sm text-muted-foreground mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p>📄 PDF format • 📊 2 pages • 🕒 Last updated: January 2025</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
