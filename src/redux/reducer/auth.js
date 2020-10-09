
import { logout, isLoggedInUtils, saveUser } from '../../utils';

import { EMPTY_USER_DETAILS, LOGIN, CHECK_ISAUTHENTICATED } from '../actions/auth';

const initialState = {
    isAuthenticated: isLoggedInUtils() ? true : false,
    fetching: false,
    userDetail: {}
};

export default function (state = initialState, action) {
    const { payload, type } = action;
    switch (type) {
        case EMPTY_USER_DETAILS: {
            logout();
            return { ...state, userDetail: {}, isAuthenticated: false };
        }

        case LOGIN: {
            saveUser(payload.name)
            return { ...state, fetching: true, isAuthenticated: true, userDetail: payload };
        }

        case CHECK_ISAUTHENTICATED:
            return { ...state, isAuthenticated: payload }

        default:
            return state;
    }
};
