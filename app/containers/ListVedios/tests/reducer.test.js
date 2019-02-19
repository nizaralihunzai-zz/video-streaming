import { fromJS } from 'immutable';
import ListVedios from '../reducer';

describe('ListVedios', () => {
  it('returns the initial state', () => {
    expect(ListVedios(undefined, {})).toEqual(fromJS({}));
  });
});
