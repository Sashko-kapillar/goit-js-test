// const petya = {
//   name: "Petya",
//   showName() {
//     console.log(this.name);
//   },
// };
// petya.showName();

const petya = {
  name: "Petya",
  showThis() {
    console.log(this);
  },
  showName() {
    console.log(this.name);
  },
};
petya.showThis(); // {name: "Petya", showThis: ƒ, showName: ƒ}
petya.showName();

const pizzaPalace = {
  pizzas: ["Supercheese", "Smoked", "Four meats"],
  checkPizza(pizzaName) {
    return pizzas.includes(this.pizzas);
  },
  order(pizzaName) {
    const isPizzaAvailable = checkPizza(this.pizzas);

    if (!isPizzaAvailable) {
      return `Sorry, there is no pizza named «${pizzaName}»`;
    }

    return `Order accepted, preparing «${pizzaName}» pizza`;
  },
};

pizzaPalace.order("Four meats");
