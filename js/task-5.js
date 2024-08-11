"use strict";

/* =========   КОЛБЕК ФУНКЦІЇ   ========= */
function greet(name) {
  return `Welcome ${name}!`;
}

// Викликаємо функцію greet і виводимо результат у консоль
console.log(greet("Mango")); // "Welcome Mango!"

// Виводимо функцію greet у консоль, не викликаючи її
console.log(greet); // ƒ greet() {return `Welcome ${name}!`}

function makePizza() {
  return "Your pizza is being prepared, please wait.";
}

const result = makePizza();
const pointer = makePizza;

console.log(result);
console.log(pointer);

// const numbers = [5, 10, 15, 20, 25];
// numbers.forEach(function (number, index) {
//   let i = 0;
//   console.log(`Index ${index}, value ${number}`);
//   i += number;
//   console.log(i);
// });

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   orderedItems.forEach(function (element) {
//     totalPrice += element;
//   });
//   return totalPrice;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));

// function filterArray(numbers, value) {
//   const newArray = [];
//   numbers.forEach(function (element) {
//     if (element > value) {
//       newArray.push(element);
//       console.log(newArray);
//     }
//   });
//   return newArray;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));

/* =======   СТРІЛОЧНІ ФУНКЦІЇ   ====== */

// const numbers = [5, 10, 15, 20, 25];

// const logMessage = (number, index) => {
//   console.log(`Index ${index}, value ${number}`);
// };
// numbers.forEach(logMessage);

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach(function (item) {
//     totalPrice += item;
//   });

//   return totalPrice;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));

// calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;
//   orderedItems.forEach((item) => {
//     totalPrice += item;
//   });
//   return totalPrice;
// };
// console.log(calculateTotalPrice([12, 85, 37, 4]));

// filterArray = (numbers, value) => {
//   const filteredNumbers = [];
//   console.log(numbers);
//   numbers.forEach((number) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });
//   console.log(numbers);
//   return filteredNumbers;
// };
// console.log(filterArray([1, 2, 3, 4, 5], 3));

function changeEven(numbers, value) {
  let newArray = [];
  numbers.forEach((element) => {
    if (element % 2 === 0) {
      element += value;
    }
    newArray.push(element);
  });
  return newArray;
}
console.log(changeEven([17, 24, 68, 31, 42], 100));
console.log(changeEven([1, 2, 3, 4, 5], 10));

/* =======   МЕТОДИ map ТА flatMap   ====== */

const planets = ["Earth", "Mars", "Venus", "Jupiter"];
const planetsLengths = planets.map((planet) => planet.length);
console.log(planetsLengths);

/*  =====   end   =====  */

const getUserEmails = (users) => {
  const userEmails = users.map((user) => user.email);
  console.log(userEmails);
  return userEmails;
};
// console.log(getUserEmails);
console.log(
  getUserEmails([
    {
      name: "Moore Hensley",
      email: "moorehensley@indexia.com",
      eyeColor: "blue",
      friends: ["Sharron Pace"],
      isActive: false,
      balance: 2811,
      skills: ["ipsum", "lorem"],
      gender: "male",
      age: 37,
    },
    {
      name: "Sharlene Bush",
      email: "sharlenebush@tubesys.com",
      eyeColor: "blue",
      friends: ["Briana Decker", "Sharron Pace"],
      isActive: true,
      balance: 3821,
      skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
      gender: "female",
      age: 34,
    },
    {
      name: "Ross Vazquez",
      email: "rossvazquez@xinware.com",
      eyeColor: "green",
      friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
      isActive: false,
      balance: 3793,
      skills: ["nulla", "anim", "proident", "ipsum", "elit"],
      gender: "male",
      age: 24,
    },
    {
      name: "Elma Head",
      email: "elmahead@omatom.com",
      eyeColor: "green",
      friends: ["Goldie Gentry", "Aisha Tran"],
      isActive: true,
      balance: 2278,
      skills: ["adipisicing", "irure", "velit"],
      gender: "female",
      age: 21,
    },
    {
      name: "Carey Barr",
      email: "careybarr@nurali.com",
      eyeColor: "blue",
      friends: ["Jordan Sampson", "Eddie Strong"],
      isActive: true,
      balance: 3951,
      skills: ["ex", "culpa", "nostrud"],
      gender: "male",
      age: 27,
    },
    {
      name: "Blackburn Dotson",
      email: "blackburndotson@furnigeer.com",
      eyeColor: "brown",
      friends: ["Jacklyn Lucas", "Linda Chapman"],
      isActive: false,
      balance: 1498,
      skills: ["non", "amet", "ipsum"],
      gender: "male",
      age: 38,
    },
    {
      name: "Sheree Anthony",
      email: "shereeanthony@kog.com",
      eyeColor: "brown",
      friends: ["Goldie Gentry", "Briana Decker"],
      isActive: true,
      balance: 2764,
      skills: ["lorem", "veniam", "culpa"],
      gender: "female",
      age: 39,
    },
  ])
);
