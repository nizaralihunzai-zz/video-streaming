/*
 *
 * ListVedios actions
 *
 */

import { DEFAULT_ACTION, SET_DATA_ACTION, GET_DATA_ACTION } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function getDataAction() {
  return {
    type: GET_DATA_ACTION,
    
  };
}

export function setDataAction(payload) {
  return {
    type: SET_DATA_ACTION,
    payload
  };
}