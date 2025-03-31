import { forwardRef } from "react";
import { motion } from "framer-motion";
import { 
  Lightbulb, 
  Users, 
  ShieldCheck, 
  TrendingUp 
} from "lucide-react";

const About = forwardRef<HTMLElement>((props, ref) => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section ref={ref} id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={fadeInUpVariants}
            className="font-inter font-bold text-3xl md:text-4xl text-dark"
          >
            About <span className="text-gradient">Instrek Technologies</span>
          </motion.h2>
          <motion.div 
            variants={fadeInUpVariants}
            className="w-24 h-1 bg-accent mx-auto mt-4"
          />
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            <motion.h3 
              variants={fadeInUpVariants}
              className="font-inter font-semibold text-2xl text-dark-light mb-4"
            >
              Our Mission
            </motion.h3>
            <motion.p 
              variants={fadeInUpVariants}
              className="text-dark-light opacity-80 mb-6"
            >
              At Instrek Technologies, we're on a mission to make India AI-ready. We drive innovation through strategic consulting, workforce development, and scalable technology solutions.
            </motion.p>
            
            <motion.h3 
              variants={fadeInUpVariants}
              className="font-inter font-semibold text-2xl text-dark-light mb-4"
            >
              Our Approach
            </motion.h3>
            <motion.p 
              variants={fadeInUpVariants}
              className="text-dark-light opacity-80 mb-6"
            >
              We combine cutting-edge technologies with deep domain expertise to solve complex problems. Our solutions are designed to be scalable, secure, and future-proof.
            </motion.p>
            
            <motion.div 
              variants={fadeInUpVariants}
              className="grid grid-cols-2 gap-4 mt-8"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="text-white" size={18} />
                </div>
                <span className="font-medium">Innovation Focused</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <Users className="text-white" size={18} />
                </div>
                <span className="font-medium">People Centric</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="text-white" size={18} />
                </div>
                <span className="font-medium">Security First</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="text-white" size={18} />
                </div>
                <span className="font-medium">Results Driven</span>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] rounded-xl overflow-hidden shadow-xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Tech team collaboration" 
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="text-white mb-4">
                <span className="font-inter font-semibold text-xl">Future-Ready Solutions</span>
              </div>
              <div className="flex space-x-3">
                <div className="px-4 py-1 bg-white bg-opacity-20 backdrop-blur-sm rounded-full">
                  <span className="text-white text-sm">Innovation</span>
                </div>
                <div className="px-4 py-1 bg-white bg-opacity-20 backdrop-blur-sm rounded-full">
                  <span className="text-white text-sm">Excellence</span>
                </div>
                <div className="px-4 py-1 bg-white bg-opacity-20 backdrop-blur-sm rounded-full">
                  <span className="text-white text-sm">Expertise</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="bg-light p-8 rounded-xl shadow-md"
          >
            <div className="w-16 h-16 rounded-full bg-primary bg-opacity-10 flex items-center justify-center mb-6">
              <Lightbulb className="text-2xl text-primary" size={24} />
            </div>
            <h4 className="font-inter font-semibold text-xl mb-3">Innovation at Core</h4>
            <p className="text-dark-light opacity-70">
              We constantly explore emerging technologies to deliver innovative solutions that drive business growth.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-light p-8 rounded-xl shadow-md"
          >
            <div className="w-16 h-16 rounded-full bg-secondary bg-opacity-10 flex items-center justify-center mb-6">
              <Users className="text-2xl text-secondary" size={24} />
            </div>
            <h4 className="font-inter font-semibold text-xl mb-3">Strategic Partnerships</h4>
            <p className="text-dark-light opacity-70">
              We collaborate with leading industry players to build robust ecosystems that foster growth.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-light p-8 rounded-xl shadow-md"
          >
            <div className="w-16 h-16 rounded-full bg-accent bg-opacity-10 flex items-center justify-center mb-6">
              <TrendingUp className="text-2xl text-accent" size={24} />
            </div>
            <h4 className="font-inter font-semibold text-xl mb-3">Talent Development</h4>
            <p className="text-dark-light opacity-70">
              We invest in building a skilled workforce through comprehensive training and development programs.
            </p>
          </motion.div>
        </div>
      </div>
      
      <style jsx>{`
        .text-gradient {
          background: linear-gradient(90deg, #0066CC, #7B2FFF);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </section>
  );
});

About.displayName = "About";

export default About;
