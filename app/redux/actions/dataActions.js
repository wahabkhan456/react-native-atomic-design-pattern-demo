import * as types from './types';

export const getData = payload => ({ type: types.DATA_REQUEST, payload });

export const dataSuccess = payload => ({ type: types.DATA_SUCCESS, payload });

export const dataFailure = payload => ({ type: types.DATA_FAILURE, payload });
