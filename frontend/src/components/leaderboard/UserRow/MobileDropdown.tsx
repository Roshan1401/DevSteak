import { Link } from "react-router-dom";
import { Flame } from "lucide-react";
import { GithubIcon } from "../../../assets/Icons";
import { getLanguageColor, getLanguageIcon } from "../../../utils/languageConfig";
import type { LeaderboardUser } from "../../../types/types";

interface MobileDropdownProps {
  user: LeaderboardUser;
  isOpen: boolean;
}

function MobileDropdown({ user, isOpen }: MobileDropdownProps) {
  return (
    <div
      className={`flex flex-col overflow-hidden border-t border-(--color-border) transition-all duration-500 ease-in-out md:hidden ${
        isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      {user.github_url && (
        <Link
          to={`https://github.com/${user.github_url}`}
          className="flex items-center gap-2 px-4 py-3"
        >
          <GithubIcon className="h-4 w-4 text-(--color-text-secondary)" />
          <span className="max-w-32 truncate text-sm text-(--color-text-secondary)">
            {user.github_url}
          </span>
        </Link>
      )}
      <div className="flex items-center gap-2 border-t border-(--color-border) px-4 py-2">
        <Flame size={16} className="fill-orange-500 text-orange-500" />
        <span className="text-sm font-medium text-(--color-text-secondary)">
          {user.streak}d streak
        </span>
      </div>
      <div className="border-t border-(--color-border) px-4 py-2">
        <div className="mb-2 text-sm font-medium text-(--color-text-secondary)">
          Top Languages
        </div>
        <div className="flex flex-wrap gap-2">
          {user.byLanguage.slice(0, 4).map((lang, i) => (
            <div className="group relative flex" key={i}>
              <span
                className="flex h-8 w-8 items-center justify-center rounded-md p-1.5 text-2xl font-medium transition-all duration-200 group-hover:scale-110"
                style={{
                  backgroundColor: `${getLanguageColor(lang.language)}20`,
                  color: getLanguageColor(lang.language),
                  border: `0.5px solid ${getLanguageColor(lang.language)}`,
                }}
              >
                {getLanguageIcon(lang.language)}
              </span>
              <span className="absolute -mt-10 hidden rounded-md bg-(--color-bg-primary) px-2 py-1 text-xs font-medium text-(--color-text-primary) shadow-lg group-hover:block">
                {lang.language}
              </span>
            </div>
          ))}
          {user.byLanguage.length > 4 && (
            <span className="flex h-8 w-8 items-center justify-center rounded-md border border-(--color-border) bg-(--color-bg-secondary) text-xs font-semibold text-(--color-text-secondary)">
              +{user.byLanguage.length - 4}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default MobileDropdown;
