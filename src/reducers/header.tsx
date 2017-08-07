import * as types from '../types';
import * as actions from '../actions';
import {
    TOGGLE_LOCATIONS,
} from '../constants';

export function header(
    state: types.HeaderState = {
        isLocationsOpen: false,
        isLoggedIn: false
    },
    action: actions.ToggleHeaderLocations
): types.HeaderState {
    switch (action.type) {
        case TOGGLE_LOCATIONS:
            return {...state, isLocationsOpen: action.payload};
        default:
            return state;
    }
}
