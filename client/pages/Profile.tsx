import { useEffect, useState } from "react";
import { LogOut, Settings, Copy, Check } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

const LOGO_URL =
  "https://cdn.builder.io/api/v1/image/assets%2F5b28f6891f9443469e73e62e1d9f2778%2F1437029880df4d3ca60e17eeef837ab6?format=webp&width=800";

export default function Profile() {
  const [user, setUser] = useState<any>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Load user data from localStorage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      // Default user profile
      const defaultUser = {
        name: "Ahmad Fashich",
        email: "ahmad@morphsprint.ai",
        walletAddress: "0x1234567890123456789012345678901234567890",
        joinDate: new Date().toLocaleDateString(),
        avatar: LOGO_URL,
        bio: "AI Sprint Planning Enthusiast",
        sprints: 12,
        completedTasks: 47,
        teamMembersSince: "2025-01-01",
      };
      setUser(defaultUser);
      localStorage.setItem("user", JSON.stringify(defaultUser));
    }
  }, []);

  const handleCopyAddress = () => {
    if (user?.walletAddress || user?.address) {
      const address = user.walletAddress || user.address;
      navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  const handleGoToDashboard = () => {
    window.location.href = "/dashboard";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-950 dark:via-blue-950 dark:to-purple-950">
      {/* Navigation */}
      <nav className="border-b border-slate-200/50 dark:border-slate-800/50 backdrop-blur-md bg-white/30 dark:bg-slate-950/30 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={LOGO_URL}
              alt="MorphSprint AI"
              className="h-10 w-10 rounded-lg"
            />
            <span className="text-xl font-bold text-slate-900 dark:text-white font-display">
              MorphSprint AI
            </span>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={handleGoToDashboard}
              className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors font-semibold"
            >
              Dashboard
            </button>
            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 transition-all duration-300 flex items-center gap-2"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Profile Header */}
        <div className="mb-12 p-8 rounded-xl border border-slate-200/50 dark:border-slate-800/50 bg-white/50 dark:bg-slate-900/50 backdrop-blur">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-2xl font-bold">
                {user?.name?.charAt(0) || "A"}
              </div>
              <div>
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                  {user?.name || "User"}
                </h1>
                <p className="text-slate-600 dark:text-slate-300 mb-2">
                  {user?.email}
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {user?.bio}
                </p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 transition-all duration-300 flex items-center gap-2"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-xl border border-slate-200/50 dark:border-slate-800/50 bg-white/50 dark:bg-slate-900/50 backdrop-blur">
            <h3 className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-2">
              Sprints Completed
            </h3>
            <p className="text-3xl font-bold text-slate-900 dark:text-white font-display">
              {user?.sprints || 0}
            </p>
          </div>

          <div className="p-6 rounded-xl border border-slate-200/50 dark:border-slate-800/50 bg-white/50 dark:bg-slate-900/50 backdrop-blur">
            <h3 className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-2">
              Tasks Completed
            </h3>
            <p className="text-3xl font-bold text-slate-900 dark:text-white font-display">
              {user?.completedTasks || 0}
            </p>
          </div>

          <div className="p-6 rounded-xl border border-slate-200/50 dark:border-slate-800/50 bg-white/50 dark:bg-slate-900/50 backdrop-blur">
            <h3 className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-2">
              Member Since
            </h3>
            <p className="text-sm font-semibold text-slate-900 dark:text-white">
              {user?.joinDate}
            </p>
          </div>
        </div>

        {/* Wallet Section */}
        {(user?.walletAddress || user?.address) && (
          <div className="mb-12 p-8 rounded-xl border border-slate-200/50 dark:border-slate-800/50 bg-white/50 dark:bg-slate-900/50 backdrop-blur">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 font-display">
              Wallet Information
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  Connected Wallet Address
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={user.walletAddress || user.address || ""}
                    disabled
                    className="flex-1 px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white"
                  />
                  <button
                    onClick={handleCopyAddress}
                    className="px-4 py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center gap-2"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4" />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        Copy
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Settings Section */}
        <div className="p-8 rounded-xl border border-slate-200/50 dark:border-slate-800/50 bg-white/50 dark:bg-slate-900/50 backdrop-blur">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 font-display flex items-center gap-2">
            <Settings className="w-6 h-6" />
            Account Settings
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                Display Name
              </label>
              <input
                type="text"
                defaultValue={user?.name}
                disabled
                className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                Email
              </label>
              <input
                type="email"
                defaultValue={user?.email}
                disabled
                className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                Bio
              </label>
              <textarea
                defaultValue={user?.bio}
                disabled
                className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white h-24"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
