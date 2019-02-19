import { fromJS } from 'immutable';
import ListVideos from '../reducer';

describe('ListVideos', () => {
  it('returns the initial state', () => {
    expect(ListVideos(undefined, {})).toEqual(fromJS({}));
  });
});
