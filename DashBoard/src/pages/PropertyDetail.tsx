
import { useParams, Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const PropertyDetail = () => {
  const { slug } = useParams();
  
  // In a real app, you would fetch property details based on the slug
  const property = {
    name: "The Willowbrook",
    price: "$1,150,000",
    description: "A serene retreat blending modern architecture with natural surroundings for effortless living.",
    fullDescription: "Experience the perfect harmony of nature and luxury in The Willowbrook. This architectural masterpiece features soaring ceilings, walls of glass, and an open floor plan that creates a seamless indoor-outdoor living experience. Nestled within a lush forest setting, the home's natural wood elements and stone accents complement the surrounding environment while providing unparalleled comfort and style.",
    image: "/lovable-uploads/975ae1c8-c4ac-4ebf-b1cf-05bac49a336f.png",
    gallery: [
      "/lovable-uploads/975ae1c8-c4ac-4ebf-b1cf-05bac49a336f.png",
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742",
    ],
    features: {
      bedrooms: 4,
      bathrooms: 5,
      size: "3,850 sq ft",
      lot: "0.75 acres",
      yearBuilt: 2023,
      parking: "2-car garage"
    },
    amenities: [
      "Gourmet kitchen with premium appliances",
      "Primary suite with spa-like bathroom",
      "Floor-to-ceiling windows",
      "Smart home technology",
      "Heated floors",
      "Custom lighting",
      "Home automation system",
      "Outdoor living space with fireplace"
    ],
    location: "Crestwood Hills, Los Angeles"
  };

  return (
    <>
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="image-hover-zoom rounded-xl overflow-hidden mb-8">
                <img 
                  src={property.image} 
                  alt={property.name}
                  className="w-full h-auto"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {property.gallery.map((img, idx) => (
                  <div key={idx} className="image-hover-zoom rounded-lg overflow-hidden">
                    <img 
                      src={img} 
                      alt={`${property.name} view ${idx + 1}`}
                      className="w-full h-32 object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h1 className="text-4xl font-light mb-4">{property.name}</h1>
              <div className="flex items-center mb-6">
                <span className="text-3xl font-light">{property.price}</span>
                <span className="ml-4 text-gray-500">{property.location}</span>
              </div>
              
              <p className="text-gray-700 mb-8">
                {property.fullDescription}
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-6 mb-10">
                <div>
                  <p className="text-gray-500 text-sm">Bedrooms</p>
                  <p className="text-xl">{property.features.bedrooms}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Bathrooms</p>
                  <p className="text-xl">{property.features.bathrooms}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Total Size</p>
                  <p className="text-xl">{property.features.size}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Lot Size</p>
                  <p className="text-xl">{property.features.lot}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Year Built</p>
                  <p className="text-xl">{property.features.yearBuilt}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Parking</p>
                  <p className="text-xl">{property.features.parking}</p>
                </div>
              </div>
              
              <div className="mb-10">
                <h3 className="text-2xl font-light mb-4">Amenities</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4">
                  {property.amenities.map((amenity, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="mr-2 text-haven-darkblue">✓</span>
                      {amenity}
                    </li>
                  ))}
                </ul>
              </div>
              
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
              >
                Schedule a Viewing <ArrowRight className="ml-2" size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PropertyDetail;
