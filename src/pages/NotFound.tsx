
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sambow-soft-purple via-white to-sambow-soft-pink">
      <div className="text-center max-w-md mx-auto px-6">
        <div className="mb-8">
          <div className="text-9xl font-bold heading-gradient">404</div>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-sambow-purple to-sambow-pink my-6"></div>
        </div>
        
        <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
        <p className="text-gray-600 mb-8">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        
        <div className="space-y-4">
          <Button asChild className="btn-primary w-full">
            <Link to="/">Back to Home</Link>
          </Button>
          
          <div className="text-sm text-gray-500">
            <p>If you believe this is an error, please contact our support team.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
