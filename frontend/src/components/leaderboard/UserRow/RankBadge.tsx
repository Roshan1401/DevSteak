interface RankBadgeProps {
  rank: number;
}

function RankBadge({ rank }: RankBadgeProps) {
  return (
    <div className="col-span-1 flex shrink-0">
      <span
        className={`md:text-md flex size-8 shrink-0 items-center justify-center rounded-full text-xs font-semibold drop-shadow-2xl ${
          rank === 1
            ? "animate-pulse bg-yellow-100 text-yellow-500 shadow-[0_0_16px_4px_rgba(234,179,8,1)]"
            : rank === 2
              ? "animate-pulse bg-gray-200 text-gray-500 shadow-[0_0_16px_4px_rgba(156,163,175,1)]"
              : rank === 3
                ? "animate-pulse bg-amber-700 text-amber-300 shadow-[0_0_16px_4px_rgba(217,119,6,1)]"
                : "border border-(--color-border-secondary) bg-neutral-200 text-(--color-text-primary) dark:bg-neutral-800"
        }`}
      >
        {rank}
      </span>
    </div>
  );
}

export default RankBadge;
