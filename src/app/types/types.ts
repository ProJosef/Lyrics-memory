export type ActionType = {
  type: string;
  payload: string;
};

export type InitStateType = {
  orig: string;
  learner: string;
  origArr: string[];
  learnerArr: string[];
};

export type ACTIONS_TYPE = {
  ORIGINAL: string,
  LEARNER: string,
};

export type LyricsContextType = {
  state: InitStateType;
  dispatch: React.Dispatch<ActionType>;
  id: ACTIONS_TYPE; 
}