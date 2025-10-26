import { RequestHandler } from "express";

interface Sprint {
  id: number;
  name: string;
  points: number;
  completed: number;
  duration: number;
  teamSize: number;
  startDate: string;
  velocity?: number;
}

interface UserStory {
  id: number;
  title: string;
  points: number;
  status: "todo" | "in-progress" | "completed";
  assignee: string;
  updatedAt?: string;
}

export interface RealtimeDataResponse {
  sprints: Sprint[];
  userStories: UserStory[];
  stats: {
    avgVelocity: number;
    completedPoints: number;
    totalTeamMembers: number;
    completedStories: number;
  };
}

// Function to generate dynamic data based on time
function getRealtimeData(): RealtimeDataResponse {
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();

  // Create variation in data based on current time
  const timeVariation = (hour * 3600 + minute * 60 + second) % 100;

  const sprints: Sprint[] = [
    {
      id: 1,
      name: "Sprint 1",
      points: 42,
      completed: 42,
      duration: 14,
      teamSize: 6,
      startDate: "2025-01-01",
      velocity: 42,
    },
    {
      id: 2,
      name: "Sprint 2",
      points: 45,
      completed: 45,
      duration: 14,
      teamSize: 6,
      startDate: "2025-01-15",
      velocity: 45,
    },
    {
      id: 3,
      name: "Sprint 3",
      points: 48,
      completed: Math.min(35 + Math.floor(timeVariation / 20), 48),
      duration: 14,
      teamSize: 6,
      startDate: "2025-01-29",
      velocity: 48,
    },
    {
      id: 4,
      name: "Sprint 4 (Upcoming)",
      points: 50,
      completed: Math.floor(timeVariation / 10),
      duration: 14,
      teamSize: 6,
      startDate: "2025-02-12",
      velocity: 50,
    },
  ];

  const userStories: UserStory[] = [
    {
      id: 1,
      title: "Implement AI capacity prediction",
      points: 13,
      status: "completed",
      assignee: "Ahmad",
      updatedAt: new Date(Date.now() - 3600000).toISOString(),
    },
    {
      id: 2,
      title: "Integrate blockchain wallet",
      points: 21,
      status: "completed",
      assignee: "Team",
      updatedAt: new Date(Date.now() - 7200000).toISOString(),
    },
    {
      id: 3,
      title: "Create NFT gallery UI",
      points: 8,
      status: timeVariation > 50 ? "completed" : "in-progress",
      assignee: "Ahmad",
      updatedAt: new Date().toISOString(),
    },
    {
      id: 4,
      title: "Setup Gemini API",
      points: 5,
      status: "completed",
      assignee: "Ahmad",
      updatedAt: new Date(Date.now() - 14400000).toISOString(),
    },
    {
      id: 5,
      title: "Build real-time dashboard",
      points: 13,
      status: timeVariation > 30 ? "in-progress" : "todo",
      assignee: "Team",
      updatedAt: new Date().toISOString(),
    },
    {
      id: 6,
      title: "Implement dark theme",
      points: 5,
      status: "completed",
      assignee: "Ahmad",
      updatedAt: new Date(Date.now() - 1800000).toISOString(),
    },
  ];

  // Calculate stats
  const historicalVelocity = sprints.map((s) => s.velocity || s.completed);
  const avgVelocity = parseFloat(
    (historicalVelocity.reduce((a, b) => a + b, 0) / historicalVelocity.length).toFixed(1),
  );
  const completedPoints = userStories
    .filter((s) => s.status === "completed")
    .reduce((sum, s) => sum + s.points, 0);
  const completedStories = userStories.filter(
    (s) => s.status === "completed",
  ).length;

  return {
    sprints,
    userStories,
    stats: {
      avgVelocity,
      completedPoints,
      totalTeamMembers: 6,
      completedStories,
    },
  };
}

export const handleRealtimeData: RequestHandler = (_req, res) => {
  const data = getRealtimeData();
  res.json(data);
};
