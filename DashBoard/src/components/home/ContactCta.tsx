
import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Build from "../layout/Assests/Final Building.avif";

const ContactCta = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const buildingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, observerOptions);

    if (sectionRef.current) observer.observe(sectionRef.current);

    const buildingObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, { threshold: 0.3 });

    if (buildingRef.current) buildingObserver.observe(buildingRef.current);

    return () => {
      observer.disconnect();
      buildingObserver.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-haven-blue relative overflow-hidden opacity-0">
      <div className="container mx-auto text-center z-10 relative">
        <h2 className="text-5xl md:text-7xl font-light text-white mb-6">
          Your dream<br />
          home awaits.
        </h2>
        <p className="text-white/90 text-xl max-w-xl mx-auto mb-12">
          Whether you're exploring our homes or envisioning something custom, 
          we're here to bring your dream to life.
        </p>
        
        <Link 
          to="/contact"
          className="inline-flex items-center px-8 py-4 bg-white text-black rounded-full hover:bg-gray-100 transition-colors"
        >
          Get In Touch <ArrowRight className="ml-2" size={18} />
        </Link>
      </div>
      
      <div 
        ref={buildingRef}
        className="w-full max-w-5xl mx-auto mt-16 building-reveal"
      >
        <img 
          src={Build} 
          alt="Modern luxury home with infinity pool" 
          className="w-full h-auto object-contain"
        />
      </div>
    </section>
  );
};

export default ContactCta;
