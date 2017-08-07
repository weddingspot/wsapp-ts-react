import * as types from '../types';

import {
    VenuesListAction,
} from '../actions';
import { LOAD_VENUES_LIST } from '../constants';

const defaultVenuesListState = {
    venues: [],
    filters: [],
    selectedFilters: [],
    isLoading: true,
};

export function venues(
    state: types.WeddingVenuesState = defaultVenuesListState,
    action: VenuesListAction
) {
    switch (action.type) {
        case LOAD_VENUES_LIST:
            return {...state, ...action.payload, isLoading: false};
        default:
            return state;
    }
}
