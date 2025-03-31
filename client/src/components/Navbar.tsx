import { useState, useEffect } from "react";
import { Link } from "wouter";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  activeSection: string;
}

const Navbar = ({ activeSection }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Technologies", href: "#technologies" },
  ];

  return (
    <nav
      className={`fixed w-full py-4 px-6 lg:px-12 transition-all duration-300 z-50 bg-white bg-opacity-95 ${
        scrolled ? "py-2 shadow-lg" : "shadow-md"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-inter font-bold text-xl lg:text-2xl text-primary">INSTREK</span>
          <span className="font-inter font-normal text-xl lg:text-2xl">Technologies</span>
        </Link>
        
        <div className="hidden lg:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`nav-link font-inter transition-colors ${
                activeSection === link.href.slice(1)
                  ? "text-accent"
                  : "text-dark hover:text-accent"
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-4 px-6 py-2 bg-primary hover:bg-primary-dark text-white rounded-full transition-colors font-medium"
          >
            Contact Us
          </a>
        </div>
        
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-dark focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-6"
          >
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: { transition: { staggerChildren: 0.1 } },
                closed: {},
              }}
              className="flex flex-col space-y-4"
            >
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  variants={{
                    open: { opacity: 1, y: 0 },
                    closed: { opacity: 0, y: -10 },
                  }}
                  onClick={() => setIsOpen(false)}
                  className={`font-inter ${
                    activeSection === link.href.slice(1)
                      ? "text-accent"
                      : "text-dark hover:text-accent"
                  } transition-colors`}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                variants={{
                  open: { opacity: 1, y: 0 },
                  closed: { opacity: 0, y: -10 },
                }}
                onClick={() => setIsOpen(false)}
                className="px-6 py-2 bg-primary hover:bg-primary-dark text-white rounded-full transition-colors font-medium text-center"
              >
                Contact Us
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <style jsx>{`
        .nav-link {
          position: relative;
        }
        .nav-link::after {
          content: "";
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background-color: #7B2FFF;
          transition: width 0.3s ease;
        }
        .nav-link:hover::after {
          width: 100%;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
