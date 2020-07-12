import { ADD_MOVIE, DELETE_MOVIE, PUT_WATCHED_MOVIE, FILTER_BY_GENRE, SEARCH_MOVIE } from "../actions/index";

export default function(state = [], action) {
  switch (action.type) {
    case ADD_MOVIE: {
      return addMovie(state, action.payload);
    }
    case DELETE_MOVIE: {
      return deleteMovie(state, action.payload.name);
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
      return filterMoviesByGenre(state, action.payload);
    }
    case SEARCH_MOVIE: {
      return searchMovie(state, action.payload);
    }
  }
  return state;
}

function addMovie(state, payload) {
  state.map(movie => movie.originalPosition++);
  payload.originalPosition = 0;
  payload.hidden = false;
  return [payload, ...state]
}

function searchMovie(state, searchParam) {
  state.map(movie => {
    const searchParamUpperCase = searchParam.toUpperCase();
    const nameMovieUpperCase = movie.name.toUpperCase();
    movie.hidden = !nameMovieUpperCase.includes(searchParamUpperCase);
  })
  return [...state];
}

function filterMoviesByGenre(state, genreFilter) {
  if (genreFilter) {
    state.map(movie => movie.hidden = (movie.genres.find(
      genre => genreFilter.toUpperCase() === genre.toUpperCase()
    ) === undefined));
  } else {
    state.map(movie => movie.hidden = false);
  }
  return [...state];
}

function deleteMovie(state, movieName) {
  const newOrderList = reorderListWhenDelete(state, movieName);
  return newOrderList.filter(movie => movie.name !== movieName);
}

function reorderListWhenDelete(state, movieName) {
  const moviePosition = state.findIndex(movie => movieName === movie.name);
  const originalPositionMovieToDelete = state[moviePosition].originalPosition;
  const moviesListLength = state.length;
  const restList = state.splice(moviePosition, moviesListLength - moviePosition);
  restList.map(movie => movie.originalPosition > originalPositionMovieToDelete ? movie.originalPosition-- : movie);
  return state.concat(restList);
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
