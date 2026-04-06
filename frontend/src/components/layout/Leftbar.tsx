import profilImg from "../../assets/image.png";

interface Props {}

function Leftbar(props: Props) {
  const {} = props;

  return (
    <div className="w-70 flex flex-col gap-6 border-r border-(--color-border) bg-(--color-bg-primary) py-3 px-4">
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="size-25 rounded-full border border-orange-400 dark:border-black  overflow-hidden">
          <img
            src={profilImg}
            className="w-full h-full object-cover"
            alt="Profile"
          />
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="text-(--color-text-primary) text-2xl font-semibold">
            Roshan
          </span>
          <span className="text-(--color-text-secondary) text-sm">
            @patilrosha99
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-(--color-text-secondary) text-xs font-semibold uppercase tracking-wider">
          Today's Activity
        </h3>
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-md hover:border-orange-400 border border-(--color-border) bg-(--color-bg-secondary) p-3">
            <div className="text-xs text-(--color-text-secondary) uppercase tracking-wider">
              Rank
            </div>
            <div className="text-2xl font-bold text-(--color-text-primary) mt-2">
              —
            </div>
            <div className="text-xs text-(--color-text-secondary) mt-1">
              Past 24h leaderboard
            </div>
          </div>
          <div className="rounded-md hover:border-orange-400 border border-(--color-border) bg-(--color-bg-secondary) p-3">
            <div className="text-xs text-(--color-text-secondary) uppercase tracking-wider">
              Streak
            </div>
            <div className="text-2xl font-bold text-(--color-text-primary) mt-2">
              0 days
            </div>
            <div className="text-xs text-(--color-text-secondary) mt-1">
              Current streak
            </div>
          </div>
          <div className="rounded-md hover:border-orange-400 border border-(--color-border) bg-(--color-bg-secondary) p-3">
            <div className="text-xs text-(--color-text-secondary) uppercase tracking-wider">
              Hours
            </div>
            <div className="text-2xl font-bold text-(--color-text-primary) mt-2">
              0m
            </div>
            <div className="text-xs text-(--color-text-secondary) mt-1">
              Past 24h
            </div>
          </div>
          <div className="rounded-md hover:border-orange-400 border border-(--color-border) bg-(--color-bg-secondary) p-3">
            <div className="text-xs text-(--color-text-secondary) uppercase tracking-wider">
              Lines
            </div>
            <div className="text-2xl font-bold text-(--color-text-primary) mt-2">
              0
            </div>
            <div className="text-xs text-(--color-text-secondary) mt-1">
              Past 24h
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <button className="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-(--color-border) bg-(--color-bg-secondary) px-3 py-2 text-(--color-text-primary) transition-all hover:border-orange-500/50 hover:bg-orange-500/10 active:border-orange-500 active:bg-orange-500/20 active:text-orange-500">
          <svg
            className="h-4 w-4"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
          </svg>
          <span className="text-sm font-medium">Copy API token</span>
        </button>

        <div className="rounded-md border border-(--color-border) bg-(--color-bg-secondary) p-3">
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-start gap-2">
              <svg
                className="h-5 w-5 text-orange-500 mt-0.5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-13h-2v6h2V7zm0 8h-2v2h2v-2z" />
              </svg>
              <div className="flex flex-col">
                <div className="text-sm font-medium text-(--color-text-primary)">
                  Extension
                </div>
                <div className="text-xs text-(--color-text-secondary)">
                  IDE integration
                </div>
              </div>
            </div>
            <span className="text-xs font-semibold text-orange-500">
              Inactive
            </span>
          </div>
          <button className="w-full mt-3 cursor-pointer rounded-md border border-(--color-border) bg-(--color-bg-primary) px-3 py-2 text-sm font-medium text-(--color-text-primary) transition-colors hover:border-orange-500/50  active:border-orange-500 active:bg-orange-500/20 active:text-orange-500">
            Test connection
          </button>
        </div>

        <button className="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-(--color-border) bg-(--color-bg-primary) px-3 py-2 text-sm text-orange-500 font-medium  transition-colors hover:border-orange-500/60  active:border-orange-500 active:bg-orange-500/20 active:text-orange-100">
          <svg
            className="h-4 w-4"
            fill="currentColor"
            viewBox="0 0 24 2   4"
            aria-hidden="true"
          >
            <path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H3V5h12v4z" />
          </svg>
          <span>Sign out</span>
        </button>
      </div>
    </div>
  );
}

export default Leftbar;
