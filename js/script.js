"use strict";

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        this.count = +prompt("Сколько фильмов вы посмотрели?");

        while (this.count == '' || this.count == null || isNaN(this.count)) {
            this.count = +prompt("Сколько фильмов вы посмотрели?");
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt('Один из последних просмотренных фильмов?'),
                b = prompt('На сколько оцените его?');

            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done')
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы - киноман")
        } else {
            console.log("Произошла ошибка");
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB)
        }
    },
    toggleVisibleMyDB: function () {
      if (personalMovieDB.privat) {
          personalMovieDB.privat = false;
      } else {
          personalMovieDB.privat = true;
      }
    },
    writeYourGenrs: function () {
        for (let i = 1; i < 4; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);

            if (genre === '' || genre == null) {
                console.log("Вы ввели некорректные данные или не ввели их вовсе");
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    },

}