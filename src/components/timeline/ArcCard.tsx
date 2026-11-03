import { SOURCE_LABELS } from "../../constants";
import type { Arc } from "../../types";
import Badge from "../ui/Badge";

interface ArcCardProps {
  arc: Arc;
}

function ArcCard({ arc }: ArcCardProps) {
  return (
    <article className="bg-surface border-border hover:border-accent flex cursor-pointer flex-col gap-4 rounded-xl border p-6 transition-colors duration-200">
      <div className="flex flex-col gap-1">
        <div className="flex items-start justify-between gap-4">
          <h2 className="text-heading-arc text-fg">{arc.title}</h2>
          <div className="flex shrink-0 gap-2">
            {arc.source.map((s) => (
              <Badge key={s} variant="default">
                {SOURCE_LABELS[s]}
              </Badge>
            ))}
            {arc.status === "ongoing" && (
              <Badge variant="accent">Ongoing</Badge>
            )}
          </div>
        </div>
        <p className="text-small-regular text-fg-muted">{arc.meta}</p>
      </div>
      <p className="text-body text-fg-muted max-w-180">{arc.summary}</p>
    </article>
  );
}

export default ArcCard;
