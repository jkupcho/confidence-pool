import { createStore } from 'redux';
import rootReducer from './reducers';

const initialState = {
  games: [
    { name: 'Pinstripe', teams: [ 'Iowa', 'Boston College' ] },
    { name: 'Foster Farms', teams: [ 'Arizona', 'Purdue' ] },
    { name: 'Military', teams: [ 'Virginia', 'Navy' ] },
    { name: 'Camping', teams: [ 'Virginia Tech', 'Oklahoma State' ] },
    { name: 'Alamo', teams: [ 'Stanford', 'TCU' ] },
    { name: 'Holiday', teams: [ 'Washington State', 'Michigan State' ] },
    { name: 'Belk', teams: [ 'Wake Forest', 'Texas A&M' ] },
    { name: 'Sun', teams: [ 'NC State', 'Arizona State' ] },
    { name: 'Music City', teams: [ 'Kentucky', 'Northwestern' ] },
    { name: 'Arizona', teams: [ 'Utah State', 'New Mexico State' ] },
    { name: 'Cotton', teams: [ 'USC', 'Ohio State' ] },
    { name: 'TaxSlayer', teams: [ 'Louisville', 'Mississippi State' ] },
    { name: 'Liberty', teams: [ 'Iowa State', 'Memphis' ] },
    { name: 'Fiesta', teams: [ 'Washington', 'Penn State' ] },
    { name: 'Orange', teams: [ 'Miami', 'Wisconsin' ] },
    { name: 'Outback', teams: [ 'Michigan', 'South Carolina' ] },
    { name: 'Peach', teams: [ 'UCF', 'Auburn' ] },
    { name: 'Citrus', teams: [ 'Notre Dame', 'LSU' ] },
    { name: 'Rose', teams: [ 'Oklahoma', 'Georgia' ] },
    { name: 'Sugar', teams: [ 'Alabama', 'Clemson' ] },
    { name: 'Championship', teams: [] },
  ],
  picks: [],
  tiebreaker: '',
};

const store = createStore(
  rootReducer,
  initialState,
);

export default store;