// const chai = {
//   name: "masala Chai",
//   price: 20,
//   isHot: true,
// };

let tea: {
  name: string;
  price: number;
  isHot: boolean;
};

tea = {
  name: "Ginger Tea",
  price: 35,
  isHot: true,
};

type Tea = {
  name: string;
  price: number;
  ingredients: string[];
};

const adrakChai: Tea = {
  name: "Adrak Chai",
  price: 100,
  ingredients: ["ginger", "Tea"],
};

type Cup = { size: string };
let smallCup: Cup = {
  size: "200ml",
};

let bigCup = { size: "500ml", material: "steel" };

smallCup = bigCup;

type Brew = { brewTime: number };
const coffee = { brewTime: 5, beans: "Arebica" };
const chaiBrew: Brew = coffee;

type User = {
  username: string;
  password: string;
};

const u: User = {
  username: "chaicode",
  password: "123",
};

type Item = { name: string; quantity: number };
type Address = { street: string; pin: number };

type Order = {
  id: string;
  items: Item[];
  address: Address;
};

// Partial => makes all properties optional
type Chai = {
  name: string;
  price: number;
  isHot: boolean;
};

const updateChai = (updates: Partial<Chai>) => {
  console.log("updating chai with", updates);
};

updateChai({ price: 255 });
updateChai({ isHot: false });
updateChai({});

// Required => makes all properties required

type ChaiOrder = {
  name?: string;
  quantity?: number;
};

const placeOrder = (order: Required<ChaiOrder>) => {
  console.log(order);
};

placeOrder({
  name: "Masala Chai",
  quantity: 3,
});

// Pick => picks only specified properties from the type
type Chhai = {
  name: string;
  price: number;
  isHot: boolean;
  ingredients: string[];
};

type BasicChaiInfo = Pick<Chhai, "name" | "price">;

const chaiInfo: BasicChaiInfo = {
  name: "Lemon Tea",
  price: 30,
};

// Omit => omits specified properties from the type
type ChaiNew = {
  name: string;
  price: number;
  isHot: boolean;
  secretingredients: string[];
};

type publicChai = Omit<ChaiNew, "secretingredients">;

const publicChaiInfo: publicChai = {
  name: "Lemon Tea",
  price: 30,
  isHot: true,
};
