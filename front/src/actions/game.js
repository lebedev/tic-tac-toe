import { API_PATH, FETCH_GAME_SUCCESS } from './constants';

export const fetchGame = () => {
    return (dispatch) => {
        fetch(`${API_PATH}/game`)
        .then((response) => response.json())
        .then((json) => {
            if (json.ok) {
                dispatch({ type: FETCH_GAME_SUCCESS, payload: json.result });
            }
        })
        .catch(console.error);
    };
};

export const setMove = (index) => {
    return (dispatch) => {
        fetch(`${API_PATH}/game/move`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ index }),
        })
        .then((response) => response.json())
        .then((json) => {
            if (json.ok) {
                dispatch({ type: FETCH_GAME_SUCCESS, payload: json.result });
            }
        })
        .catch(console.error);
    };
};

export const requestNewGame = () => {
    return (dispatch) => {
        fetch(`${API_PATH}/game/next`)
        .then((response) => response.json())
        .then((json) => {
            if (json.ok) {
                dispatch({ type: FETCH_GAME_SUCCESS, payload: json.result });
            }
        })
        .catch(console.error);
    };
};

export const requestGameReset = () => {
    return (dispatch) => {
        fetch(`${API_PATH}/game/reset`, { method: 'POST' })
        .then((response) => response.json())
        .then((json) => {
            if (json.ok) {
                dispatch({ type: FETCH_GAME_SUCCESS, payload: json.result });
            }
        })
        .catch(console.error);
    };
};
