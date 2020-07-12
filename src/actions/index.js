export const ADD_MOVIE = "ADD_MOVIE";
export const DELETE_MOVIE = "DELETE_MOVIE";
export const PUT_WATCHED_MOVIE = "PUT_WATCHED_MOVIE";

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
