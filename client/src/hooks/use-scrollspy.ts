import { useState, useEffect } from "react";

interface ScrollSpySection {
  id: string;
  ref: React.RefObject<HTMLElement>;
}

export const useScrollspy = (sections: ScrollSpySection[], offset: number = 100) => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;
      
      // Find the section that is currently visible
      for (const section of sections) {
        const element = section.ref.current;
        
        if (!element) continue;
        
        const rect = element.getBoundingClientRect();
        const topPosition = rect.top + window.scrollY;
        const bottomPosition = topPosition + rect.height;
        
        if (scrollPosition >= topPosition && scrollPosition < bottomPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };
    
    // Initial check
    handleScroll();
    
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections, offset]);
  
  return activeSection;
};
