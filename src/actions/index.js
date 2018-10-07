import { GETNEWQUOTE } from './types';

export function getQuote(translated) {
  return {
    type: GETNEWQUOTE,
    payload: translated
  };
}
