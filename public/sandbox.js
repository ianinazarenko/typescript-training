"use strict";
let character = 'mario';
let age = 50;
const circ = (diameter) => {
    return diameter * Math.PI;
};
console.log(circ(5));
let names = ['bryan', 'tom', 'dan'];
names.push('kathy');
// names.push(5);
// names = 'names'
const mixed = [4, 'hello', true];
mixed.push(5);
mixed.push(false);
// mixed.push([3])
mixed[0] = 'hey';
let hero = {
    name: 'Jeremy',
    age: 13,
    blackBelt: false,
};
// hero = {
//   name: 'Gerry',
//   age: 43,
//   blackBelt: true,
//   skills: ['fighting', 'sneaking']
// }
// hero.age = '13';
// hero.lastName = character;
// explicit types
let job;
let isAdmin;
let room;
// room = '404';
room = 345;
let ninjas;
// ninjas = [4, 6];
// ninjas.push('toshi');
let numbers = [];
numbers.push(4);
let mixedValues = [];
mixedValues.push(4);
mixedValues.push('hello');
// mixedValues.push(true);
let uid;
uid = 533;
uid = '533';
let someone;
someone = { name: 'James', job: 'sailor' };
someone = [];
let someoneElse;
// someoneElse = {};
let workingFor;
workingFor = 'Arcadia';
workingFor = 8;
let anyValue = 8;
let anyArrayType = [];
anyArrayType.push(5);
anyArrayType.push('hi');
anyArrayType.push({ name: 'Jack' });
let greet;
greet = (sender, time) => {
    console.log(`${sender}: hello world`);
};
greet('Penny');
greet('Jesica', '10:34');
let foo;
foo = (name, greeting) => {
    console.log(`${name}: ${greeting}`);
};
