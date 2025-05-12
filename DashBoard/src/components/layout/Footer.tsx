
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-haven-blue py-10 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="text-white text-xl font-light tracking-wide">
              Haven<span className="text-sm align-super">*</span>
            </Link>
          </div>
          <div className="space-y-3">
            <h3 className="text-white font-medium mb-4">Links</h3>
            <ul className="space-y-2 text-white/90">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/properties" className="hover:text-white">Properties</Link></li>
              <li><Link to="/about" className="hover:text-white">About</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-white font-medium mb-4">Legal</h3>
            <ul className="space-y-2 text-white/90">
              <li><Link to="/terms" className="hover:text-white">Terms</Link></li>
              <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/20 mt-8 pt-6 text-white/70">
          <p>&copy; {new Date().getFullYear()} Haven. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
