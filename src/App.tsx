import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/home/page";
import { SecondPage } from "./pages/second/page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/second" element={<SecondPage />} />
    </Routes>
  );
}

export default App;
