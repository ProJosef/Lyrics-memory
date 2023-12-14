"use client";

import LyricsColumn from "./LyricsColumn";
import { useLyrics } from "../context/LyricsProvider";
import ResultColumn from "./ResultColumn";

export default function ClientColumn() {
  const { state, dispatch, id } = useLyrics();

  return (
    <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
      <LyricsColumn text={state.orig} dispatch={dispatch} id={id.ORIGINAL} />
      <LyricsColumn text={state.learner} dispatch={dispatch} id={id.LEARNER} />
      <ResultColumn state={state} />
    </div>
  );
}
