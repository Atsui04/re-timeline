import TimelineIntro from "../components/TimelineIntro";
import { events } from "../data";
import { isIf, isMainEvent } from "../types";
import TimelineRow from "../components/timeline/TimelineRow";

function TimelinePage() {
  const mainEvents = events.filter(isMainEvent);
  const ifStories = events.filter(isIf);

  return (
    <>
      <TimelineIntro />
      <ol>
        {mainEvents.map((e) => (
          <TimelineRow
            key={e.id}
            event={e}
            branches={ifStories.filter(
              (branch) => branch.branchesFrom === e.id,
            )}
          />
        ))}
      </ol>
    </>
  );
}

export default TimelinePage;
