import { Link } from "react-router-dom";
import { GithubIcon } from "../../../assets/Icons";
import { safePolygon } from "@floating-ui/react";
import {
  useFloating,
  offset,
  flip,
  shift,
  useHover,
  useInteractions,
  FloatingPortal,
} from "@floating-ui/react";
import { useState } from "react";
import You from "../../You";
import UserHoverCard from "../UserHoverCard";
import type { LeaderboardUser } from "../../../types/types";

interface UserInfoProps {
  user: LeaderboardUser;
  isCurrentUser: boolean;
}

function UserInfo({ user, isCurrentUser }: UserInfoProps) {
  const [isCardOpen, setIsCardOpen] = useState(false);

  const { refs, floatingStyles, context } = useFloating({
    open: isCardOpen,
    onOpenChange: setIsCardOpen,
    placement: "bottom-start",
    middleware: [offset(10), flip(), shift()],
  });

  const hover = useHover(context, { handleClose: safePolygon() });
  const { getReferenceProps, getFloatingProps } = useInteractions([hover]);

  return (
    <div className="min-w-0">
      <Link
        to={`/profile/${user.username}`}
        className="block text-sm font-medium text-(--color-text-primary) hover:underline md:text-lg md:font-semibold"
      >
        <span className="md:hidden">
          {user.name && user.name.length > 15
            ? `${user.name.slice(0, 15)}...`
            : user.name}
        </span>
        <div
          ref={refs.setReference}
          {...getReferenceProps()}
          className="hidden items-center gap-2 md:flex"
        >
          <span className="cursor-pointer">{user.name}</span>
          {isCurrentUser && <You />}
          <FloatingPortal>
            <div
              ref={refs.setFloating}
              style={floatingStyles}
              {...getFloatingProps()}
              className={`z-50 transition-all duration-200 ${
                isCardOpen
                  ? "opacity-100"
                  : "pointer-events-none opacity-0"
              }`}
            >
              {user.username && (
                <UserHoverCard
                  rank={user.rank}
                  username={user.username}
                />
              )}
            </div>
          </FloatingPortal>
        </div>
      </Link>
      {user.github_url && (
        <Link
          to={`https://github.com/${user.github_url}`}
          className="group hidden items-center gap-1 md:flex"
        >
          <GithubIcon className="inline-block h-4 w-4 text-(--color-text-secondary) group-hover:text-orange-500" />
          <span className="max-w-32 truncate text-sm text-(--color-text-secondary) group-hover:text-orange-500">
            {user.github_url}
          </span>
        </Link>
      )}
    </div>
  );
}

export default UserInfo;
