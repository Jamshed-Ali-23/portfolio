import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronDown, Sparkles, Code, Smartphone } from "lucide-react";

export const HeroSection = () => {
  const [ThreeBG, setThreeBG] = useState<React.ComponentType<any> | null>(null);
  const [text, setText] = useState("");
  const fullText = "Hi, I'm Jamshed Ali — Data Scientist & Frontend Developer";
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  // Dynamically import heavy 3D background after mount to avoid blocking
  useEffect(() => {
    let mounted = true;
    import("./ThreeBackground")
      .then((mod) => {
        if (mounted && mod?.ThreeBackground) setThreeBG(() => mod.ThreeBackground);
      })
      .catch(() => {
        /* ignore load errors (keep fallback) */
      });
    return () => {
      mounted = false;
    };
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamically loaded 3D background (separate chunk). Renders fallback gradient until loaded. */}
      {ThreeBG ? (
        <ThreeBG />
      ) : (
        <div className="absolute inset-0 -z-20 bg-gradient-to-br from-[#071026] to-[#07101a]" aria-hidden />
      )}
      
      {/* Floating elements */}
      <motion.div
        className="absolute top-20 left-10 text-primary/20"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Code className="w-8 h-8" />
      </motion.div>
      
      <motion.div
        className="absolute top-32 right-16 text-secondary/20"
        animate={{ 
          y: [0, 15, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        <Smartphone className="w-6 h-6" />
      </motion.div>
      
      <motion.div
        className="absolute bottom-32 left-20 text-accent/20"
        animate={{ 
          y: [0, -10, 0],
          rotate: [0, 10, 0]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      >
        <Sparkles className="w-10 h-10" />
      </motion.div>
      
      <motion.div 
        className="relative z-10 container mx-auto px-6 text-center"
        style={{ y, opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* Animated Avatar */}
          <motion.div
            className="mb-8 flex justify-center"
            initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, delay: 0.5, type: "spring", damping: 10 }}
          >
            <motion.div
              className="relative group"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.1, rotateY: 10 }}
            >
              <Avatar className="w-60 h-60 border-4 border-primary shadow-neon relative z-10 group-hover:shadow-glow transition-all duration-300 bg-white">
                <AvatarImage src="/src/profile.jpg" alt="Jamshed Ali" className="object-cover" />
                <AvatarFallback className="text-5xl bg-gradient-primary text-primary-foreground">
                  
                </AvatarFallback>
              </Avatar>
              
              {/* Animated rings */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-primary/30"
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 0.1, 0.5]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut"
                }}
              />
              
              <motion.div
                className="absolute inset-0 rounded-full border border-secondary/20"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.05, 0.3]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
              
              {/* Floating particles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-accent/60 rounded-full"
                  style={{
                    top: `${20 + i * 10}%`,
                    left: `${15 + i * 12}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 2 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />
              ))}
            </motion.div>
          </motion.div>

          {/* Typewriter Text */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-8xl font-bold mb-8 leading-tight relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1, type: "spring", damping: 12 }}
          >
            <motion.span 
              className="text-gradient-aurora bg-size-200 animate-gradient-x"
              style={{
                backgroundSize: "200% 200%",
                animation: "gradientShift 3s ease-in-out infinite"
              }}
            >
              {text}
            </motion.span>
            <motion.span
              className="inline-block w-1 h-12 md:h-16 lg:h-24 bg-primary ml-2 rounded-full"
              animate={{ 
                opacity: [0, 1, 0],
                scaleY: [0.8, 1.2, 0.8]
              }}
              transition={{ 
                duration: 1.2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Text decoration (use span to avoid div inside h1) */}
            <motion.span
              className="absolute -inset-4 bg-gradient-primary/5 rounded-2xl blur-3xl block"
              animate={{
                scale: [0.8, 1.1, 0.8],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-3xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.8, type: "spring", damping: 10 }}
          >
            Passionate about turning{" "}
            <motion.span 
              className="text-gradient-primary font-bold relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", damping: 15 }}
            >
              data into insights
              <motion.span
                className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-primary rounded-full block"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 2.5, duration: 0.6 }}
              />
            </motion.span>,{" "}
            <motion.span 
              className="text-gradient-secondary font-bold relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", damping: 15 }}
            >
              building interactive dashboards
              <motion.span
                className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-secondary rounded-full block"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 3, duration: 0.6 }}
              />
            </motion.span>, and{" "}
            <motion.span 
              className="text-gradient-accent font-bold relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", damping: 15 }}
            >
              crafting modern, responsive UIs that deliver both clarity and impact.
              <motion.span
                className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-accent rounded-full block"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 3.5, duration: 0.6 }}
              />
            </motion.span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.2, type: "spring", damping: 10 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", damping: 15 }}
            >
              <Button
                size="lg"
                className="bg-gradient-primary hover:shadow-neon transition-all duration-500 px-10 py-6 text-xl font-bold relative overflow-hidden group"
                onClick={() => scrollToNext()}
              >
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative z-10">Explore My Work</span>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", damping: 15 }}
            >
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-primary/60 text-primary hover:bg-primary/10 hover:shadow-glow hover:border-primary transition-all duration-500 px-10 py-6 text-xl font-bold backdrop-blur-sm bg-background/50 relative overflow-hidden group"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                <motion.div
                  className="absolute inset-0 bg-primary/10"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.4 }}
                />
                <span className="relative z-10">Get In Touch</span>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.5 }}
          onClick={scrollToNext}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};