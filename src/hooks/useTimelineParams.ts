import { useSearchParams } from "react-router-dom";
import type { Order } from "../types";
import {
  ANIME,
  CHRONOLOGY,
  DEFAULT_NAVIGATE_OPTIONS,
  IF,
  OFF,
  ON,
  ORDER,
} from "../constants";

function useTimelineParams() {
  const [searchParams, setSearchParams] = useSearchParams();

  const showIf = searchParams.get(IF) !== OFF;
  const animeOnly = searchParams.get(ANIME) === ON;
  const order: Order =
    searchParams.get(ORDER) === CHRONOLOGY
      ? "chronologicalOrder"
      : "releaseOrder";

  function toggleAnimeOnly() {
    setSearchParams((prev) => {
      if (animeOnly) {
        prev.delete(ANIME);
      } else {
        prev.set(ANIME, ON);
      }
      return prev;
    }, DEFAULT_NAVIGATE_OPTIONS);
  }

  function toggleShowIf() {
    setSearchParams((prev) => {
      if (showIf) {
        prev.set(IF, OFF);
      } else {
        prev.delete(IF);
      }

      return prev;
    }, DEFAULT_NAVIGATE_OPTIONS);
  }

  function handleOrder(newOrder: Order) {
    setSearchParams((prev) => {
      if (newOrder === "releaseOrder") {
        prev.delete(ORDER);
      } else {
        prev.set(ORDER, CHRONOLOGY);
      }

      return prev;
    }, DEFAULT_NAVIGATE_OPTIONS);
  }

  return {
    order,
    showIf,
    animeOnly,
    toggleAnimeOnly,
    toggleShowIf,
    handleOrder,
  };
}

export default useTimelineParams;
