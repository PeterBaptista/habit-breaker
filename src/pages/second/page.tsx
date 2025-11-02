import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/providers/theme-provider";

export function SecondPage() {
  const navigate = useNavigate();

  const { theme, setTheme } = useTheme();

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Welcome to the Second Page 🎉</h1>
      <p>This is another React route inside your Electron app.</p>
      <Button className="mt-4 bg-red-500" onClick={() => navigate("/")}>
        Go to Home Page ➡️
      </Button>
      <Button onClick={() => setTheme("dark")}>Dark</Button>
      <Button onClick={() => setTheme("light")}>Light</Button>
    </div>
  );
}
