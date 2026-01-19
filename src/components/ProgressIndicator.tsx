import { useEffect, useState } from 'react';

interface ProgressIndicatorProps {
  sections: string[];
}

function ProgressIndicator({ sections }: ProgressIndicatorProps) {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(id => document.getElementById(id));
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const element = sectionElements[i];
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(i);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-3">
      {sections.map((_, index) => (
        <button
          key={index}
          onClick={() => {
            const element = document.getElementById(sections[index]);
            element?.scrollIntoView({ behavior: 'smooth' });
          }}
          className={`w-2 h-2 rounded-full transition-all duration-300 ${
            activeSection === index 
              ? 'bg-gray-900 scale-150' 
              : 'bg-gray-300 hover:bg-gray-400'
          }`}
          aria-label={`Go to section ${index + 1}`}
        />
      ))}
    </div>
  );
}

export default ProgressIndicator;
