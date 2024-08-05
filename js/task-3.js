'use strict';

// const username = " Poly!";
// const message = "Welcome Poly!";
// console.log(message + username);

function getElementWidth(content, padding, border) {
  if (typeof content === "string") {
    content = Number.parseFloat(content)
  }
  
  if (typeof padding === "string") {
    padding = Number.parseFloat(padding)
  }
  
  if (typeof border === "string") {
    border = Number.parseFloat(border)
  }
  const b = content + padding*2 + border*2;
  return (b);
}


console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200

// let g = "50px";
// if (typeof g === "string") {
//   g = Number.parseInt(g)
// }

// console.log(g);