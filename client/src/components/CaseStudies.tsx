import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const caseStudies = [
  {
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tag: "Smart City",
    industry: "Government",
    title: "Smart Traffic Management System",
    description: "Implemented an AI-powered traffic management system that reduced congestion by 30% in a major metropolitan area.",
    link: "#",
    tagBg: "bg-primary",
    tagText: "text-primary",
    linkColor: "text-primary"
  },
  {
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tag: "Healthcare",
    industry: "Enterprise",
    title: "AI-Powered Diagnostic Assistant",
    description: "Developed an AI diagnostic tool that improved detection accuracy by 25% and reduced diagnostic time by 40%.",
    link: "#",
    tagBg: "bg-secondary",
    tagText: "text-secondary",
    linkColor: "text-secondary"
  },
  {
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tag: "Blockchain",
    industry: "Supply Chain",
    title: "Transparent Supply Chain Solution",
    description: "Implemented a blockchain-based supply chain tracking system that improved transparency and reduced fraud by 90%.",
    link: "#",
    tagBg: "bg-accent",
    tagText: "text-accent",
    linkColor: "text-accent"
  }
];

const CaseStudies = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-20 bg-light-dark">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-inter font-bold text-3xl md:text-4xl text-dark">
            Success <span className="text-gradient">Stories</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mt-4"></div>
          <p className="max-w-2xl mx-auto mt-6 text-dark-light opacity-80">
            See how we've helped organizations overcome challenges and achieve their goals.
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              variants={itemVariants}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className={`px-3 py-1 ${study.tagBg} bg-opacity-10 ${study.tagText} text-xs rounded-full`}>
                    {study.tag}
                  </span>
                  <span className="ml-2 text-xs text-dark-light opacity-60">{study.industry}</span>
                </div>
                <h3 className="font-inter font-semibold text-xl mb-3">{study.title}</h3>
                <p className="text-dark-light opacity-70 mb-4">
                  {study.description}
                </p>
                <motion.a 
                  href={study.link}
                  className={`${study.linkColor} font-medium flex items-center`}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <span>Read Case Study</span>
                  <ArrowRight className="ml-2" size={16} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <a 
            href="#"
            className="px-8 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors rounded-full font-inter font-medium"
          >
            View All Case Studies
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
      `}</style>
    </section>
  );
};

export default CaseStudies;
