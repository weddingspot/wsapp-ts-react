import * as types from '../types';
import * as constants from '../constants';
import { VendorImagesAction } from '../actions/vendorImages';

export const defaultState = [];

export function vendorImages(state: Array<types.VendorImage> = defaultState, action: VendorImagesAction) {
    switch (action.type) {
        case constants.LOAD_VENDOR_IMAGES:
            return action.payload;
        case constants.LOAD_VENDOR_IMAGES_ERROR:
            return {...state, error: action.payload};
        default:
            return state;
    }
}