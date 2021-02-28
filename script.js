

const personalMovieDB = {
    count:0,
    movies: {},
    actors: {},
    genres: [],
    privat: true, 

    // Спрашивает у пользователя количество просмотренных видео 
    start: function(){
        let i =0;
    
        personalMovieDB.count = +prompt("Сколько фильмов вы уже просмотрели?");
        // console.log(countMovie);
        
        while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
            
            personalMovieDB.count = +prompt(`Сколько фильмов вы уже просмотрели? ${i}`);
            i++;
        }
        personalMovieDB.count = personalMovieDB.count; 
    },

    // Уровень пользователя в просмотре фильма 
    personLavel: function (){

        if(personalMovieDB.count < 10){
            console.log("Просмотрено довольно мало фильмов");
        }else if (personalMovieDB.count > 9 && personalMovieDB.count < 31  ){
            console.log("Вы классический киноман");
        }else if (personalMovieDB.count > 30){
            console.log("Вы киноман");
        }else {
            console.log("Произошла ошибка");
        }
    
    },

    // Последний просмотренний фильм + оценка на этот фильм
    rememberMyFilms: function (){
        let lastWatchMovie,lastWatchMovieStar;
        for(let i = 0; i< 2; i++){
            lastWatchMovie = prompt("Последний просмотренний фильм");
            lastWatchMovieStar = +prompt("Оценка на фильм (Введите число от 0 до 10 иначе заполняите с начала )");
    
            if ((lastWatchMovie != null &&  lastWatchMovie.trim() != '' && lastWatchMovie.length < 50) &&
            (lastWatchMovieStar != null && !isNaN(lastWatchMovieStar))){
                
                    personalMovieDB.movies [lastWatchMovie] = lastWatchMovieStar;
                    
            }else {
                i--;
            }
        }
    },

    // Жанр фильма
    writeYourGenres: function (){
    
        let genresPerson = "";
    
        for (let i=0;i<=2;i++){
            genresPerson = prompt(`Какой жанр вам больше всего нравится? ${i+1}`);
            if (genresPerson != null && genresPerson.trim() != ""  && isNaN(parseInt(genresPerson)) && genresPerson.length < 50 ) {
            personalMovieDB.genres[i] = [genresPerson];
        }else{
            i--;
        }
         }
        personalMovieDB.genres.forEach( function (item, index, array){
            console.log(`Любимый жанр фильма ${index} - это ${array}`);
        });
    },

    // Изменение private account
    toggleVisibleMyDB:function  (){
        if(personalMovieDB.privat){
            personalMovieDB.privat = false;
        }else{
            personalMovieDB.privat = true;
        }
    },
    
    showMyDB:function (showDB){
        if(showDB){
            console.log(personalMovieDB); // 
        }else{
            console.log("Privat account");
        }
    }
};

// function toggleVisibleMyDB (visibleAccount, showMyDBin){
//     if(!visibleAccount){
//         visibleAccount = false;
//         showMyDBin(visibleAccount);
//     }else{
//         visibleAccount = true;
//         showMyDBin(visibleAccount);
//     }
// }

// function showMyDB (showDB){
//     if(showDB){
//         console.log(personalMovieDB); // 
//     }else{
//         console.log("Privat account");
//     }
// }

personalMovieDB.start();
personalMovieDB.personLavel();
personalMovieDB.rememberMyFilms();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showDB(personalMovieDB.privat);
personalMovieDB.writeYourGenres();
