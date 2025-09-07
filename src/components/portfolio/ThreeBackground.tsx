import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import * as THREE from "three";

// Enhanced 3D animated background elements (floating cubes and boxes)
const FloatingShapes = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();
    groupRef.current.rotation.y = t * 0.05;
    groupRef.current.children.forEach((child, i) => {
      // More dynamic movement with varied frequencies
      child.position.y = Math.sin(t * 0.8 + i * 0.3) * 2.2;
      child.position.x += Math.sin(t * 0.2 + i * 0.5) * 0.01;
      child.position.z += Math.cos(t * 0.3 + i * 0.4) * 0.01;
      child.rotation.x = t * 0.25 + i * 0.1;
      child.rotation.y = t * 0.3 + i * 0.12;
      child.rotation.z = Math.sin(t * 0.1 + i) * 0.1;
      
      // Subtle scale pulsing
      const scale = 1 + Math.sin(t * 0.5 + i * 0.8) * 0.1;
      child.scale.set(scale, scale, scale);
    });
  });

  // Create more varied shapes - cubes and rectangular boxes
  const shapes = useMemo(() => (
    Array.from({ length: 25 }, (_, i) => {
      const angle = (i / 25) * Math.PI * 2;
      const radius = 18 + (i % 5) * 4;
      // Vary the sizes more dramatically for rectangles vs cubes
      const isRectangular = i % 2 === 0;
      const width = 0.8 + (i % 5) * 0.4;
      const height = isRectangular ? width * (1 + (i % 3) * 0.5) : width;
      const depth = isRectangular ? width * (0.5 + (i % 4) * 0.3) : width;
      
      // More vibrant color palette
      const colors = [
        "#60a5fa", // blue
        "#a78bfa", // purple
        "#34d399", // green
        "#f472b6", // pink
        "#fbbf24"  // yellow
      ];
      
      return {
        position: [
          Math.cos(angle) * radius, 
          (i % 3) * 4 - 4, 
          Math.sin(angle) * radius
        ] as [number, number, number],
        size: [width, height, depth],
        color: colors[i % colors.length],
        rotation: [Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI]
      };
    })
  ), []);

  return (
    <group ref={groupRef}>
      {shapes.map((shape, i) => (
        <mesh 
          key={i} 
          position={shape.position} 
          rotation={shape.rotation as [number, number, number]}
          castShadow 
          receiveShadow
        >
          <boxGeometry args={shape.size} />
          <meshStandardMaterial 
            color={shape.color} 
            metalness={0.3} 
            roughness={0.2} 
            transparent
            opacity={0.9}
          />
        </mesh>
      ))}
    </group>
  );
};

const SoftParticles = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const { positions, colors } = useMemo(() => {
    const count = 800;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3 + 0] = (Math.random() - 0.5) * 120;
      positions[i * 3 + 1] = Math.random() * 40 - 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 120;
      colors[i * 3 + 0] = 0.4 + Math.random() * 0.2;
      colors[i * 3 + 1] = 0.6 + Math.random() * 0.2;
      colors[i * 3 + 2] = 0.8 + Math.random() * 0.2;
    }
    return { positions, colors };
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" array={positions} count={positions.length / 3} itemSize={3} />
        <bufferAttribute attach="attributes-color" array={colors} count={colors.length / 3} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.6} vertexColors transparent opacity={0.35} sizeAttenuation />
    </points>
  );
};

// Additional animated rectangular boxes that move independently
const MovingRectangles = () => {
  const rectanglesRef = useRef<THREE.Group>(null);
  
  // Create rectangular boxes that move in different patterns
  const rectangles = useMemo(() => (
    Array.from({ length: 15 }, (_, i) => {
      // Position rectangles in a more scattered pattern
      const angle = (i / 15) * Math.PI * 2;
      const radius = 25 + (i % 3) * 8;
      const height = 2 + (i % 4);
      
      // Create elongated rectangular shapes
      const width = 0.5 + (i % 3) * 0.3;
      const depth = 3 + (i % 5) * 0.8;
      
      // Different colors for rectangles
      const colors = [
        "#3b82f6", // blue
        "#8b5cf6", // purple
        "#10b981", // green
        "#f43f5e", // red
        "#f59e0b"  // amber
      ];
      
      return {
        position: [
          Math.cos(angle) * radius,
          (i % 5) * 3 - 6,
          Math.sin(angle) * radius
        ] as [number, number, number],
        size: [width, height, depth],
        color: colors[i % colors.length],
        speed: 0.2 + (i % 5) * 0.1,
        rotationSpeed: 0.1 + (i % 3) * 0.05,
        movementRadius: 2 + (i % 4)
      };
    })
  ), []);
  
  useFrame((state) => {
    if (!rectanglesRef.current) return;
    const t = state.clock.getElapsedTime();
    
    rectanglesRef.current.children.forEach((child, i) => {
      const rect = rectangles[i];
      // Create circular movement patterns
      child.position.x = rect.position[0] + Math.sin(t * rect.speed) * rect.movementRadius;
      child.position.z = rect.position[2] + Math.cos(t * rect.speed) * rect.movementRadius;
      
      // Rotation on multiple axes
      child.rotation.x += 0.003 * rect.rotationSpeed;
      child.rotation.y += 0.005 * rect.rotationSpeed;
      child.rotation.z += 0.002 * rect.rotationSpeed;
    });
  });
  
  return (
    <group ref={rectanglesRef}>
      {rectangles.map((rect, i) => (
        <mesh key={i} position={rect.position} castShadow>
          <boxGeometry args={rect.size} />
          <meshPhysicalMaterial 
            color={rect.color} 
            metalness={0.5} 
            roughness={0.2}
            transparent
            opacity={0.85}
            clearcoat={0.3}
            clearcoatRoughness={0.2}
          />
        </mesh>
      ))}
    </group>
  );
};

export const ThreeBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full -z-10">
      <Canvas camera={{ position: [0, 10, 35], fov: 60 }} className="w-full h-full" shadows>
        {/* Enhanced lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[20, 30, 10]} intensity={0.8} castShadow />
        <directionalLight position={[-15, 20, -10]} intensity={0.4} color="#93c5fd" />
        <spotLight position={[0, 30, 0]} intensity={0.5} castShadow penumbra={1} />

        {/* Ground plane with slight reflection */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -5, 0]} receiveShadow>
          <planeGeometry args={[300, 300]} />
          <meshStandardMaterial color="#0b1220" metalness={0.2} roughness={0.8} />
        </mesh>

        {/* 3D animated elements */}
        <FloatingShapes />
        <MovingRectangles />
        <SoftParticles />

        {/* Subtle fog for depth */}
        <fog attach="fog" args={["#0b1220", 50, 200]} />
        <Environment preset="night" />
      </Canvas>

      {/* Soft gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/40 to-background pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-primary/5 to-secondary/10 pointer-events-none" />
    </div>
  );
};