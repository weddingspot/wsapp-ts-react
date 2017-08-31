import * as constants from '../constants';
import * as types from '../types';

import axios from 'axios';

import { VENUE_DETAILS } from '../fixtures/venue-details';
import { VENUES_LARGE, FILTERS } from '../fixtures';
import { Venue, WeddingVenueFilter, VendorImage } from '../types';
import { AxiosError } from 'axios';

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

const authToken: string | null = localStorage.getItem('authToken');

if (!!authToken) {
    axios.defaults.headers.common.Authorization = 'Bearer ' + authToken;
}

export interface Loader {
    venueDetails: (venueId: number) => Promise<{}>;
    venuesList: () => Promise<{}>;
}

export interface VenuesListData {
    venues: Array<Venue>;
    filters: Array<WeddingVenueFilter>;
}

export interface VenuesListDataError {
    error: string;
}

export type VenuesList = VenuesListData | VenuesListDataError;

export interface VendorImagesError {
    error: string;
}

export type VendorImagesList = Array<VendorImage> | VendorImagesError;

export type AuthTokenResponse = {
    access_token: string,
    token_type: string, expires_in: number,
    refresh_token: string,
    scope: string
};

export const xhr = {
    get: {
        venuesList: (): Promise<VenuesList> => {
            return new Promise((resolve, reject) => {
                setTimeout(
                    () => {
                        resolve({
                            venues: VENUES_LARGE,
                            filters: FILTERS,
                        });
                    },
                    2000
                );
            });
        },
        vendorImages: (venueId: number): Promise<VendorImagesList> => {
            return new Promise((resolve, reject) => {
                axios.get(
                    constants.SERVER_ADDRESS + '/api/v1/vendors/' + venueId + '/images/'
                ).then(({data}) => {
                    resolve(data.content);
                }).catch((error: AxiosError) => {
                    reject({
                        message: error.response || error.message
                    });
                });
            });
        },
        vendorsList: (queryParams: {page?: number} = {}): Promise<types.VendorsListState> => {
            return new Promise((resolve, reject) => {
                axios.get(
                    constants.SERVER_ADDRESS + '/api/v1/vendors/',
                    {
                        params: queryParams
                    }
                ).then(({data}) => {
                    resolve(data.content);
                }).catch((error: AxiosError) => {
                    reject({
                        message: error.response || error.message
                    });
                });
            });
        },
        authToken: (username: string, password: string): Promise<AuthTokenResponse> => {
            return new Promise<AuthTokenResponse>((resolve, reject) => {
                const formData = new FormData();
                formData.append('username', username);
                formData.append('password', password);
                formData.append('client_id', '123');
                formData.append('client_secret', '123');
                formData.append('grant_type', 'password');

                axios.post(
                    constants.SERVER_ADDRESS + '/oauth2/token/',
                    formData,
                ).then(({data}) => {
                    resolve(data);
                }).catch(({response: data}) => {
                    reject(data);
                });
            });
        },
        venueDetails: (venueId: number): Promise<{}> => {
            return new Promise((resolve, reject) => {
                setTimeout(
                    () => {
                        resolve(VENUE_DETAILS);
                    },
                    2000
                );
            });
        }
    }
};

export default xhr;