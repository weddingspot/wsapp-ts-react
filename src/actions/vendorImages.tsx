import * as constants from '../constants';
import * as types from '../types';
import data from '../data';
import { Dispatch } from 'redux';
import { VendorImagesList } from '../data';

export interface LoadVendorImages {
    type: constants.LOAD_VENDOR_IMAGES;
    payload: Array<types.VendorImage>;
}

export interface LoadVendorImagesError {
    type: constants.LOAD_VENDOR_IMAGES_ERROR;
    payload: string;
}

export type VendorImagesAction = LoadVendorImages | LoadVendorImagesError;

export function loadVendorImages(vendorId: number): (
    dispatch: Dispatch<LoadVendorImages>
) => Promise<VendorImagesList> {

    return (dispatch: Dispatch<LoadVendorImages>): Promise<VendorImagesList> => {
        return new Promise((resolve, reject) => {
            data.get.vendorImages(vendorId).then((imagesList: VendorImagesList) => {
                dispatch({
                    type: constants.LOAD_VENDOR_IMAGES,
                    payload: imagesList,
                });
                resolve(imagesList);
            }).catch(err => {
                dispatch({
                    type: constants.CONNECTION_ERROR,
                    payload: err.message
                });
            });
        });

    };
}