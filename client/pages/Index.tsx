import { useState, useEffect } from "react";
import { ArrowRight, Zap, Shield, Brain } from "lucide-react";

const LOGO_URL = "https://cdn.builder.io/api/v1/image/assets%2F5b28f6891f9443469e73e62e1d9f2778%2F1437029880df4d3ca60e17eeef837ab6?format=webp&width=800";

export default function Index() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-950 dark:via-blue-950 dark:to-purple-950 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Floating Orbs */}
        <div
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-3xl"
          style={{
            top: "10%",
            left: "10%",
            transform: `translate(${mousePos.x * 0.02}px, ${mousePos.y * 0.02}px)`,
            transition: "transform 0.1s ease-out",
          }}
        />
        <div
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-purple-400/20 to-pink-400/20 blur-3xl"
          style={{
            bottom: "10%",
            right: "10%",
            transform: `translate(${-mousePos.x * 0.02}px, ${-mousePos.y * 0.02}px)`,
            transition: "transform 0.1s ease-out",
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-slate-200/50 dark:border-slate-800/50 backdrop-blur-md bg-white/30 dark:bg-slate-950/30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={LOGO_URL} alt="MorphSprint AI" className="h-10 w-10 rounded-lg" />
            <span className="text-xl font-bold text-slate-900 dark:text-white font-display">
              MorphSprint AI
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="#features"
              className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              How It Works
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-32 flex flex-col items-center justify-center text-center">
        <div
          className={`transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-block mb-6 px-4 py-2 rounded-full border border-blue-300/50 dark:border-blue-500/50 bg-blue-50/50 dark:bg-blue-950/30 backdrop-blur">
            <p className="text-sm font-semibold text-blue-700 dark:text-blue-400">
              Where Agile Meets Blockchain
            </p>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6 font-display leading-tight">
            MorphSprint AI
          </h1>

          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed">
            MorphSprint AI combines intelligent capacity prediction with blockchain
            transparency, transforming how Agile teams plan sprints and document
            their achievements. Experience the future of sprint planning powered by
            artificial intelligence and decentralized verification.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button onClick={() => window.location.href = '/login'} className="group relative px-8 py-4 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer">
              <span className="flex items-center gap-2 justify-center">
                Connect MetaMask
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button onClick={() => window.location.href = '/login?mode=demo'} className="group relative px-8 py-4 rounded-lg font-semibold text-slate-900 dark:text-white bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-purple-400 dark:hover:border-purple-500 transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer">
              <span className="flex items-center gap-2 justify-center">
                Try Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-20">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 font-display">
                98%
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                Prediction Accuracy
              </p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-purple-600 dark:text-purple-400 font-display">
                10K+
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                Teams Powered
              </p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 font-display">
                100%
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                On-Chain Verified
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-8"
      >
        <div className="p-6 rounded-xl border border-slate-200/50 dark:border-slate-800/50 bg-white/50 dark:bg-slate-900/50 backdrop-blur hover:border-blue-400/50 dark:hover:border-blue-500/50 transition-all duration-300 group">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 font-display">
            AI-Powered Predictions
          </h3>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            Predict sprint capacity with machine learning trained on your team's
            historical velocity and productivity patterns.
          </p>
        </div>

        <div className="p-6 rounded-xl border border-slate-200/50 dark:border-slate-800/50 bg-white/50 dark:bg-slate-900/50 backdrop-blur hover:border-purple-400/50 dark:hover:border-purple-500/50 transition-all duration-300 group">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 font-display">
            Blockchain Verified
          </h3>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            Every completed sprint and achievement is permanently recorded as an
            NFT on the blockchain for transparent verification.
          </p>
        </div>

        <div className="p-6 rounded-xl border border-slate-200/50 dark:border-slate-800/50 bg-white/50 dark:bg-slate-900/50 backdrop-blur hover:border-blue-400/50 dark:hover:border-blue-500/50 transition-all duration-300 group">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <Brain className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 font-display">
            Smart Recommendations
          </h3>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            Get actionable insights to optimize sprint planning and boost team
            productivity based on real data analysis.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section
        id="how-it-works"
        className="relative z-10 max-w-7xl mx-auto px-6 py-20"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-900 dark:text-white mb-16 font-display">
          How It Works
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600">
                  <span className="text-white font-bold">1</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 font-display">
                  Connect Your Wallet
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Securely link your Web3 wallet to access the platform and enable
                  automatic NFT minting for completed sprints.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600">
                  <span className="text-white font-bold">2</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 font-display">
                  Input Sprint Data
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Add user stories, historical team velocity, and sprint goals.
                  Our AI instantly analyzes patterns and predicts capacity.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600">
                  <span className="text-white font-bold">3</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 font-display">
                  Get Predictions & Recommendations
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Receive AI-generated capacity forecasts with detailed explanations
                  of the factors influencing the prediction.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600">
                  <span className="text-white font-bold">4</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 font-display">
                  Execute & Mint NFTs
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Complete your sprint and automatically mint achievement NFTs to
                  the blockchain for permanent verification.
                </p>
              </div>
            </div>
          </div>

          <div className="relative h-96 rounded-xl border border-slate-200/50 dark:border-slate-800/50 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-900 dark:to-slate-800 p-8 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-blue-500"
                  style={{
                    left: `${Math.cos((i / 12) * Math.PI * 2) * 100 + 50}%`,
                    top: `${Math.sin((i / 12) * Math.PI * 2) * 100 + 50}%`,
                    animation: `float ${3 + i * 0.1}s ease-in-out infinite`,
                  }}
                />
              ))}
            </div>
            <div className="relative text-center">
              <div className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-display">
                ◆
              </div>
              <p className="text-slate-600 dark:text-slate-300 mt-4">
                Blockchain Integration
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="rounded-xl border border-slate-200/50 dark:border-slate-800/50 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/5 dark:to-purple-500/5 backdrop-blur p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 font-display">
            Ready to Transform Your Sprint Planning?
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
            Join thousands of teams already using MorphSprint AI to predict capacity
            and document achievements on the blockchain.
          </p>
          <button className="group relative px-8 py-4 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            <span className="flex items-center gap-2 justify-center">
              Get Started Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-200/50 dark:border-slate-800/50 bg-white/30 dark:bg-slate-950/30 backdrop-blur-md mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src={LOGO_URL} alt="MorphSprint AI" className="h-8 w-8 rounded-lg" />
                <span className="font-bold text-slate-900 dark:text-white font-display">
                  MorphSprint AI
                </span>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Sprint planning reimagined with AI and blockchain.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-4 font-display">
                Product
              </h4>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li>
                  <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                    Security
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-4 font-display">
                Company
              </h4>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li>
                  <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-4 font-display">
                Legal
              </h4>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li>
                  <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-200/50 dark:border-slate-800/50 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-600 dark:text-slate-400">
            <p>&copy; 2024 MorphSprint AI. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                Twitter
              </a>
              <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                Discord
              </a>
              <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
