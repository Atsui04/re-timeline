import { MODAL_TITLE_ID, SOURCE_LABELS } from "../../constants";
import type { MainEvent } from "../../types";
import Badge from "../ui/Badge";

interface EventModalContentProps {
  event: MainEvent;
}

function EventModalContent({ event }: EventModalContentProps) {
  return (
    <>
      <div className="flex flex-col gap-1">
        <h2 id={MODAL_TITLE_ID} className="text-heading-modal text-fg pr-4">
          {event.label} · {event.title}
        </h2>
        <p className="text-small-regular text-fg-muted">{event.meta}</p>
      </div>
      <p className="text-fg text-body">
        {event.description ? event.description : event.summary}
      </p>
      {event.keyEvents && (
        <div className="flex flex-col gap-3">
          <p className="text-small-medium text-fg-muted">Key events</p>
          <ul className="flex flex-col gap-2">
            {event.keyEvents.map((k) => (
              <li className="relative" key={k}>
                <span className="bg-accent absolute top-2.25 left-0 size-1.5 rounded-full"></span>
                <p className="text-fg text-body pl-5">{k}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
      <ul className="flex gap-2">
        {event.source.map((s) => (
          <li key={s}>
            <Badge variant="default">{SOURCE_LABELS[s]}</Badge>
          </li>
        ))}
      </ul>
    </>
  );
}

export default EventModalContent;
