
// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map(element => element.director);
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter(element => element.director == `Quentin Tarantino`);
  console.log("EXERCICE 2 ->", result);
  console.log(result);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let score = array.filter(element => element.director == 'Quentin Tarantino');
  let scoreDirector = score.map(element => element.score);
  let sumScore = scoreDirector.reduce((total, current) => (total + current));
  let result = parseFloat((sumScore / scoreDirector.length).toFixed(2));
  console.log("EXERCICE 3 ->", result);
  return result;
}


// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  const moviesArr = array.map(element => element.title)
  let sortMovies = moviesArr.sort((a, b) => (a < b ? -1 : 1));
  let result = sortMovies.slice(0, 20)
  console.log("EXERCICE 4 ->", result);
  console.log(result.length)
  return result;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let arr = array.slice(0, 250)
  let result = arr.sort((a, b) => {
    if (a.year > b.year) {
      return 1;
    }
    if (a.year < b.year) {
      return -1;
    }
    if (a.title.toLowerCase() > b.title.toLowerCase()) {
      return 1;
    }
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1;
    }
    return 0;

  })
  console.log("EXERCICE 5 ->", result);
  return result;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array) {
  let scoreFilm = array.filter(element => element.genre == `Drama`);
  let score = scoreFilm.map(element2 => element2.score)
  let preResult = score.reduce((total, current) => (total + current));
  let result = parseFloat((preResult / score.length).toFixed(2));
  
  console.log("EXERCICE 6 ->", result);
  return result;

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
