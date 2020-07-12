export const ADD_MOVIE = "ADD_MOVIE";

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
