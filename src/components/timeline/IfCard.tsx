import type { IfStory } from "../../types";
import Badge from "../ui/Badge";

interface IfCardProps {
  ifStory: IfStory;
  selectedId: string | null;
  onSelect: (arcId: string) => void;
}

function IfCard({ ifStory, selectedId, onSelect }: IfCardProps) {
  const isSelected = ifStory.id === selectedId;

  const defaultCard = "bg-surface border-what-if/40";

  const activeCard = "bg-surface-light border-what-if";

  return (
    <article className="relative pl-3 md:pl-8">
      <span
        aria-hidden="true"
        className="bg-what-if pointer-events-none absolute top-7.5 -left-7 h-0.5 w-10 md:top-7.75 md:w-15"
      ></span>
      <span
        aria-hidden="true"
        className="bg-what-if pointer-events-none absolute top-6.75 -left-9 size-2 rounded-full md:top-7"
      ></span>
      <div
        className={`hover:border-what-if relative flex cursor-pointer flex-col gap-2 rounded-xl border border-l-[3px] p-4 transition-colors duration-200 md:px-6 ${isSelected ? activeCard : defaultCard}`}
      >
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-heading-if-mobile md:text-heading-if text-fg">
            {ifStory.title}
          </h3>
          <Badge variant="branch">IF</Badge>
        </div>
        <p className="text-small-regular text-fg-muted max-w-160">
          Decision: {ifStory.decision}
        </p>
        <button
          aria-haspopup="dialog"
          aria-label={`Open details: ${ifStory.title}`}
          onClick={() => onSelect(ifStory.id)}
          className="focus-visible:outline-what-if absolute inset-0 cursor-pointer rounded-xl focus-visible:outline-2 focus-visible:outline-offset-6"
        ></button>
      </div>
    </article>
  );
}

export default IfCard;
