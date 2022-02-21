/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const movieDB = {
    movies: [
      "Логан",
      "Лига справедливости",
      "Ла-ла лэнд",
      "Одержимость",
      "Скотт Пилигрим против...",
    ],
  };
  const sortArr = (arr) => {
    arr.sort();
  };
  const movieList = document.querySelector(".promo__interactive-list"),
    adv = document.querySelectorAll(".promo__adv img"),
    addForm = document.querySelector(".add"),
    addInput = addForm.querySelector(".adding__input"),
    checkbox = addForm.querySelector('[type="checkbox"]');

  addForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (addInput.value) {
      if (addInput.value.length > 22) {
        addInput.value = addInput.value.substring(0, 21) + "...";
      }
      if (checkbox.checked) {
        console.log("add favorite film");
      }
      movieDB.movies.push(addInput.value);
      movieDB.movies.sort();
      createMovieList(movieDB.movies, movieList);
    }
    addInput.value = "";
  });

  function createMovieList(films, parent) {
    parent.innerHTML = "";
    sortArr(films);
    films.forEach((film, i) => {
      parent.innerHTML += `   
            <li class="promo__interactive-item">${i + 1} ${film}
                  <div class="delete"></div>
            </li>   
   `;
    });
    document.querySelectorAll(".delete").forEach((btn, i) => {
      btn.addEventListener("click", () => {
        btn.parentElement.remove();
        movieDB.movies.splice(i, 1);
        createMovieList(films, parent);
      });
    });
  }
  createMovieList(movieDB.movies, movieList);

  const deleteAdv = (arr) => {
    arr.forEach((item) => {
      item.remove();
    });
  };
  deleteAdv(adv);

  const makeChanges = () => {
    document.querySelector(".promo__genre").textContent = "drama";
    document.querySelector(".promo__bg").style.backgroundImage =
      "url(../img/bg.jpg)";
  };
  makeChanges();
});
