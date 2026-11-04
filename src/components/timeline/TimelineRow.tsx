import type { MainEvent } from "../../types";
import EventCard from "./EventCard";

interface TimelineRowProps {
  event: MainEvent;
}

function TimelineRow({ event }: TimelineRowProps) {
  return (
    <li className="group relative pb-6 pl-10 last:pb-0">
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
      <EventCard event={event} />
    </li>
  );
}

export default TimelineRow;
