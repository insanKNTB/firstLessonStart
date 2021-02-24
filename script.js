
let countMovie;

function start (){
    let i =0;

    countMovie = +prompt("Сколько фильмов вы уже просмотрели?");
    console.log(countMovie);
    
    while (countMovie == "" || countMovie == null || isNaN(countMovie)){
        
        countMovie = +prompt(`Сколько фильмов вы уже просмотрели? ${i}`);
        i++;
    }
}

// start();

function personLavel (){

    if(countMovie < 10){
        console.log("Просмотрено довольно мало фильмов");
    }else if (countMovie > 9 && countMovie < 31  ){
        console.log("Вы классический киноман");
    }else if (countMovie > 30){
        console.log("Вы киноман");
    }else {
        console.log("Произошла ошибка");
    }

}

// personLavel();

const personalMovieDB = {
    count:countMovie,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// personalMovieDB.count = countMovie;

let lastWatchMovie,lastWatchMovieStar;

function rememberMyFilms(){
    for(let i = 0; i< 2; i++){
        lastWatchMovie = prompt("Последний просмотренний фильм");
        lastWatchMovieStar = prompt("Оценка на фильм");

        if (lastWatchMovie != null && lastWatchMovieStar != null && lastWatchMovie.trim() != '' && lastWatchMovieStar.trim() &&
        lastWatchMovie.length < 50) {
            
            personalMovieDB.movies [lastWatchMovie] = lastWatchMovieStar;
        
        }else {
            i--;
        }
    }
}

// rememberMyFilms();



function showMyDB (showDB){
    if(!showDB){
        console.log(personalMovieDB);
    }else{
        console.log("Privat account");
    }
}

showMyDB(personalMovieDB.privat);


function writeYourGenres (){
    
    let genresPerson = "";

    for (let i=0;i<=2;i++){
        genresPerson = prompt(`Какой жанр вам больше всего нравится? ${i+1}`);
        if (genresPerson != null && genresPerson.trim() != ""  && isNaN(parseInt(genresPerson)) && genresPerson.length < 50 ) {
        personalMovieDB.genres[i] = [genresPerson];
    }else{
        i--;
    }
    }
}

writeYourGenres();
