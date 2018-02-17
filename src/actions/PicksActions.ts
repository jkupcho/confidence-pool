export enum PickActionType {
  CHANGED_PICK
}

export interface PickAction {
  type: PickActionType;
  payload: any;
}

export interface GamePick {
  winner?: number;
  confidence?: number;
}

export function changePick(payload: GamePick) {
  return {
    type: PickActionType.CHANGED_PICK,
    payload
  };
}
