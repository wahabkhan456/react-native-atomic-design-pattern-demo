import { put, call } from 'redux-saga/effects';
import * as dataActions from '../actions/dataActions';
import fetchData from 'app/api/methods/fetchData';

export default function* dataSaga({ payload }) {
  try {
    const response = yield call(_ => fetchData());
    if (response) {
      yield put(dataActions.dataSuccess(response));

    }
  } catch (error) {
    yield put(dataActions.dataFailure(error));
  }
}
