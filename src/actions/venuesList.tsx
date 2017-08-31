import * as types from '../types';
import * as constants from '../constants';
import { Dispatch } from 'redux';

import data, { VenuesList } from '../data';

export interface VenueFilter {
    type: constants.VENUE_FILTER;
    payload: Array<number>;
}

export interface LoadVenuesList {
    type: constants.LOAD_VENUES_LIST;
    payload: types.WeddingVenuesState;
}

export interface LoadVenuesError {
    type: constants.LOAD_VENUES_ERROR;
    payload: string;
}

export type VenuesListAction = LoadVenuesList | LoadVenuesError;

export function loadVenuesList(): (dispatch: Dispatch<LoadVenuesList>) => Promise<VenuesListAction> {
    return (dispatch: Dispatch<LoadVenuesList>): Promise<VenuesListAction> => {
        return new Promise((resolve, reject) => {
            data.get.venuesList().then(
                (response: VenuesList) => {
                    dispatch({
                        type: constants.LOAD_VENUES_LIST,
                        payload: response,
                    });
                },
                (err: VenuesList) => {
                    dispatch({
                        type: constants.LOAD_VENUES_ERROR,
                        payload: err,
                    });
                }
            );
        });
    };
}
