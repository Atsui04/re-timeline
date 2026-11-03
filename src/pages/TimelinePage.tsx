import TimelineIntro from "../components/TimelineIntro";
import ArcCard from "../components/timeline/ArcCard";
import { events } from "../data";
import { isArc } from "../types";

function TimelinePage() {
  const arcs = events.filter(isArc);

  return (
    <>
      <TimelineIntro />
      <ol>
        {arcs.map((arc) => (
          <li className="pb-6" key={arc.id}>
            <ArcCard arc={arc} />
          </li>
        ))}
      </ol>
    </>
  );
}

export default TimelinePage;
