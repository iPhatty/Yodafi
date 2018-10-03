import { GETNEWQUOTE } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case GETNEWQUOTE:
      return action.payload.data;
    default:
      return state;
  }
};
