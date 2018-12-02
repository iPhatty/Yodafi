import { GETNEWQUOTE, LOADINGQUOTE } from './types';

export function getQuote(searchTerm) {
  return dispatch => {
    dispatch(loadingQuote(true))
    const url = `https://cors-anywhere.herokuapp.com/https://api.funtranslations.com/translate/yoda.json?text=${searchTerm}`;
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(json => {
        const data = JSON.parse(JSON.stringify(json));
        dispatch(storeQuote(data.contents.translated));
        dispatch(loadingQuote(false));
      })
      .catch(error => {
        const errMsg = 'Something went wrong, please try again later';
        this.props.getQuote(errMsg);
        dispatch(loadingQuote(false));
      });
}
}

export function loadingQuote(boolean) {
    return {
      type: LOADINGQUOTE,
      payload: boolean
    }
}

export function storeQuote(boolean) {
    return {
      type: GETNEWQUOTE,
      payload: boolean
    }
}