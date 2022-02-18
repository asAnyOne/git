"use strict";

let numberOfFilms;
function start() {
  numberOfFilms = +prompt("How much is films of you have been seen?", "");

  while (numberOfFilms == null || numberOfFilms == "" || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("How much is films of you have been seen?", "");
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt("Last one of watching from movies", "");
    const b = prompt("How much do you like ? enter a number from 0 to 10", "");

    if (a !== null && b !== null && b !== "" && a !== "" && a.length < 50) {
      personalMovieDB.movies[a] = b;
    } else {
      i--;
    }
  }
}
rememberMyFilms();

function detectPersonalLevel() {
  if (numberOfFilms < 10) {
    console.log("You have been less films watch ");
  } else if (numberOfFilms >= 10 && numberOfFilms < 30) {
    console.log("You are classic film watcher");
  } else if (numberOfFilms >= 30) {
    console.log("You are a cinemaddict");
  } else {
    console.log("Something is wrong");
  }
}
detectPersonalLevel();

function showMyDB(hiden) {
  if (!hiden) {
    console.log(personalMovieDB);
  }
}
showMyDB(personalMovieDB.privat);

function writeYourJenres() {
  for (let i = 0; i < 3; i++) {
    personalMovieDB.genres.push(prompt(`Enter yor genres ${i + 1}`, ""));
  }
}
writeYourJenres();
// const lastMovie = prompt("Last one of watching from movies", "");
// const feed = prompt("How much do you like ? enter a number from 0 to 10", "");
// const lastMovie2 = prompt("Last one of watching from movies", "");
// const feed2 = prompt("How much do you like ? enter a number from 0 to 10", "");
// personalMovieDB.movies = {
//   [lastMovie]: feed,
//   [lastMovie2]: feed2,
// };
// personalMovieDB.movies[lastMovie] = feed;
// personalMovieDB.movies[lastMovie2] = feed2;
