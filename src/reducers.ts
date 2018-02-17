import { PickActionType, PickAction } from "./actions/PicksActions";
import Game from "./models/Game";

export interface PicksState {
  games: Game[];
  tiebreaker: string;
  fetching: boolean;
}

export const picksInitialState: PicksState = {
  games: [],
  tiebreaker: "",
  fetching: false
};

const gameReducer = (state: Game, action: PickAction) => {
  switch (action.type) {
    case PickActionType.CHANGED_PICK:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export const picksReducers = (
  state: PicksState = picksInitialState,
  action: PickAction
) => {
  switch (action.type) {
    case PickActionType.CHANGED_PICK:
      const { gameIndex, ...restPayload } = action.payload;
      if (
        gameIndex !== undefined &&
        gameIndex >= 0 &&
        gameIndex < state.games.length
      ) {
        return {
          ...state,
          games: [
            ...state.games.slice(0, gameIndex),
            gameReducer(state.games[gameIndex], {
              ...action,
              payload: { ...restPayload }
            }),
            ...state.games.slice(gameIndex + 1)
          ]
        };
      }
      return state;
    default:
      return state;
  }
};
