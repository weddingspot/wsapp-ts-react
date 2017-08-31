export const isDevEnv = process.env.NODE_ENV === 'development';

export const CONNECTION_ERROR = 'CONNECTION_ERROR';
export type CONNECTION_ERROR = typeof CONNECTION_ERROR;

export const LOGIN_FAIL = 'LOGIN_FAIL';
export type LOGIN_FAIL = typeof LOGIN_FAIL;

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export type LOGIN_SUCCESS = typeof LOGIN_SUCCESS;

export const TOGGLE_LOCATIONS = 'TOGGLE_LOCATIONS';
export type TOGGLE_LOCATIONS = typeof TOGGLE_LOCATIONS;

export const SELECT_VENUE_IMAGE = 'SELECT_VENUE_IMAGE';
export type SELECT_VENUE_IMAGE = typeof SELECT_VENUE_IMAGE;

export const SELECT_VENUE_DETAILS_TAB = 'SELECT_VENUE_DETAILS_TAB';
export type SELECT_VENUE_DETAILS_TAB = typeof SELECT_VENUE_DETAILS_TAB;

export const VENUE_FILTER = 'VENUE_FILTER';
export type VENUE_FILTER = typeof VENUE_FILTER;

export const LOAD_VENUE_DETAILS = 'LOAD_VENUE_DETAILS';
export type LOAD_VENUE_DETAILS = typeof LOAD_VENUE_DETAILS;

export const LOAD_VENUES_LIST = 'LOAD_VENUES_LIST';
export type LOAD_VENUES_LIST = typeof LOAD_VENUES_LIST;

export const LOAD_VENUES_ERROR = 'LOAD_VENUES_ERROR';
export type LOAD_VENUES_ERROR = typeof LOAD_VENUES_ERROR;

export const LOAD_VENDOR_IMAGES = 'LOAD_VENDOR_IMAGES';
export type LOAD_VENDOR_IMAGES = typeof LOAD_VENDOR_IMAGES;

export const LOAD_VENDOR_IMAGES_ERROR = 'LOAD_VENDOR_IMAGES_ERROR';
export type LOAD_VENDOR_IMAGES_ERROR = typeof LOAD_VENDOR_IMAGES_ERROR;

export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export type SUBMIT_LOGIN = typeof SUBMIT_LOGIN;

export const LOAD_VENDORS_LIST = 'LOAD_VENDORS_LIST';
export type LOAD_VENDORS_LIST = typeof LOAD_VENDORS_LIST;

// ----- Environment depending constants ------ //
export const SERVER_ADDRESS = isDevEnv ? 'http://local.wedding-spot.com:9000' : 'http://192.241.203.80';

export const SERVER_PATHS = {
    venueImages: '/api/v1/vendors',
    login: '/registration/json_login/',
};
