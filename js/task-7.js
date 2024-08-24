/* innerHTML */
const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
const list = document.querySelector(".list");

const markup = technologies
  .map((technology) => `<li class="list-item">${technology}</li>`)
  .join("");

// Check the console, you'll see a single string with HTML tags
// console.log(markup);

// Adding all the markup in one operation
list.innerHTML = markup;

/* insertAdjacentHTML */

const listTwo = document.querySelector(".list");

const newTechnologies = ["React", "TypeScript", "Node.js"];
const markup2 = newTechnologies
  .map((technologyTwo) => `<li class="list-item new">${technologyTwo}</li>`)
  .join("");

listTwo.insertAdjacentHTML("beforeend", markup2);
// listTwo.insertAdjacentHTML("beforebegin", "<h2>Popular technologies</h2>");

const btn = document.querySelector(".btn");
const button = document.createElement("button");
button.classList.add("my-button");
button.type = "submit";
button.textContent = "enjoy";

console.log(button);
// button.insertAdjacentHTML("afterend", btn);
// button.innerHTML = button;

const singleBtn = document.querySelector("#single");

const handleClick = () => {
  alert("click event listener callback");
};

singleBtn.addEventListener("click", handleClick);
