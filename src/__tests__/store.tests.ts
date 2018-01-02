import * as actions from '../actions/PicksActions';
import * as reducers from '../reducers';

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

describe('reducers', () => {
    
    describe('picksReducers', () => {
        const initialGames = [
            {
                name: 'Sun Bowl',
                teams: ['Badgers', 'Ohio St.']
            }
        ];
        const initialState = { 
            ...reducers.picksInitialState, 
            games: [ ...initialGames ] 
        };


        it('should update a game on CHANGED_PICK', () => {
            const expectedGames = [
                {
                    name: 'Sun Bowl',
                    teams: ['Badgers', 'Ohio St.'],
                    winner: 1
                }
            ];

            const expectedState: reducers.PicksState = { 
                ...initialState,
                games: [ ...expectedGames ]
            };



            const newState = reducers.picksReducers(initialState, { type: actions.PickActionType.CHANGED_PICK, payload: { gameIndex: 0, winner: 1 }})
            expect(expectedState).toEqual(newState)
        });

    });

});