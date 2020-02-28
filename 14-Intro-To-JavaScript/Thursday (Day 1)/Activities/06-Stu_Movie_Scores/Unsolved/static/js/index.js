// Array of movie ratings
var movieScores = [
  4.4,
  3.3,
  5.9,
  8.8,
  1.2,
  5.2,
  7.4,
  7.5,
  7.2,
  9.7,
  4.2,
  6.9
];

// Starting a rating count
var sum = 0;

// Arrays to hold movie scores
var goodMovieScores = [];
var okMovieScores = [];
var badMovieScores = [];


for (var i = 0; i < movieScores.length; i++){
  var score = movieScores[i];
  sum += score;

  if (score > 7) {
    goodMovieScores.push(score);
  }

  else if (score <= 7 && score > 5) {
    okMovieScores.push(score);
  }
  else {
    badMovieScores.push(score);
  }
}

var average = sum / movieScores.length; 

var numGoodMovies = goodMovieScores.length;
var numOkMovies = okMovieScores.length;
var numBadMovies = badMovieScores.length;

console.log(`There are ${numGoodMovies} good movies`);
console.log(`There are ${numOkMovies} good movies`);
console.log(`There are ${numBadMovies} good movies`);
console.log(`The average movie rating is ${average}`);


