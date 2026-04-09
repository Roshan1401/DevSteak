import "./App.css";
import { useState } from "react";
import Leftbar from "./components/layout/Leftbar";
import Rightbar from "./components/layout/Rightbar";
import Leaderboard from "./pages/Leaderboard";

function App() {
  const [theme, setTheme] = useState(false);

  function toggleTheme() {
    setTheme(!theme);
  }
  return (
    <div
      className={`min-h-screen flex w-screen  bg-(--color-bg-primary) ${theme ? "dark" : ""}`}
    >
      <Leftbar onThemeToggle={toggleTheme} isDarkTheme={theme} />
      <div className="flex  ">
        <div className="w-full">
          <Leaderboard />
        </div>
        <Rightbar />
      </div>
    </div>
  );
}

export default App;
