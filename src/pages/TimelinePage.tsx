import { useState } from "react";
import useTimelineParams from "../hooks/useTimelineParams";

import { events } from "../data";

import { isIf, isMainEvent } from "../types";
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
  const {
    order,
    showIf,
    animeOnly,
    toggleShowIf,
    toggleAnimeOnly,
    handleOrder,
  } = useTimelineParams();
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const currentEvent = events.find((e) => e.id === selectedId);

  let modalTitle = "";
  let modalMeta = "";
  let modalAccent: "default" | "what-if" = "default";

  if (currentEvent && isIf(currentEvent)) {
    const parentArc = events.find((e) => e.id === currentEvent.branchesFrom);
    const parentLabel =
      parentArc && isMainEvent(parentArc) ? parentArc.label : undefined;

    modalTitle = currentEvent.title;
    modalMeta = parentLabel
      ? `Branches from ${parentLabel} · LN only`
      : "LN only";
    modalAccent = "what-if";
  } else if (currentEvent) {
    modalTitle = `${currentEvent.label} · ${currentEvent.title}`;
    modalMeta = currentEvent.meta;
  }

  const filteredEvents = filterBySource(mainEvents, animeOnly);
  const sortedEvents = sortByOrder(filteredEvents, order);

  function handleClose() {
    setSelectedId(null);
  }

  function handleSelect(arcId: string) {
    setSelectedId(arcId);
  }

  return (
    <>
      <Modal
        isOpen={selectedId !== null}
        onClose={handleClose}
        title={modalTitle}
        meta={modalMeta}
        accent={modalAccent}
      >
        {currentEvent && isIf(currentEvent) ? (
          <IfModalContent branch={currentEvent} />
        ) : (
          currentEvent && <EventModalContent event={currentEvent} />
        )}
      </Modal>
      <div className="flex flex-col gap-4 md:gap-8">
        <title>Re:Timeline - Re:Zero interactive timeline</title>
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
          onOrder={handleOrder}
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
