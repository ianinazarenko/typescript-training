"use strict";
var character = 'mario';
var age = 50;
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ(5));
var names = ['bryan', 'tom', 'dan'];
names.push('kathy');
// names.push(5);
// names = 'names'
var mixed = [4, 'hello', true];
mixed.push(5);
mixed.push(false);
// mixed.push([3])
mixed[0] = 'hey';
var hero = {
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
var job;
var isAdmin;
var room;
// room = '404';
room = 345;
var ninjas;
// ninjas = [4, 6];
// ninjas.push('toshi');
var numbers = [];
numbers.push(4);
var mixedValues = [];
mixedValues.push(4);
mixedValues.push('hello');
// mixedValues.push(true);
var uid;
uid = 533;
uid = '533';
var someone;
someone = { name: 'James', job: 'sailor' };
someone = [];
var someoneElse;
// someoneElse = {};
var workingFor;
workingFor = 'Arcadia';
workingFor = 8;
var anyValue = 8;
var anyArrayType = [];
anyArrayType.push(5);
anyArrayType.push('hi');
anyArrayType.push({ name: 'Jack' });
var greet;
greet = function (sender, time) {
    console.log(sender + ": hello world");
};
greet('Penny');
greet('Jesica', '10:34');
var foo;
foo = function (name, greeting) {
    console.log(name + ": " + greeting);
};
