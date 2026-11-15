import { describe, expect, it } from "vitest";
import { type Arc, type IfStory } from "../types";
import { filterBySource } from "./timeline";

function makeArc(overrides: Partial<Arc>): Arc {
  const obj: Arc = {
    id: "test",
    type: "arc",
    title: "test",
    label: "Arc test",
    meta: "LN x-z volume",
    source: ["anime"],
    releaseOrder: 1,
    chronologicalOrder: 1,
    status: "completed",
    summary: "test",
  };

  return { ...obj, ...overrides };
}

function makeIfStory(overrides: Partial<IfStory>): IfStory {
  const obj: IfStory = {
    id: "test-if",
    type: "if",
    title: "test if",
    branchesFrom: "test",
    source: ["ln"],
    decision: "test if",
  };

  return { ...obj, ...overrides };
}

describe("filterBySource", () => {
  it("should return all events when animeOnly is false", () => {
    const sourceAnime = makeArc({ id: "arc-anime", source: ["anime"] });
    const sourceLN = makeArc({ id: "arc-ln", source: ["ln"] });

    const filteredEvents = filterBySource([sourceAnime, sourceLN], false);
    const filteredEventsId = filteredEvents.map((e) => e.id);

    expect(filteredEventsId).toEqual(["arc-anime", "arc-ln"]);
  });

  it("should return events with only anime in source array", () => {
    const sourceAnime = makeArc({ id: "arc-anime", source: ["anime"] });
    const sourceLN = makeArc({ id: "arc-ln", source: ["ln"] });

    const filteredEvents = filterBySource([sourceAnime, sourceLN], true);
    const filteredEventsId = filteredEvents.map((e) => e.id);

    expect(filteredEventsId).toEqual(["arc-anime"]);
  });

  it("should return events with anime in source array, even with ln in array", () => {
    const sourceAnime = makeArc({ id: "arc-anime", source: ["anime", "ln"] });
    const sourceLN = makeArc({ id: "arc-ln", source: ["ln"] });

    const filteredEvents = filterBySource([sourceAnime, sourceLN], true);
    const filteredEventsId = filteredEvents.map((e) => e.id);

    expect(filteredEventsId).toEqual(["arc-anime"]);
  });

  it("should return empty array if events are empty", () => {
    const filteredEvents = filterBySource([], true);

    expect(filteredEvents).toEqual([]);
  });
});
