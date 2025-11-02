import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function SecondPage() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Welcome to the Second Page 🎉</h1>
      <p>This is another React route inside your Electron app.</p>
      <Button className="mt-4 bg-red-500" onClick={() => navigate("/")}>
        Go to Home Page ➡️
      </Button>
    </div>
  );
}
