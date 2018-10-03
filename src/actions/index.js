import axios from 'axios';
import { GETNEWQUOTE } from './types';

export function getQuote(searchTerm) {
  const url = `https://cors-anywhere.herokuapp.com/https://api.funtranslations.com/translate/yoda.json?text=${searchTerm}`;
  const response = axios.get(url);

  return {
    type: GETNEWQUOTE,
    payload: response
  };
}
