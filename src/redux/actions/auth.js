export const EMPTY_USER_DETAILS = "EMPTY_USER_DETAILS";

export const logoutUser = () => dispatch => {
    return new Promise((resolve, reject) => {
        dispatch({
            type: EMPTY_USER_DETAILS
        });
        return resolve();
    });
}


export const LOGIN = "LOGIN";

export const login = (data) => dispatch => {
    return new Promise((resolve, reject) => {
        dispatch({
            type: LOGIN,
            payload: data
        });
    });
}


export const CHECK_ISAUTHENTICATED = "CHECK_ISAUTHENTICATED";

export const isAuthenticated = (data) => dispatch => {
    return new Promise((resolve, reject) => {
        dispatch({
            type: CHECK_ISAUTHENTICATED,
            payload: data
        });
        return resolve()
    });
}