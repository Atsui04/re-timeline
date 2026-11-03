import type { TimelineEvent } from "../types";
import eventsJson from "./events.json";

export const events: TimelineEvent[] = eventsJson as TimelineEvent[];
