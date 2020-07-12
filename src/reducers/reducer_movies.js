import { ADD_MOVIE, DELETE_MOVIE, PUT_WATCHED_MOVIE, FILTER_BY_GENRE } from "../actions/index";

export default function(state = [], action) {
  switch (action.type) {
    case ADD_MOVIE: {
      state.map(movie => movie.originalPosition++);
      action.payload.originalPosition = 0;
      action.payload.hidden = false;
      return [action.payload, ...state];
    }
    case DELETE_MOVIE: {
      const moviePosition = state.findIndex(movie => action.payload.name === movie.name);
      const originalPositionMovieToDelete = state[moviePosition].originalPosition;
      const moviesListLength = state.length;
      const restList = state.splice(moviePosition, moviesListLength - moviePosition);
      restList.map(movie => movie.originalPosition > originalPositionMovieToDelete ? movie.originalPosition-- : movie);
      const newOrderList = state.concat(restList);
      return newOrderList.filter(movie => movie.name !== action.payload.name);
    }
    case PUT_WATCHED_MOVIE: {
      const moviePosition = state.findIndex(movie => action.payload.name === movie.name);
      if (action.payload.watched === 'true') {
        return moveToTheEndOfList(state, moviePosition);
      } else {
        return moveToPositionOnList(state, moviePosition, action.payload.originalPosition);
      }
    }
    case FILTER_BY_GENRE: {
      if (action.payload) {
        state.map(movie => movie.hidden = (movie.genres.find(
          genre => action.payload.toUpperCase() === genre.toUpperCase()
        ) === undefined));
      } else {
        state.map(movie => movie.hidden = false);
      }
      return [...state];
    }
  }
  return state;
}

function moveToTheEndOfList(list, itemToMove) {
  let newList =[...list];
  let cutOut = newList.splice(itemToMove, 1) [0];
  newList.push(cutOut);
  return newList;
}

function moveToPositionOnList(list, itemToMove, positionToMove) {
  let newList =[...list];
  let cutOut = newList.splice(itemToMove, 1) [0];
  newList.splice(positionToMove, 0, cutOut);
  return newList;
}
