/*      =======   МАСИВ ОБ'ЄКТІВ   =======*/

/* ====  const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Stone skin", price: 520 },
  ],
  // метод об'єкту, повертає масив властивостей
  getPotions() {
    return this.potions;
  },
  // метод об'єкту, додає в кінець новий масив властивостей
  addPotion(newPotion) {
    this.potions.push(newPotion);
  },
  // метод об'єкту, очікує підрахунок вартості
  getTotalPrice() {
    let totalPrice = 0;
    // оператор for + of виконує ітерацію по масиву об'єктів
    for (const onePotion of this.potions) {
      totalPrice += onePotion.price; // підрахунок загальної вартості по значенню ключа 'price'
      console.log(onePotion.price);
    }
    return totalPrice;
  },
};
atTheOldToad.addPotion({ name: "Invisibility", price: 620 });
console.log(atTheOldToad.getPotions());
console.log(atTheOldToad.getTotalPrice());  ====*/

/* ========   ЗМІНА ОБ'ЄКТА У МАСИВІ   ========== */

const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Stone skin", price: 520 },
  ],
  getPotions() {
    return this.potions;
  },
  // метод, який приймає два параметра рядків
  updatePotionName(oldName, newName) {
    for (const getName of this.potions) {
      console.log(getName.name);
      if (getName.name === oldName) {
        //  замінюємо стару назву на нову
        getName.name = newName;
      }
    }
  },
};
atTheOldToad.updatePotionName("Stone skin", "Invisibility");
atTheOldToad.updatePotionName("Speed potion", "Polymorth");

/* ======   СИНТАКСИС spread і rest   ====== */
// function multiply(...args) {
//   console.log(args);
// }  Вільні параметри можуть бути позначені через три крапки ...
//  Ім'я параметра може бути довільним. Найчастіше його називають args або rest. синтаксис (...rest) дозволяє зібрати групу незалежних елементів у масив.
// function add(...args) {
//   let sumAdd = 0;
//   for (let i = 0; i <= args.length - 1; i++) {
//     sumAdd += args[i];
//   }
//   console.log(sumAdd);
//   return sumAdd;
// }
// add(15, 27);

function addOverNum(value, ...args) {
  let sumArgs = 0;
  for (let i = 0; i <= args.length - 1; i++) {
    // console.log(args);
    // console.log(value);
    if (value < args[i]) {
      sumArgs += args[i];
    }
  }
  console.log(sumArgs);
  return sumArgs;
}
addOverNum(10, 12, 4, 11, 48, 10, 8);

/* ======   ВХОДЖЕННЯ ПАРАМЕТРІВ !!!!  ====== */

// Оператор розширення ...spread
// Оператор ...spread в JavaScript використовується для розширення ітерованих
// об'єктів (таких як масиви або об'єкти) в інші масиви або об'єкти.

/* ===== РОЗШИРЕННЯ МАСИВІВ ====== */

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const combined = [...arr1, ...arr2];
//console.log(combined); // [1, 2, 3, 4, 5, 6]

/* ====== КОПІЮВАННЯ МАСИВІВ ====== */

// const original = [1, 2, 3];
// const copy = [...original];
// console.log(copy); // [1, 2, 3]

/* ====== РОЗШИРЕННЯ ОБ'ЄКТІВ ====== */

// const obj1 = { a: 1, b: 2 };
// const obj2 = { b: 3, c: 4 };
//
// const merged = { ...obj1, ...obj2 };
// console.log(merged); // { a: 1, b: 3, c: 4 }

/* ====== ПЕРЕДАЧА АРГУМЕНТІВ У ФУНКЦІЮ ====== */

// const numbers = [1, 2, 3];

// function sum(x, y, z) {
//   return x + y + z;
// }

// const result = sum(...numbers);
// console.log(result); // 6

function getExtremeScores(scores) {
  const best = Math.max(...scores);
  const worst = Math.min(...scores);
  console.log(Math.max(...scores));
  console.log(Math.min(...scores));
  const arr = { best, worst };
  return arr;
}

// getExtremeScores([89, 64, 42, 17, 93, 51, 26]);

const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];

const allScores = [
  ...firstGroupScores,
  ...secondGroupScores,
  ...thirdGroupScores,
];
console.log(allScores);
const bestScore = Math.max(...allScores);
const worstScore = Math.min(...allScores);

const defaultSettings = {
  theme: "light",
  public: true,
  withPassword: false,
  minNumberOfQuestions: 10,
  timePerQuestion: 60,
};
const overrideSettings = {
  public: false,
  withPassword: true,
  timePerQuestion: 30,
};

const finalSettings = { ...overrideSettings, ...defaultSettings };
console.log(finalSettings);
