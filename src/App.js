import "./App.css";
import { Navbar } from "./components";
import { Explorer, Home, Profile } from "./pages";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leaderboard" element={<Home />} />
        <Route path="/explorer" element={<Explorer />} />
        <Route path="/profile/:profileId" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
