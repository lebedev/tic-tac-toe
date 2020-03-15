import { FETCH_STATISTICS_SUCCESS } from '../actions/constants';

const initialState = null;

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_STATISTICS_SUCCESS:
            return action.payload;

        default:
            return state;
    }
};
