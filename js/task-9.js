// localStorage.setItem('ключ', 'значення');

// Збереження імені користувача
// localStorage.setItem("username", "JohnDoe");

// Збереження об'єкта (потрібно конвертувати в JSON)
const user = { name: "John", age: 30 };
localStorage.setItem("user", JSON.stringify(user));

// Отримання об'єкта (потрібно парсити з JSON)
const userString = localStorage.getItem("user");
const userObject = JSON.parse(userString);
console.log(userObject.name); // Виведе 'John'
console.log(userObject.age);

// видалення даних
localStorage.removeItem("ключ");

const form = document.querySelector(".feedback-form");
/* elements - це властивість об'єкта форми, яка повертає HTMLCollection всіх елементів форми. 
HTMLCollection – це схожий на масив об'єкт, який містить всі елементи форми 
(інпути, текстові поля, кнопки тощо)*/
const textarea = form.elements.message;
const localStorageKey = "goit-example-message";

/* Ця частина звертається до localStorage за значенням за ключем localStorageKey.
 Якщо значення за цим ключем знайдено, воно повертається. Якщо ж ні, повертається null.
?? "": Це оператор нульового злиття (nullish coalescing operator). Він перевіряє, чи значення 
ліворуч від нього є null або undefined. Якщо так, то використовується значення праворуч. 
У нашому випадку, якщо localStorage.getItem(localStorageKey) повертає null, то значенням для 
textarea.value буде пустий рядок "".  === */

textarea.value = localStorage.getItem(localStorageKey) ?? "";

form.addEventListener("input", (evt) => {
  localStorage.setItem(localStorageKey, evt.target.value);
});

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  console.log(evt.target.elements.message.value);
  localStorage.removeItem(localStorageKey);
  form.reset();
});
