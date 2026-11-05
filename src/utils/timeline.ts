import type { IfStory, MainEvent, Order } from "../types";

export function filterBySource(events: MainEvent[], animeOnly: boolean) {
  if (!animeOnly) return events;

  return events.filter((e) => e.source.includes("anime"));
}

export function sortByOrder(events: MainEvent[], sortOrder: Order) {
  return [...events].sort((a, b) => a[sortOrder] - b[sortOrder]);
}

export function getBranches(
  ifStories: IfStory[],
  eventId: string,
  flags: { showIf: boolean; animeOnly: boolean },
) {
  if (!flags.showIf) return [];

  return ifStories.filter((story) => {
    const belongsToEvent = story.branchesFrom === eventId;
    const matchesAnime = !flags.animeOnly || story.source.includes("anime");

    return belongsToEvent && matchesAnime;
  });
}
