for (let i = 0; i < 5; i++) {
  console.log(i);
}

let count = 0;

while (count < 3) {
  console.log("Count:", count);
  count++;
}

let doValue = 0;
do {
  console.log("Value:", doValue);
  doValue++;
} while (doValue < 3);

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}

for (let i; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(`i = ${i}, j = ${j}`);
  }
}
function sum(a, b) {
  return a + b;
}

console.log(sum(3, 5));

function sayHello(name) {
  console.log(`Hello, ${name}`);
}
sayHello("Тимофей");

function printInfo(n = "Гость", f = "Фамилия") {
  console.log("Привет, " + n, f);
}
printInfo();
printInfo("Андрей", "Заиченко");

function greet(name = "Гость") {
  console.log("Привет, " + name);
}
greet();
greet("Анастасия");

const add = function (a, b) {
  return a + b;
};
console.log(add(2, 3));
function makeCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());

function sumFunc(a, b) {
  return a + b;
}

const sumFunc2 = (a, b) => a + b;

//const double = x * 2;

const sumFunc3 = (a, b) => a + b;

const sayGreeting = () => console.log("Hello");

const square = (x) => x * x;
const calculate = (a, b) => {
  let result = a + b;
  return result * 2;
};

let numberArr = [1, 2, 3, 4, 5];
console.log(numberArr);

console.log(numberArr[0]);
console.log(numberArr[1]);

let colors = ["red", "green", "blue"];

console.log("Первый элемент: ", colors[0]);
console.log("Последний элемент: ", colors[colors.length - 1]);

colors[1] = "yellow";

console.log("Массиы colors:", colors);

let numbersArr = [1, 2, 3, 4, 5];
console.log("Длина массива:", numbersArr.length);

numbersArr.push(10);
console.log("После рор():", numbersArr);

let student = [];

student.push("Alice");
student.push("Bob");
student.push("Charlie");

student.pop();

console.log("Итоговый массив students:", student);

let numbers2 = [10, 20, 30];
for (let i = 0; i < numbers2.length; i++) {
  console.log(numbers2[i]);
}

for (let value of numbers2) {
  console.log(value);
}

let mixedArray = [1, "text", true, 3.14];
console.log(mixedArray);

console.log(numberArr.includes(1));
console.log(numberArr.indexOf(2));

//console.log(fruits.includes("ЯБЛОКО"));
//console.log(fruits.includes("МАНГО"));

let cities = ["Москва", "Санкт-Петербург", "Казань", "Новосибирск"];
let cityToFind = "Казнь";

let index = cities.indexOf(cityToFind);

if (index !== -1) {
  console.log(`Город "${cityToFind}"найден под индексом ${index}`);
  console.log(`Город"${cityToFind}" не найден`);
}

// практическая 1
console.log("Книга");
let book = {
  title: "Война и мир",
  author: "Лев толстой",
  year: 1869,
};
console.log("Название: ", book.title);
console.log("Автор: ", book.author);
console.log("Год:", book.year);

book.year = 2020;
console.log("Обновляем год", book.year);

// let user2 = {
//   name1: "Ivan",
//   age: 20,
//   isStudent: true,
//   sayHello: function () {
//     console.log(`Hello, my name is "${name1}"`);
//   },
// };

// user2.sayHello();
// console.log(user2);

// console.log(user2.name1);
// console.log(user2.age);

// console.log(user2["name"]);

// практическая 2

let car = {
  brand: "Volvo ",
  year: 2022,
  getInfo: function () {
    console.log(`Информация об автомобиле: ${this.brand},${this.year} года выпуска.`);
  },
};
car.getInfo();

// for (let key in user2) {s
//   console.log(key + ": " + user2[key]);
// }

// практическая 3

let product = {
  name5: "Ноутбук",
  price: 75000,
  inStock: true,
  category: "Электроника",
  brand: "HP",
};

console.log("Свойства объекта product: ");
for (let key in product) {
  console.log(`${key}: ${product[key]}`);
}

let student3 = {
  name: "Григорий",
  skills: ["HTML", "CSS", "JS"],
  address: {
    city: "Волжский",
    street: "Пушкина",
  },
};
console.log(student3.name);
console.log(student3.skills[0]);
console.log(student3.address.city);
