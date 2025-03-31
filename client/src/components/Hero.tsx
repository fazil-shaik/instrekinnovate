import { forwardRef, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Visualization3D from "./Visualization3D";

const Hero = forwardRef<HTMLElement>((props, ref) => {
  const visualRef = useRef<HTMLDivElement>(null);

  return (
    <section 
      ref={ref}
      id="home" 
      className="hero-gradient min-h-screen relative flex items-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <Visualization3D type="particles" />
      </div>
      
      <div className="container mx-auto px-6 lg:px-12 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="font-inter font-bold text-4xl md:text-5xl lg:text-6xl leading-tight">
              Shaping the Future with Next-Gen Technologies
            </h1>
            <p className="mt-6 text-lg md:text-xl opacity-90 max-w-lg">
              Empowering businesses, governments, and institutions with cutting-edge AI, IoT, Blockchain, and digital solutions.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a 
                href="#services" 
                className="px-8 py-3 bg-white text-primary hover:bg-light-dark transition-colors rounded-full font-inter font-medium"
              >
                Explore Solutions
              </a>
              <a 
                href="#contact" 
                className="px-8 py-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary transition-colors rounded-full font-inter font-medium"
              >
                Get in Touch
              </a>
            </div>
            <div className="mt-12 flex items-center space-x-6">
              <span className="text-sm opacity-90">Trusted by:</span>
              <div className="flex space-x-8">
                <div className="w-20 h-10 bg-white bg-opacity-20 rounded-md flex items-center justify-center">
                  <span className="text-white text-sm font-medium">Client 1</span>
                </div>
                <div className="w-20 h-10 bg-white bg-opacity-20 rounded-md flex items-center justify-center">
                  <span className="text-white text-sm font-medium">Client 2</span>
                </div>
                <div className="w-20 h-10 bg-white bg-opacity-20 rounded-md flex items-center justify-center">
                  <span className="text-white text-sm font-medium">Client 3</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative h-[500px] w-full">
              <div ref={visualRef} className="absolute inset-0 rounded-xl overflow-hidden shadow-2xl">
                <Visualization3D type="hero" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5, 
          delay: 1.2,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.5
        }}
        className="absolute bottom-10 left-0 right-0 flex justify-center"
      >
        <a href="#about" className="text-white opacity-75 hover:opacity-100 transition-opacity">
          <ChevronDown size={24} />
        </a>
      </motion.div>

      <style jsx>{`
        .hero-gradient {
          background: linear-gradient(135deg, #0066CC 0%, #7B2FFF 100%);
        }
      `}</style>
    </section>
  );
});

Hero.displayName = "Hero";

export default Hero;
