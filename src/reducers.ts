import { PickActionType, GamePick } from './actions/PicksActions';
import Game from './models/Game';

export interface PicksState {
  games: Game[];
  tiebreaker: string;
  fetching: boolean;
}

export const picksInitialState = { games: [], picks: [], tiebreaker: '', fetching: false };
export const pickInitialState = { game: '', team: '', confidence: 0 };

export const gameReducer = (state: {}, action: GamePick) => {
  return {
    ...state,
    ...action,
  }
}

export const picksReducers = (state: PicksState = picksInitialState, action: any) => {
  switch (action.type) {
    case PickActionType.CHANGED_PICK:
    default:
      return state;
  }
};