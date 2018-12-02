import { GETNEWQUOTE, LOADINGQUOTE } from '../actions/types';

const initialState = {
  quote: '',
  loading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GETNEWQUOTE:
      return {...state, quote: action.payload}
    case LOADINGQUOTE:
      return {...state, loading: action.payload}
    default:
      return state;
  }
};
