import { takeLatest, call, put, select } from 'redux-saga/effects';
import { GET_DATA_ACTION } from './constants';
import { setDataAction } from './actions';
import { getDataApi} from './api';

export function* getData() {
  try {
    console.log('hello ')
    
    const url = "https://video.skincoachapp.com/v1/_debug/";
    
    const request = new Request(url, {
        method: 'GET',
        credentials: 'include',
        cache: 'no-cache',
        mode:'no-cors'
      });
      
      fetch(request)
      .then(function(response) {
       console.log(response);
      });
      
    // const response = yield call(getDataApi);
    // console.log(response);
    // process.exit(); 
    // if (response) {
    //   yield put(setDataAction(response));
    // }
  } catch (error) {
    console.error(error)
  }
}

// Individual exports for testing
export default function* defaultSaga() {
  yield takeLatest(GET_DATA_ACTION, getData);
}