let msg = 'Hello, ' + 'world'; // Produces the string "Hello, world"
let firstName = 'Jonathan';
let greeting = 'Welcome to my blog, ' + ' ' + firstName;
console.log(msg);
console.log(greeting);

let s = 'Hello, world'; // Start with some text.

// Obtaining portions of a string
console.log(s.substring(1, 4));
console.log(s.slice(1, 4));
console.log(s.slice(-3));
console.log(s.split(', '));

// Searching a string
console.log(s.indexOf('l'));
console.log(s.indexOf('l', 3));
console.log(s.indexOf('zz'));
console.log(s.lastIndexOf('l'));

// Boolean searching functions in ES6 and later
console.log(s.startsWith('Hell'));
console.log(s.endsWith('!'));
console.log(s.includes('or'));

// Creating modified versions of a string
console.log(s.replace('llo', 'ya'));
console.log(s.toLowerCase());
console.log(s.toUpperCase());
console.log(s.normalize());
console.log(s.normalize('NFD'));

// Inspecting individual (16-bit) characters of a string
console.log(s.charAt(0));
console.log(s.charAt(s.length - 1));
console.log(s.charCodeAt(0));

// String padding function in ES2017
console.log('x'.padStart(3));
console.log('x'.padEnd(3));
console.log('x'.padStart(3, '*'));
console.log('x'.padEnd(3, '-'));

// Space trimming functions. trim() is ES5, others ES2019
console.log(' test '.trim());
console.log(' test '.trimStart());
console.log(' test '.trimEnd());

// Miscellaneous string methods
console.log(s.concat('!'));
console.log('<>'.repeat(5));
