import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the ListVideos state domain
 */

const selectListVideosDomain = state =>
  state.get('listVideos', initialState);

/**
 * Default selector used by ListVideos
 */

const makeSelectListVideos = () =>
  createSelector(selectListVideosDomain, substate => substate.toJS());


export default makeSelectListVideos;
export { 
  selectListVideosDomain,
};
