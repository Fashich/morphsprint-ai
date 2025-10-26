const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const API_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent";

interface GeminiRequest {
  contents: Array<{
    parts: Array<{
      text: string;
    }>;
  }>;
}

interface GeminiResponse {
  candidates: Array<{
    content: {
      parts: Array<{
        text: string;
      }>;
    };
  }>;
}

export async function callGeminiAPI(prompt: string): Promise<string> {
  try {
    const request: GeminiRequest = {
      contents: [
        {
          parts: [
            {
              text: prompt,
            },
          ],
        },
      ],
    };

    const response = await fetch(`${API_URL}?key=${API_KEY}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    });

    let data;
    try {
      data = await response.json();
    } catch (parseError) {
      console.error("Failed to parse response as JSON", {
        status: response.status,
        statusText: response.statusText,
        error: parseError,
      });
      throw new Error(`Failed to parse API response`);
    }

    if (!response.ok) {
      console.error("Gemini API error response:", {
        status: response.status,
        statusText: response.statusText,
        body: data,
      });
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }

    return (
      data.candidates[0]?.content.parts[0]?.text || "No response generated"
    );
  } catch (error) {
    console.error("Gemini API error:", error);
    throw error;
  }
}

export async function predictSprintCapacity(
  historicalVelocity: number[],
  teamSize: number,
  complexity: string,
): Promise<string> {
  const avgVelocity =
    historicalVelocity.reduce((a, b) => a + b, 0) / historicalVelocity.length;
  const prompt = `As an Agile sprint planning expert, analyze the following team metrics and provide a sprint capacity prediction:

Historical Velocity (last 5 sprints): ${historicalVelocity.join(", ")} story points
Average Velocity: ${avgVelocity.toFixed(1)} points
Team Size: ${teamSize} members
Project Complexity: ${complexity}

Provide:
1. Predicted capacity for next sprint (single number)
2. Confidence level (%)
3. Brief explanation of factors affecting the prediction
4. One recommendation to improve team velocity

Format your response in a structured, professional way.`;

  return callGeminiAPI(prompt);
}

export async function generateTaskSuggestions(
  sprintGoal: string,
  teamExpertise: string,
): Promise<string> {
  const prompt = `As an Agile project manager, suggest 5 user stories for a sprint with the following context:

Sprint Goal: ${sprintGoal}
Team Expertise: ${teamExpertise}

For each suggestion, provide:
- User story title
- Brief description
- Estimated story points
- Priority (High/Medium/Low)
- Why it aligns with the sprint goal

Format as a clear, organized list.`;

  return callGeminiAPI(prompt);
}

export async function getTeamInsights(teamData: {
  velocity: number[];
  completionRate: number;
  avgCycleTime: number;
}): Promise<string> {
  const prompt = `Analyze the following team performance metrics and provide actionable insights:

Recent Sprint Velocities: ${teamData.velocity.join(", ")} points
Completion Rate: ${teamData.completionRate}%
Average Cycle Time: ${teamData.avgCycleTime} days

Provide:
1. Team performance assessment
2. Key strengths
3. Areas for improvement
4. 3 specific recommendations to increase productivity

Keep the response professional and actionable.`;

  return callGeminiAPI(prompt);
}
