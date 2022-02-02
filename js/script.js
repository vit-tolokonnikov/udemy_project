"use strict";

let numberOfFilms = +prompt("Сколько фильмов вы посмотрели?");

let personalMovieDB = {
    count: [],
    movies: {},
    actors: {},
    genres: {},
    privat: false,
}

let movie1 = prompt('Один из последних просмотренных фильмов?'),
    rate1 = prompt('На сколько оцените его?'),
    movie2 = prompt('Один из последних просмотренных фильмов?'),
    rate2 = prompt('На сколько оцените его?');

personalMovieDB.movies[movie1] = rate1;
personalMovieDB.movies[movie2] = rate2;

console.log(personalMovieDB)