// class Chai {
//   flavour: string;
//   price: number;

//   //   constructor(flavour: string, price: number) {
//   //     this.flavour = flavour;
//   //     this.price = price;
//   //   }

//   constructor(flavour: string) {
//     this.flavour = flavour;
//     console.log(this);
//   }
// }

// const masalaChai = new Chai("Ginger Chai");
// masalaChai.flavour = "masala";
// masalaChai.price = 233;

// Access Modifires

class Chai {
  public flavor: string = "masala";

  private secretIngredient = "Cardamom";

  reveal() {
    return this.secretIngredient; // ok
  }
}

class Shop {
  protected shopName = "Chai Corner";
}

class Branch extends Shop {
  getname() {
    return this.shopName; //ok
  }
}

class Wallet {
  #balance = 100; // # for protected property

  getBalance() {
    return this.#balance;
  }
}

const w = new Wallet();
w.getBalance();

class Cup {
  readonly capacity: number = 250;
  constructor(capacity: number) {
    this.capacity = capacity;
  }
}

// Setter and Getter
class ModernChai {
  private _sugar = 2;

  get sugar() {
    return this._sugar;
  }

  set sugar(val: number) {
    if (val > 5) throw new Error("too sweet");
    this._sugar = val;
  }
}

const c = new ModernChai();
c.sugar = 3;

// Static Members

class EkChai {
  static shpeName = "Chaicode caffe";

  constructor(public flavor: string) {}
}

console.log(EkChai.shpeName);

// Abstract Classes
abstract class Drink {
  abstract make(): void;
}

class myChai extends Drink {
  make() {
    console.log("Brewing chai");
  }
}

// Concept of Composition

class Heater {
  heat() {}
}

class ChaiMaker {
  constructor(private heater: Heater) {}

  make() {
    this.heater.heat;
  }
}
