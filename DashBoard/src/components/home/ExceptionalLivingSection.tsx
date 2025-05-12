
import { useEffect, useRef, useState } from "react";
import Work from "../layout/Assests/Work Place.avif";

const ExceptionalLivingSection = () => {
  const [activeFeature, setActiveFeature] = useState("craftsmanship");
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

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

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      id: "craftsmanship",
      title: "Unparalleled Craftsmanship",
      description: "Every detail is meticulously designed and executed to ensure exceptional quality. From the finest materials to masterful finishes, your home reflects timeless precision and care."
    },
    {
      id: "design",
      title: "Personalized Design",
      description: "Your home should be as unique as you are. Our team works closely with you to create spaces that reflect your personality and lifestyle."
    },
    {
      id: "locations",
      title: "Exclusive Locations",
      description: "Our properties are situated in the most coveted neighborhoods, offering privacy, security, and proximity to the best amenities."
    },
    {
      id: "innovation",
      title: "Modern Innovation",
      description: "We integrate cutting-edge technology seamlessly into our homes, enhancing comfort, security, and energy efficiency."
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 px-4 opacity-0 mb-100">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-6xl md:text-5xl font-light mb-6">
            The art of exceptional<br />
            living begins in the details.
          </h2>
          <p className="text-gray-800 text-xl max-w-2xl mx-auto">
            Discover the details that make every Haven home a masterpiece.
          </p>
        </div>
        
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            {features.map((feature) => (
              <div 
                key={feature.id}
                className={`cursor-pointer transition-all duration-300 ${
                  activeFeature === feature.id ? "" : "opacity-60 hover:opacity-80"
                }`}
                onClick={() => setActiveFeature(feature.id)}
              >
                <h3 className="text-3xl font-light mb-4">{feature.title}</h3>
                {activeFeature === feature.id && (
                  <p className="text-gray-600 animate-fade-in-up">
                    {feature.description}
                  </p>
                )}
              </div>
            ))}
          </div>
          
          <div ref={imageRef} className="image-hover-zoom rounded-xl overflow-hidden shadow-lg">
            <img 
              src={Work} 
              alt="Luxury interior with ocean view" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExceptionalLivingSection;
