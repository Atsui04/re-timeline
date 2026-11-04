import TimelineIntro from "../components/TimelineIntro";
import EventCard from "../components/timeline/EventCard";
import { events } from "../data";
import { isMainEvent } from "../types";

function TimelinePage() {
  const mainEvents = events.filter(isMainEvent);

  return (
    <>
      <TimelineIntro />
      <ol>
        {mainEvents.map((e) => (
          <li className="pb-6" key={e.id}>
            <EventCard event={e} />
          </li>
        ))}
      </ol>
    </>
  );
}

export default TimelinePage;
