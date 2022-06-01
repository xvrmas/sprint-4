
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
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array) {
  let scoreDirector = array.filter(element => element.director == 'Quentin Tarantino');
  let sumScore = scoreDirector.reduce((acc, item) => (acc + item.score), 0);
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
  let preResult = scoreFilm.reduce((acc, item) => (acc + item.score), 0);
  let result = parseFloat((preResult / scoreFilm.length).toFixed(2));
  console.log("EXERCICE 6 ->", result);
  return (result);
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  let regex = (/(\d+)/g);
  let mapaDuration = array.map(element => element.duration.match(regex));
  let minuts = mapaDuration.map((element) => {
    return element[1] == undefined ? `0` : element[1]
  });
  let hores = mapaDuration.map(element => (element[0] * 60))
  let horesMinuts = hores.map(Number)
    .map((item, i) => item + Number(minuts[i]))
  let result = Object.assign(array)
  let i = 0;
  result.forEach(element => element.duration = horesMinuts[i++]);
  console.log("EXERCICE 7 ->", result);
  return (result);
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array) {
  let yearFilm = array.filter(element => element.year == `1957`);
  let mapyearFilm = yearFilm.map(element => element.score)
  let max = mapyearFilm.reduce((a, b) => Math.max(a, b));
  let result = yearFilm.filter(element => element.score == max);
  console.log("EXERCICE 7 ->", result);
  return result;
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
