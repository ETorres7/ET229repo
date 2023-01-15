import {halfOf, multiply} from '/lib.js';
import doSomething from './doSomething.js';
import { flag, touch } from './validator.js';
import { Vehicle, Car } from './classes.js';
import { author } from './arrow.js';
import { iterateVar, iterateLet } from './letAndConst.js';
import { add, userFriends, userTopFriends } from './defRestSpread.js';
import { parent } from './closures.js';


// Functions
console.log(halfOf(13795));
console.log(multiply(42, 79));
doSomething()

// Bindings
console.log('flag: ' + flag);
touch();
console.log('flag: ' + flag);

// Classes
console.log('classes');
let car1 = new Car('white');
console.log(car1.toString());
console.log(car1);
console.log(car1 instanceof Car);
console.log(car1 instanceof Vehicle);

// Arrow functions
console.log('Arrow functions');
author.printBooks();

// Let and Const
console.log('let example');
iterateVar();
// iterateLet(); //uncomment cause error due to let is inside a block
console.log('const example')
const me = 100;
console.log(me);
// me = 2; //uncomment cause error due to cannot reinitialize a const value

// Default, Rest and Spread
console.log('Default example');
console.log(add(1));
console.log(add(1,5));

console.log('Rest example');
userFriends('User', 'Bob', 'Alice');

console.log('Spread example');
userTopFriends(...['Alice', 'Bob','Michelle']);

// Closures
console.log('Closure example');
const childFN = parent();
childFN();

 








 