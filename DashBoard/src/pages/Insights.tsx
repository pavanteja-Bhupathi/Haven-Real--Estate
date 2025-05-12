import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// Import the article data and images with correct paths
import Sky from "../components/layout/Assests/Sky.avif";
import Robo from "../components/layout/Assests/Robot AI.avif";
import Sustain from "../components/layout/Assests/Sustainbility.avif";
import Design from "../components/layout/Assests/Design.avif";
// Fix the image imports by using absolute paths starting with "/"
import LivingRoom from "../components/layout/Assests/int 5.avif";
import Modern from "../components/layout/Assests/Int 4.avif"; // Using an existing image as fallback
import SmartHome from "../components/layout/Assests/Sustainbility.avif"; // Reusing an image, replace with actual image when available

interface Article {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  tag: string;
  slug: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
}

const articles: Article[] = [
  {
    id: 1,
    title: "The Rise of Boutique Architecture in Luxury Living",
    excerpt: "Discover how boutique architecture is redefining luxury living with its focus on uniqueness, personalization, and timeless design.",
    image: Sky,
    tag: "Lifestyle",
    slug: "boutique-architecture-luxury-living",
    author: {
      name: "Emily Chambers",
      role: "Marketing Consultant",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    }
  },
  {
    id: 2,
    title: "The Future of Luxury: AI and Automation in Home Design",
    excerpt: "Explore how artificial intelligence and smart home technology are transforming luxury living experiences.",
    image: Robo,
    tag: "Innovation",
    slug: "ai-automation-home-design",
    author: {
      name: "Michael Torres",
      role: "Tech Analyst",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    }
  },
  {
    id: 3,
    title: "Are Sustainable Materials the Future of Homes?",
    excerpt: "Learn about the growing trend of sustainable and eco-friendly materials in luxury home construction.",
    image: Sustain,
    tag: "Sustainability",
    slug: "sustainable-materials-future-homes",
    author: {
      name: "Sarah Johnson",
      role: "Environmental Specialist",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg"
    }
  },
  {
    id: 4,
    title: "Exploring Minimalism with a Touch of Luxury",
    excerpt: "Discover how minimalist design principles can coexist with luxury elements to create sophisticated spaces.",
    image: Design,
    tag: "Design",
    slug: "minimalism-luxury-design",
    author: {
      name: "Daniel Lee",
      role: "Interior Designer",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg"
    }
  },
  {
    id: 5,
    title: "Designing Homes for Elegance and Entertainment",
    excerpt: "Learn how to create spaces that balance refined aesthetics with functionality for hosting and entertaining guests.",
    image: LivingRoom,
    tag: "Lifestyle",
    slug: "designing-homes-elegance-entertainment",
    author: {
      name: "Rebecca Martinez",
      role: "Lifestyle Editor",
      avatar: "https://randomuser.me/api/portraits/women/23.jpg"
    }
  },
  {
    id: 6,
    title: "How Smart Technology is Transforming Luxury Living",
    excerpt: "Discover the cutting-edge tech innovations that are enhancing comfort, security, and convenience in luxury homes.",
    image: SmartHome,
    tag: "Innovation",
    slug: "smart-technology-luxury-living",
    author: {
      name: "James Wilson",
      role: "Tech Journalist",
      avatar: "https://randomuser.me/api/portraits/men/52.jpg"
    }
  },
  {
    id: 7,
    title: "10 Timeless Design Elements Every Luxury Home Needs",
    excerpt: "Explore the essential design features that create enduring elegance and value in high-end residential properties.",
    image: Modern,
    tag: "Design",
    slug: "timeless-design-elements-luxury-home",
    author: {
      name: "Olivia Chen",
      role: "Architectural Critic",
      avatar: "https://randomuser.me/api/portraits/women/36.jpg"
    }
  }
];

const getTagStyle = (tag: string) => {
  switch (tag) {
    case 'Innovation':
      return 'bg-blue-100 text-blue-700';
    case 'Sustainability':
      return 'bg-green-100 text-green-700';
    case 'Design':
      return 'bg-orange-100 text-orange-700';
    case 'Lifestyle':
      return 'bg-red-100 text-red-700';
    default:
      return 'bg-gray-100 text-gray-700';
  }
};

const Insights = () => {
  const sectionRef = useRef<HTMLElement>(null);

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

  const featuredArticle = articles[0];
  const remainingArticles = articles.slice(1);

  return (
    <div className="min-h-screen bg-white">
      <section className="pt-16 pb-12 bg-sky-100">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-light text-center mb-4">
            Discover insights,<br />
            trends, and inspiration.
          </h1>
          <p className="text-center text-gray-600 text-lg max-w-2xl mx-auto">
            Your guide to luxury living, design trends, and innovation.
          </p>
        </div>
      </section>

      <section ref={sectionRef} className="py-16 px-4 opacity-0">
        <div className="container mx-auto">
          {/* Featured Article */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16">
            <div className="lg:col-span-6">
              <Link to={`/insights/${featuredArticle.slug}`} className="block">
                <div className="relative h-full rounded-lg overflow-hidden">
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-block bg-black text-white text-xs px-3 py-1 rounded-full">
                      Must Read
                    </span>
                  </div>
                  <img 
                    src={featuredArticle.image} 
                    alt={featuredArticle.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </Link>
            </div>
            <div className="lg:col-span-6 bg-gray-50 p-8 rounded-lg flex flex-col justify-center">
              <Link to={`/insights/${featuredArticle.slug}`} className="block group">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-3xl font-light group-hover:underline">
                    {featuredArticle.title}
                  </h2>
                  <ArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity" size={24} />
                </div>
              </Link>
              <p className="text-gray-600 mb-8">
                {featuredArticle.excerpt}
              </p>
              <div className="flex items-center mt-auto">
                <div className="flex items-center flex-grow">
                  <img 
                    src={featuredArticle.author.avatar} 
                    alt={featuredArticle.author.name} 
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <p className="font-medium">{featuredArticle.author.name}</p>
                    <p className="text-sm text-gray-500">{featuredArticle.author.role}</p>
                  </div>
                </div>
                <span className={`inline-block text-xs px-3 py-1 rounded-full ${getTagStyle(featuredArticle.tag)}`}>
                  {featuredArticle.tag}
                </span>
              </div>
            </div>
          </div>

          {/* Grid layout for remaining articles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {remainingArticles.map(article => (
              <div key={article.id} className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <Link to={`/insights/${article.slug}`} className="block">
                  <div className="relative mb-4">
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-0 right-0 m-4">
                      <ArrowRight 
                        size={24} 
                        className="bg-white/70 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                  </div>
                  <div className="px-4 pb-4">
                    <div className="mb-4">
                      <span className={`inline-block text-xs px-3 py-1 rounded-full ${getTagStyle(article.tag)}`}>
                        {article.tag}
                      </span>
                    </div>
                    <h3 className="text-xl font-medium mb-2 group-hover:underline">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center">
                      <img 
                        src={article.author.avatar} 
                        alt={article.author.name} 
                        className="w-8 h-8 rounded-full mr-2"
                      />
                      <div>
                        <p className="text-sm font-medium">{article.author.name}</p>
                        <p className="text-xs text-gray-500">{article.author.role}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Insights;