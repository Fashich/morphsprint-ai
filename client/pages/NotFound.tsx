import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowRight } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-950 dark:via-blue-950 dark:to-purple-950 flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-3xl top-20 left-10" />
        <div className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-purple-400/20 to-pink-400/20 blur-3xl bottom-20 right-10" />
      </div>

      <div className="relative z-10 text-center px-6">
        <div className="mb-8">
          <p className="text-8xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-display">
            404
          </p>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 font-display">
          Page Not Found
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-lg mx-auto">
          The page you're looking for doesn't exist. It might have been moved or
          removed. Let's get you back on track.
        </p>
        <a
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          Return to Home
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
};

export default NotFound;
