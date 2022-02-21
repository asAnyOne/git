"use strict";

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: true,
  start: function () {
    personalMovieDB.count = +prompt(
      "How much is films of you have been seen?",
      ""
    );

    while (
      personalMovieDB.count == null ||
      personalMovieDB.count == "" ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = +prompt(
        "How much is films of you have been seen?",
        ""
      );
    }
  },
  rememberMyFilms: function () {
    for (let i = 0; i < 2; i++) {
      const a = prompt("Last one of watching from movies", "");
      const b = prompt(
        "How much do you like ? enter a number from 0 to 10",
        ""
      );

      if (a !== null && b !== null && b !== "" && a !== "" && a.length < 50) {
        personalMovieDB.movies[a] = b;
      } else {
        i--;
      }
    }
  },
  detectPersonalLevel: function () {
    if (numberOfFilms < 10) {
      console.log("You have been less films watch ");
    } else if (numberOfFilms >= 10 && numberOfFilms < 30) {
      console.log("You are classic film watcher");
    } else if (numberOfFilms >= 30) {
      console.log("You are a cinemaddict");
    } else {
      console.log("Something is wrong");
    }
  },
  showMyDB: function (hiden) {
    if (!hiden) {
      console.log(personalMovieDB);
    }
  },
  toggleVisibleDB: function () {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },
  writeYourJenres: function () {
    for (let i = 0; i < 3; i++) {
      let a = prompt(`Enter yor genres ${i + 1}`, "");

      if (a !== null && a !== "") {
        personalMovieDB.genres.push(a);
      } else {
        i--;
      }
    }
  },
};
// personalMovieDB.start();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.showMyDB(personalMovieDB.privat);
// personalMovieDB.writeYourJenres();
// personalMovieDB.toggleVisibleDB();

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

const test = document.querySelector(".test"),
  div = document.createElement("div"),
  section = document.createElement("section"),
  a = document.createElement("a");

// test.after(div);
// test.prepend(div);
test.append(a);
test.before(div);
div.replaceWith(section);
