export enum PickActionType {
    CHANGED_PICK,
    FETCH_PICKS,
    FINISHED_FETCH,
}

export interface PickAction {
    type: PickActionType;
    payload: any;
}

export interface GamePick {
    winner?: number;
    confidence?: number;
}

export function fetchPicks(fetching: boolean) {
    return {
        type: PickActionType.FETCH_PICKS,
        payload: { fetching },
    }
}

export function changePick(payload: GamePick) {
    return {
        type: PickActionType.CHANGED_PICK,
        payload,
    };
}