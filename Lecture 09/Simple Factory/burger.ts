// Burger Interface (conceptual)
// In JS, we don’t have interfaces, so we define a base class
class Burger {
  prepare() {
    throw new Error("Method 'prepare()' must be implemented.");
  }
}

// Concrete Burger Implementations
class BasicBurger extends Burger {
  prepare() {
    console.log("Preparing Basic Burger with bun, patty, and ketchup!");
  }
}

class StandardBurger extends Burger {
  prepare() {
    console.log("Preparing Standard Burger with bun, patty, cheese, and lettuce!");
  }
}

class PremiumBurger extends Burger {
  prepare() {
    console.log("Preparing Premium Burger with gourmet bun, premium patty, cheese, lettuce, and secret sauce!");
  }
}

// Burger Factory
class BurgerFactory {
  createBurger(type) {
    switch (type.toLowerCase()) {
      case "basic":
        return new BasicBurger();
      case "standard":
        return new StandardBurger();
      case "premium":
        return new PremiumBurger();
      default:
        console.log("Invalid burger type!");
        return null;
    }
  }
}

// Client Code
const type = "standard";
const myBurgerFactory = new BurgerFactory();
const burger = myBurgerFactory.createBurger(type);
const premiumBurger = myBurgerFactory.createBurger("premium");

if (burger) {
  burger.prepare();
}

console.log("====");

premiumBurger.prepare();
