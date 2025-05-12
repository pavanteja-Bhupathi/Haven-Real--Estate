
import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

interface Faq {
  id: number;
  question: string;
  answer: string;
}

const faqs: Faq[] = [
  {
    id: 1,
    question: "Can I customize the design of a Haven home?",
    answer: "Absolutely. Each Haven home is tailored to reflect your unique vision. From layouts to finishes, we work with you to create a space that perfectly suits your style and needs."
  },
  {
    id: 2,
    question: "Where are Haven homes located?",
    answer: "Haven properties are located in exclusive neighborhoods in major metropolitan areas and sought-after vacation destinations. Each location is carefully selected for its privacy, views, and access to amenities."
  },
  {
    id: 3,
    question: "What is the process for purchasing a Haven home?",
    answer: "The process begins with a personal consultation to understand your needs and preferences. We then guide you through property selection, customization, and the purchase process with our experienced team managing every detail."
  },
  {
    id: 4,
    question: "Do you offer fully custom-built homes?",
    answer: "Yes, we offer both move-in ready luxury residences and fully custom-built homes. Our design team works with renowned architects to bring your vision to life with meticulous attention to detail."
  },
  {
    id: 5,
    question: "How long does it take to complete a home?",
    answer: "Timeframes vary based on the scope of the project. Move-in ready homes are available immediately, while custom projects typically range from 12-24 months from design to completion."
  }
];

const FaqSection = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
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
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, observerOptions);

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section ref={sectionRef} className="py-10 px-2 opacity-0">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <h2 className="text-3xl font-light mb-6 md:mb-0">
            Frequently<br />
            asked questions.
          </h2>
          <p className="text-gray-400 text-xl">
            Answers to your questions,<br />
            every step of the way.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq) => (
            <div 
              key={faq.id}
              className="border-b border-gray-200 py-6"
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full flex justify-between items-center text-left focus:outline-none"
              >
                <h3 className="text-2xl font-light">{faq.question}</h3>
                <ChevronDown 
                  size={24} 
                  className={`transition-transform ${openFaq === faq.id ? 'rotate-180' : ''}`}
                />
              </button>
              <div 
                className={`mt-4 text-gray-400 transition-all overflow-hidden ${
                  openFaq === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
