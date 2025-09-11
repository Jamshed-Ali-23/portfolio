import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

// 3D Skill Icon Component
const SkillIcon = ({ position, skill, color }: { position: [number, number, number], skill: any, color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.5;
    }
  });

  return (
    <group position={position}>
      <mesh ref={meshRef}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={color} transparent opacity={0.8} />
      </mesh>
      <Text
        position={[0, -1.5, 0]}
        fontSize={0.3}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {skill.name}
      </Text>
    </group>
  );
};

// 3D Skills Cloud
const Skills3DCloud = () => {
  const skills = [
    { name: "Python", level: 95, color: "#3776AB" },
    { name: "React", level: 90, color: "#61DAFB" },
    { name: "Tableau", level: 85, color: "#FF6F00" },
    { name: "JavaScript", level: 90, color: "#F7DF1E" },
    { name: "PowerBI", level: 80, color: "#EE4C2C" },
    { name: "Sql", level: 85, color: "#3178C6" },
    { name: "Pandas", level: 90, color: "#150458" },
    { name: "Excel", level: 75, color: "#339933" },
    { name: "Scikit-learn", level: 85, color: "#F7931E" },
    { name: "AWS", level: 70, color: "#FF9900" },
  ];

  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      {skills.map((skill, index) => {
        const angle = (index / skills.length) * Math.PI * 2;
        const radius = 4;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        const y = (Math.random() - 0.5) * 2;
        
        return (
          <SkillIcon
            key={skill.name}
            position={[x, y, z]}
            skill={skill}
            color={skill.color}
          />
        );
      })}
    </>
  );
};

// 2D Skills Grid (fallback/additional)
const SkillsGrid = () => {
const skills = [
  // 📊 Data Science & Analytics
  { name: "Python", icon: "🐍", level: 85, category: "Data Science" },
  { name: "Pandas", icon: "🐼", level: 80, category: "Data Science" },
  { name: "NumPy", icon: "🔢", level: 82, category: "Data Science" },
  { name: "Scikit-learn", icon: "📊", level: 75, category: "Data Science" },
  { name: "SQL", icon: "🗄️", level: 80, category: "Data Science" },
  { name: "Power BI", icon: "🔥", level: 78, category: "Data Science" },
  { name: "Data Visualization", icon: "📈", level: 82, category: "Data Science" },
  { name: "Seaborn", icon: "🎯", level: 78, category: "Data Science" },
  { name: "Machine Learning", icon: "🤖", level: 75, category: "Data Science" },
  { name: "Streamlit", icon: "🚀", level: 80, category: "Data Science" },
  { name: "Jupyter", icon: "📓", level: 90, category: "Data Science" },

  // 🌐 Frontend Development
  { name: "HTML5", icon: "🌐", level: 95, category: "Frontend" },
  { name: "CSS3", icon: "🎨", level: 90, category: "Frontend" },
  { name: "JavaScript", icon: "⚡", level: 90, category: "Frontend" },
  { name: "React", icon: "⚛️", level: 90, category: "Frontend" },
  { name: "Bootstrap", icon: "🅱️", level: 88, category: "Frontend" },

  // ☁️ Cloud & Tools
  { name: "VS Code", icon: "💻", level: 95, category: "Tools" },
  { name: "AWS", icon: "☁️", level: 65, category: "Cloud" },
  { name: "Git", icon: "📝", level: 85, category: "Tools" },
  { name: "Tableau", icon: "📊", level: 70, category: "Tools" }
];


  const skillVariants = {
    hidden: { opacity: 0, scale: 0.5, rotateY: -90 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut",
        type: "spring",
        bounce: 0.4
      }
    })
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          custom={index}
          variants={skillVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ 
            scale: 1.1, 
            rotateY: 10,
            y: -10
          }}
          className="group perspective-1000"
        >
          <div className="bg-gradient-glass backdrop-blur-md border border-border/50 rounded-xl p-6 text-center hover:shadow-neon transition-all duration-500 transform-gpu">
            <motion.div
              className="text-4xl mb-3"
              whileHover={{ scale: 1.3, rotate: 360 }}
              transition={{ duration: 0.5, type: "spring" }}
            >
              {skill.icon}
            </motion.div>
            
            <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
              {skill.name}
            </h3>
            
            <div className="text-xs text-muted-foreground mb-3">
              {skill.category}
            </div>
            
            {/* Skill Level Bar */}
            <div className="w-full bg-muted/30 rounded-full h-2 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-primary rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: index * 0.1 }}
              />
            </div>
            
            <div className="text-xs text-muted-foreground mt-2">
              {skill.level}%
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export const SkillsSection = () => {
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
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="max-w-7xl mx-auto"
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-accent bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Interactive showcase of my skills — blending data science, machine learning, and frontend development.
            </p>
          </motion.div>

          {/* 3D Skills Cloud */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="relative h-96 rounded-2xl overflow-hidden bg-gradient-glass backdrop-blur-md border border-border/50 shadow-glass">
              <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
                <Skills3DCloud />
              </Canvas>
              
              {/* Overlay Instructions */}
              <div className="absolute bottom-4 left-4 text-sm text-muted-foreground bg-background/80 backdrop-blur-sm rounded-lg px-3 py-2">
                🖱️ Click and drag to rotate • 🎯 Interactive 3D view
              </div>
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div variants={itemVariants}>
            <SkillsGrid />
          </motion.div>

          {/* Skill Categories Summary */}
          <motion.div variants={itemVariants} className="mt-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-14">
              {[
                { category: "Data Science & Analytics", count: 11, color: "primary", icon: "📊" },
                { category: "Frontend", count: 5, color: "secondary", icon: "💻" },
                { category: "Tools", count: 4, color: "primary", icon: "🛠️" }
              ].map((item, index) => (
                <motion.div
                  key={item.category}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center p-6 rounded-xl bg-gradient-glass backdrop-blur-md border border-border/50 hover:shadow-glow transition-all duration-300"
                >
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <div className="text-xl font-bold text-foreground mb-1">
                    {item.category}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {item.count} Technologies
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Learning Journey */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <div className="bg-gradient-glass backdrop-blur-md border border-border/50 rounded-2xl p-8 shadow-glass">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
                Continuous Learning & Growth
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                I follow a continuous learning path, staying current with AI/ML advancements, cloud-native patterns, and progressive frontend techniques.
                Recently focused on model deployment, Streamlit/Streamlit-Cloud, and advanced React patterns for complex UIs.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {["Next.js", "GraphQL", "Kubernetes", "TensorFlow", "Web3", "AR/VR"].map((tech) => (
                  <motion.span
                    key={tech}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="px-4 py-2 bg-muted/30 rounded-full text-sm border border-border/30 hover:border-primary/50 transition-colors cursor-pointer"
                  >
                    🚀 {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};