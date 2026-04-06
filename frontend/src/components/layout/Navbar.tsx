import { useState } from "react";

interface Props {
  onThemeToggle: () => void;
  isDarkTheme?: boolean;
}

const navItems = ["Leaderboard", "Community", "Get Started"];

function Navbar({ onThemeToggle, isDarkTheme = false }: Props) {
  const [activeItem, setActiveItem] = useState("Leaderboard");

  return (
    <aside className="w-full border-b border-(--color-border)  px-4 py-3">
      <div className="mx-auto flex w-full max-w-8xl items-center justify-between gap-4">
        <div className="flex items-center gap-3 px-2">
          <span className="h-3 w-3 rounded-full bg-orange-500" />
          <h1 className="text-xl font-bold tracking-tight text-(--color-text-primary)">
            Devsteak
          </h1>
        </div>

        <nav className="flex items-center gap-2">
          {navItems.map((item) => {
            const isActive = activeItem === item;

            return (
              <button
                key={item}
                type="button"
                onClick={() => setActiveItem(item)}
                className={[
                  "rounded-md border-b-2 cursor-pointer px-3 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "border-orange-500 bg-orange-500/20 text-(--color-text-primary)"
                    : "border-transparent text-(--color-text-secondary) hover:bg-orange-500/15 hover:text-(--color-text-primary)",
                ].join(" ")}
              >
                {item}
              </button>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onThemeToggle}
            className="rounded-md p-2 cursor-pointer text-orange-500 transition-colors hover:bg-orange-500/10"
            aria-label="Toggle theme"
          >
            {isDarkTheme ? (
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              </svg>
            ) : (
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 2a1 1 0 011 1v3a1 1 0 11-2 0V3a1 1 0 011-1zM12 18a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zM4.22 4.22a1 1 0 011.414 0l2.121 2.121a1 1 0 11-1.414 1.414L4.22 5.636a1 1 0 010-1.414zM16.243 16.243a1 1 0 011.414 0l2.121 2.121a1 1 0 11-1.414 1.414l-2.121-2.121a1 1 0 010-1.414zM2 12a1 1 0 011-1h3a1 1 0 110 2H3a1 1 0 01-1-1zM18 12a1 1 0 011-1h3a1 1 0 110 2h-3a1 1 0 01-1-1zM4.22 19.78a1 1 0 011.414-1.414l2.121 2.121a1 1 0 11-1.414 1.414L4.22 19.78zM16.243 7.757a1 1 0 011.414-1.414l2.121 2.121a1 1 0 11-1.414 1.414l-2.121-2.121zM12 7a5 5 0 100 10 5 5 0 000-10z" />
              </svg>
            )}
          </button>
          <button
            type="button"
            className="rounded-md cursor-pointer border border-(--color-border) bg-(--color-bg-primary) shadow-2xl px-3 py-2 text-sm font-semibold text-orange-500  transition-colors hover:border-orange-500 hover:bg-orange-500/10"
          >
            Sign In
          </button>
        </div>
      </div>
    </aside>
  );
}

export default Navbar;
