import * as types from '../types';
import * as constants from '../constants';

import { VendorListAction } from '../actions/vendors';

export const defaultState = {
    count: 0,
    next: null,
    previous: null,
    results: [] as Array<types.Vendor>
};

export function vendors(state: types.VendorsListState = defaultState, action: VendorListAction) {
    switch (action.type) {
        case constants.LOAD_VENDORS_LIST:
            return {...state, ...action.payload};
        default:
            return state;
    }
}