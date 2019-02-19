import { fromJS } from 'immutable';
import videoDetailReducer from '../reducer';

describe('videoDetailReducer', () => {
  it('returns the initial state', () => {
    expect(videoDetailReducer(undefined, {})).toEqual(fromJS({}));
  });
});
