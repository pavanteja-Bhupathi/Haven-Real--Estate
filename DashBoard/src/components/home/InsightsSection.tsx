import { useState, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Sky from "../layout/Assests/Sky.avif";
import Robo from "../layout/Assests/Robot AI.avif";
import Sustain from "../layout/Assests/Sustainbility.avif";
import Design from "../layout/Assests/Design.avif";

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
  }
];

const InsightsSection = () => {
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
  const otherArticles = articles.slice(1);

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

  return (
    <section ref={sectionRef} className="py-20 px-4 opacity-0">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
          <h2 className="text-5xl font-light">
            Discover insights,<br />
            trends, and inspiration.
          </h2>
          <Link 
            to="/insights" 
            className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors mt-4 md:mt-0"
          >
            View all <ArrowRight size={16} />
          </Link>
        </div>

        {/* Featured Article - Horizontal Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          <div className="md:col-span-6">
            <Link to={`/insights/${featuredArticle.slug}`} className="block h-full">
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
                <div className="absolute top-4 right-4">
                  <ArrowRight 
                    size={24} 
                    className="bg-white rounded-full p-1"
                  />
                </div>
              </div>
            </Link>
          </div>
          <div className="md:col-span-6 bg-gray-50 p-8 rounded-lg flex flex-col justify-center">
            <Link to={`/insights/${featuredArticle.slug}`} className="block group">
              <h3 className="text-3xl font-light mb-4 group-hover:underline">
                {featuredArticle.title}
              </h3>
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

        {/* Other Articles - Three in a row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {otherArticles.map(article => (
            <div key={article.id} className="group">
              <Link to={`/insights/${article.slug}`} className="block">
                <div className="mb-4 rounded-lg overflow-hidden relative">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3">
                    <ArrowRight 
                      size={20} 
                      className="bg-white rounded-full p-1"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-medium mb-2 group-hover:underline">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className={`inline-block text-xs px-3 py-1 rounded-full ${getTagStyle(article.tag)}`}>
                    {article.tag}
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;