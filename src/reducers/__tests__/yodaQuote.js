import yodaQuote from '../yodaQuote';
import { GETNEWQUOTE } from '../../actions/types';

it('returns a quote', () => {
  const action = {
    type: GETNEWQUOTE,
    payload: 'yoda'
  };

  expect(yodaQuote([], action)).toBe('yoda');
});

it('returns empty state', () => {
  const action = {
    type: 'test',
    payload: 'yoda'
  };

  expect(yodaQuote([], action)).toBeFalsy;
});
