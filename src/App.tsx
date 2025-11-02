import { Route, Routes } from "react-router-dom";
import CreateHabitPage from "./pages/app/create/habits/page";
import AppLayout from "./pages/app/layout";
import Home from "./pages/landing/home/page";
import OnboardingPage from "./pages/landing/onboarding/page";
import HabitTracker from "./pages/app/habits/page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/habits"
        element={
          <AppLayout>
            <HabitTracker />
          </AppLayout>
        }
      />
      <Route
        path="/habits/create"
        element={
          <AppLayout>
            <CreateHabitPage />
          </AppLayout>
        }
      />
      <Route path="/onboarding" element={<OnboardingPage />} />
    </Routes>
  );
}

export default App;
