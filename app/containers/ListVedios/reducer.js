/*
 *
 * VediosList reducer
 *
 */

import { fromJS } from 'immutable';
import {DEFAULT_ACTION, SET_DATA_ACTION } from './constants';

export const initialState = fromJS({
  vedios_list:[],  
});

function listVediosReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    
    case SET_DATA_ACTION:
      console.log(action);
      return state.set('vedios_list', action.payload);
      
    default:
      return state;
  }
}

export default listVediosReducer;
