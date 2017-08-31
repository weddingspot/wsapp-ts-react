import { Dispatch } from 'redux';
import * as constants from '../constants';
import data from '../data';

export interface LoginFail {
    type: constants.LOGIN_FAIL;
    payload: string;
}
export interface SubmitLogin {
    type: constants.SUBMIT_LOGIN;
}
export interface LoginFailResponse {
    success: boolean;
    error: string;
}

export interface LoginSuccessResponse {
    type: constants.LOGIN_SUCCESS;
    payload: {
        access_token: string;
        expires_in: number;
        refresh_token: string;
        scope: string;
        token_type: string;
    };
}

export type AuthAction = LoginFail | LoginSuccessResponse;

export function submitLogin(username: string, password: string): (dispatch: Dispatch<AuthAction>) => Promise<{}> {
    return function (dispatch: Dispatch<AuthAction>): Promise<{}> {

        dispatch({type: constants.SUBMIT_LOGIN});

        return new Promise<{}>((resolve, reject) => {
            data.get.authToken(username, password).then(ret => {
                dispatch({
                    type: constants.LOGIN_SUCCESS,
                    payload: ret
                });
                resolve(ret);
            }).catch(err => {
                dispatch({
                    type: constants.LOGIN_FAIL,
                    payload: err
                });
                reject(err.data.error_description);
            });
        });
    };
}
