import * as types from '../types';
import * as constants from '../constants';
import { Dispatch } from 'redux';

import data from '../data';

export interface LoadVendorsList {
    type: constants.LOAD_VENDORS_LIST;
    payload: types.VendorsListState;
}

export type VendorListAction = LoadVendorsList;

export function loadVendorsList(queryParams: {page?: number} = {}):
    (dispatch: Dispatch<LoadVendorsList>) => Promise<void> {

    return function(dispatch: Dispatch<LoadVendorsList>): Promise<void> {
        return data.get.vendorsList(queryParams).then((vendors) => {
            dispatch({
                type: constants.LOAD_VENDORS_LIST,
                payload: vendors
            });
        });
    };
}
