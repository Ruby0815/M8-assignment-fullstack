//STEP 1
let $1movies = ["Inception", "Spider Man", "Note book", "The Lord of the Rings", "The Dark Knight"];
console.log(`Second movie in an array: ${$1movies[1]}\n\n`);

//STEP 2
const $2movies = new Array(5);//array using function construction method
$2movies[0] = "Inception";
$2movies[1] = "Spider Man";
$2movies[2] = "Note book";
$2movies[3] = "The Lord of the Rings";
$2movies[4] = "The Dark Knight";
console.log(`The first movie in the array is: ${$2movies[0]}\n\n`);

//STEP 3
let $3movies = new Array(5);//array using function construction method
$3movies[0] = "Inception";
$3movies[1] = "Spider Man";
$3movies[2] = "Note book";
$3movies[3] = "The Lord of the Rings";
$3movies[4] = "The Dark Knight"
$3movies.splice(2, 0, 'Oppenheimer')
console.log(`Total movies: ${$3movies.length}\n`)
console.log(`Movies array after adding new movie:  ${$3movies}\n\n`)

//STEP 4
// Declare an array using literal notation and assign favorite movies
let movies = [];
movies[0] = "Inception";
movies[1] = "The Shawshank Redemption";
movies[2] = "Pulp Fiction";
movies[3] = "The Dark Knight";
movies[4] = "Spider Man";
// Display the first movie in the array using the console
console.log("First movie in the array:", movies[0]);
delete movies[0];
console.log(`After deleting the first movie, The  movie-list in the array : ${movies}\n\n\n`);

//STEP 5
let $5movies = ["Inception", "Spider Man", "The Shawshank Redemption", "Pulp Fiction", "The Dark Knight", 'Barbie', 'Oppenheimer'];
console.log("Array access by for in loop")
for (m in $5movies) {
  console.log(` ${$5movies[m]}`);
}
console.log(`\n\n`);



//STEP 6
let $6movies = ["Inception", "Spider Man", "The Shawshank Redemption", "Pulp Fiction", "The Dark Knight", 'Barbie', 'Oppenheimer'];
console.log("Array access by for of loop")
for (m of $6movies) {
  console.log(m);
}

//STEP 7

let $7movies = ["Inception", "Spider Man", "The Shawshank Redemption", "Pulp Fiction", "The Dark Knight", 'Barbie', 'Oppenheimer'];
movies = $7movies.sort();
console.log(`\n\nmovies after sort`);
for (m of movies) {
  console.log(m);
}

//STEP 8
let favmovies = ["Inception", "Spider Man", "The Shawshank Redemption"];
let leastFavMovies = ["Pulp Fiction", "The Dark Knight", 'Barbie'];
console.log("\n\nMovies I like:\n\n");
for (let i = 0; i < favmovies.length; i++)
  console.log(favmovies[i]);
console.log("\nMovies I regret watching:\n\n")
for (let j = 0; j < leastFavMovies.length; j++)
  console.log(leastFavMovies[j]);

//STEP 9
let $fmovies = ["Inception", "Spider Man", "The Shawshank Redemption"];
let $leastFavMovies = ["Pulp Fiction", "The Dark Knight", 'Barbie'];
$fmovies = $fmovies.concat($leastFavMovies)
console.log(`\n\nMovies after concate and reverse operation:\n${$fmovies.reverse()}\n\n`);

//STEP 10
let $f1movies = ["Inception", "Spider Man", "The Shawshank Redemption"];
$f1movies = $f1movies.pop()
console.log(`\n\nLast movie in this array(pop()): ${$f1movies}\n\n`)

//STEP 11
let $f11movies = ["Inception", "Spider Man", "The Shawshank Redemption"];
$f11movies = $f11movies.shift()
console.log(`\n\nFirst movie in this array(shift()): ${$f11movies}\n\n`)

//STEP 12
console.log("step 12")
let $$movies = ['m1', 'm2', 'm10', 'm20'];// original array
let $leastfavmovies = ['m10', 'm20'];
let $favmovies = ['m22', 'm33'];
console.log(`\n\nOriginal array: ${$$movies}`);
for (i = 0; i < $leastfavmovies.length; i++) {

  for (let i = 0; i < $leastfavmovies.length; i++) {
    let index = $$movies.indexOf($leastfavmovies[i]);
    if (index !== -1) {
      $$movies[index] = $favmovies[i];
    }
  }
}

console.log(`\nAfter add my fav movies and remove least fav movie ,NEW ARRAY:  ${$$movies}\n\n`)


//STEP 13

movies = [["Movie 1", 1], ["Movie 2", 2], ["Movie 3", 3], ["Movie 4", 4], ["Movie 5", 5]];

let movieNames = movies.filter(item => typeof item[0] === 'string').map(item => item[0]);


console.log("\n\nname by filter in given array::", movieNames);

//STEP 14
let employees = ['zak', 'JESSICA', 'MARK', 'FRED', 'SALLY'];

let showEmployee = function (employees) {
  for (let i = 0; i < employees.length; i++)
    console.log(employees[i]);
}
console.log("Employees:\n\n\n")
showEmployee(employees);
//step 15

let testData = [58, '', 'abcd', true, null, false, 0];
let item1 = testData.filter((item1) => {
  return (item1 !== false && item1 !== null && item1 !== 0 && item1 !== "")
})
console.log(`\nbefore filter: ${testData}`);
console.log(`\nExpected Result": ${item1}`);


//STEP 16

function myfun() {
  let numarr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let arrIndex = Math.floor(Math.random() * numarr.length); // Generate a random index within the array length
  let randomNo = numarr[arrIndex]; // Get the random number from the array

  return randomNo;
}

let no1 = myfun();
console.log("\n\nRandom no from this array:", no1);



//STEP 17
let num = [12, 3, 4, 90, 3];
l = num.length;
let max = 0;
for (i = 0; i < num.length; i++)
  if (max < num[i]) {
    max = num[i];
  }
console.log("\n\nThe largest number is  :", max)