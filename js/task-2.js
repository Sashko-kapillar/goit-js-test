"use strict";

function getShippingMessage(country, price, deliveryFee) {
  const totalPrice = price + deliveryFee;
  return `You ordered ${country} droids worth ${totalPrice} credits!`;
}

console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"

function checkFileExtension(fileName, ext) {
  if (fileName.endsWith(ext)) {
    return "File extension matches";
  } else {
    return "File extension does not match";
  }
}
console.log(checkFileExtension("styles.css", ".js"));

function getFileName(file) {
  const fileName = file.indexOf(".");
  return `${fileName}`;
}

console.log(getFileName("index.html"));
