import { combineReducers } from 'redux';
import * as types from '../types';

import { errors } from './errors';
import { venues } from './venuesList';
import { header } from './header';
import { venueDetails } from './venueDetails';
import { auth } from './auth';
import { vendorImages } from './vendorImages';
import { vendors } from './vendors';

import { reducer as formReducer } from 'redux-form';

export default combineReducers<types.StoreState>({
    auth,
    errors,
    header,
    vendors,
    vendorImages,
    venues,
    venueDetails,
    form: formReducer,
});