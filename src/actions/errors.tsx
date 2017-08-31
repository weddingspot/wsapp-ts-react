import * as constants from '../constants';

export interface ConnectionErrorAction {
    type: constants.CONNECTION_ERROR;
    payload: string;
}

export default ConnectionErrorAction;
