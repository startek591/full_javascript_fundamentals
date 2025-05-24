// Symbols server as non-string property names.
// It does not have a literal syntax.
// Never return the same value twice.
// Safetly use the value as a property name
// Doesn't overwrite an existing property with the same name

let strname = 'string name';
let symname = Symbol('propname');
console.log(typeof strname);
console.log(typeof symname);
let o = {};
o[strname] = 1;
o[symname] = 2;
console.log(o[strname]);
console.log(o[symname]);
console.log(o[symname]);

let s = Symbol('sym_x');
console.log(s.toString());

let s1 = Symbol.for('shared');
let t = Symbol.for('shared');
console.log(s1 === t);
console.log(s.toString());
console.log(Symbol.keyFor(t));
