// Interface
interface Chai {
  flavor: string;
  price: number;
  milk?: boolean;
}

const masala: Chai = {
  flavor: "MASALA",
  price: 30,
};

interface Shop {
  readonly id: number;
  name: string;
}

const s: Shop = { id: 1, name: "Chaicode caffe" };
// s.id = 2

interface DiscountCalculator {
  (price: number): number;
}

const apply50: DiscountCalculator = (p) => p * 0.5;

interface TeaMachine {
  start(): void;
  stop(): void;
}

const machine: TeaMachine = {
  start() {
    console.log("start");
  },

  stop() {
    console.log("stop");
  },
};

interface ChaIRating {
  [flavor: string]: number;
}

const rating: ChaIRating = {
  masala: 4.5,
  ginger: 5,
};

interface User {
  name: string;
}

interface User {
  age: number;
}

const u: User = {
  name: "manish",
  age: 20,
};

interface A {
  a: string;
}
interface B {
  b: string;
}

interface C extends A, B {}
