import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Flame } from "lucide-react";
import { formatTime } from "../../../utils/formatTime";
import type { LeaderboardUser } from "../../../types/types";
import RankBadge from "./RankBadge";
import UserInfo from "./UserInfo";
import LanguageIcons from "./LanguageIcons";
import MobileDropdown from "./MobileDropdown";

interface UserRowProps {
  user: LeaderboardUser;
  index: number;
  isCurrentUser: boolean;
  openDropdown?: number | null;
  setOpenDropdown?: (index: number | null) => void;
}

function UserRow({
  user,
  index,
  isCurrentUser,
  openDropdown,
  setOpenDropdown,
}: UserRowProps) {
  return (
    <>
      <div
        className={`relative mx-2 my-3 rounded-xl border border-(--color-border) md:m-0 md:rounded-none md:border-0 md:border-t`}
      >
        <div
          className={`flex cursor-pointer items-center gap-2 p-3 transition-colors sm:px-3.5 sm:py-4 md:grid md:grid-cols-12 md:gap-4 md:rounded-none md:px-8 md:py-6 lg:px-4 lg:py-5 xl:px-8 ${
            isCurrentUser
              ? "rounded-xl border-l-4 border-l-orange-500 bg-orange-500/5 dark:bg-orange-500/10"
              : "hover:bg-(--color-bg-secondary)"
          }`}
        >
          <RankBadge rank={user.rank} />

          <div className="flex min-w-0 flex-1 items-center justify-between gap-2 md:contents">
            <div className="col-span-4 flex min-w-0 items-center gap-3">
              <div className="relative shrink-0 rounded-full">
                <img
                  src={user?.avatar_url}
                  className="size-8 rounded-full object-cover md:size-11"
                  alt="Profile"
                />
                {user?.is_extension_active && (
                  <span className="absolute right-0 bottom-0 size-2 rounded-full bg-emerald-400 ring-2 ring-white md:size-2.5 dark:ring-neutral-900" />
                )}
              </div>
              <UserInfo user={user} isCurrentUser={isCurrentUser} />
            </div>

            <div
              className={`shrink-0 font-mono text-xs font-medium tracking-wide sm:text-sm md:col-span-2 md:text-center md:text-base md:font-semibold ${
                isCurrentUser
                  ? "text-orange-500 md:rounded-lg md:bg-orange-500/10 md:py-1"
                  : "text-(--color-text-primary) md:rounded-lg md:py-1"
              }`}
            >
              {formatTime(Math.floor(user.timeSpent))}
            </div>

            <div className="col-span-2 hidden items-center justify-center gap-1 md:flex">
              <Flame size={20} className="fill-orange-500 text-orange-500" />
              <span className="text-sm font-medium text-(--color-text-primary)">
                {user.streak}d
              </span>
            </div>
          </div>

          <button
            className="shrink-0 md:hidden"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setOpenDropdown &&
                setOpenDropdown(index === openDropdown ? null : index);
            }}
          >
            {index === openDropdown ? (
              <IoIosArrowUp className="h-5 w-5 text-(--color-text-secondary)" />
            ) : (
              <IoIosArrowDown className="h-5 w-5 text-(--color-text-secondary)" />
            )}
          </button>

          <div className="hidden justify-end gap-2 md:col-span-3 md:flex">
            <LanguageIcons byLanguage={user.byLanguage} />
          </div>
        </div>
        <MobileDropdown user={user} isOpen={openDropdown === index} />
      </div>
    </>
  );
}

export default UserRow;
