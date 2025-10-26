import { useState } from "react";
import { ArrowRight, Wallet } from "lucide-react";

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);

  const handleMetaMaskLogin = async () => {
    setIsLoading(true);
    // Simulate Web3Auth connection
    setTimeout(() => {
      setIsLoading(false);
      // In a real app, this would redirect to dashboard
      window.location.href = "/dashboard";
    }, 1500);
  };

  const handleGuestMode = () => {
    window.location.href = "/dashboard?mode=demo";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950 relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl top-20 left-10" />
        <div className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl bottom-20 right-10" />
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="max-w-md w-full">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-12 justify-center">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-xl">◆</span>
            </div>
            <span className="text-2xl font-bold text-white font-display">
              SprintWise AI
            </span>
          </div>

          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-white mb-3 font-display">
              Welcome Back
            </h1>
            <p className="text-slate-300">
              Connect your wallet or try the demo to explore sprint planning
              powered by AI and blockchain.
            </p>
          </div>

          {/* Login Options */}
          <div className="space-y-4">
            {/* MetaMask Login */}
            <button
              onClick={handleMetaMaskLogin}
              disabled={isLoading}
              className="w-full group relative px-6 py-4 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <div className="flex items-center justify-center gap-3">
                <Wallet className="w-5 h-5" />
                <span>
                  {isLoading ? "Connecting Wallet..." : "Connect with MetaMask"}
                </span>
                {!isLoading && (
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                )}
              </div>
            </button>

            {/* Divider */}
            <div className="flex items-center gap-3 my-6">
              <div className="flex-1 h-px bg-slate-700" />
              <span className="text-slate-400 text-sm">or</span>
              <div className="flex-1 h-px bg-slate-700" />
            </div>

            {/* Guest Mode */}
            <button
              onClick={handleGuestMode}
              className="w-full group relative px-6 py-4 rounded-lg font-semibold text-white border border-slate-600 hover:border-purple-500 bg-slate-800/50 hover:bg-slate-800 transition-all duration-300"
            >
              <span className="flex items-center justify-center gap-2">
                Try Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>

          {/* Info Box */}
          <div className="mt-12 p-4 rounded-lg border border-slate-700 bg-slate-800/50 backdrop-blur">
            <p className="text-sm text-slate-300">
              <span className="font-semibold text-slate-200">Demo Mode:</span> Experience
              all features without connecting a wallet. Demo data is pre-loaded for
              easy exploration.
            </p>
          </div>

          {/* Footer Links */}
          <div className="mt-8 flex justify-center gap-6 text-sm">
            <a
              href="#"
              className="text-slate-400 hover:text-slate-200 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-slate-200 transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
