import { useState } from "react";
import { Settings as SettingsIcon, Moon, Globe, Bell, Save, RotateCcw } from "lucide-react";

const LOGO_URL = "https://cdn.builder.io/api/v1/image/assets%2F5b28f6891f9443469e73e62e1d9f2778%2F1437029880df4d3ca60e17eeef837ab6?format=webp&width=800";

export default function Settings() {
  const [settings, setSettings] = useState({
    theme: "dark",
    language: "english",
    notifications: {
      sprintCompletion: true,
      nftMinting: true,
      teamActivity: true,
      aiSuggestions: true,
    },
    wallet: {
      connected: true,
      address: "0x1234567890abcdef1234567890abcdef12345678",
      network: "ethereum",
    },
    privacy: {
      profilePublic: true,
      showContributions: true,
      allowDataCollection: true,
    },
  });

  const [saved, setSaved] = useState(false);

  const handleThemeToggle = () => {
    setSettings({
      ...settings,
      theme: settings.theme === "dark" ? "light" : "dark",
    });
    setSaved(false);
  };

  const handleLanguageChange = (value: string) => {
    setSettings({
      ...settings,
      language: value,
    });
    setSaved(false);
  };

  const handleNotificationToggle = (key: keyof typeof settings.notifications) => {
    setSettings({
      ...settings,
      notifications: {
        ...settings.notifications,
        [key]: !settings.notifications[key],
      },
    });
    setSaved(false);
  };

  const handlePrivacyToggle = (key: keyof typeof settings.privacy) => {
    setSettings({
      ...settings,
      privacy: {
        ...settings.privacy,
        [key]: !settings.privacy[key],
      },
    });
    setSaved(false);
  };

  const handleDisconnectWallet = () => {
    setSettings({
      ...settings,
      wallet: {
        ...settings.wallet,
        connected: false,
      },
    });
    setSaved(false);
  };

  const handleConnectWallet = () => {
    setSettings({
      ...settings,
      wallet: {
        ...settings.wallet,
        connected: true,
      },
    });
    setSaved(false);
  };

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleReset = () => {
    setSettings({
      theme: "dark",
      language: "english",
      notifications: {
        sprintCompletion: true,
        nftMinting: true,
        teamActivity: true,
        aiSuggestions: true,
      },
      wallet: {
        connected: true,
        address: "0x1234567890abcdef1234567890abcdef12345678",
        network: "ethereum",
      },
      privacy: {
        profilePublic: true,
        showContributions: true,
        allowDataCollection: true,
      },
    });
    setSaved(false);
  };

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
            Customize your MorphSprint AI experience
          </p>
        </div>

        {/* Success Message */}
        {saved && (
          <div className="mb-6 p-4 rounded-lg bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-800 text-green-800 dark:text-green-200">
            Settings saved successfully!
          </div>
        )}

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
              <span className="text-slate-600 dark:text-slate-300">
                Theme: <span className="font-semibold capitalize">{settings.theme}</span>
              </span>
              <button
                onClick={handleThemeToggle}
                className={`relative w-14 h-8 rounded-full transition-all duration-300 ${
                  settings.theme === "dark"
                    ? "bg-purple-600"
                    : "bg-slate-300"
                }`}
              >
                <div
                  className={`absolute top-1 w-6 h-6 rounded-full bg-white transition-transform duration-300 ${
                    settings.theme === "dark" ? "right-1" : "left-1"
                  }`}
                />
              </button>
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
            <select
              value={settings.language}
              onChange={(e) => handleLanguageChange(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="english">English</option>
              <option value="indonesian">Indonesian (Bahasa Indonesia)</option>
              <option value="spanish">Spanish (Español)</option>
              <option value="french">French (Français)</option>
              <option value="german">German (Deutsch)</option>
              <option value="mandarin">Mandarin (中文)</option>
            </select>
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
              {[
                {
                  key: "sprintCompletion" as const,
                  label: "Sprint Completion Alerts",
                  description: "Get notified when your sprint is completed",
                },
                {
                  key: "nftMinting" as const,
                  label: "NFT Minting Notifications",
                  description: "Receive alerts when NFTs are minted for achievements",
                },
                {
                  key: "teamActivity" as const,
                  label: "Team Activity Updates",
                  description: "Stay updated on team member activities and progress",
                },
                {
                  key: "aiSuggestions" as const,
                  label: "AI Suggestions",
                  description: "Get AI-powered recommendations for sprint planning",
                },
              ].map((item) => (
                <div key={item.key} className="flex items-start justify-between py-3 border-b border-slate-200 dark:border-slate-700 last:border-0">
                  <div className="flex-1">
                    <p className="font-semibold text-slate-900 dark:text-white">
                      {item.label}
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                      {item.description}
                    </p>
                  </div>
                  <button
                    onClick={() => handleNotificationToggle(item.key)}
                    className={`relative w-14 h-8 rounded-full transition-all duration-300 flex-shrink-0 ${
                      settings.notifications[item.key]
                        ? "bg-purple-600"
                        : "bg-slate-300"
                    }`}
                  >
                    <div
                      className={`absolute top-1 w-6 h-6 rounded-full bg-white transition-transform duration-300 ${
                        settings.notifications[item.key] ? "right-1" : "left-1"
                      }`}
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Wallet Connection */}
          <div className="p-6 rounded-xl border border-slate-200/50 dark:border-slate-800/50 bg-white/50 dark:bg-slate-900/50 backdrop-blur">
            <div className="flex items-center gap-3 mb-6">
              <SettingsIcon className="w-5 h-5 text-slate-600 dark:text-slate-400" />
              <h2 className="text-lg font-bold text-slate-900 dark:text-white font-display">
                Wallet Connection
              </h2>
            </div>
            {settings.wallet.connected ? (
              <>
                <div className="p-4 rounded-lg bg-slate-100/50 dark:bg-slate-800/50 mb-4">
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                    <span className="font-semibold">Connected Wallet:</span>
                  </p>
                  <code className="text-xs text-slate-600 dark:text-slate-400 break-all">
                    {settings.wallet.address}
                  </code>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                    <span className="font-semibold">Network:</span> {settings.wallet.network}
                  </p>
                </div>
                <button
                  onClick={handleDisconnectWallet}
                  className="px-4 py-2 rounded-lg font-semibold text-white bg-red-600 hover:bg-red-700 transition-all duration-300"
                >
                  Disconnect Wallet
                </button>
              </>
            ) : (
              <>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  No wallet connected. Connect your Web3 wallet to access all features.
                </p>
                <button
                  onClick={handleConnectWallet}
                  className="px-4 py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                >
                  Connect Wallet
                </button>
              </>
            )}
          </div>

          {/* Privacy */}
          <div className="p-6 rounded-xl border border-slate-200/50 dark:border-slate-800/50 bg-white/50 dark:bg-slate-900/50 backdrop-blur">
            <div className="flex items-center gap-3 mb-6">
              <SettingsIcon className="w-5 h-5 text-slate-600 dark:text-slate-400" />
              <h2 className="text-lg font-bold text-slate-900 dark:text-white font-display">
                Privacy & Data
              </h2>
            </div>
            <div className="space-y-4">
              {[
                {
                  key: "profilePublic" as const,
                  label: "Public Profile",
                  description: "Allow others to view your profile and achievements",
                },
                {
                  key: "showContributions" as const,
                  label: "Show Contributions",
                  description: "Display your contributions and sprint history publicly",
                },
                {
                  key: "allowDataCollection" as const,
                  label: "Analytics & Improvements",
                  description: "Help us improve by sharing usage analytics",
                },
              ].map((item) => (
                <div key={item.key} className="flex items-start justify-between py-3 border-b border-slate-200 dark:border-slate-700 last:border-0">
                  <div className="flex-1">
                    <p className="font-semibold text-slate-900 dark:text-white">
                      {item.label}
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                      {item.description}
                    </p>
                  </div>
                  <button
                    onClick={() => handlePrivacyToggle(item.key)}
                    className={`relative w-14 h-8 rounded-full transition-all duration-300 flex-shrink-0 ${
                      settings.privacy[item.key]
                        ? "bg-purple-600"
                        : "bg-slate-300"
                    }`}
                  >
                    <div
                      className={`absolute top-1 w-6 h-6 rounded-full bg-white transition-transform duration-300 ${
                        settings.privacy[item.key] ? "right-1" : "left-1"
                      }`}
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Save Settings */}
        <div className="mt-12 flex justify-end gap-4">
          <button
            onClick={handleReset}
            className="px-6 py-3 rounded-lg font-semibold text-slate-900 dark:text-white border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center gap-2"
          >
            <RotateCcw className="w-5 h-5" />
            Reset to Default
          </button>
          <button
            onClick={handleSave}
            className="px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center gap-2"
          >
            <Save className="w-5 h-5" />
            Save Changes
          </button>
        </div>
      </main>
    </div>
  );
}
