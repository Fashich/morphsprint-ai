import { useState, useEffect } from "react";
import { ArrowRight, Wallet, Chrome } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

const LOGO_URL =
  "https://cdn.builder.io/api/v1/image/assets%2F5b28f6891f9443469e73e62e1d9f2778%2F1437029880df4d3ca60e17eeef837ab6?format=webp&width=800";

declare global {
  interface Window {
    ethereum?: any;
  }
}

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleMetaMaskLogin = async () => {
    setIsLoading(true);
    setError(null);

    try {
      // Check if MetaMask is installed
      if (!window.ethereum) {
        setError("MetaMask is not installed. Please install it first.");
        setIsLoading(false);
        return;
      }

      // Request accounts from MetaMask
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      if (accounts && accounts.length > 0) {
        const userAddress = accounts[0];

        // Store user info in localStorage
        localStorage.setItem(
          "user",
          JSON.stringify({
            address: userAddress,
            loginMethod: "metamask",
            loginTime: new Date().toISOString(),
          }),
        );

        // Redirect to dashboard after successful connection
        setTimeout(() => {
          window.location.href = "/dashboard";
        }, 1000);
      }
    } catch (err: any) {
      console.error("MetaMask login error:", err);
      if (err.code === 4001) {
        setError("You rejected the connection request.");
      } else {
        setError("Failed to connect MetaMask. Please try again.");
      }
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

      if (!clientId) {
        setError(
          "Google OAuth is not configured. Please add VITE_GOOGLE_CLIENT_ID environment variable.",
        );
        setIsLoading(false);
        return;
      }

      // Redirect to Google OAuth consent screen
      const redirectUri = encodeURIComponent(
        window.location.origin + "/auth/google/callback",
      );
      const scope = encodeURIComponent("openid profile email");

      const googleAuthUrl =
        `https://accounts.google.com/o/oauth2/v2/auth?` +
        `client_id=${clientId}` +
        `&redirect_uri=${redirectUri}` +
        `&response_type=code` +
        `&scope=${scope}`;

      window.location.href = googleAuthUrl;
    } catch (err) {
      console.error("Google login error:", err);
      setError("Failed to initiate Google login. Please try again.");
      setIsLoading(false);
    }
  };

  const handleGuestMode = () => {
    localStorage.setItem(
      "user",
      JSON.stringify({
        loginMethod: "demo",
        loginTime: new Date().toISOString(),
      }),
    );
    window.location.href = "/dashboard?mode=demo";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950 relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl top-20 left-10" />
        <div className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl bottom-20 right-10" />
      </div>

      {/* Theme Toggle */}
      <div className="absolute top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="max-w-md w-full">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-12 justify-center">
            <img
              src={LOGO_URL}
              alt="MorphSprint AI"
              className="h-12 w-12 rounded-lg"
            />
            <span className="text-2xl font-bold text-white font-display">
              MorphSprint AI
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

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 rounded-lg bg-red-900/20 border border-red-500/50 text-red-200 text-sm">
              {error}
            </div>
          )}

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

            {/* Google Login */}
            <button
              onClick={handleGoogleLogin}
              disabled={isLoading}
              className="w-full group relative px-6 py-4 rounded-lg font-semibold text-slate-900 bg-white hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <div className="flex items-center justify-center gap-3">
                <Chrome className="w-5 h-5 text-red-500" />
                <span>
                  {isLoading ? "Connecting..." : "Connect with Google"}
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
              <span className="font-semibold text-slate-200">Demo Mode:</span>{" "}
              Experience all features without connecting a wallet. Demo data is
              pre-loaded for easy exploration.
            </p>
          </div>

          {/* Footer Links */}
          <div className="mt-8 flex justify-center gap-6 text-sm">
            <a
              href="/privacy-policy"
              className="text-slate-400 hover:text-slate-200 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-of-service"
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
