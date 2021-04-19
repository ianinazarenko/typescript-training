let character = 'mario';
let age = 50;

const circ = (diameter: number) => {
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
let job: string;
let isAdmin: boolean;
let room: number;

// room = '404';
room = 345;

let ninjas: string[];
// ninjas = [4, 6];
// ninjas.push('toshi');
let numbers: number[] = [];
numbers.push(4);

let mixedValues: (string | number)[] = [];
mixedValues.push(4);
mixedValues.push('hello');
// mixedValues.push(true);

let uid: string | number;
uid = 533;
uid = '533';

let someone: object;
someone = { name: 'James', job: 'sailor' };
someone = [];

let someoneElse: {
  name: string;
  isWorking: boolean;
};

// someoneElse = {};

let workingFor: any;
workingFor = 'Arcadia';
workingFor = 8;

let anyValue: any = 8;

let anyArrayType: any[] = [];
anyArrayType.push(5);
anyArrayType.push('hi');
anyArrayType.push({ name: 'Jack' });

let greet: Function;
greet = (sender: string, time?: string | number): void => {
  console.log(`${sender}: hello world`);
};

greet('Penny');
greet('Jesica', '10:34');

let foo: (a: string, b: string) => void;
foo = (name, greeting) => {
  console.log(`${name}: ${greeting}`);
};
