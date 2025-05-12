import React, { useEffect, useRef, useState } from "react";
import Build from "../layout/Assests/Building 2.avif";
import Logo from "../layout/Assests/Logo.avif";

const VisionSection = () => {
  const [email, setEmail] = useState("");
  const buildingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.3 }
    );

    if (buildingRef.current) observer.observe(buildingRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
    alert("Thank you for subscribing! We'll keep you updated on Haven properties.");
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 py-16">
      <div className="container mx-auto max-w-2xl text-center">
        <div className="fade-in">
          <h2 className="text-3xl sm:text-3xl md:text-3xl font-light tracking-tight leading-tight">
            Where your vision
            <br />
            finds its{" "}
            <span className="inline-flex items-center mx-1">
              <img
                src= {Logo}
                alt="Modern home"
                className="inline-block h-6 sm:h-8 md:h-10 rounded-md object-cover"
              />
            </span>{" "}
            home.
          </h2>
        </div>

        <p className="fade-in fade-in-delay-1 text-gray-500 text-lg sm:text-xl max-w-2xl mx-auto mt-4 leading-relaxed">
          Haven offers more than just a place to live—it's a space designed to reflect your unique
          style, crafted with timeless precision, and built to inspire for generations to come.
        </p>

        <form
          onSubmit={handleSubmit}
          className="fade-in fade-in-delay-2 mt-12 flex flex-col sm:flex-row max-w-lg mx-auto gap-4"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email Address"
            required
            className="flex-1 px-3 py-3 bg-gray-100 rounded-full text-gray-600 focus:outline-none"
          />
          <button
            type="submit"
            className="sm:flex-none px-4 py-4 bg-black text-white rounded-full hover:bg-gray-600 transition-colors"
          >
            Stay Updated
          </button>
        </form>
      </div>

      <div
        ref={buildingRef}
        className="w-full max-w-2xl mx-auto mt-16 sm:mt-24 building-reveal"
      >
        <img
          src={Build}
          alt="Modern luxury home with white facade"
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default VisionSection;