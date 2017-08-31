import * as constants from '../constants';
import * as types from '../types';
import { Dispatch } from 'redux';
import data from '../data';

export interface LoadVenueDetails {
    type: constants.LOAD_VENUE_DETAILS;
    payload: types.VenueDetailsState;
}

export interface SelectVenueDetailsImage {
    type: constants.SELECT_VENUE_IMAGE;
    payload: number;
}

export interface SelectVenueDetailsTab {
    type: constants.SELECT_VENUE_DETAILS_TAB;
    payload: number;
}

export type VenueDetailsAction = SelectVenueDetailsImage | SelectVenueDetailsTab | LoadVenueDetails;

export function loadVenueDetails(venueId: number): (dispatch: Dispatch<LoadVenueDetails>) => Promise<void> {
    return function(dispatch: Dispatch<LoadVenueDetails>): Promise<void> {
        return data.get.venueDetails(venueId).then((venueDetails) => {
            dispatch({
                type: constants.LOAD_VENUE_DETAILS,
                payload: venueDetails,
            });
        });
    };
}

export function selectVenueDetailsImage(imageId: number): (dispatch: Dispatch<VenueDetailsAction>) => void {
    return function(dispatch: Dispatch<VenueDetailsAction>): void {
        dispatch({
            type: constants.SELECT_VENUE_IMAGE,
            payload: imageId
        });
    };
}

export function selectVenueDetailsTab(tabNumber: number): (dispatch: Dispatch<VenueDetailsAction>) => void {
    return function(dispatch: Dispatch<VenueDetailsAction>): void {
        dispatch({
            type: constants.SELECT_VENUE_DETAILS_TAB,
            payload: tabNumber
        });
    };
}