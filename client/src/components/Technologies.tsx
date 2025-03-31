import { forwardRef } from "react";
import { motion } from "framer-motion";
import { Brain, NetworkIcon, Database, Cloud, Bot, Laptop } from "lucide-react";

const technologies = [
  {
    icon: <Brain className="text-2xl text-primary" size={24} />,
    title: "Artificial Intelligence",
    description: "Advanced AI solutions including conversational AI, agentic AI, machine learning models and predictive analytics.",
    tags: ["NLP", "Computer Vision", "ML Models"],
    bgColor: "bg-primary",
  },
  {
    icon: <NetworkIcon className="text-2xl text-secondary" size={24} />,
    title: "Internet of Things",
    description: "Connected device ecosystems, smart sensors, and IoT platforms for real-time monitoring and control.",
    tags: ["Edge Computing", "Smart Sensors", "IoT Platforms"],
    bgColor: "bg-secondary",
  },
  {
    icon: <Database className="text-2xl text-accent" size={24} />,
    title: "Blockchain",
    description: "Decentralized applications, smart contracts, and secure transaction systems for various industries.",
    tags: ["Smart Contracts", "DApps", "Tokenization"],
    bgColor: "bg-accent",
  },
  {
    icon: <Cloud className="text-2xl text-primary" size={24} />,
    title: "Cloud Computing",
    description: "Scalable cloud infrastructure, serverless architectures, and cloud-native application development.",
    tags: ["AWS", "Azure", "GCP"],
    bgColor: "bg-primary",
  },
  {
    icon: <Bot className="text-2xl text-secondary" size={24} />,
    title: "AIoT Solutions",
    description: "Integration of AI with IoT for intelligent automation, smart monitoring, and predictive maintenance.",
    tags: ["Smart Cities", "Predictive Maintenance", "Automation"],
    bgColor: "bg-secondary",
  },
  {
    icon: <Laptop className="text-2xl text-accent" size={24} />,
    title: "Digital Transformation",
    description: "End-to-end digital transformation services to modernize business processes and enhance customer experiences.",
    tags: ["Process Automation", "Experience Design", "Legacy Modernization"],
    bgColor: "bg-accent",
  },
];

const Technologies = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} id="technologies" className="py-20 bg-light-dark">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-inter font-bold text-3xl md:text-4xl text-dark">
            Our Strengths in <span className="text-gradient">Next-Gen Technologies</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mt-4"></div>
          <p className="max-w-2xl mx-auto mt-6 text-dark-light opacity-80">
            We leverage cutting-edge technologies to develop innovative solutions that address complex business challenges.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl shadow-md service-card"
            >
              <motion.div 
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className={`tech-icon w-16 h-16 rounded-lg ${tech.bgColor} bg-opacity-10 flex items-center justify-center mb-6`}
              >
                {tech.icon}
              </motion.div>
              <h3 className="font-inter font-semibold text-xl mb-3">{tech.title}</h3>
              <p className="text-dark-light opacity-70 mb-4">
                {tech.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {tech.tags.map((tag) => (
                  <span 
                    key={tag}
                    className={`px-3 py-1 ${tech.bgColor} bg-opacity-10 ${tech.bgColor.replace('bg-', 'text-')} text-xs rounded-full`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 flex justify-center"
        >
          <a 
            href="#services"
            className="px-8 py-3 bg-primary hover:bg-primary-dark text-white transition-colors rounded-full font-inter font-medium"
          >
            Explore Our Services
          </a>
        </motion.div>
      </div>
      
      <style jsx>{`
        .text-gradient {
          background: linear-gradient(90deg, #0066CC, #7B2FFF);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .service-card {
          transition: all 0.3s ease;
        }
        .tech-icon {
          transition: all 0.3s ease;
        }
      `}</style>
    </section>
  );
});

Technologies.displayName = "Technologies";

export default Technologies;
