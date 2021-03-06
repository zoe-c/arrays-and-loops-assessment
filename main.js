// 1.
// Without logging the values, list the value of `sports` and `total`
var sports = ['soccer', 'baseball'];
var total = sports.push('football', 'swimming');
// A:
sports = ['soccer', 'baseball', 'football', 'swimming'];
total = 4;
 // *NOTE* ABOUT THE ABOVE!!!: I admit, I did run this one out of curiosity/ wanting to understand. I had the answer to sports correct, I understand what .push -"ing" to an array does... what I do not understand is why the total console.log returned the numerical value (the length) of the array? Is this just a rule that I am now enlightened with, or is there an explanation for why?
// WAIT---GOOGLED----FOUND THE ANSWER WHY ON MODZILLA VVVVV-------------------------OO!
// When setting a property on a JavaScript array when the property is a valid array index and that index is outside the current bounds of the array, the engine will update the array's length property accordingly.

// 2.
// Using the `strings` array, wrte a function `longestString()`
// that accepts an array argument and returns the longest string in the array
var strings = ['this','is','a','collection','of','words'];

function longestString(x) {
  var longerWord = "";
  for (i = 0; i < x.length; i++) {
    if (x[i].length > longerWord.length) {
      longerWord = x[i];
    }
  }
  return longerWord;
}

longestString(strings);


console.assert(longestString(strings) === 'collection', {"message": "longestString should return 'collection'"});


// Use the `numbers` array for questions 3 - 8.
// var numbers = [1,12,4,18,9,7,11,3,101,5,6];


// 3.
// Write a function `smallestNumber()` that accepts an array
// and returns the smallest number in the array.
// A:

var numbers = [1,12,4,18,9,7,11,3,101,5,6];
function smallestNumber(numbs) {
   let smallest = numbs[1];
   for (i = 0; i <= numbs[numbs.length - 1]; i++) {
    if (numbs[i] < smallest) {
      smallest = numbs[i];
    }
  }
  return smallest;
}

smallestNumber(numbers);


console.assert(smallestNumber(numbers) === 1, {"message": "smallestNumber should return 1"});


// 4.
// Write a function `getEvens()` that accepts an array
// and returns only the even numbers in the array.
// A:
var numbers = [1,12,4,18,9,7,11,3,101,5, 6];

function getEvens(numbs) {
  let evenNumbs = [];
    for (i = 0; i <= (numbs.length - 1); i++) {
    if (numbs[i] % 2 === 0) {
      evenNumbs.push(numbs[i]);
    }
  }
  return evenNumbs;
}

console.log(getEvens(numbers));

console.assert(getEvens(numbers).toString() === '12,4,18,6', {'message': 'getEvens should return "12,4,18,6"'});


// 5.
// Write a function that accepts an array argument
// and returns the array reversed
// Hint: When looping over the array, start at the last index
// and decrement the iterator to zero
// A:

var numbers = [1,12,4,18,9,7,11,3,101,5, 6];

function arrayReverser(numbs) {
  let revArray = [];
    for (i = (numbs.length - 1); i >= 0; i--) {
    revArray.push (numbs[i]);
    }
  return revArray;
}
console.log(arrayReverser(numbers));




console.assert(arrayReverser(numbers).toString() === '6,5,101,3,11,7,9,18,4,12,1', {'message': 'arrayReverser should return "6,5,101,3,11,7,9,18,4,12,1"'});


// 6.
// Write a function that accepts an array argument
// and returns the sum of all of the numbers in the array
// A:
function sumArrayOfNumbers(numbers) {
   var sum = numbers.reduce((a, b) => a + b, 0);
    return sum;
}

sumArrayOfNumbers(numbers);


console.assert(sumArrayOfNumbers(numbers) === 177, {'message': 'sumArrayOfNumbers should return 177'});


// 7.
// Write a function that accepts an array argument
// and returns an array of only the numbers greater than 10
// A:
function numbersOver10(numbs) {
  let overTen = [];
    for (i = 0; i <= (numbs.length - 1); i++) {
      if (numbs[i] > 10) {
      overTen.push(numbs[i]);
    }
  }
  return overTen;
}

numbersOver10(numbers);


console.assert(numbersOver10(numbers).toString() === "12,18,11,101", {'message': 'numbersOver10 should return "12,18,11,101"'});


// 8.
// Write a function that accepts both an array and number argument
// and returns an array of only the numbers greater than the number passed to the function
// A:
function numbersOverX(numbers, x) {
  let overX = [];
    for (i = 0; i <= (numbers.length - 1); i++) {
      if (numbers[i] > x) {
      overX.push(numbers[i]);
      }
    }
  return overX;
}

numbersOverX(numbers,15);


console.assert(numbersOverX(numbers, 15).toString() === "18,101", {'message': 'numbersOverX should return "18,101"'});

// 9.
// Write a function `joinArrays()` that takes an array of arrays,
// and returns a single array with the contents of the second array
// listed after the contents of the first array
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var numbersTwo = [33,56,72,2,5,66,90,21,42];
// A:
function joinArrays(numbers, numbersTwo) {
     let joined = numbers.concat(numbersTwo);
     return joined;
 }
   joinArrays(numbers, numbersTwo);

console.assert(joinArrays([numbers, numbersTwo]).toString() === '1,12,4,18,9,7,11,3,101,5,6,33,56,72,2,5,66,90,21,42', {'message': 'joinArrays should return "1,12,4,18,9,7,11,3,101,5,6,33,56,72,2,5,66,90,21,42"'});


// 10.
// Using the `instructors` array, comment the value of each variable below
var instructors = [
    ['JD','JavaScript'],
    ['Tim','JavaScript'],
    ['Brit','Ruby'],
    ['Joe','iOS'],
    ['Dan','JavaScript'],
    ['Will','JavaScript'],
    ['Calvin','JavaScript'],
    ['James','Ruby']
];

var greenvilleInstructor = instructors[5];
// greenvilleInstructor = ['Will', 'Javascript']

var instructorOne = instructors[4][0];
// instructorOne = ['Dan','JavaScript'], ['JD','JavaScript']
//NOTE:THIS ONE ONLY RETURNED : Dan  (not even the string 'Dan' AND I DIDN'T UNDERSTAND THAT.....UNTIL.....


var instructorTwo = instructors[0][1];
// instructorTwo = Javascript
//NOTE:...UNTIL THIS ONE ALSO RETURNED: (without the quotes, too) Javascript.  I understand now, that the double specified index can help target a specific value IN A NESTED ARRAY. insructors[0][1] could read:
// [0]-- "The first array in the container array" [1]-- "The second value in this array".  The console returned "quote-less" values because (instead of just returning it) I console.log(ed) it!

var instructorThree = instructors[2][0];
// instructorThree = Brit
