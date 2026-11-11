import { useState } from "react";

import { events } from "../data";

import { isIf, isMainEvent, type Order } from "../types";
import { filterBySource, getBranches, sortByOrder } from "../utils/timeline";

import PageIntro from "../components/layout/PageIntro";
import TimelineRow from "../components/timeline/TimelineRow";
import TimelineFilters from "../components/timeline/TimelineFilters";
import Modal from "../components/ui/Modal";
import EventModalContent from "../components/modal/EventModalContent";
import IfModalContent from "../components/modal/IfModalContent";

const mainEvents = events.filter(isMainEvent);
const ifStories = events.filter(isIf);

function TimelinePage() {
  const [order, setOrder] = useState<Order>("releaseOrder");
  const [showIf, setShowIf] = useState(true);
  const [animeOnly, setAnimeOnly] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const currentEvent = events.find((e) => e.id === selectedId);

  let parentLabel: string | undefined;

  if (currentEvent && isIf(currentEvent)) {
    const parentArc = events.find((e) => e.id === currentEvent.branchesFrom);
    if (parentArc && isMainEvent(parentArc)) {
      parentLabel = parentArc.label;
    }
  }

  const filteredEvents = filterBySource(mainEvents, animeOnly);
  const sortedEvents = sortByOrder(filteredEvents, order);

  function toggleAnimeOnly() {
    setAnimeOnly((prev) => !prev);
  }

  function toggleShowIf() {
    setShowIf((prev) => !prev);
  }

  function handleClose() {
    setSelectedId(null);
  }

  function handleSelect(arcId: string) {
    setSelectedId(arcId);
  }

  return (
    <>
      <Modal isOpen={selectedId !== null} onClose={handleClose}>
        {currentEvent && isIf(currentEvent) ? (
          <IfModalContent branch={currentEvent} parentLabel={parentLabel} />
        ) : (
          currentEvent && <EventModalContent event={currentEvent} />
        )}
      </Modal>
      <div className="flex flex-col gap-4 md:gap-8">
        <PageIntro
          title={
            <>
              <span className="text-accent">Re</span>:Zero Timeline
            </>
          }
          description="An interactive timeline of the Re:Zero universe. Switch between release
        and chronological order, and reveal IF stories branching from the main
        arcs."
        />
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
            selectedId={selectedId}
            onSelect={handleSelect}
            event={e}
            branches={getBranches(ifStories, e.id, { showIf, animeOnly })}
          />
        ))}
      </ol>
    </>
  );
}

export default TimelinePage;
