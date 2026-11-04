import type { IfStory, MainEvent } from "../../types";
import EventCard from "./EventCard";
import IfCard from "./IfCard";

interface TimelineRowProps {
  event: MainEvent;
  branches: IfStory[];
}

function TimelineRow({ event, branches }: TimelineRowProps) {
  return (
    <li className="group relative pl-10">
      <span
        aria-hidden="true"
        className="bg-border pointer-events-none absolute top-0 bottom-0 left-1.75 w-0.5 group-first:top-10 group-last:bottom-auto group-last:h-10"
      ></span>
      <span
        aria-hidden="true"
        className="border-accent bg-main pointer-events-none absolute top-8 left-0 size-4 rounded-full border-2"
      ></span>
      <span
        aria-hidden="true"
        className="bg-border pointer-events-none absolute top-9.75 left-4 h-0.5 w-6"
      ></span>
      <div className="flex flex-col gap-3 pb-6 group-last:pb-0">
        <EventCard event={event} />
        {branches.map((branch) => (
          <IfCard key={branch.id} ifStory={branch} />
        ))}
      </div>
    </li>
  );
}

export default TimelineRow;
