const chaiFlavour: string[] = ["Masala", "Ginger", "Cardamom"];
const chaiPrice: number[] = [50, 60, 70];
const rating: Array<number> = [4.5, 4.0, 3.5];

type Chai = {
  name: string;
  price: number;
};

const chaiMenu: Chai[] = [
  { name: "Masala", price: 50 },
  { name: "Ginger", price: 60 },
  { name: "Cardamom", price: 70 },
];

const cities: readonly string[] = ["Delhi", "Mumbai", "Bangalore"];

// cities.push("Chennai"); // Error: Cannot add to a readonly array
const table: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let chaiTuple: [string, number];
chaiTuple = ["Masala", 50]; // Valid
// chaiTuple = [50, "Masala"]; // Error: Type 'number' is not assignable to type 'string'

let userInfo: [string, number, boolean?];
userInfo = ["Alice", 30]; // Valid
userInfo = ["Bob", 25, true]; // Valid
// userInfo = [true, "Charlie", 40]; // Error: Type 'boolean' is not assignable to type 'string'

const location: readonly [number, number] = [28.6139, 77.209]; // Latitude and Longitude

const chaiItems: [name: string, price: number] = ["Masala", 50];

// ************** Enum **************

enum Cupsize {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
}

const size: Cupsize = Cupsize.SMALL;

enum Status {
  PENDING = 100,
  SERVED, // 101
  CANCELLED, // 102
}
enum ChaiType {
  MASALA = "Masala",
  GINGER = "Ginger",
  CARDAMOM = "Cardamom",
}

function makeChai(type: ChaiType) {
  console.log(`Making ${type} chai.`);
}

makeChai(ChaiType.MASALA);
// makeChai("masala"); // Error: Argument of type '"masala"' is not assignable to parameter of type 'ChaiType'

enum RandomEnum {
  // this is bad practice to have random values in enum
  FIRST = "first",
  SECOND = 5,
}

const enum Sugars {
  LOW = 1,
  MEDIUM = 2,
  HIGH = 3,
}

let t: [string, number] = ["Masala", 50];
t.push("Ginger");
