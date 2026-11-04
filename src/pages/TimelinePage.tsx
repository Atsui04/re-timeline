import TimelineIntro from "../components/TimelineIntro";
import { events } from "../data";
import { isMainEvent } from "../types";
import TimelineRow from "../components/timeline/TimelineRow";

function TimelinePage() {
  const mainEvents = events.filter(isMainEvent);

  return (
    <>
      <TimelineIntro />
      <ol>
        {mainEvents.map((e) => (
          <TimelineRow event={e} key={e.id} />
        ))}
      </ol>
    </>
  );
}

export default TimelinePage;
