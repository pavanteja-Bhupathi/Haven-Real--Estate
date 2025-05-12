
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });
  
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-haven-blue pt-24 pb-12 px-4">
        <div className="container mx-auto">
          <div className="max-w-xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-light text-white mb-6">Get in touch</h1>
            <p className="text-white/90 text-lg mb-12">
              Ready to discover your dream home? Our team is here to help you find the perfect Haven residence.
            </p>
          </div>
          
          {!submitted ? (
            <div className="max-w-xl mx-auto bg-white rounded-lg p-8 shadow-lg">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="firstName" className="block text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-haven-blue"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-haven-blue"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-haven-blue"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="phone" className="block text-gray-700 mb-2">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-haven-blue"
                    required
                  />
                </div>
                
                <div className="mb-8">
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-haven-blue"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-black text-white px-6 py-4 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center"
                >
                  Submit <ArrowRight size={18} className="ml-2" />
                </button>
              </form>
            </div>
          ) : (
            <div className="max-w-xl mx-auto bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-3xl font-light mb-4">Thank You!</h2>
              <p className="text-gray-600 mb-6">
                Your message has been received. A Haven representative will contact you shortly.
              </p>
              <button
                onClick={() => window.location.href = "/"}
                className="inline-flex items-center px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
              >
                Back to Home
              </button>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
