
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
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
    <div className="min-h-screen flex items-center justify-center bg-black text-white p-4">
      <div className="text-center max-w-md glass-morphism p-8 rounded-xl">
        <div className="mb-6 mx-auto h-20 w-20 rounded-full flex items-center justify-center bg-purple/10 border border-purple/20">
          <span className="text-4xl font-bold text-gradient">404</span>
        </div>
        <h1 className="text-2xl font-bold mb-4">Page not found</h1>
        <p className="text-white/70 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a href="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-md accent-gradient text-black font-medium transition-transform hover:scale-105 active:scale-95">
          <ArrowLeft className="h-4 w-4" />
          <span>Return to Home</span>
        </a>
      </div>
    </div>
  );
};

export default NotFound;
