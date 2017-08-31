import * as types from '../types';
import * as constants from '../constants';

import ErrorAction from '../actions/errors';

export const defaultState = {
    connectionError: '',
};

export function errors(state: types.ErrorsState = defaultState, action: ErrorAction) {
    switch (action.type) {
        case constants.CONNECTION_ERROR:
            return {
                ...state,
                connectionError: action.payload
            };
        default:
            return state;
    }
}

export default errors;