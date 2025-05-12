
import { useEffect, useRef } from "react";
import Build from "../layout/Assests/Building 1.avif";

const HeroSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const buildingRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

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

    if (titleRef.current) observer.observe(titleRef.current);
    if (subtitleRef.current) observer.observe(subtitleRef.current);

    const buildingObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, { threshold: 0.1 });

    if (buildingRef.current) buildingObserver.observe(buildingRef.current);

    return () => {
      observer.disconnect();
      buildingObserver.disconnect();
    };
  }, []);

  const createHoverText = (text: string) => {
    return (
      <span className="haven-hover-text">
        {text.split('').map((letter, index) => (
          <span key={index} style={{ animationDelay: `${index * 0.02}s` }}>
            {letter === ' ' ? '\u00A0' : letter}
          </span>
        ))}
      </span>
    );
  };

  return (
    <section className="min-h-screen bg-haven-blue flex flex-col justify-center items-center px-2 relative overflow-hidden">
      <div className="container mx-auto text-center z-10 pt-10">
        <h1 
          ref={titleRef}
          className="text-3xl md:text-5xl font-light text-white opacity-0 mb-2"
        >
          {createHoverText("Extraordinary")}
          <br />
          {createHoverText("living begins here.")}
        </h1>
        <p 
          ref={subtitleRef}
          className="text-white/90 text-lg md:text-xl max-w-xl mx-auto opacity-0"
          style={{ animationDelay: '0.1s' }}
        >
          Timeless architecture, exclusive locations, and luxury homes designed to inspire your next chapter.
        </p>
      </div>
      <div 
        ref={buildingRef}
        className="w-full max-w-4xl mx-auto mt-10 building-reveal z-10"
      >
        <img 
          src={Build} 
          alt="Modern luxury home with white facade" 
          className="w-full h-auto object-contain"
        />
      </div>
    </section>
  );
};

export default HeroSection;
