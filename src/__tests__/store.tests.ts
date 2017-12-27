import * as actions from '../actions/PicksActions';

describe('actions', () => {
    
    it('should create an action to select a pick', () => {
        const payload = { winner: 1 };
        const expectedAction = {
            type: actions.PickActionType.CHANGED_PICK,
            payload,
        }

        expect(actions.changePick(payload)).toEqual(expectedAction);
    });
    
});