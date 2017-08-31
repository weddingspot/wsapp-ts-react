import * as constants from '../constants';
import { Dispatch } from 'react-redux';

export {
    VendorImagesAction,
    LoadVendorImages,
    loadVendorImages,
} from './vendorImages';

export {
    SelectVenueDetailsImage,
    SelectVenueDetailsTab,
    LoadVenueDetails,
    VenueDetailsAction,
    loadVenueDetails,
    selectVenueDetailsImage,
    selectVenueDetailsTab,
} from './venueDetails';

export {
    VenuesListAction,
    loadVenuesList
} from './venuesList';

export interface ToggleHeaderLocations {
    type: constants.TOGGLE_LOCATIONS;
    payload: boolean;
}

export function toggleHeaderLocations(isLocationOpen: boolean): (dispatch: Dispatch<ToggleHeaderLocations>) => void {
    return function(dispatch: Dispatch<ToggleHeaderLocations>): void {
        dispatch({
            type: constants.TOGGLE_LOCATIONS,
            payload: isLocationOpen
        });
    };
}