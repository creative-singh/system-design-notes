// Product Interface (conceptual)
class Burger {
  prepare() {
    throw new Error("Method 'prepare()' must be implemented.");
  }
}

// Concrete Products
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

class BasicWheatBurger extends Burger {
  prepare() {
    console.log("Preparing Basic Wheat Burger with bun, patty, and ketchup!");
  }
}

class StandardWheatBurger extends Burger {
  prepare() {
    console.log("Preparing Standard Wheat Burger with bun, patty, cheese, and lettuce!");
  }
}

class PremiumWheatBurger extends Burger {
  prepare() {
    console.log("Preparing Premium Wheat Burger with gourmet bun, premium patty, cheese, lettuce, and secret sauce!");
  }
}

// Factory Interface
class BurgerFactory {
  createBurger(type) {
    throw new Error("Method 'createBurger(type)' must be implemented.");
  }
}

// Concrete Factories
class SinghBurger extends BurgerFactory {
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

class KingBurger extends BurgerFactory {
  createBurger(type) {
    switch (type.toLowerCase()) {
      case "basic":
        return new BasicWheatBurger();
      case "standard":
        return new StandardWheatBurger();
      case "premium":
        return new PremiumWheatBurger();
      default:
        console.log("Invalid burger type!");
        return null;
    }
  }
}

// Client Code
const myFactory = new SinghBurger();
const burger = myFactory.createBurger("standard");
if (burger) burger.prepare();

console.log("=====");

const healthFactory = new KingBurger();
const healtyBurger = healthFactory.createBurger("standard");
healtyBurger.prepare();
