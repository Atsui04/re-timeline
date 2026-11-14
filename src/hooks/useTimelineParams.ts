import { useSearchParams } from "react-router-dom";
import type { Order } from "../types";
import {
  ANIME,
  CHRONOLOGY,
  DEFAULT_NAVIGATE_OPTIONS,
  EVENT,
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
  const selectedId = searchParams.get(EVENT);

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

  function handleClose() {
    setSearchParams((prev) => {
      prev.delete(EVENT);
      return prev;
    }, DEFAULT_NAVIGATE_OPTIONS);
  }

  function handleSelect(arcId: string) {
    setSearchParams(
      (prev) => {
        prev.set(EVENT, arcId);
        return prev;
      },
      { preventScrollReset: true },
    );
  }

  return {
    order,
    showIf,
    animeOnly,
    selectedId,
    toggleAnimeOnly,
    toggleShowIf,
    handleOrder,
    handleClose,
    handleSelect,
  };
}

export default useTimelineParams;
