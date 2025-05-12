
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 bg-transparent">
      <div className="flex-1">
        {/* Left side empty for balance */}
      </div>
      <div className="flex-none">
        <Link to="/" className="text-haven-text text-2xl font-light tracking-wide">
          Haven<span className="text-sm align-super">*</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
