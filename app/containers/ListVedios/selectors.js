import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the ListVedios state domain
 */

const selectListVediosDomain = state =>
  state.get('listVedios', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by ListVedios
 */

const makeSelectListVedios = () =>
  createSelector(selectListVediosDomain, substate => substate.toJS());


export default makeSelectListVedios;
export { 
  selectListVediosDomain,
};
