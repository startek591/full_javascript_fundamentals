// Anything following double slashes is an English-language comment.
// Read the comments carefully: they explain the JavaScript code.

// A variable is a symbolic name for value
// Variables are declared with the let keyword
let x; // Declare a variable named x.

// Values can be assigned to variables with an = sign
x = 0;
console.log(x);

// JavaScript supports several types of values
x = 1;
console.log(x);
x = 0.01;
console.log(x);
x = 'hello world';
console.log(x);
x = 'JavaScript';
console.log(x);
x = true;
console.log(x);
x = false;
console.log(x);
x = null;
console.log(x);
x = undefined;
console.log(x);

// JavaScript's most important datatype is the object.
// An object is a collection of name/value pairs, or a string to value map.
let book = {
  topic: 'JavaScript',
  edition: 7,
};
console.log(book);

// Access the properties of an object with . or []:
book.topic; // => "JavaScript"
book['edition'];
book.author = 'Flanagan';
book.contents = {};
console.log(book);

// Conditional access properites with ?. (ES2020)
book.contents?.sect1; // => undefined: book.contents has no ch01 property.

// JavaScript also supports arrays (numerically indexed lists) of values:
let primes = [2, 3, 5, 7];
primes[0];
console.log(primes);
primes.length;
console.log(primes.length);
primes[primes.length - 1];
console.log(primes[primes.length - 1]);
primes[4] = 9;
console.log(primes[4]);
primes[4] = 11;
console.log(primes[4]);
let empty = [];
empty.length;
console.log(empty.length);

// Arrays and objects can hold other arrays and objects:
let points = [
  // An array with 2 elements
  { x: 0, y: 0 },
  { x: 1, y: 1 },
];

let data = {
  // An object with 2 properites
  trial1: [
    [1, 2],
    [3, 4],
  ],
  trial2: [
    [2, 3],
    [4, 5],
  ],
};

// Operators act on values (the operands) to produce a new value
// Arithmetic operators are some of the simplest:
console.log(3 + 2);
console.log(3 - 2);
console.log(3 * 2);
console.log(3 / 2);
console.log(points[1].x - points[0].x);
console.log('3' + '2');

// JavaScript defines some shorthand arithmetic operators
let count = 0; // Define a variable
count++;
count--;
count += 2;
count *= 3;
console.log(count);

// Equality and relational operators test whether to values are equal.
// unequal, less than, greater than, and so on. The evaluate to true or false.
let x2 = 2,
  y2 = 3; // These = signs are assignment, not equality tests
console.log(x2 === y2);
console.log(x2 !== y2);
console.log(x2 < y2);
console.log(x2 <= y2);
console.log(x2 > y2);
console.log(x2 >= y2);
console.log('two' === 'three');
console.log('two' > 'there');
console.log(false === x2 > y2);

// Logical operators combine or invert boolean values
console.log(x2 === 2 && y2 === 3);
console.log(x2 > 3 || y2 < 3);
console.log(!(x2 === y2));

// Functions are parameterized blocks of JavaScript code that we can invoke.
function plus1(x) {
  return x + 1;
}

console.log(plus1(y2));

let square = function (x2) {
  return x2 * x2;
};

console.log(square(plus1(y2)));

// When functions are assigned to the properties of an object, we call
// them "methods." All JavaScript objects (including arrays) have methods:
let a = [];
a.push(1, 2, 3);
a.reverse();
console.log(a);

points.dist = function () {
  let p1 = this[0];
  let p2 = this[1];
  let a = p2.x - p1.x;
  let b = p2.y - p1.y;
  return Math.sqrt(a * a + b * b);
};

console.log(points.dist());

function abs(x2) {
  if (x2 >= 0) {
    return x2;
  } else {
    return -x2;
  }
}
console.log(abs(-10) === abs(10));

function sum(array) {
  let sum = 0;
  for (let x of array) {
    sum += x;
  }
  return sum;
}
console.log(sum(primes));

function factorial(n) {
  let product = 1;
  while (n > 1) {
    product *= n;
    n--;
  }
}

factorial(4);

function factorial2(n) {
  let i,
    product = 1;
  for (i = 2; i <= n; i++) {
    product *= i;
    return product;
  }
}

console.log(factorial2(5));

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  distance() {
    return Math.sqrt(this.x * this.x + this.y + this.y);
  }
}

let p = new Point(1, 1);
console.log(p.distance());
