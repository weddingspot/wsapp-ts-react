import * as types from '../types';

import {
    SelectVenueDetailsImage,
    SelectVenueDetailsTab,
    LoadVenueDetails,
} from '../actions';

import {
    SELECT_VENUE_IMAGE,
    SELECT_VENUE_DETAILS_TAB,
    LOAD_VENUE_DETAILS,
} from '../constants';

export const defaultState = {
    currentImage: {
        id: 0,
        credits: '',
        preview: '',
        original: '',
        thumbnail: '',
    },
    latitude: 0,
    longtitude: 0,
    isLoading: true,
    mapUrl: '',
    isContactModalOpen: false,
    venueId: 0,
    amenities: [],
    name: '',
    city: '',
    state: '',
    address: '',
    postalCode: '',
    images: [],
    catering: '',
    alcohol: '',

    maxCapacity: 0,
    ceremony: '',
    reception: '',
    cateringOptions: '',
    alcoholOptions: '',
    timeRestricionOptions: '',
    timeRestrictions: '',
    rentalFees: '',
    weddingCost: '',
    currentImageId: 0,
    currentTab: 0,
    description: '',
    styles: [],
    services: [],
    capacities: [],
    similarVenues: []
};

export function venueDetails(
    state: types.VenueDetailsState = defaultState,
    action: SelectVenueDetailsImage | SelectVenueDetailsTab | LoadVenueDetails
) {
    switch (action.type) {
        case SELECT_VENUE_IMAGE:
            return {...state, currentImageId: action.payload};
        case SELECT_VENUE_DETAILS_TAB:
            return {...state, currentTab: action.payload};
        case LOAD_VENUE_DETAILS:
            return {...state, ...action.payload};
        default:
            return state;
    }
}
