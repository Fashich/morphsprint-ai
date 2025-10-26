import { Zap, Share2 } from "lucide-react";

const LOGO_URL = "https://cdn.builder.io/api/v1/image/assets%2F5b28f6891f9443469e73e62e1d9f2778%2F1437029880df4d3ca60e17eeef837ab6?format=webp&width=800";

export default function NFTGallery() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-950 dark:via-blue-950 dark:to-purple-950">
      {/* Navigation */}
      <nav className="border-b border-slate-200/50 dark:border-slate-800/50 backdrop-blur-md bg-white/30 dark:bg-slate-950/30 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={LOGO_URL} alt="MorphSprint AI" className="h-10 w-10 rounded-lg" />
            <span className="text-xl font-bold text-slate-900 dark:text-white font-display">
              MorphSprint AI
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="/dashboard"
              className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Dashboard
            </a>
            <a
              href="/nft-gallery"
              className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors font-semibold"
            >
              NFT Gallery
            </a>
            <a
              href="/settings"
              className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Settings
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2 font-display">
            NFT Gallery
          </h1>
          <p className="text-slate-600 dark:text-slate-300">
            View and manage your achievement NFTs minted from completed sprints
          </p>
        </div>

        {/* Sample NFT Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="group rounded-xl overflow-hidden border border-slate-200/50 dark:border-slate-800/50 bg-white/50 dark:bg-slate-900/50 backdrop-blur hover:border-purple-400/50 dark:hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="aspect-square bg-gradient-to-br from-blue-400/20 to-purple-500/20 flex items-center justify-center overflow-hidden relative">
                <div className="text-6xl opacity-20 group-hover:scale-110 transition-transform duration-300">
                  ◆
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 font-display">
                  Sprint {i} Completion
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                  Successfully delivered {40 + i * 5} story points in this sprint
                </p>
                <button className="w-full px-4 py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2">
                  <Share2 className="w-4 h-4" />
                  Share
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Coming Soon Section */}
        <div className="p-12 rounded-xl border border-slate-200/50 dark:border-slate-800/50 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-slate-900/50 dark:to-slate-800/50 backdrop-blur text-center">
          <div className="w-16 h-16 mx-auto mb-6 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <Zap className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 font-display">
            Full Gallery Features Coming Soon
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-6">
            The interactive 3D NFT gallery with rotation, metadata viewing, and social
            sharing features is currently being developed. Your minted NFTs will appear
            here once sprints are completed.
          </p>
          <a
            href="/"
            className="inline-block px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
          >
            Back to Home
          </a>
        </div>
      </main>
    </div>
  );
}
