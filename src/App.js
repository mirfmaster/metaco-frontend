import "./App.css";
import { Navbar } from "./components";
import { Home } from "./pages";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leaderboard" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
