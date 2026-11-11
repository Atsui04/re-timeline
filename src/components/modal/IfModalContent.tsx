import { SOURCE_LABELS } from "../../constants";
import type { IfStory } from "../../types";
import Badge from "../ui/Badge";

interface IfModalContentProps {
  branch: IfStory;
}

function IfModalContent({ branch }: IfModalContentProps) {
  return (
    <>
      <div className="bg-main border-what-if/40 flex flex-col gap-2 rounded-xl border p-4">
        <p className="text-what-if text-small-regular">Decision</p>
        <p className="text-body text-fg">{branch.decision}</p>
      </div>
      {branch.description && (
        <p className="text-body text-fg">{branch.description}</p>
      )}
      {branch.consequences && (
        <div className="flex flex-col gap-3">
          <p className="text-small-medium text-fg-muted">Consequences</p>
          <ul className="flex flex-col gap-2">
            {branch.consequences.map((c) => (
              <li className="relative" key={c}>
                <span className="bg-what-if absolute top-2.25 left-0 size-1.5 rounded-full"></span>
                <p className="text-fg text-body pl-5">{c}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="flex gap-2">
        <Badge variant="branch">IF</Badge>
        <Badge variant="default">{SOURCE_LABELS[branch.source[0]]}</Badge>
      </div>
    </>
  );
}

export default IfModalContent;
