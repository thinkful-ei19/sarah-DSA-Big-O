'use strict';

//Exercise 1 - Counting Sheep

//O(n) linear complexity bc the recursive expression repeats n # of times

function countSheepLoop(num){
  for(let i=num; i>0; i--){
    console.log(`counting sheeps ${i}`);
  }
}
countSheepLoop(10);


//====================================================================
//Exercise 2: Take an array as input which contains an unknown set of numbers,
//and output an array which doubles the values of each item in that array. 

//O(n) - linear bc function iterates n times until all elements of the array have been doubled.

function double_all(arr) {
  var ret = Array(arr.length);
  for (var i = 0; i < arr.length; ++i) {
    ret[i] = arr[i] * 2;
  }
  return ret;
}
let arr = [10,4,5,2,1];
console.log(double_all(arr));

/*====================================================================*/
//Exercise 3: Take a string as input, reverse the string, and return the new
//string.
//Direct transformation of the tail-recursive form.

//O(n) linear bc iterates through n # of times

function reverse_tail(str) {
  var accumulator = "";
  while (str !== "") {
    accumulator = str[0] + accumulator;
    str = str.slice(1);
  }
  return accumulator;
}

/*====================================================================*/
//Exercise 4: Calculates the nth triangular number.
//Should always return n*(n+1)/2

//O(n) linear bc iterates through n # of times
function triangle(n) {
  var tot = 0;
  for (var i = 1; i <= n; ++i) {
    tot += n;
  }
  return tot;
}
/*====================================================================*/
//Exercise 5: Split a string based upon a separator 

//O(n) linear bc we iterate ONCE through the string

function split(str, sep) {
  var ret = [];
  while (true) {
    var idx = str.indexOf(sep);
    if (idx == -1) break;
    ret.push(str.slice(0, idx))
    str = str.slice(idx + sep.length);
  }
  ret.push(str);
  return ret;
}

// =================================================================================
// Exercise 6 - Binary Representation

//O(log(n)) bc it divides our input by 2 at each iteration. Woot.

function convertToBinaryIter(num){
  var binary = '';
  while(num>0){
    let rem = Math.floor(num%2);
    binary = rem + binary;
    num = Math.floor(num/2);
  }
  return binary;


}
console.log(convertToBinaryIter(124)); //1111100

// =================================================================================
// Exercise 7 - Factorial

//O(n) linear bc we are iterating n # of times from 1 to number (multiplying i by fact and returning fact once we reach number)

function factorialIterative(number){
  let fact = 1;
  for (let i = 1; i <= number; i++){
    fact *= i;
  }
  return fact;
}
console.log(factorialIterative(5));

// =================================================================================
// Exercise 8 - Fibonacci

//O(n) linear bc we are iterating n # of times from number to 0 

function fibonacciIterative(number){
  let num1 = 1;
  let num2 = 0;
  let fib = null;
  while(number > 0){
    fib = num1;
    num1 = num1+num2;
    num2 = fib;
    number--;
  }
  return num2;

}

//print the whole sequence
//O(n) linear bc we are iterating n # of times from number to 0 

//******** ES6 makes it a bit easier*****
function fibonacciIterative2(number){
  let [num1, num2] = [1,0];
  while(number-- > 0){
    [num1, num2] = [num2+num1, num1];
  }
  return num2;

}
console.log(fibonacciIterative2(3));

/*=================================================================================
Exercise 9 - Anagram
Too tidious to do this iteratively
*/

/*
Exercise 8 - Animal Heirarchy
Analyze it recursivly - no iterative version needed
*/

/*=================================================================================
Exercise 10 - Animal hierarchy
A program to analyze and understand recursion
No need to solve it iteratively
/*=================================================================================*/
/*
Exercise 11: Organization Chart
No need to have an iterative version of this
*/