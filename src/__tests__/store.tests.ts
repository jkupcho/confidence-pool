import * as actions from '../actions/PicksActions';

describe('actions', () => {
    it('should create an action to select a pick', () => {
        const payload = { game: 'Pinstripe', team: 'Iowa' };
        const expectedAction = {
            type: actions.PickActionType.SELECTED_TEAM,
            payload,
        }

        expect(actions.selectedPick(payload)).toEqual(expectedAction);
    })
})