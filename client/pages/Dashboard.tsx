import { BarChart3, TrendingUp, Users, Trophy } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-950 dark:via-blue-950 dark:to-purple-950">
      {/* Navigation */}
      <nav className="border-b border-slate-200/50 dark:border-slate-800/50 backdrop-blur-md bg-white/30 dark:bg-slate-950/30 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-lg">◆</span>
            </div>
            <span className="text-xl font-bold text-slate-900 dark:text-white font-display">
              SprintWise AI
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="/dashboard"
              className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors font-semibold"
            >
              Dashboard
            </a>
            <a
              href="/nft-gallery"
              className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
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
            Sprint Dashboard
          </h1>
          <p className="text-slate-600 dark:text-slate-300">
            Manage your sprints with AI-powered insights and blockchain verification
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="p-6 rounded-xl border border-slate-200/50 dark:border-slate-800/50 bg-white/50 dark:bg-slate-900/50 backdrop-blur">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-slate-600 dark:text-slate-400">
                Next Sprint Capacity
              </h3>
              <TrendingUp className="w-5 h-5 text-blue-500" />
            </div>
            <p className="text-3xl font-bold text-slate-900 dark:text-white font-display">
              48
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">
              Story points predicted
            </p>
          </div>

          <div className="p-6 rounded-xl border border-slate-200/50 dark:border-slate-800/50 bg-white/50 dark:bg-slate-900/50 backdrop-blur">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-slate-600 dark:text-slate-400">
                Team Velocity
              </h3>
              <BarChart3 className="w-5 h-5 text-purple-500" />
            </div>
            <p className="text-3xl font-bold text-slate-900 dark:text-white font-display">
              42
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">
              avg points/sprint
            </p>
          </div>

          <div className="p-6 rounded-xl border border-slate-200/50 dark:border-slate-800/50 bg-white/50 dark:bg-slate-900/50 backdrop-blur">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-slate-600 dark:text-slate-400">
                Team Members
              </h3>
              <Users className="w-5 h-5 text-blue-500" />
            </div>
            <p className="text-3xl font-bold text-slate-900 dark:text-white font-display">
              6
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">
              active developers
            </p>
          </div>

          <div className="p-6 rounded-xl border border-slate-200/50 dark:border-slate-800/50 bg-white/50 dark:bg-slate-900/50 backdrop-blur">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-slate-600 dark:text-slate-400">
                Achievements
              </h3>
              <Trophy className="w-5 h-5 text-purple-500" />
            </div>
            <p className="text-3xl font-bold text-slate-900 dark:text-white font-display">
              12
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">
              NFTs minted
            </p>
          </div>
        </div>

        {/* Content Coming Soon */}
        <div className="p-12 rounded-xl border border-slate-200/50 dark:border-slate-800/50 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-slate-900/50 dark:to-slate-800/50 backdrop-blur text-center">
          <div className="w-16 h-16 mx-auto mb-6 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <BarChart3 className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 font-display">
            Dashboard Coming Soon
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            The full dashboard with sprint planning, AI predictions, and blockchain
            integration is currently being developed. Continue exploring other sections
            of the platform, or return to the home page to learn more about SprintWise AI.
          </p>
          <div className="mt-8">
            <a
              href="/"
              className="inline-block px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            >
              Back to Home
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
