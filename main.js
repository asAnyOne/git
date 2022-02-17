const numberOfFilms = +prompt("How much is films of you have been seen?", "");
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};
const movies = {};
const lastMovie = prompt("Last one of watching from movies", "");
const feed = prompt("How much do you like ? enter a number from 0 to 10", "");
const lastMovie2 = prompt("Last one of watching from movies", "");
const feed2 = prompt("How much do you like ? enter a number from 0 to 10", "");
// personalMovieDB.movies = {
//   [lastMovie]: feed,
//   [lastMovie2]: feed2,
// };
personalMovieDB.movies[lastMovie] = feed;
personalMovieDB.movies[lastMovie2] = feed2;
console.log(personalMovieDB);
