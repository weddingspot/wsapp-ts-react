import * as types from '../types';
import * as constants from '../constants';

import { AuthAction } from '../actions/auth';

const authToken = localStorage.getItem('authToken');

export const defaultLoginState = {
    isLoggedIn: !!authToken,
    email: '',
    firstName: '',
    lastName: '',
} as types.Auth;

export function auth(state: types.Auth = defaultLoginState, action: AuthAction) {
    switch (action.type) {
        case constants.LOGIN_FAIL:
            return {...state, isLoggedIn: false, loginFailError: action.payload};
        case constants.LOGIN_SUCCESS:
            localStorage.setItem('authToken', action.payload.access_token);
            return {...state, isLoggedIn: true};
        default:
            return state;
    }
}

export default auth;