import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Build1 from "../layout/Assests/Build 1.avif";
import int1 from "../layout/Assests/Int 1.avif";
import Build2 from "../layout/Assests/Build 2.avif";
import int2 from "../layout/Assests/Int 2.avif";
import Build3 from "../layout/Assests/Build 3.avif";
import int3 from "../layout/Assests/Int 3.avif";
import Build4 from "../layout/Assests/Build 4.avif";
import int4 from "../layout/Assests/Int 4.avif";
import Design from "../layout/Assests/Design.avif";
import int5 from "../layout/Assests/int 5.avif";

interface Property {
  id: number;
  name: string;
  price: string;
  description: string;
  exteriorImage: string;
  interiorImage: string;
  features: {
    bedrooms: number;
    bathrooms: number;
  };
}

const properties: Property[] = [
  {
    id: 1,
    name: "The Willowbrook",
    price: "$1,150,000",
    description: "A serene retreat blending modern architecture with natural surroundings for effortless living.",
    exteriorImage:Build1,
    interiorImage: int1,
    features: {
      bedrooms: 4,
      bathrooms: 5
    }
  },
  {
    id: 2,
    name: "Aurora Retreat",
    price: "$2,100,000",
    description: "Elegant design meets panoramic views in this sophisticated mountain hideaway.",
    exteriorImage: Build2,
    interiorImage: int2,
    features: {
      bedrooms: 5,
      bathrooms: 6
    }
  },
  {
    id: 3,
    name: "Oceanfront Villa",
    price: "$3,450,000",
    description: "Breathtaking ocean views with direct beach access and modern luxurious amenities.",
    exteriorImage: Build3,
    interiorImage: int3,
    features: {
      bedrooms: 6,
      bathrooms: 7
    }
  },
  {
    id: 4,
    name: "Urban Penthouse",
    price: "$1,950,000",
    description: "City living redefined with sweeping skyline views and premium finishes.",
    exteriorImage: Build4,
    interiorImage: int4,
    features: {
      bedrooms: 3,
      bathrooms: 4
    }
  },
  {
    id: 5,
    name: "Hillside Retreat",
    price: "$2,750,000",
    description: "Nestled in nature with floor-to-ceiling windows that bring the outdoors in.",
    exteriorImage: Design,
    interiorImage: int5,
    features: {
      bedrooms: 4,
      bathrooms: 5
    }
  }
];

const PropertyCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hoveredProperty, setHoveredProperty] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const goToPrev = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === 0 ? properties.length - 1 : prev - 1));
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const goToNext = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === properties.length - 1 ? 0 : prev + 1));
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const visibleProperties = [
    properties[(activeIndex - 1 + properties.length) % properties.length],
    properties[activeIndex],
    properties[(activeIndex + 1) % properties.length],
  ];

  return (
    <section ref={sectionRef} className="bg-white py-15 px-4 opacity-0 transition-opacity duration-400 mb-85">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:justify-between mb-10">
          <div>
            <h2 className="text-5xl font-light mb-6">
              Discover homes<br />
              designed to inspire.
            </h2>
          </div>
          <div className="lg:text-right mt-6 lg:mt-0">
            <p className="text-gray-700 text-lg max-w-md">
              Handpicked residences where<br />
              luxury, design, and comfort meet.
            </p>
          </div>
        </div>

        <div className="relative mt-12">
          <div 
            ref={carouselRef}
            className="flex items-center justify-center gap-6 transition-all duration-500"
          >
            {visibleProperties.map((property, idx) => (
              <div 
                key={property.id} 
                className={`
                  transition-all duration-500
                  ${idx === 0 ? 'lg:w-1/4 opacity-50' : ''}
                  ${idx === 1 ? 'lg:w-1/2' : ''}
                  ${idx === 2 ? 'lg:w-1/4 opacity-50' : ''}
                  w-full
                `}
              >
                <div 
                  className={`
                    rounded-xl overflow-hidden relative
                    ${idx === 1 ? 'shadow-lg' : 'hidden lg:block'}
                  `}
                  onMouseEnter={() => setHoveredProperty(property.id)}
                  onMouseLeave={() => setHoveredProperty(null)}
                >
                  <div className="relative w-full h-0 pb-[75%] overflow-hidden">
                    <img 
                      src={hoveredProperty === property.id ? property.interiorImage : property.exteriorImage} 
                      alt={property.name} 
                      className="absolute top-0 left-0 w-full h-full object-cover transition-all duration-700"
                    />
                  </div>
                </div>
                
                {idx === 1 && (
                  <div className="mt-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-3xl font-light">{property.name}</h3>
                      <span className="text-2xl font-light">{property.price}</span>
                    </div>
                    <p className="text-gray-600 mb-4">{property.description}</p>
                    <div className="flex gap-8 text-gray-700">
                      <div>{property.features.bedrooms} bedrooms</div>
                      <div>{property.features.bathrooms} bathrooms</div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <button 
            onClick={goToPrev}
            disabled={isAnimating}
            className="absolute left-4 top-1/3 transform -translate-y-1/2 w-10 h-10 bg-black/70 rounded-full flex items-center justify-center text-white hover:bg-black transition-colors z-10"
            aria-label="Previous property"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={goToNext}
            disabled={isAnimating}
            className="absolute right-4 top-1/3 transform -translate-y-1/2 w-10 h-10 bg-black/70 rounded-full flex items-center justify-center text-white hover:bg-black transition-colors z-10"
            aria-label="Next property"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PropertyCarousel;