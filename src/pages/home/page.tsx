import { useNavigate } from "react-router-dom";
import "./styles/style.css";

export function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
        <h1 className="text-4xl font-bold mb-4">Habit Breaker</h1>
        <button className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-xl transition-all">
          Click Me
        </button>
        <button onClick={() => navigate("/second")}>
          Go to Second Page ➡️
        </button>
      </div>
    </>
  );
}
