// Product 1 --> Burger
class Burger {
  prepare() {
    throw new Error("Method 'prepare()' must be implemented.");
  }
}

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

// Product 2 --> Garlic Bread
class GarlicBread {
  prepare() {
    throw new Error("Method 'prepare()' must be implemented.");
  }
}

class BasicGarlicBread extends GarlicBread {
  prepare() {
    console.log("Preparing Basic Garlic Bread with butter and garlic!");
  }
}

class CheeseGarlicBread extends GarlicBread {
  prepare() {
    console.log("Preparing Cheese Garlic Bread with extra cheese and butter!");
  }
}

class BasicWheatGarlicBread extends GarlicBread {
  prepare() {
    console.log("Preparing Basic Wheat Garlic Bread with butter and garlic!");
  }
}

class CheeseWheatGarlicBread extends GarlicBread {
  prepare() {
    console.log("Preparing Cheese Wheat Garlic Bread with extra cheese and butter!");
  }
}

// Abstract Factory
class MealFactory {
  createBurger(type) {
    throw new Error("Method 'createBurger()' must be implemented.");
  }

  createGarlicBread(type) {
    throw new Error("Method 'createGarlicBread()' must be implemented.");
  }
}

// Concrete Factory 1
class SinghBurger extends MealFactory {
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

  createGarlicBread(type) {
    switch (type.toLowerCase()) {
      case "basic":
        return new BasicGarlicBread();
      case "cheese":
        return new CheeseGarlicBread();
      default:
        console.log("Invalid Garlic bread type!");
        return null;
    }
  }
}

// Concrete Factory 2
class KingBurger extends MealFactory {
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

  createGarlicBread(type) {
    switch (type.toLowerCase()) {
      case "basic":
        return new BasicWheatGarlicBread();
      case "cheese":
        return new CheeseWheatGarlicBread();
      default:
        console.log("Invalid Garlic bread type!");
        return null;
    }
  }
}

// Client Code
const burgerType = "basic";
const garlicBreadType = "cheese";

// You can swap between SinghBurger and KingBurger factories
const mealFactory1 = new SinghBurger();
const mealFactory2 = new KingBurger();

const burger = mealFactory1.createBurger(burgerType);
const garlicBread = mealFactory1.createGarlicBread(garlicBreadType);

if (burger) burger.prepare();
if (garlicBread) garlicBread.prepare();

console.log("====")

const healtyBurger = mealFactory2.createBurger(burgerType);
const healtyGarlicBread = mealFactory2.createGarlicBread(garlicBreadType);

if (healtyBurger) healtyBurger.prepare();
if (healtyGarlicBread) healtyGarlicBread.prepare();

