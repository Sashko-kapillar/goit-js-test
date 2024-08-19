/* =======   This   ======= */

const pizzaPalace = {
  pizzas: ["Supercheese", "Smoked", "Four meats"],
  checkPizza(pizzaName) {
    return this.pizzas.includes(pizzaName);
  },
  order(pizzaName) {
    const isPizzaAvailable = this.checkPizza(pizzaName);

    if (!isPizzaAvailable) {
      return `Sorry, there is no pizza named «${pizzaName}»`;
    }

    return `Order accepted, preparing «${pizzaName}» pizza`;
  },
};

console.log(pizzaPalace.checkPizza("Four meats"));

console.log(pizzaPalace.order("Four meats"));

const book = {
  updateTitle(newTitle) {
    console.log(this);
  },
};

const update = book.updateTitle;

update("Lord Of The Rings");

/* =======   PROP   ======= */

const apartment = {
  rooms: 4,
  floor: 2,
  taxFree: false,
};

const condo = Object.create(apartment);
condo.rooms = 3;
console.log(condo.rooms);

/* =======   CLASS   ======= */

class User {
  // Тіло класу
}

const mango = new User();
console.log(mango); // {}

const poly = new User();
console.log(poly); // {}

/* =======   CLASS  constructor ======= 
метод constructor */
