/**
 *  Redux saga class init
 */
import { takeEvery, all } from 'redux-saga/effects';
import * as types from '../actions/types';
import dataSaga from './dataSaga';

export default function* watch() {
  yield all([takeEvery(types.DATA_REQUEST, dataSaga)]);

}
