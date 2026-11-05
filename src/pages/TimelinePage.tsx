import TimelineIntro from "../components/TimelineIntro";
import { events } from "../data";
import { isIf, isMainEvent, type Order } from "../types";
import TimelineRow from "../components/timeline/TimelineRow";
import { useState } from "react";
import { filterBySource, getBranches, sortByOrder } from "../utils/timeline";
import TimelineFilters from "../components/timeline/TimelineFilters";

const mainEvents = events.filter(isMainEvent);
const ifStories = events.filter(isIf);

function TimelinePage() {
  const [order, setOrder] = useState<Order>("releaseOrder");
  const [showIf, setShowIf] = useState(true);
  const [animeOnly, setAnimeOnly] = useState(false);

  const filteredEvents = filterBySource(mainEvents, animeOnly);
  const sortedEvents = sortByOrder(filteredEvents, order);

  function toggleAnimeOnly() {
    setAnimeOnly((prev) => !prev);
  }

  function toggleShowIf() {
    setShowIf((prev) => !prev);
  }

  return (
    <>
      <div className="flex flex-col gap-8">
        <TimelineIntro />
        <TimelineFilters
          currentOrder={order}
          onOrder={setOrder}
          showIf={showIf}
          animeOnly={animeOnly}
          onShowIfChange={toggleShowIf}
          onAnimeOnlyChange={toggleAnimeOnly}
        />
      </div>
      <ol>
        {sortedEvents.map((e) => (
          <TimelineRow
            key={e.id}
            event={e}
            branches={getBranches(ifStories, e.id, { showIf, animeOnly })}
          />
        ))}
      </ol>
    </>
  );
}

export default TimelinePage;
