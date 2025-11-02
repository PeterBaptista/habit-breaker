import { useNavigate } from "react-router-dom";
import "./styles/style.css";
import { Button } from "@/components/ui/button";

export function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
        <h1 className="text-4xl font-bold mb-4">Habit Breaker</h1>
        <Button>Click Me</Button>
        <Button onClick={() => navigate("/second")}>
          Go to Second Page ➡️
        </Button>
      </div>
    </>
  );
}
