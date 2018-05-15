'use strict';

// =================================================================================
// Exercise 1 - Counting Sheep


//O(n) linear complexity bc the recursive expression repeats n # of times

function countSheep(num){
  //stopping condition of base case
  if(num === 0){
    console.log(`All sheep jumped over the fence`);
  } 
  //this is the recursive case
  //this will be executed until it reaches base case
  else{
    console.log(`${num}: Another sheep jump over the fence`);
    countSheep(num-1);
  }
}
// =================================================================================
// Exercise 2: Array Double
//O(n) - linear bc function runs n times until all elements of the array have been doubled.

function double_all(arr) {
  if (!arr.length) {
    return [];
  }
  return [arr[0] * 2, ...double_all(arr.slice(1))];
}

// =================================================================================
// Exercise 3 - Reverse String
//O(n) linear bc the expression must run n # of times dependent on the length of the string

function reverseString(str) {
  if (str.length < 2) {
    return str;
  }
  return reverseString(str.slice(1)) + str[0];
}


// =================================================================================
// Exercise 4 - Triangular Number
// Calculates the nth triangular number.
//O(n) linear bc it decrements n # of times until n is less than 2

function triangle(n) {
  if (n < 2) 
    return n;
  return n + triangle(n - 1);
}

// =================================================================================
// Exercise 5 - String Splitter

//O(n) linear complexity bc one must run recursively through a string slicing each element and splitting based on the sep. Therefore complexity generally increases proportionally to length.

function split(str, sep) {
  var idx = str.indexOf(sep);
  if (idx == -1) 
    return [str];
  //you don't have to return an array, you can return a string as an array of 
  //character 
  //return str;
  return [str.slice(0, idx)].concat(split(str.slice(idx + sep.length), sep));
//all these are valid syntax
//return (str.slice(0,idx) + (split(str.slice(idx + sep.length), sep)))
//return str.slice(0,idx).concat(split(str.slice(idx + sep.length), sep))
}

// =================================================================================
// Exercise 6 - Binary Representation
// Write a recursive function that prints out the binary representation of a given number. 

//O(log(n)) - Logarithmic time bc we are taking a subset of the remaining input with each susequent iteration dividing the num by 2 on each run.

function convertToBinary(num){
  if(num>0){
    let binary = Math.floor(num%2); //save the reminder in binary
    //divide the number by 2 and send that to the function again
    //carry the reminder to the next recursion call
    return (convertToBinary(Math.floor(num/2))+ binary);
  }else{
    return ''; //base case - at some point the divisions will lead to 0
  }
}

//=================================================================================
// Exercise 7 - Factorial
// Write a recursive program that finds the factorial of a given number. 

//O(n) linear bc we run the recursive case decrementing and muliplying by n in each case.
function factorial(n) {  
// Base Case - when n is equal to 0, we stop the recursion
  if (n === 0) {
    return 1;
  }
  // This is our Recursive Case
  // It will run for all other conditions except when n is equal to 0
  return n * factorial(n - 1);
}

// =================================================================================
// Exercise 8 - Fibonacci
// Write a recursive program that prints the fibonacci sequence of a given number. 

//O(n) linear complexity bc we are running our recursive expression n # of times (from n until n reaches 0).

function fibonacci(n) {
// Base case
  if (n <= 0) {
    return 0;
  }
  // Base case
  if (n <= 2) {
    return 1;
  }	
  // Recursive case
  return fibonacci(n - 1) + fibonacci(n - 2);	
}

// =================================================================================
// Exercise 9 - Anagrams

//O(2^n) - exponential time bc we are starting at a top layer (currentLetter) and running our expression through each subsequent letter/layer. As we increase input (# of layers/letter) we are exponentially increasing our runtime.


function anagrams(prefix, str){
  if(str.length <= 1){
    console.log(`The anagram is ${prefix}${str}`);
  } else {
    for(let i=0; i<str.length; i++){
      let currentLetter = str.substring(i, i+1); 
      let previousLetters = str.substring(0,i);
      let afterLetters = str.substring(i+1);
      anagrams(prefix+currentLetter, previousLetters+afterLetters);
    }
  }
}
function printAnagram(word){
  //console.log(`The word for which we will find an anagram is ${word}`);
  anagrams(' ', word);

}

// ==============================
// Exercise 10: Animal Hierarchy

//O(n) linear bc it runs n times through one obect at a time.

const animalHierarchy = [
  {id: 'Animals', parent: null},
  {id: 'Mammals', parent: 'Animals'},
  {id: 'Dogs', parent:'Mammals' },
  {id: 'Cats', parent:'Mammals' },
  {id: 'Golden Retriever', parent: 'Dogs'},
  {id: 'Husky', parent:'Dogs' },
  {id: 'Bengal', parent:'Cats' }
];

// ==============================
function traverse(animalHierarchy, parent) {
  let node = {};
  animalHierarchy.filter(item => item.parent === parent)
    .forEach(item => node[item.id] = traverse(animalHierarchy, item.id));
  return node;  
}


/*=================================================================================*/
// Exercise 11: Organization Chart

//O(n) linear bc it runs n times through one obect at a time.

let organization = {
  "Zuckerberg": {		
    "Schroepfer": {
      "Bosworth": {
        "Steve":{},
        "Kyle":{},
        "Andra":{}
      },
      "Zhao": {
        "Richie":{},
        "Sofia":{},
        "Jen":{}
      },
      "Badros": {
        "John":{},
        "Mike":{},
        "Pat":{}
      },
      "Parikh": {
        "Zach":{},
        "Ryan":{},
        "Tes":{}
      }
    },
    "Schrage": {
      "VanDyck": {
        "Sabrina":{},
        "Michelle":{},
        "Josh":{}
      },
      "Swain": {
        "Blanch":{},
        "Tom":{},
        "Joe":{}
      },
      "Frankovsky": {
        "Jasee":{},
        "Brian":{},
        "Margaret":{}
      }
    },
    "Sandberg": {
      "Goler": {
        "Eddie":{},
        "Julie":{},
        "Annie":{}
      },
      "Hernandez": {
        "Rowi":{},
        "Inga":{},
        "Morgan":{}
      },
      "Moissinac": {
        "Amy":{},
        "Chuck":{},
        "Vinni":{}
      },
      "Kelley": {
        "Eric":{},
        "Ana":{},
        "Wes":{}
      }
    }}};

function traverseA(data, depth = 0) {
  let indent = " ".repeat(depth * 4);
  Object.keys(data).forEach(key => {
    console.log(indent + key);
    traverseA(data[key], depth + 1)
  });
}

function traverseB(node, indent=0) {
  for (var key in node) {
    console.log(" ".repeat(indent), key);
    traverseB(node[key], indent + 4);
  }
}




function main(){
//console.log('#1 - count sheep');
//countSheep(5);

//console.log('#2 - Array Doubler');
//let arr = [10,5,3,4];
//console.log(double_all(arr));

//console.log('#3 - Reverse String');
//console.log(reverseString("tauhida"));

//console.log('#4 - nth Triangular Number');
//console.log(triangle(5));

//console.log('#5 - String Splitter');
//console.log(split('1/21/2018', '/'));

//console.log('#6 - Binary Representation');
//console.log(convertToBinary(25));

//console.log('#7 - Anagrams');
//printAnagram("east");

//console.log('#8 - animalHierarchy');
//console.log(traverse(animalHierarchy, null));

//console.log('#9 - Factorial');
//console.log(factorial(5)); //120

//console.log('#10 - Fibonacci');
//console.log(fibonacci(7));

  console.log('#11 - Organization Chart');
  console.log(traverseA(organization));
//console.log(traverseB(organization));

}
main()