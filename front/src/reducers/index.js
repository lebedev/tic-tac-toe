import { combineReducers } from 'redux';

import game from './game';
import statistics from './statistics';

const mainReducer = combineReducers({
    game,
    statistics,
});

export default mainReducer;
