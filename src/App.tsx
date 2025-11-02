import { Route, Routes } from "react-router-dom";
import Home from "./pages/landing/home/page";
import { SecondPage } from "./pages/landing/second/page";
import AppLayout from "./pages/app/layout";
import OnboardingPage from "./pages/landing/onboarding/page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/habits/create"
        element={
          <AppLayout>
            <SecondPage />
          </AppLayout>
        }
      />
      <Route path="/onboarding" element={<OnboardingPage />} />
    </Routes>
  );
}

export default App;
