import { getLanguageColor, getLanguageIcon } from "../../../utils/languageConfig";
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
import type { LeaderboardUser } from "../../../types/types";

interface LanguageIconsProps {
  byLanguage: LeaderboardUser["byLanguage"];
}

function LanguageIcons({ byLanguage }: LanguageIconsProps) {
  const [isOpen, setIsOpen] = useState(false);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: "bottom-end",
    middleware: [offset(8), flip(), shift({ padding: 8 })],
  });

  const hover = useHover(context, { handleClose: safePolygon() });
  const { getReferenceProps, getFloatingProps } = useInteractions([hover]);

  return (
    <>
      {byLanguage.slice(0, 3).map((lang, i) => (
        <div className="group relative flex" key={i}>
          <span
            className="flex h-9 w-8.5 items-center justify-center rounded-md p-1.5 text-2xl font-medium transition-all duration-200 group-hover:scale-110"
            style={{
              backgroundColor: `${getLanguageColor(lang.language)}20`,
              color: getLanguageColor(lang.language),
              border: `0.5px solid ${getLanguageColor(lang.language)}`,
            }}
          >
            {getLanguageIcon(lang.language)}
          </span>
          <span className="absolute right-0 bottom-12 z-9999 hidden rounded-md bg-(--color-bg-primary) px-2 py-1 text-xs font-medium text-(--color-text-primary) shadow-lg group-hover:block">
            {lang.language}
          </span>
        </div>
      ))}
      {byLanguage.length > 3 && (
        <div>
          <span
            ref={refs.setReference}
            {...getReferenceProps()}
            className="flex h-9 w-8.5 cursor-pointer items-center justify-center rounded-md border border-(--color-border) bg-(--color-bg-secondary) text-xs font-semibold text-(--color-text-secondary)"
          >
            +{byLanguage.length - 3}
          </span>
          {isOpen && (
            <FloatingPortal>
              <div
                ref={refs.setFloating}
                style={floatingStyles}
                {...getFloatingProps()}
                className="z-50 min-w-36 rounded-lg border border-(--color-border) bg-(--color-bg-primary) p-2 shadow-xl"
              >
                {byLanguage.slice(3).map((lang, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 rounded-md px-2 py-1 text-sm"
                  >
                    <span
                      style={{ color: getLanguageColor(lang.language) }}
                      className="text-lg"
                    >
                      {getLanguageIcon(lang.language)}
                    </span>
                    <span className="text-(--color-text-primary)">
                      {lang.language}
                    </span>
                  </div>
                ))}
              </div>
            </FloatingPortal>
          )}
        </div>
      )}
    </>
  );
}

export default LanguageIcons;
