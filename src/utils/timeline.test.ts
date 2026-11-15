import { describe, expect, it } from "vitest";
import { type Arc, type IfStory } from "../types";
import { filterBySource, getBranches, sortByOrder } from "./timeline";

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

describe("sortByOrder", () => {
  const event1 = makeArc({
    id: "arc-1",
    releaseOrder: 1,
    chronologicalOrder: 3,
  });
  const event2 = makeArc({
    id: "arc-2",
    releaseOrder: 2,
    chronologicalOrder: 1,
  });
  const event3 = makeArc({
    id: "arc-3",
    releaseOrder: 3,
    chronologicalOrder: 2,
  });

  it("should sort array in release order", () => {
    const sortedEvents = sortByOrder([event3, event1, event2], "releaseOrder");
    const sortedEventsId = sortedEvents.map((e) => e.id);

    expect(sortedEventsId).toEqual(["arc-1", "arc-2", "arc-3"]);
  });

  it("should sort array in chronological order", () => {
    const sortedEvents = sortByOrder(
      [event3, event1, event2],
      "chronologicalOrder",
    );
    const sortedEventsId = sortedEvents.map((e) => e.id);

    expect(sortedEventsId).toEqual(["arc-2", "arc-3", "arc-1"]);
  });

  it("should not mutate array", () => {
    const input = [event3, event1, event2];
    sortByOrder(input, "releaseOrder");
    const inputId = input.map((e) => e.id);

    expect(inputId).toEqual(["arc-3", "arc-1", "arc-2"]);
  });

  it("should return empty array if events are empty", () => {
    const sortedEvents = sortByOrder([], "releaseOrder");

    expect(sortedEvents).toEqual([]);
  });
});

describe("getBranches", () => {
  it("should return empty array if showIf is false", () => {
    const ifStory = makeIfStory({ id: "if-story", branchesFrom: "arc-1" });

    const branches = getBranches([ifStory], "arc-1", {
      showIf: false,
      animeOnly: false,
    });

    expect(branches).toEqual([]);
  });

  it("should return only stories branching from the given event", () => {
    const ifStory1 = makeIfStory({ id: "if-story-1", branchesFrom: "arc-1" });
    const ifStory2 = makeIfStory({ id: "if-story-2", branchesFrom: "arc-2" });

    const branches = getBranches([ifStory1, ifStory2], "arc-1", {
      showIf: true,
      animeOnly: false,
    });

    const branchesId = branches.map((b) => b.id);

    expect(branchesId).toEqual(["if-story-1"]);
  });

  it("should return anime only if stories", () => {
    const ifStory1 = makeIfStory({
      id: "if-story-1",
      branchesFrom: "arc-1",
      source: ["anime", "ln"],
    });
    const ifStory2 = makeIfStory({
      id: "if-story-2",
      branchesFrom: "arc-1",
      source: ["ln"],
    });

    const branches = getBranches([ifStory1, ifStory2], "arc-1", {
      showIf: true,
      animeOnly: true,
    });
    const branchesId = branches.map((b) => b.id);

    expect(branchesId).toEqual(["if-story-1"]);
  });

  it("should return empty array if event id isn't valid", () => {
    const ifStory = makeIfStory({ id: "if-story", branchesFrom: "arc-1" });
    const branches = getBranches([ifStory], "arc-99", {
      showIf: true,
      animeOnly: false,
    });

    expect(branches).toEqual([]);
  });
});
