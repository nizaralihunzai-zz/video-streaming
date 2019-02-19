import { takeLatest, call, put, select } from 'redux-saga/effects';
import { GET_DATA_ACTION } from './constants';
import { setDataAction } from './actions';
import { getDataApi} from './api';

export function* getData() {
  try {  
    const response = yield call(getDataApi);
    if (response) {
      yield put(setDataAction(response));
    }
  } catch (error) {
    console.error(error)
  }
}

// Individual exports for testing
export default function* defaultSaga() {
  yield takeLatest(GET_DATA_ACTION, getData);
}