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

/* =======   CLASS  constructor   ======= 
метод constructor */

/* =======   СТАТИЧНІ властивості   ======= */
class Car {
  #price;
  static maxPrice = 50000;

  constructor(params) {
    this.#price = params.price;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    if (newPrice >= Car.maxPrice) {
      return `${newPrice} is not realy`;
    }
    this.#price = newPrice;
  }
}
console.log(Car.maxPrice);
const audi = new Car({ price: 35000 });
console.log(audi.price); // 35000

audi.price = 49000;
console.log(audi.price); // 49000

audi.price = 51000;
console.log(audi.price); // 49000

/* =======   СТАТИЧНІ МЕТОДИ   ======= */
class Car {
  static #maxPrice = 50000;

  constructor(params) {
    this.price = params.price;
  }
}

const audi = new Car({ price: 36000 });
const bmw = new Car({ price: 64000 });

console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"
