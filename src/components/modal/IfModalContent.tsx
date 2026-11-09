import { MODAL_TITLE_ID, SOURCE_LABELS } from "../../constants";
import type { IfStory } from "../../types";
import Badge from "../ui/Badge";

interface IfModalContentProps {
  branch: IfStory;
  parentLabel?: string;
}

function IfModalContent({ branch, parentLabel }: IfModalContentProps) {
  const temp = [
    "Consequence 1",
    "Consequence 2",
    "Consequence 3",
    "Consequence 4",
  ];

  return (
    <>
      <div className="flex flex-col gap-1">
        <h2 id={MODAL_TITLE_ID} className="text-heading-modal text-fg pr-4">
          {branch.title}
        </h2>
        <p className="text-small-regular text-fg-muted">
          {parentLabel ? `Branches from ${parentLabel} · LN only` : "LN only"}
        </p>
      </div>
      <div className="bg-main border-what-if/40 flex flex-col gap-2 rounded-xl border p-4">
        <p className="text-what-if text-small-regular">Decision</p>
        <p className="text-body text-fg">{branch.decision}</p>
      </div>
      <p className="text-body text-fg">{branch.decision}</p>
      <div className="flex flex-col gap-3">
        <p className="text-small-medium text-fg-muted">Consequences</p>
        <ul className="flex flex-col gap-2">
          {temp.map((c) => (
            <li className="relative" key={c}>
              <span className="bg-what-if absolute top-2.25 left-0 size-1.5 rounded-full"></span>
              <p className="text-fg text-body pl-5">{c}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex gap-2">
        <Badge variant="branch">IF</Badge>
        <Badge variant="default">{SOURCE_LABELS[branch.source[0]]}</Badge>
      </div>
    </>
  );
}

export default IfModalContent;
