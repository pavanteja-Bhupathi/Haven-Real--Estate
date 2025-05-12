import { useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Import the same article data
import Sky from "../components/layout/Assests/Sky.avif";
import Robo from "../components/layout/Assests/Robot AI.avif";
import Sustain from "../components/layout/Assests/Sustainbility.avif";
import Design from "../components/layout/Assests/Design.avif";
import LivingRoom from "../components/layout/Assests/Innovation.avif";
import Modern from "../components/layout/Assests/Lifestyle.avif";
import SmartHome from "../components/layout/Assests/SmartHome.avif"; // Reusing an image

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
  content?: string;
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
    },
    content: `
      <p>Boutique architecture represents a significant shift in luxury living, moving away from mass-produced designs to highly individualized spaces that reflect the owner's personality and lifestyle.</p>
      
      <h2>The Personalized Experience</h2>
      <p>What sets boutique architecture apart is its deeply personalized approach. Unlike conventional luxury developments, boutique projects involve close collaboration between architects, designers, and homeowners from the very beginning. This ensures that every aspect of the home—from structural elements to the smallest decor details—aligns with the client's vision.</p>
      
      <p>The result is a home that feels authentic and meaningful, with spaces that serve the specific needs and preferences of those who live there. This level of customization is increasingly sought after by discerning homeowners who want their living spaces to be as unique as they are.</p>
      
      <h2>Quality Over Quantity</h2>
      <p>Boutique architecture prioritizes exceptional craftsmanship and select materials over sheer size or unnecessary features. These homes often showcase artisanal elements, custom-built furniture, and handcrafted details that highlight human skill and creativity.</p>
      
      <p>The focus is on creating spaces that feel intimate and thoughtful, with meticulous attention to detail in every corner. This approach stands in contrast to the "bigger is better" mentality that has long dominated luxury real estate.</p>
      
      <h2>Timeless Design Principles</h2>
      <p>While boutique architecture embraces contemporary aesthetics, it also draws on timeless design principles that ensure the home won't feel dated within a few years. These properties often feature classic proportions, natural materials that age gracefully, and layouts that can adapt to changing needs.</p>
      
      <p>This emphasis on longevity extends beyond visual appeal to include structural integrity and functionality, creating homes that will remain desirable and valuable for generations.</p>
      
      <h2>The Future of Luxury Living</h2>
      <p>As priorities shift toward authenticity, sustainability, and personal meaning, boutique architecture is positioned to become the gold standard in luxury living. Homeowners are increasingly willing to invest in spaces that truly reflect their values and enhance their daily experiences, rather than simply serving as status symbols.</p>
      
      <p>This movement represents a more thoughtful and intentional approach to luxury—one that prioritizes quality of life over ostentatious displays of wealth. In this sense, boutique architecture isn't just changing how luxury homes look; it's redefining what luxury means in the modern era.</p>
    `
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
    },
    content: `
      <p>Artificial intelligence and automation technologies are revolutionizing luxury homes, creating living spaces that anticipate needs, adapt to preferences, and simplify daily routines in unprecedented ways.</p>
      
      <h2>Intelligent Environmental Systems</h2>
      <p>Modern luxury homes now feature AI-powered environmental systems that learn occupants' preferences and automatically adjust lighting, temperature, and ventilation throughout the day. These systems can detect when residents arrive home, enter specific rooms, or prepare for sleep, creating optimal conditions for every activity without manual input.</p>
      
      <p>More advanced implementations can even consider factors like outdoor weather conditions, time of day, and seasonal changes to maximize both comfort and energy efficiency, representing a significant leap beyond traditional smart home capabilities.</p>
      
      <h2>Predictive Maintenance and Security</h2>
      <p>AI algorithms now monitor home systems to predict potential issues before they become problems. From detecting minor plumbing leaks to identifying irregular electrical patterns that might indicate equipment failure, these technologies allow for proactive maintenance that preserves both property value and peace of mind.</p>
      
      <p>Security systems have similarly evolved, with AI-powered cameras that can distinguish between family members, regular visitors, and unknown persons, while also identifying unusual activities that might indicate a security concern. These systems minimize false alarms while providing more reliable protection.</p>
      
      <h2>Personalized Living Experiences</h2>
      <p>Perhaps the most transformative aspect of AI in luxury homes is the ability to create highly personalized living experiences. Voice assistants and integrated home systems now learn individual preferences for everything from entertainment content to morning routines, creating seamless experiences that feel intuitive and natural.</p>
      
      <p>For example, when a resident prepares for sleep, the home might automatically dim lights along the path to the bedroom, adjust the temperature to ideal sleeping conditions, ensure security systems are activated, and perhaps even begin playing preferred sleep sounds or music.</p>
      
      <h2>The Evolution of Design</h2>
      <p>As technology becomes more integrated, designers are rethinking how luxury spaces should look and function. The trend is moving toward "invisible technology" that provides sophisticated capabilities without visually dominating spaces or requiring complex interfaces.</p>
      
      <p>This design philosophy preserves the aesthetic integrity of architectural spaces while embedding advanced functionality throughout the home, creating environments that feel both timeless and futuristic.</p>
    `
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
    },
    content: `
      <p>Sustainable materials are rapidly transforming luxury home construction, offering environmental benefits without compromising on aesthetics or performance. This growing movement represents a fundamental shift in how we think about premium residential spaces.</p>
      
      <h2>Innovative Building Materials</h2>
      <p>Today's eco-conscious luxury homes feature an impressive array of sustainable materials that combine beauty with responsible sourcing. Reclaimed wood provides character and history while reducing demand for new timber. Bamboo offers hardwood-like durability with a fraction of the environmental impact, as it grows quickly and requires minimal resources.</p>
      
      <p>More innovative materials include mycelium (mushroom-based) composites for insulation, recycled steel for structural elements, and biocement made by bacteria, which produces less carbon dioxide than traditional cement manufacturing processes.</p>
      
      <h2>Performance and Longevity</h2>
      <p>Contrary to earlier perceptions, sustainable materials often outperform conventional options in terms of durability and maintenance requirements. Many eco-friendly building materials are designed to last longer, reducing the frequency of replacements and the associated environmental impacts.</p>
      
      <p>For example, recycled metal roofing typically lasts 2-3 times longer than traditional asphalt shingles, while requiring less maintenance and offering better energy efficiency. Similarly, engineered wood products made from sustainable sources can provide greater dimensional stability than conventional lumber.</p>
      
      <h2>Aesthetic Excellence</h2>
      <p>Perhaps the most significant evolution in sustainable materials has been their aesthetic quality. No longer viewed as compromise choices, these materials now feature prominently in architectural magazines and design awards, celebrated for their beauty and innovative applications.</p>
      
      <p>Cork flooring offers warm, comfortable surfaces with unique visual textures. Recycled glass countertops create stunning visual effects while diverting waste from landfills. Living walls and green roofs transform buildings into verdant sanctuaries while improving air quality and thermal performance.</p>
      
      <h2>Health and Wellness Benefits</h2>
      <p>Beyond environmental considerations, sustainable materials typically contribute to healthier indoor environments. Many conventional building materials release volatile organic compounds (VOCs) that can compromise air quality and potentially cause health issues over time.</p>
      
      <p>In contrast, many sustainable alternatives are specifically designed to minimize or eliminate such emissions, creating spaces that promote wellbeing alongside environmental responsibility. This alignment of personal and planetary health represents a compelling value proposition for homeowners.</p>
    `
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
    },
    content: `
      <p>Minimalism and luxury might seem contradictory at first glance—one emphasizes restraint while the other suggests abundance. Yet the most sophisticated contemporary interiors often blend these approaches, creating spaces that feel both serene and sumptuous.</p>
      
      <h2>Quality Over Quantity</h2>
      <p>The fundamental principle behind luxurious minimalism is prioritizing exceptional quality over sheer quantity. Rather than filling spaces with numerous items, this approach focuses on carefully selected pieces that offer extraordinary craftsmanship, materials, and design integrity.</p>
      
      <p>A single, perfectly executed chair in the finest leather might serve as the focal point in a sitting area, while hand-plastered walls with subtle texture provide interest without overwhelming the senses. This selective approach creates breathing room for each element to be fully appreciated.</p>
      
      <h2>Thoughtful Material Selection</h2>
      <p>Materials play a crucial role in balancing minimalism with luxury. Natural stones with dramatic veining, figured woods with rich patina, and textiles with subtle but complex textures can all add layers of interest and opulence to otherwise simple spaces.</p>
      
      <p>The key is choosing materials that offer depth and sensory appeal without requiring elaborate patterns or ornamentation. A bathroom clad entirely in book-matched marble, for instance, can feel simultaneously minimal in its layout yet undeniably luxurious in its materiality.</p>
      
      <h2>Strategic Contrast</h2>
      <p>Creating contrast between simple backgrounds and luxurious focal elements is another effective strategy. Neutral, understated surroundings allow signature pieces to command attention, creating moments of discovery and delight without overwhelming the overall composition.</p>
      
      <p>This might manifest as a streamlined kitchen with clean lines and hidden storage, punctuated by a single spectacular light fixture in hand-blown glass, or a monochromatic bedroom featuring one exquisite piece of art that becomes the room's centerpiece.</p>
      
      <h2>Subtle Details</h2>
      <p>In minimalist luxury spaces, details matter enormously. Perfect proportions, precise alignments, and thoughtful transitions between materials create a sense of refinement that speaks quietly but powerfully. These subtle considerations often represent significant investment and craftsmanship, even when they don't immediately announce themselves.</p>
      
      <p>Consider flush baseboards that eliminate the need for traditional moldings, concealed lighting systems that wash walls with even illumination, or custom hardware designed specifically for its context. These elements might not be immediately noticed, but they contribute to an overall sense of exceptional quality and attention to detail.</p>
    `
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
    },
    content: `
      <p>Creating homes that balance elegant aesthetics with entertainment functionality requires thoughtful planning and an understanding of how people naturally gather and interact. These principles can transform beautiful but static spaces into dynamic environments that enhance social connections.</p>
      
      <h2>Flow and Connectivity</h2>
      <p>The most successful entertainment-focused homes feature intuitive flow between spaces, allowing guests to move naturally from one area to another. This often means creating visual connections between rooms while maintaining distinct zones for different activities.</p>
      
      <p>Consider how a kitchen might open to a dining area that transitions to a living space, all while maintaining sight lines that keep guests connected regardless of where they position themselves. This approach prevents isolation while still offering variety in the entertainment experience.</p>
      
      <h2>Flexible Furnishing Strategies</h2>
      <p>Furniture arrangements should accommodate both intimate conversations and larger gatherings. Rather than positioning all seating to face a television (as in many conventional living rooms), consider conversational groupings that encourage interaction.</p>
      
      <p>Modular pieces, ottomans that can serve as additional seating, and carefully placed side tables ensure that every guest has a comfortable place to sit and a surface for their drink, regardless of how many people are present.</p>
      
      <h2>Thoughtful Lighting Design</h2>
      <p>Lighting plays a crucial role in entertainment spaces, ideally offering layers that can be adjusted for different moods and occasions. A well-designed lighting plan includes ambient illumination for general visibility, task lighting for specific activities, and accent lighting to highlight architectural features or art.</p>
      
      <p>Dimmable fixtures are essential, allowing the transition from bright, energetic gatherings to more intimate, subdued atmospheres as the evening progresses. Lighting controls should be intuitive and accessible, allowing quick adjustments without disrupting the flow of entertainment.</p>
      
      <h2>Indoor-Outdoor Continuity</h2>
      <p>Extending entertainment spaces to the outdoors significantly expands hosting capabilities while creating memorable experiences for guests. Design elements like retractable glass walls, consistent flooring materials that continue from inside to outside areas, and weatherproof furnishings that complement interior pieces all contribute to this sense of expanded space.</p>
      
      <p>Even in urban environments or challenging climates, thoughtfully designed terraces, balconies, or courtyards can become natural extensions of interior entertainment zones, particularly valuable during pleasant weather conditions.</p>
    `
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
    },
    content: `
      <p>Smart technology has moved far beyond novelty features to become an essential component of contemporary luxury homes, fundamentally transforming how these spaces function and how we interact with them.</p>
      
      <h2>Integrated Home Management</h2>
      <p>Today's luxury homes feature comprehensive management systems that integrate numerous functions—security, climate control, lighting, entertainment, and more—into cohesive platforms that can be controlled through elegant wall panels, mobile applications, or voice commands.</p>
      
      <p>These systems don't merely offer remote control capabilities; they learn from occupant behavior to anticipate needs and automate routine functions. A truly intelligent home might recognize when residents typically return from work and prepare the environment accordingly, or understand sleep patterns and gradually adjust lighting and temperature to support healthy rest cycles.</p>
      
      <h2>Wellness Technology</h2>
      <p>As wellness becomes increasingly important to luxury homeowners, technology that supports physical and mental health has become a defining feature of high-end residences. Circadian lighting systems mimic natural light patterns to support healthier sleep cycles. Advanced water filtration systems provide customized water quality throughout the home. Air purification technologies maintain optimal indoor air quality, adjusting automatically in response to changing conditions.</p>
      
      <p>More specialized implementations include bathrooms equipped with digital wellness features such as chromotherapy lighting in showers, smart mirrors that display health metrics, and flooring that can track weight and body composition without any visible sensors.</p>
      
      <h2>Invisible Integration</h2>
      <p>The most sophisticated smart homes conceal technology within beautiful design, ensuring that innovation enhances rather than dominates the aesthetic experience. Speakers disappear into architectural elements, televisions disguise themselves as art or mirrors when not in use, and control interfaces blend seamlessly with wall surfaces or appear only when needed.</p>
      
      <p>This "invisible technology" approach preserves the visual tranquility of spaces while still providing advanced functionality, representing a significant evolution from earlier smart home implementations that often cluttered environments with obvious devices and controls.</p>
      
      <h2>Personalization Through Data</h2>
      <p>Perhaps the most transformative aspect of smart home technology is its ability to create deeply personalized environments through data collection and analysis. Modern systems can recognize individual family members and customize experiences accordingly—from preferred lighting scenes and room temperatures to entertainment content recommendations and even aromatherapy profiles delivered through integrated scent systems.</p>
      
      <p>This level of customization transforms houses from static structures into responsive environments that actively enhance the daily lives of their occupants, representing a fundamental shift in how we define residential luxury.</p>
    `
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
    },
    content: `
      <p>While design trends come and go, certain architectural and interior elements have demonstrated staying power in luxury homes, continuing to provide beauty, functionality, and value regardless of shifting fashions.</p>
      
      <h2>1. Generous Natural Light</h2>
      <p>Perhaps no feature contributes more to a home's appeal than abundant natural light. Thoughtfully placed windows, skylights, and glass doors that respond to site orientation and privacy needs create spaces that feel open and connected to the exterior environment while reducing the need for artificial lighting during daylight hours.</p>
      
      <h2>2. Authentic Materials</h2>
      <p>Genuine materials with inherent beauty and aging potential—natural stone, hardwoods, handcrafted metals, and plaster—create depth and character that synthetic alternatives can't match. These materials develop patina over time, often becoming more beautiful with age and use rather than requiring replacement.</p>
      
      <h2>3. Architectural Ceiling Treatments</h2>
      <p>Often referred to as the "fifth wall," ceilings offer enormous design potential beyond flat white surfaces. Coffered details, exposed beams, subtle vaulting, or even carefully applied textural finishes can transform ordinary rooms into extraordinary spaces with a sense of permanence and architectural integrity.</p>
      
      <h2>4. Properly Scaled Rooms</h2>
      <p>Timeless homes feature rooms with proportions that feel intuitively right—neither cavernous nor cramped. This often means ceiling heights that respond to room function (taller for public spaces, more intimate for private areas) and floor plans that create a sense of progression and discovery rather than revealing everything at once.</p>
      
      <h2>5. Indoor-Outdoor Connection</h2>
      <p>Spaces that flow seamlessly from interior to exterior areas extend living possibilities and create a deeper connection to the surrounding landscape. This might manifest as floor-to-ceiling glass walls that open completely, covered outdoor rooms that function as extensions of interior spaces, or strategic window placement that frames specific landscape views like living art.</p>
      
      <h2>6. Statement Staircase</h2>
      <p>In multi-level homes, a thoughtfully designed staircase serves as both functional element and sculptural focal point. Whether featuring floating treads, handcrafted railings, or dramatic spatial positioning, a well-executed stairway creates moments of beauty in daily circulation paths.</p>
      
      <h2>7. Thoughtful Storage Solutions</h2>
      <p>Luxury that lasts incorporates abundant, well-designed storage that accommodates real-life possessions while maintaining clean aesthetic lines. This includes dedicated spaces for specific functions—from specialized closet systems to butler's pantries—allowing main living areas to remain uncluttered and serene.</p>
      
      <h2>8. Layered Lighting</h2>
      <p>Sophisticated lighting design includes multiple sources at different levels, allowing for various moods and functions within the same space. This typically combines ambient, task, and accent lighting through architectural fixtures, decorative elements, and concealed sources that highlight textures and create atmosphere.</p>
      
      <h2>9. Solid Core Doors</h2>
      <p>The substantial feel and acoustic properties of solid doors signal quality construction in ways immediately perceptible to occupants and visitors. This seemingly small detail contributes significantly to the overall impression of solidity and permanence throughout a home.</p>
      
      <h2>10. Private Outdoor Spaces</h2>
      <p>Beyond expansive garden areas, truly timeless homes incorporate intimate outdoor spaces designed for specific activities—morning coffee terraces, meditation gardens, or evening conversation nooks with fire features. These thoughtfully designed exterior rooms expand living options while providing sanctuary and connection to nature.</p>
    `
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

const ArticleDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find(article => article.slug === slug);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    
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

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Article not found</h1>
          <Button asChild>
            <Link to="/insights">Back to Insights</Link>
          </Button>
        </div>
      </div>
    );
  }

  // Related articles (excluding the current one)
  const relatedArticles = articles
    .filter(a => a.tag === article.tag && a.id !== article.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="w-full bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <Link to="/insights" className="inline-flex items-center text-gray-600 hover:text-black">
            <ArrowLeft size={16} className="mr-2" />
            Back to Insights
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="w-full bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Badge className={getTagStyle(article.tag)}>
              {article.tag}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-light mt-4 mb-6">
              {article.title}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {article.excerpt}
            </p>
            
            <div className="flex items-center mb-12">
              <Avatar className="h-12 w-12 mr-4">
                <AvatarImage src={article.author.avatar} alt={article.author.name} />
                <AvatarFallback>{article.author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">{article.author.name}</p>
                <p className="text-sm text-gray-500">{article.author.role}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="w-full max-h-[600px] overflow-hidden mb-12">
        <img 
          src={article.image} 
          alt={article.title}
          className="w-full object-cover" 
        />
      </div>

      {/* Article Content */}
      <section ref={sectionRef} className="py-12 opacity-0">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <div dangerouslySetInnerHTML={{ __html: article.content || '' }} />
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-light mb-12 text-center">More {article.tag} Articles</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedArticles.map(relatedArticle => (
                <div key={relatedArticle.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                  <Link to={`/insights/${relatedArticle.slug}`}>
                    <div className="relative h-48">
                      <img 
                        src={relatedArticle.image} 
                        alt={relatedArticle.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-medium mb-2 group-hover:underline">
                        {relatedArticle.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {relatedArticle.excerpt}
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ArticleDetail;