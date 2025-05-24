// Primitive are immutable : there is no way to change (or mutate) a primitive value.
// Consists of (undefined, null, booleans, numbers, and strings)

let s = 'hello'; // Start with some lowercase text
s.toUpperCase(); // Returns "HELLO", but doesn't alter s
console.log(s); // "hello": the original string has not changed

// Objects and arrays are different from primitives.

let o = { x: 1 }; // Start with an object
o.x = 2; //  Mutate it by changing the value of a property
o.y = 3; //  Mutate it again by adding a new property

let a = [1, 2, 3]; // Arrays are also mutable
a[0] = 0; // Change the value of an array element
a[3] = 4; // Add a new array element

// Objects are not compared by value: two distinct objects are not equal even if they
// have the same properties and values.
// Arrays are not equal even if they have the same elements in the same order.

let o1 = { x: 1 },
  p = { x: 1 };
console.log(o1 === p);
let a1 = [],
  b = [];
console.log(a1 === b);

// Object (Reference types) are compared by reference
let a2 = [];
let b2 = a2;
b2[0] = 1;
a2[0];
console.log(a2 === b2);

// Making a new explicit copies of the properites
let a3 = ['a', 'b', 'c'];
let b3 = [];
for (let i = 0; i < a3.length; i++) {
  b3[i] = a3[i];
}

let c = Array.from(b3);
console.log(c);

// Similarly
function equalArrays(a, b) {
  if (a === b) return true;
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}
