export enum ActionType {
  CHANGE_SELECTION,
}

export interface AppAction {
  type: ActionType;
  payload: Object;
}

const initialState = {};

export default (state = initialState, action:AppAction) => {
  switch (action.type) {
    default:
      return state;
  }
}