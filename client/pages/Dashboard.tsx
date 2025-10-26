import { useState, useEffect } from "react";
import {
  BarChart3,
  TrendingUp,
  Users,
  Trophy,
  Plus,
  Sparkles,
  Loader,
} from "lucide-react";
import {
  predictSprintCapacity,
  generateTaskSuggestions,
  getTeamInsights,
} from "@/lib/gemini";
import { ThemeToggle } from "@/components/theme-toggle";

const LOGO_URL =
  "https://cdn.builder.io/api/v1/image/assets%2F5b28f6891f9443469e73e62e1d9f2778%2F1437029880df4d3ca60e17eeef837ab6?format=webp&width=800";

interface Sprint {
  id: number;
  name: string;
  points: number;
  completed: number;
  duration: number;
  teamSize: number;
  startDate: string;
}

interface UserStory {
  id: number;
  title: string;
  points: number;
  status: "todo" | "in-progress" | "completed";
  assignee: string;
}

export default function Dashboard() {
  const [sprints, setSprints] = useState<Sprint[]>([
    {
      id: 1,
      name: "Sprint 1",
      points: 42,
      completed: 42,
      duration: 14,
      teamSize: 6,
      startDate: "2025-01-01",
    },
    {
      id: 2,
      name: "Sprint 2",
      points: 45,
      completed: 45,
      duration: 14,
      teamSize: 6,
      startDate: "2025-01-15",
    },
    {
      id: 3,
      name: "Sprint 3",
      points: 48,
      completed: 35,
      duration: 14,
      teamSize: 6,
      startDate: "2025-01-29",
    },
  ]);

  const [userStories, setUserStories] = useState<UserStory[]>([
    {
      id: 1,
      title: "Implement AI capacity prediction",
      points: 13,
      status: "completed",
      assignee: "Ahmad",
    },
    {
      id: 2,
      title: "Integrate blockchain wallet",
      points: 21,
      status: "completed",
      assignee: "Team",
    },
    {
      id: 3,
      title: "Create NFT gallery UI",
      points: 8,
      status: "in-progress",
      assignee: "Ahmad",
    },
    {
      id: 4,
      title: "Setup Gemini API",
      points: 5,
      status: "completed",
      assignee: "Ahmad",
    },
  ]);

  const [capacityPrediction, setCapacityPrediction] = useState<string>("");
  const [taskSuggestions, setTaskSuggestions] = useState<string>("");
  const [teamInsights, setTeamInsights] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("stories");
  const [newStoryTitle, setNewStoryTitle] = useState("");
  const [newStoryPoints, setNewStoryPoints] = useState("");

  const historicalVelocity = sprints.map((s) => s.completed);
  const avgVelocity = (
    historicalVelocity.reduce((a, b) => a + b, 0) / historicalVelocity.length
  ).toFixed(1);
  const completedPoints =
    userStories.filter((s) => s.status === "completed").length * 5;

  const handlePredictCapacity = async () => {
    setIsLoading(true);
    try {
      const prediction = await predictSprintCapacity(
        historicalVelocity,
        6,
        "Medium - Web3 Integration",
      );
      setCapacityPrediction(prediction);
    } catch (error) {
      setCapacityPrediction("Error generating prediction. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGetSuggestions = async () => {
    setIsLoading(true);
    try {
      const suggestions = await generateTaskSuggestions(
        "Complete MorphSprint AI MVP",
        "Full-stack development, blockchain, AI/ML",
      );
      setTaskSuggestions(suggestions);
    } catch (error) {
      setTaskSuggestions("Error generating suggestions. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGetInsights = async () => {
    setIsLoading(true);
    try {
      const insights = await getTeamInsights({
        velocity: historicalVelocity,
        completionRate: 95,
        avgCycleTime: 3,
      });
      setTeamInsights(insights);
    } catch (error) {
      setTeamInsights("Error generating insights. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddStory = () => {
    if (newStoryTitle.trim() && newStoryPoints.trim()) {
      const newStory: UserStory = {
        id: userStories.length + 1,
        title: newStoryTitle,
        points: parseInt(newStoryPoints),
        status: "todo",
        assignee: "Unassigned",
      };
      setUserStories([...userStories, newStory]);
      setNewStoryTitle("");
      setNewStoryPoints("");
    }
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
            <ThemeToggle />
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
            Manage your sprints with AI-powered insights and blockchain
            verification
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
              50
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
              {avgVelocity}
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
              {userStories.filter((s) => s.status === "completed").length}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">
              NFTs minted
            </p>
          </div>
        </div>

        {/* AI Predictions Section */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="p-8 rounded-xl border border-slate-200/50 dark:border-slate-800/50 bg-white/50 dark:bg-slate-900/50 backdrop-blur">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-purple-500" />
              <h2 className="text-xl font-bold text-slate-900 dark:text-white font-display">
                Capacity Prediction
              </h2>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
              Get AI-powered predictions for your next sprint capacity based on
              historical data.
            </p>
            <button
              onClick={handlePredictCapacity}
              disabled={isLoading}
              className="w-full px-4 py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 transition-all duration-300 flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <Loader className="w-4 h-4 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  Get Prediction
                </>
              )}
            </button>
            {capacityPrediction && (
              <div className="mt-6 p-4 rounded-lg bg-slate-100 dark:bg-slate-800">
                <p className="text-sm text-slate-700 dark:text-slate-300 whitespace-pre-wrap">
                  {capacityPrediction}
                </p>
              </div>
            )}
          </div>

          <div className="p-8 rounded-xl border border-slate-200/50 dark:border-slate-800/50 bg-white/50 dark:bg-slate-900/50 backdrop-blur">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-blue-500" />
              <h2 className="text-xl font-bold text-slate-900 dark:text-white font-display">
                Team Insights
              </h2>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
              Receive AI-generated insights on team performance and productivity
              improvements.
            </p>
            <button
              onClick={handleGetInsights}
              disabled={isLoading}
              className="w-full px-4 py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 transition-all duration-300 flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <Loader className="w-4 h-4 animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  Get Insights
                </>
              )}
            </button>
            {teamInsights && (
              <div className="mt-6 p-4 rounded-lg bg-slate-100 dark:bg-slate-800">
                <p className="text-sm text-slate-700 dark:text-slate-300 whitespace-pre-wrap">
                  {teamInsights}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* User Stories Section */}
        <div className="p-8 rounded-xl border border-slate-200/50 dark:border-slate-800/50 bg-white/50 dark:bg-slate-900/50 backdrop-blur mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white font-display">
              User Stories
            </h2>
            <button
              onClick={handleGetSuggestions}
              disabled={isLoading}
              className="px-4 py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 transition-all duration-300 flex items-center gap-2"
            >
              {isLoading ? (
                <>
                  <Loader className="w-4 h-4 animate-spin" />
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  Get AI Suggestions
                </>
              )}
            </button>
          </div>

          {/* Add Story Form */}
          <div className="mb-8 p-4 rounded-lg bg-slate-100 dark:bg-slate-800">
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                placeholder="User story title..."
                value={newStoryTitle}
                onChange={(e) => setNewStoryTitle(e.target.value)}
                className="flex-1 px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="number"
                placeholder="Points"
                value={newStoryPoints}
                onChange={(e) => setNewStoryPoints(e.target.value)}
                className="w-20 px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleAddStory}
                className="px-4 py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 transition-all duration-300 flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                Add
              </button>
            </div>
          </div>

          {/* Stories List */}
          <div className="space-y-3">
            {userStories.map((story) => (
              <div
                key={story.id}
                className="flex items-center justify-between p-4 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
              >
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    {story.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                    {story.points} points • Assigned to {story.assignee}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      story.status === "completed"
                        ? "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200"
                        : story.status === "in-progress"
                          ? "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
                          : "bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-300"
                    }`}
                  >
                    {story.status === "in-progress"
                      ? "In Progress"
                      : story.status.charAt(0).toUpperCase() +
                        story.status.slice(1)}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* AI Suggestions */}
          {taskSuggestions && (
            <div className="mt-8 p-6 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-800">
              <h3 className="font-bold text-slate-900 dark:text-white mb-4">
                AI-Generated Task Suggestions
              </h3>
              <p className="text-sm text-slate-700 dark:text-slate-300 whitespace-pre-wrap">
                {taskSuggestions}
              </p>
            </div>
          )}
        </div>

        {/* Recent Sprints */}
        <div className="p-8 rounded-xl border border-slate-200/50 dark:border-slate-800/50 bg-white/50 dark:bg-slate-900/50 backdrop-blur">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 font-display">
            Recent Sprints
          </h2>
          <div className="space-y-4">
            {sprints.map((sprint) => (
              <div
                key={sprint.id}
                className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-slate-900 dark:text-white">
                    {sprint.name}
                  </h3>
                  <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                    {sprint.completed}/{sprint.points} completed
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
                  <span>{sprint.duration} days</span>
                  <span>{sprint.teamSize} members</span>
                  <span>{sprint.startDate}</span>
                </div>
                <div className="mt-2 w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"
                    style={{
                      width: `${(sprint.completed / sprint.points) * 100}%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
