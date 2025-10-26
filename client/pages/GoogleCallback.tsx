import { useEffect, useState } from "react";
import { Loader } from "lucide-react";

export default function GoogleCallback() {
  const [status, setStatus] = useState("Processing login...");

  useEffect(() => {
    const handleCallback = async () => {
      try {
        // Get the authorization code from URL
        const params = new URLSearchParams(window.location.search);
        const code = params.get("code");
        const state = params.get("state");

        if (!code) {
          setStatus("Error: No authorization code received.");
          return;
        }

        // Exchange code for token on backend
        const response = await fetch("/api/auth/google", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ code, state }),
        });

        if (!response.ok) {
          throw new Error("Failed to authenticate with Google");
        }

        const data = await response.json();

        // Store user info
        localStorage.setItem(
          "user",
          JSON.stringify({
            email: data.email,
            name: data.name,
            picture: data.picture,
            loginMethod: "google",
            loginTime: new Date().toISOString(),
          }),
        );

        // Redirect to dashboard
        window.location.href = "/dashboard";
      } catch (error) {
        console.error("Google callback error:", error);
        setStatus("Authentication failed. Redirecting to login...");
        setTimeout(() => {
          window.location.href = "/login";
        }, 2000);
      }
    };

    handleCallback();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950 flex items-center justify-center">
      <div className="text-center">
        <Loader className="w-8 h-8 text-blue-400 animate-spin mx-auto mb-4" />
        <p className="text-slate-300">{status}</p>
      </div>
    </div>
  );
}
