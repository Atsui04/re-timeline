import { SOURCE_LABELS } from "../../constants";
import { isArc, type MainEvent } from "../../types";
import Badge from "../ui/Badge";

interface EventCardProps {
  event: MainEvent;
  selectedId: string | null;
  onSelect: (arcId: string) => void;
}

function EventCard({ event, selectedId, onSelect }: EventCardProps) {
  const isSelected = event.id === selectedId;

  const defaultCard = "bg-surface border-border";

  const activeCard = "bg-surface-light border-accent";

  return (
    <article
      className={`hover:border-accent relative flex flex-col gap-4 rounded-xl border p-4 transition-colors duration-200 md:p-6 ${isSelected ? activeCard : defaultCard}`}
    >
      <div className="flex flex-col gap-1">
        <div className="flex flex-col-reverse items-start gap-2 md:flex-row md:justify-between md:gap-4">
          <h2 className="text-heading-arc-mobile md:text-heading-arc text-fg">
            {event.label} · {event.title}
          </h2>
          <div className="flex shrink-0 flex-wrap gap-2">
            {event.source.map((s) => (
              <Badge key={s} variant="default">
                {SOURCE_LABELS[s]}
              </Badge>
            ))}
            {isArc(event) && event.status === "ongoing" && (
              <Badge variant="accent">Ongoing</Badge>
            )}
          </div>
        </div>
        <p className="text-small-regular text-fg-muted">{event.meta}</p>
      </div>
      <p className="text-small-regular md:text-body text-fg max-w-180">
        {event.summary}
      </p>
      <button
        aria-haspopup="dialog"
        aria-label={`Open details: ${event.title}`}
        onClick={() => onSelect(event.id)}
        className="focus-visible:outline-accent absolute inset-0 cursor-pointer rounded-xl focus-visible:outline-2 focus-visible:outline-offset-6"
      ></button>
    </article>
  );
}

export default EventCard;
