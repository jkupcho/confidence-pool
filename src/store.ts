import { createStore, combineReducers } from "redux";
import { picksReducers, picksInitialState } from "./reducers";

const store = createStore(combineReducers({ picks: picksReducers }), {
  picks: picksInitialState
});

export default store;
