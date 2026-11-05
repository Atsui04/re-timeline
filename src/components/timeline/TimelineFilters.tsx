import type { Order } from "../../types";

interface TimelineFiltersProps {
  currentOrder: Order;
  onOrder: (order: Order) => void;
  showIf: boolean;
  animeOnly: boolean;
  onShowIfChange: () => void;
  onAnimeOnlyChange: () => void;
}

function TimelineFilters({
  currentOrder,
  onOrder,
  showIf,
  animeOnly,
  onShowIfChange,
  onAnimeOnlyChange,
}: TimelineFiltersProps) {
  const baseButtonClasses =
    "text-small-medium cursor-pointer rounded-md px-4 py-2 transition-colors duration-200";

  const activeClasses = "bg-surface text-fg";
  const inactiveClasses = "text-fg-muted hover:text-fg bg-transparent";
  return (
    <div className="bg-surface border-border flex items-center justify-between rounded-xl border px-4 py-3">
      <div className="bg-main border-border flex gap-1 rounded-lg border p-1">
        <button
          aria-pressed={currentOrder === "releaseOrder"}
          type="button"
          onClick={() => onOrder("releaseOrder")}
          className={`${baseButtonClasses} ${
            currentOrder === "releaseOrder" ? activeClasses : inactiveClasses
          }`}
        >
          Release
        </button>
        <button
          aria-pressed={currentOrder === "chronologicalOrder"}
          type="button"
          onClick={() => onOrder("chronologicalOrder")}
          className={`${baseButtonClasses} ${
            currentOrder === "chronologicalOrder"
              ? activeClasses
              : inactiveClasses
          }`}
        >
          Chronology
        </button>
      </div>
      <div className="flex items-center justify-start gap-6">
        <div className="text-fg-muted flex items-center gap-2">
          <label htmlFor="if-story" className="text-small-regular">
            IF stories
          </label>
          <span className="relative size-4">
            <input
              id="if-story"
              name="if-story"
              type="checkbox"
              checked={showIf}
              onChange={onShowIfChange}
              className="border-fg-muted peer checked:bg-accent focus-visible:outline-accent block size-4 cursor-pointer appearance-none rounded-sm border checked:border-none focus-visible:outline-2 focus-visible:outline-offset-2"
            />
            <svg
              aria-hidden="true"
              viewBox="0 0 512 512"
              className="text-main pointer-events-none absolute inset-0 m-auto size-3.5 opacity-0 peer-checked:opacity-100"
            >
              <path
                d="M416 128 192 384l-96-96"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="64px"
              />
            </svg>
          </span>
        </div>

        <div className="text-fg-muted flex items-center gap-2">
          <label htmlFor="anime-only" className="text-small-regular">
            Anime only
          </label>
          <span className="relative size-4">
            <input
              id="anime-only"
              name="anime-only"
              type="checkbox"
              checked={animeOnly}
              onChange={onAnimeOnlyChange}
              className="border-fg-muted peer checked:bg-accent focus-visible:outline-accent block size-4 cursor-pointer appearance-none rounded-sm border checked:border-none focus-visible:outline-2 focus-visible:outline-offset-2"
            />
            <svg
              aria-hidden="true"
              viewBox="0 0 512 512"
              className="text-main pointer-events-none absolute inset-0 m-auto size-3.5 opacity-0 peer-checked:opacity-100"
            >
              <path
                d="M416 128 192 384l-96-96"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="64px"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}

export default TimelineFilters;
