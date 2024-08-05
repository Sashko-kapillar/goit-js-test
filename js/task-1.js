'use strict';

function makeTransaction(quantity, pricePerDroid) {
 const totalPrice = quantity * pricePerDroid;
  return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}

console.log(makeTransaction(5, 3000)); 
console.log(makeTransaction(3, 1000)); 
console.log(makeTransaction(10, 500));

// const age = 20;
// console.log(age);

// function makeMessage (name, price) {
// return `You picked ${name}, price per item is ${price} credits`;
// }
// console.log(makeMessage(5, 3000))