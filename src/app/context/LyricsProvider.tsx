"use client";

import React, { createContext, useContext, useReducer } from "react";
import type {
  ACTIONS_TYPE,
  ActionType,
  InitStateType,
  LyricsContextType,
} from "../types/types";

const ACTIONS: ACTIONS_TYPE = {
  ORIGINAL: "ORIGINAL",
  LEARNER: "LEARNER",
};

const initState: InitStateType = {
  orig: "",
  learner: "",
  origArr: [],
  learnerArr: [],
};
function reducer(state: InitStateType, action: ActionType) {
  switch (action.type) {
    case ACTIONS.ORIGINAL: {
      const origArr = action.payload.toLowerCase().split(" ");
      return {
        ...state,
        orig: action.payload,
        origArr,
      };
    }
    case ACTIONS.LEARNER: {
      const learnerArr = action.payload.toLowerCase().split(" ");
      return {
        ...state,
        learner: action.payload,
        learnerArr,
      };
    }
    default:
      return state;
  }
}

const lyricsContext = createContext<LyricsContextType>({
  state: initState,
  dispatch: () => {},
  id: ACTIONS, 
});

export function LyricsContext({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initState);
  const id: ACTIONS_TYPE = ACTIONS;
  return (
    <lyricsContext.Provider value={{ state, dispatch, id }}>
      {children}
    </lyricsContext.Provider>
  );
}
export function useLyrics() {
  const context = useContext(lyricsContext);
  return context;
}
