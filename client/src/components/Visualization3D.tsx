import { useEffect, useRef } from "react";
import * as THREE from "three";

interface Visualization3DProps {
  type: "hero" | "particles" | "services";
}

const Visualization3D = ({ type }: Visualization3DProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;
    let renderer: THREE.WebGLRenderer;
    let animationFrameId: number;
    
    const init = () => {
      // Scene setup
      scene = new THREE.Scene();
      
      // Camera setup based on visualization type
      if (type === "hero" || type === "services") {
        camera = new THREE.PerspectiveCamera(
          75, 
          containerRef.current!.clientWidth / containerRef.current!.clientHeight, 
          0.1, 
          1000
        );
        camera.position.z = type === "hero" ? 10 : 30;
      } else {
        // For particles, use a different camera setup
        camera = new THREE.PerspectiveCamera(
          60, 
          window.innerWidth / window.innerHeight, 
          0.1, 
          1000
        );
        camera.position.z = 20;
      }
      
      // Renderer setup
      renderer = new THREE.WebGLRenderer({ 
        antialias: true, 
        alpha: true 
      });
      renderer.setSize(
        containerRef.current!.clientWidth, 
        containerRef.current!.clientHeight
      );
      containerRef.current!.appendChild(renderer.domElement);
      
      // Add lights
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);
      
      const pointLight = new THREE.PointLight(0x0066CC, 1);
      pointLight.position.set(5, 5, 5);
      scene.add(pointLight);
      
      // Create specific visualizations based on type
      if (type === "hero") {
        createHeroVisualization();
      } else if (type === "particles") {
        createParticlesVisualization();
      } else if (type === "services") {
        createServicesVisualization();
      }
      
      // Handle window resize
      const handleResize = () => {
        if (!containerRef.current) return;
        
        const width = containerRef.current.clientWidth;
        const height = containerRef.current.clientHeight;
        
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      };
      
      window.addEventListener("resize", handleResize);
      
      return () => {
        window.removeEventListener("resize", handleResize);
        containerRef.current?.removeChild(renderer.domElement);
        cancelAnimationFrame(animationFrameId);
      };
    };
    
    // Create hero visualization (IoT devices connected)
    const createHeroVisualization = () => {
      // Create a group for all objects
      const group = new THREE.Group();
      scene.add(group);
      
      // Define geometries and materials
      const geometry1 = new THREE.BoxGeometry(1, 1, 1);
      const material1 = new THREE.MeshStandardMaterial({ 
        color: 0x0066CC,
        metalness: 0.7,
        roughness: 0.2
      });
      
      const geometry2 = new THREE.SphereGeometry(0.6, 32, 32);
      const material2 = new THREE.MeshStandardMaterial({ 
        color: 0x00B8D4,
        metalness: 0.7,
        roughness: 0.2
      });
      
      const geometry3 = new THREE.ConeGeometry(0.5, 1, 32);
      const material3 = new THREE.MeshStandardMaterial({ 
        color: 0x7B2FFF,
        metalness: 0.7,
        roughness: 0.2
      });
      
      // Create multiple objects
      for (let i = 0; i < 5; i++) {
        const cube = new THREE.Mesh(geometry1, material1);
        cube.position.set(
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 8
        );
        cube.rotation.set(
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random() * Math.PI
        );
        cube.scale.setScalar(0.5 + Math.random() * 0.5);
        group.add(cube);
        
        const sphere = new THREE.Mesh(geometry2, material2);
        sphere.position.set(
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 8
        );
        sphere.scale.setScalar(0.5 + Math.random() * 0.5);
        group.add(sphere);
        
        const cone = new THREE.Mesh(geometry3, material3);
        cone.position.set(
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 8
        );
        cone.rotation.set(
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random() * Math.PI
        );
        cone.scale.setScalar(0.5 + Math.random() * 0.5);
        group.add(cone);
      }
      
      // Add lines connecting the objects (representing connections)
      const lineMaterial = new THREE.LineBasicMaterial({ 
        color: 0xffffff,
        transparent: true,
        opacity: 0.3
      });
      
      for (let i = 0; i < group.children.length - 1; i++) {
        if (Math.random() > 0.5) continue; // Only connect some objects
        
        const obj1 = group.children[i] as THREE.Mesh;
        const obj2 = group.children[i + 1] as THREE.Mesh;
        
        const points = [];
        points.push(obj1.position);
        points.push(obj2.position);
        
        const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
        const line = new THREE.Line(lineGeometry, lineMaterial);
        group.add(line);
      }
      
      // Animation function
      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);
        
        // Rotate the group
        group.rotation.x += 0.002;
        group.rotation.y += 0.003;
        
        // Animate individual objects
        group.children.forEach((child, index) => {
          if (child instanceof THREE.Mesh) {
            child.rotation.x += 0.01 * (index % 3 + 1);
            child.rotation.y += 0.01 * (index % 2 + 1);
          }
        });
        
        renderer.render(scene, camera);
      };
      
      animate();
    };
    
    // Create particles visualization (background particles)
    const createParticlesVisualization = () => {
      const particlesCount = 1000;
      const particles = new THREE.BufferGeometry();
      
      const positions = new Float32Array(particlesCount * 3);
      const colors = new Float32Array(particlesCount * 3);
      
      const colorOptions = [
        new THREE.Color(0x0066CC), // Primary
        new THREE.Color(0x00B8D4), // Secondary
        new THREE.Color(0x7B2FFF), // Accent
      ];
      
      for (let i = 0; i < particlesCount; i++) {
        // Position
        positions[i * 3] = (Math.random() - 0.5) * 100; // x
        positions[i * 3 + 1] = (Math.random() - 0.5) * 100; // y
        positions[i * 3 + 2] = (Math.random() - 0.5) * 100; // z
        
        // Color
        const color = colorOptions[Math.floor(Math.random() * colorOptions.length)];
        colors[i * 3] = color.r;
        colors[i * 3 + 1] = color.g;
        colors[i * 3 + 2] = color.b;
      }
      
      particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      particles.setAttribute('color', new THREE.BufferAttribute(colors, 3));
      
      const particleMaterial = new THREE.PointsMaterial({
        size: 0.5,
        vertexColors: true,
        transparent: true,
        opacity: 0.7
      });
      
      const particleSystem = new THREE.Points(particles, particleMaterial);
      scene.add(particleSystem);
      
      // Animation function
      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);
        
        particleSystem.rotation.x += 0.0005;
        particleSystem.rotation.y += 0.0005;
        
        renderer.render(scene, camera);
      };
      
      animate();
    };
    
    // Create services visualization (torus knot)
    const createServicesVisualization = () => {
      const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
      const material = new THREE.MeshBasicMaterial({ 
        color: 0x0066CC,
        wireframe: true
      });
      
      const torusKnot = new THREE.Mesh(geometry, material);
      scene.add(torusKnot);
      
      // Animation function
      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);
        
        torusKnot.rotation.x += 0.01;
        torusKnot.rotation.y += 0.01;
        
        renderer.render(scene, camera);
      };
      
      animate();
    };
    
    // Initialize the visualization
    const cleanup = init();
    
    // Cleanup function
    return () => {
      if (cleanup) cleanup();
      if (renderer && containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [type]);
  
  return <div ref={containerRef} className="w-full h-full" />;
};

export default Visualization3D;
