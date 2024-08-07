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

function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  orderedItems.forEach(function (element) {
    totalPrice += element;
  });
  return totalPrice;
}
console.log(calculateTotalPrice([12, 85, 37, 4]));

function filterArray(numbers, value) {
  numbers.forEach(function (element) {
    let newArray = [];
    console.log(`${element}`);
    if (element > value) {
      console.log(element);
      // newArray = numbers.push(element);
    }
    console.log(newArray);
  });
  // return newArray;
}

console.log(filterArray([1, 2, 3, 4, 5], 3));
