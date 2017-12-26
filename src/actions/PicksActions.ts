export enum PickActionType {
    SELECTED_TEAM,
}

export interface Pick {
    game:string;
    team:string;
    confidence?:number;
}

export interface PickAction {
    type: PickActionType,
    payload: Object,
}

export function selectedPick(payload:Pick) {
    return {
        type: PickActionType.SELECTED_TEAM,
        payload,
    }
}