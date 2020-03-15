import { FETCH_GAME_SUCCESS } from '../actions/constants';

const initialState = null;

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_GAME_SUCCESS:
            return action.payload;

        default:
            return state;
    }
};
