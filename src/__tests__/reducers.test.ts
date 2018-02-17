import * as actions from "../actions/PicksActions";
import * as reducers from "../reducers";

describe("reducers", () => {
  describe("picksReducers", () => {
    const initialGames = [
      {
        name: "Sun Bowl",
        teams: [{ name: "Badgers" }, { name: "Ohio St." }]
      }
    ];

    const initialState = {
      ...reducers.picksInitialState,
      games: [...initialGames]
    };

    it("should update a game on CHANGED_PICK", () => {
      const expectedGames = [
        {
          name: "Sun Bowl",
          teams: [{ name: "Badgers" }, { name: "Ohio St." }],
          winner: 1
        }
      ];

      const expectedState: reducers.PicksState = {
        ...initialState,
        games: [...expectedGames]
      };

      const newState = reducers.picksReducers(initialState, {
        type: actions.PickActionType.CHANGED_PICK,
        payload: { gameIndex: 0, winner: 1 }
      });
      expect(expectedState).toEqual(newState);
    });

    it("should return state if bad index", () => {
      const newState = reducers.picksReducers(initialState, {
        type: actions.PickActionType.CHANGED_PICK,
        payload: { gameIndex: 1, winner: 1 }
      });

      expect(initialState).toEqual(newState);
    });
  });
});
