import "./App.css";
import { Navbar } from "./components";
import { Explorer, Home } from "./pages";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leaderboard" element={<Home />} />
        <Route path="/explorer" element={<Explorer />} />
      </Routes>
    </div>
  );
}

export default App;
