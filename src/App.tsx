import { Route, Routes } from "react-router-dom";
import Home from "./pages/landing/home/page";
import { SecondPage } from "./pages/landing/second/page";
import AppLayout from "./pages/app/layout";

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
    </Routes>
  );
}

export default App;
