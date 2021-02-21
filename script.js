
const countMovie = +prompt("Сколько фильмов вы уже просмотрели?");

const personalMovieDB = {
    count:countMovie,
    movies: {},
    actors: {},
    genres: {},
    privat: false
};

personalMovieDB.count = countMovie;

const lastWatchMovie = prompt("Последний просмотренний фильм");
const lastWatchMovieStar = prompt("Оценка на фильм");

personalMovieDB.movies [lastWatchMovie] = lastWatchMovieStar; 

console.log(personalMovieDB);