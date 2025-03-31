import { forwardRef, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  MessageSquare, 
  Building2, 
  Shield, 
  Settings,
  Check
} from "lucide-react";
import Visualization3D from "./Visualization3D";

const services = [
  {
    icon: <MessageSquare className="text-xl text-primary" />,
    title: "Conversational AI Solutions",
    description: "Advanced chatbots and virtual assistants that enhance customer engagement through natural language processing.",
    features: [
      "Multilingual chatbots",
      "Voice-based assistants",
      "Intent recognition systems"
    ],
    iconBg: "bg-primary",
    iconColor: "text-primary"
  },
  {
    icon: <Building2 className="text-xl text-secondary" />,
    title: "Smart City Solutions",
    description: "Integrated urban management systems using IoT and AI for efficient city operations.",
    features: [
      "Smart traffic management",
      "Waste management systems",
      "Public safety solutions"
    ],
    iconBg: "bg-secondary",
    iconColor: "text-secondary"
  },
  {
    icon: <Shield className="text-xl text-accent" />,
    title: "Agentic AI Systems",
    description: "Autonomous AI agents that can perform complex tasks, make decisions, and adapt to changing environments.",
    features: [
      "Autonomous decision systems",
      "Multi-agent frameworks",
      "Adaptive learning systems"
    ],
    iconBg: "bg-accent",
    iconColor: "text-accent"
  },
  {
    icon: <Settings className="text-xl text-primary" />,
    title: "Enterprise Automation",
    description: "End-to-end automation solutions that streamline business processes and enhance operational efficiency.",
    features: [
      "RPA implementations",
      "Workflow automation",
      "Business process optimization"
    ],
    iconBg: "bg-primary",
    iconColor: "text-primary"
  }
];

const Services = forwardRef<HTMLElement>((props, ref) => {
  const visualRef = useRef(null);
  const isInView = useInView(visualRef, { once: true });
  
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section ref={ref} id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInVariants}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-inter font-bold text-3xl md:text-4xl text-dark">
            Services & <span className="text-gradient">Solutions</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mt-4"></div>
          <p className="max-w-2xl mx-auto mt-6 text-dark-light opacity-80">
            We offer a comprehensive range of services designed to address the evolving needs of businesses across industries.
          </p>
        </motion.div>
        
        <div className="relative">
          <div ref={visualRef} className="absolute -top-20 -right-20 w-60 h-60 opacity-20 hidden lg:block">
            {isInView && <Visualization3D type="services" />}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {services.map((service, index) => (
              <motion.div 
                key={service.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInVariants}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-light p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start">
                  <div className={`w-12 h-12 rounded-lg ${service.iconBg} bg-opacity-10 flex items-center justify-center flex-shrink-0`}>
                    {service.icon}
                  </div>
                  <div className="ml-5">
                    <h3 className="font-inter font-semibold text-xl mb-3">{service.title}</h3>
                    <p className="text-dark-light opacity-70 mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <Check className={`${service.iconColor} mr-2`} size={16} />
                          <span className="text-sm opacity-80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInVariants}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16"
          >
            <div className="bg-gradient-to-r from-primary to-accent rounded-2xl overflow-hidden shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="p-10 lg:p-12 text-white">
                  <h3 className="font-inter font-bold text-2xl md:text-3xl mb-4">Strategic Technology Consulting</h3>
                  <p className="opacity-90 mb-6">
                    Our expert consultants help you navigate the complex technology landscape and develop strategies that drive business growth.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <Check className="mr-3" size={18} />
                      <span>Digital Transformation Roadmaps</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-3" size={18} />
                      <span>Technology Stack Optimization</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-3" size={18} />
                      <span>Innovation Strategy Development</span>
                    </li>
                  </ul>
                  <a 
                    href="#contact" 
                    className="inline-block px-6 py-3 bg-white text-primary hover:bg-light-dark transition-colors rounded-full font-inter font-medium"
                  >
                    Get Started
                  </a>
                </div>
                <div className="hidden lg:block relative">
                  <img 
                    src="https://images.unsplash.com/photo-1550305080-4e029753abcf?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                    alt="Strategic consulting" 
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-accent bg-opacity-30"></div>
                </div>
              </div>
            </div>
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

Services.displayName = "Services";

export default Services;
