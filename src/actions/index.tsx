import * as constants from '../constants';
import { Dispatch } from 'react-redux';
import * as types from '../types';

import load from '../data';

export interface ToggleHeaderLocations {
    type: constants.TOGGLE_LOCATIONS;
    payload: boolean;
}

export interface SelectVenueDetailsImage {
    type: constants.SELECT_VENUE_IMAGE;
    payload: number;
}

export interface SelectVenueDetailsTab {
    type: constants.SELECT_VENUE_DETAILS_TAB;
    payload: number;
}

export interface VenueFilter {
    type: constants.VENUE_FILTER;
    payload: Array<number>;
}

export interface LoadVenueDetails {
    type: constants.LOAD_VENUE_DETAILS;
    payload: types.VenueDetailsState;
}

export interface LoadVenuesList {
    type: constants.LOAD_VENUES_LIST;
    payload: types.WeddingVenuesState;
}

export type VenueDetailsAction = SelectVenueDetailsImage | SelectVenueDetailsTab | LoadVenueDetails;
export type VenuesListAction = LoadVenuesList;

export function loadVenuesList(): (dispatch: Dispatch<LoadVenuesList>) => Promise<void> {
    return function(dispatch: Dispatch<LoadVenuesList>): Promise<void> {
        return load.venuesList().then((venuesList) => {
            dispatch({
                type: constants.LOAD_VENUES_LIST,
                payload: venuesList,
            });
        });
    };
}

export function loadVenueDetails(venueId: number): (dispatch: Dispatch<LoadVenueDetails>) => Promise<void> {
    return function(dispatch: Dispatch<LoadVenueDetails>): Promise<void> {
        return load.venueDetails(venueId).then((venueDetails) => {
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

export function toggleHeaderLocations(isLocationOpen: boolean): (dispatch: Dispatch<ToggleHeaderLocations>) => void {
    return function(dispatch: Dispatch<ToggleHeaderLocations>): void {
        dispatch({
            type: constants.TOGGLE_LOCATIONS,
            payload: isLocationOpen
        });
    };
}
