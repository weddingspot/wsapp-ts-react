import { combineReducers } from 'redux';
import * as types from '../types';

import { venues } from './venuesList';
import { header } from './header';
import { venueDetails } from './venueDetails';

export default combineReducers<types.StoreState>({
    header,
    venues,
    venueDetails,
});