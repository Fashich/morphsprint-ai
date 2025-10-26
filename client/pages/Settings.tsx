import { Settings as SettingsIcon, Moon, Globe, Bell } from "lucide-react";

const LOGO_URL = "https://cdn.builder.io/api/v1/image/assets%2F5b28f6891f9443469e73e62e1d9f2778%2F1437029880df4d3ca60e17eeef837ab6?format=webp&width=800";

export default function Settings() {
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
              className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              NFT Gallery
            </a>
            <a
              href="/settings"
              className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors font-semibold"
            >
              Settings
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2 font-display">
            Settings
          </h1>
          <p className="text-slate-600 dark:text-slate-300">
            Customize your SprintWise AI experience
          </p>
        </div>

        {/* Settings Sections */}
        <div className="space-y-6">
          {/* Appearance */}
          <div className="p-6 rounded-xl border border-slate-200/50 dark:border-slate-800/50 bg-white/50 dark:bg-slate-900/50 backdrop-blur">
            <div className="flex items-center gap-3 mb-6">
              <Moon className="w-5 h-5 text-slate-600 dark:text-slate-400" />
              <h2 className="text-lg font-bold text-slate-900 dark:text-white font-display">
                Appearance
              </h2>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-600 dark:text-slate-300">Dark Mode</span>
              <div className="w-12 h-6 rounded-full bg-slate-300 dark:bg-purple-600 relative cursor-pointer transition-colors">
                <div className="absolute top-1 right-1 w-4 h-4 rounded-full bg-white transition-transform" />
              </div>
            </div>
          </div>

          {/* Notifications */}
          <div className="p-6 rounded-xl border border-slate-200/50 dark:border-slate-800/50 bg-white/50 dark:bg-slate-900/50 backdrop-blur">
            <div className="flex items-center gap-3 mb-6">
              <Bell className="w-5 h-5 text-slate-600 dark:text-slate-400" />
              <h2 className="text-lg font-bold text-slate-900 dark:text-white font-display">
                Notifications
              </h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-slate-600 dark:text-slate-300">
                  Sprint Completion Alerts
                </span>
                <div className="w-12 h-6 rounded-full bg-purple-600 relative cursor-pointer">
                  <div className="absolute top-1 right-1 w-4 h-4 rounded-full bg-white" />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-600 dark:text-slate-300">
                  NFT Minting Notifications
                </span>
                <div className="w-12 h-6 rounded-full bg-purple-600 relative cursor-pointer">
                  <div className="absolute top-1 right-1 w-4 h-4 rounded-full bg-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Language */}
          <div className="p-6 rounded-xl border border-slate-200/50 dark:border-slate-800/50 bg-white/50 dark:bg-slate-900/50 backdrop-blur">
            <div className="flex items-center gap-3 mb-6">
              <Globe className="w-5 h-5 text-slate-600 dark:text-slate-400" />
              <h2 className="text-lg font-bold text-slate-900 dark:text-white font-display">
                Language
              </h2>
            </div>
            <select className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white">
              <option>English</option>
              <option>Indonesian</option>
              <option>Spanish</option>
              <option>French</option>
            </select>
          </div>

          {/* Wallet Connection */}
          <div className="p-6 rounded-xl border border-slate-200/50 dark:border-slate-800/50 bg-white/50 dark:bg-slate-900/50 backdrop-blur">
            <div className="flex items-center gap-3 mb-6">
              <SettingsIcon className="w-5 h-5 text-slate-600 dark:text-slate-400" />
              <h2 className="text-lg font-bold text-slate-900 dark:text-white font-display">
                Wallet Connection
              </h2>
            </div>
            <div className="p-4 rounded-lg bg-slate-100/50 dark:bg-slate-800/50 mb-4">
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Connected Wallet: <span className="font-semibold">0x1234...5678</span>
              </p>
            </div>
            <button className="px-4 py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
              Disconnect Wallet
            </button>
          </div>
        </div>

        {/* Save Settings */}
        <div className="mt-12 flex justify-end gap-4">
          <button className="px-6 py-3 rounded-lg font-semibold text-slate-900 dark:text-white border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            Reset to Default
          </button>
          <button className="px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
            Save Changes
          </button>
        </div>
      </main>
    </div>
  );
}
