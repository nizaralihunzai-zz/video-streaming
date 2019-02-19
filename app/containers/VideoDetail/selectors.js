import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the videoDetail state domain
 */

const selectVideoDetailDomain = state => state.get('videoDetail', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by VideoDetail
 */

const makeSelectVideoDetail = () =>
  createSelector(selectVideoDetailDomain, substate => substate.toJS());

export default makeSelectVideoDetail;
export { selectVideoDetailDomain };
