import { API_PATH, FETCH_STATISTICS_SUCCESS } from './constants';

export const fetchStatistics = () => {
    return (dispatch) => {
        fetch(`${API_PATH}/score`)
            .then((response) => response.json())
            .then((json) => {
                if (json.ok) {
                    dispatch({ type: FETCH_STATISTICS_SUCCESS, payload: json.result });
                }
            })
            .catch(console.error);
    };
};

export const resetStatistics = () => {
    return (dispatch) => {
        fetch(`${API_PATH}/score/reset`, { method: 'POST' })
        .then((response) => response.json())
        .then((json) => {
            if (json.ok) {
                dispatch({ type: FETCH_STATISTICS_SUCCESS, payload: json.result });
            }
        })
        .catch(console.error);
    };
};
