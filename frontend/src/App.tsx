import "./App.css";
import { useState } from "react";
import Navbar from "./components/layout/Navbar";
import Leftbar from "./components/layout/Leftbar";
import Leaderboard from "./pages/Leaderboard";

function App() {
  const [theme, setTheme] = useState(false);

  function toggleTheme() {
    setTheme(!theme);
  }
  return (
    <div
      className={`min-h-screen w-screen  bg-(--color-bg-primary) ${theme ? "dark" : ""}`}
    >
      <Navbar onThemeToggle={toggleTheme} isDarkTheme={theme} />
      <div className="flex ">
        <Leftbar />
        <div className="w-full">
          <Leaderboard />
        </div>
      </div>
    </div>
  );
}

export default App;
