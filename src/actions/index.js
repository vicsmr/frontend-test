export const ADD_MOVIE = "ADD_MOVIE";
export const DELETE_MOVIE = "DELETE_MOVIE";
export const PUT_WATCHED_MOVIE = "PUT_WATCHED_MOVIE";
export const FILTER_BY_GENRE = "FILTER_BY_GENRE";
export const SEARCH_MOVIE = "SEARCH_MOVIE";

export function addMovie(movie) {
  const request = new Promise((resolve) => {
    movie.watched = 'false';
    resolve(movie)
  });

  return {
    type: ADD_MOVIE,
    payload: request
  };
}

export function deleteMovie(movie) {
  const request = new Promise((resolve) => {
    resolve(movie)
  });

  return {
    type: DELETE_MOVIE,
    payload: request
  };
}

export function putWatchedMovie(watchedMovieData) {
  const request = new Promise((resolve) => {
    resolve(watchedMovieData)
  });

  return {
    type: PUT_WATCHED_MOVIE,
    payload: request
  };
}

export function filterMoviesByGenre(genre) {
  const request = new Promise((resolve) => {
    resolve(genre)
  });
  
  return {
    type: FILTER_BY_GENRE,
    payload: request
  };
}

export function searchMovie(searchParam) {
  const request = new Promise((resolve) => {
    resolve(searchParam)
  });
  
  return {
    type: SEARCH_MOVIE,
    payload: request
  };
}
