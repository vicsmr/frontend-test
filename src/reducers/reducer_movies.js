import { ADD_MOVIE } from "../actions/index";

export default function(state = [], action) {
  switch (action.type) {
    case ADD_MOVIE: {
      state.map(movie => movie.originalPosition++);
      action.payload.originalPosition = 0;
      action.payload.hidden = false;
      return [action.payload, ...state];
    }
  }
  return state;
}
