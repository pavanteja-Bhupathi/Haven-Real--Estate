
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center max-w-md mx-auto p-6 bg-white rounded-lg shadow-sm">
        <h1 className="text-6xl font-light mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-6">Oops! The page you're looking for cannot be found.</p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button asChild variant="default">
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft size={16} />
              Return to Home
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/insights">
              Browse Insights
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;