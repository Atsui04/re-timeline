import type { IfStory, MainEvent } from "../../types";
import EventCard from "./EventCard";
import IfCard from "./IfCard";

interface TimelineRowProps {
  event: MainEvent;
  branches: IfStory[];
  selectedId: string | null;
  onSelect: (arcId: string) => void;
}

function TimelineRow({
  event,
  branches,
  selectedId,
  onSelect,
}: TimelineRowProps) {
  return (
    <li className="group relative pl-10">
      <span
        aria-hidden="true"
        className="bg-border pointer-events-none absolute top-0 bottom-0 left-1.75 w-0.5 group-first:top-16.75 group-last:bottom-auto group-last:h-14.75 md:group-first:top-10 md:group-last:h-10"
      ></span>
      <span
        aria-hidden="true"
        className="border-accent bg-main pointer-events-none absolute top-14.75 left-0 size-4 rounded-full border-2 md:top-8"
      ></span>
      <span
        aria-hidden="true"
        className="bg-border pointer-events-none absolute top-16.5 left-4 h-0.5 w-6 md:top-9.75"
      ></span>
      <div className="flex flex-col gap-3 pb-6 group-last:pb-0">
        <EventCard selectedId={selectedId} onSelect={onSelect} event={event} />
        {branches.map((branch) => (
          <IfCard
            key={branch.id}
            selectedId={selectedId}
            ifStory={branch}
            onSelect={onSelect}
          />
        ))}
      </div>
    </li>
  );
}

export default TimelineRow;
