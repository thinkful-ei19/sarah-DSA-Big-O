'use strict';

// Even or odd
//O(1) - constant bc it checks only whether the input is even or not and returns a value of true or false. There will only ever be one step.
function isEven(value){
  if (value % 2 == 0){
    return true;
  }
  else
    return false;
}
// Are you here?
//O(n^2) - polynomial bc it is a for loop nested in a for loop comparing el locations in arr
function areYouHere(arr1, arr2) {
  for (let i=0; i<arr1.length; i++) {
    const el1 = arr1[i];
    for (let j=0; j<arr2.length; j++) {
      const el2 = arr2[j];
      if (el1 === el2) return true;
    }
  }
  return false;
}
// Doubler
//O(n) - linear bc input (dataset size) is proportional to the expression evaluation.
function doubleArrayValues(array) {
  for (let i=0; i<array.length; i++) {
    array[i] *= 2;
  }
  return array;
}
// Naive Search
//O(n) - linear order of growth bc iterates over array until it finds the matching item and ouputs it. 
function naiveSearch(array, item) {
  for (let i=0; i<array.length; i++) {
    if (array[i] === item) {
      return i;
    }
  }
}
// Creating pairs:
//O(n^2) - polynomial bc it is a for loop nested in a for loop (n*n)
function createPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for(let j = i+1; j < arr.length; j++) {
      console.log(arr[i] + ", " +  arr[j] );
    }
  }
}
// Computing fibonaccis
// A fibonacci sequence is one where every number is the sum of the previous two numbers in the sequence. For example the following is a fibonacci sequence: 1, 1, 2, 3, 5, 8, 13, 21, 34. The first number always starts at 1 (technically it is 0). Then the second number is 0+1 = 1, the third number is the sum of the first and the second numbers (1 + 2 = 3) and the sequence continues in a similar manner.

// Here, we have a function generateFib that uses iteration to generate a fibonacci sequence. Determine its run time complexity in big O.

//O(n) - linear bc we are iterating from 0 to whatever input and performs one action per operation. Increase in runtime is proportional.

function generateFib(num) {
  let result = [];
  for (let i = 1; i <= num; i++) {

    // we're adding the first item
    // to the result list, append the
    // number 0 to results
    if (i === 1) {
      result.push(0);
    }
    // ...and if it's the second item
    // append 1
    else if (i == 2) {
      result.push(1);
    }

    // otherwise, sum the two previous result items, and append that value to results.
    else {
      result.push(result[i - 2] + result[i - 3]);
    }
  }
  // once the for loop finishes
  // we return `result`.
  return result;
}
// An Efficient Search
// In this example, we return to the problem of searching using a more sophisticated approach than in naive search, above.

// Assume that the input array is always sorted.

//O(log(n)) - Logarithmic time bc we are taking a subset of the remaining input with each susequent iteration depending on the value of the currentElement compared to the item.

function efficientSearch(array, item) {
  let minIndex = 0;
  let maxIndex = array.length - 1;
  let currentIndex;
  let currentElement;

  while (minIndex <= maxIndex) {
    currentIndex = Math.floor((minIndex + maxIndex) / 2);
    currentElement = array[currentIndex];

    if (currentElement < item) {
      minIndex = currentIndex + 1;
    }
    else if (currentElement > item) {
      maxIndex = currentIndex - 1;
    }
    else {
      return currentIndex;
    }
  }
  return -1;
}


// Random element
//O(1) constant bc we are running one expression regardless of the length of the array (multiplying the array length by a random #)
function findRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
// Is it prime?
//O(n) - linear bc we take the most complex classification which is the for loop that increases proportionally with the size of the input (even though the first if statement is O(1)).
function isPrime(n) {
  // if n is less than 2 or a decimal, it's not prime
  if (n < 2 || n % 1 != 0) {
    return false;
  }
  // otherwise, check if `n` is divisible by any integer
  // between 2 and n.
  for (let i = 2; i < n; ++i) {
    if (n % i == 0) return false;
  }
  return true;
}
