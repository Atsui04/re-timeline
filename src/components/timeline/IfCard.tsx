import type { IfStory } from "../../types";
import Badge from "../ui/Badge";

interface IfCardProps {
  ifStory: IfStory;
}

function IfCard({ ifStory }: IfCardProps) {
  return (
    <article className="pl-8">
      <div className="bg-surface border-what-if/40 hover:border-what-if flex cursor-pointer flex-col gap-2 rounded-xl border border-l-[3px] px-6 py-4 transition-colors duration-200">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-heading-if text-fg">{ifStory.title}</h3>
          <Badge variant="branch">IF</Badge>
        </div>
        <p className="text-small-regular text-fg-muted max-w-160">
          Decision: {ifStory.decision}
        </p>
      </div>
    </article>
  );
}

export default IfCard;
