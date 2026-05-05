type ChaiOrder = {
  type: string;
  sugar: number;
  strong: boolean;
};

function makeChai(order: ChaiOrder) {
  console.log(order);
}

function serveChai(order: ChaiOrder) {
  console.log(order);
}

type TeaRecipe = {
  water: number;
  milk: number;
};

class MasalaChai implements TeaRecipe {
  water = 100;
  milk = 50;
}

interface CupSz {
  size: "small" | "large";
}

class Chai implements CupSz {
  size: "small" | "large" = "large";
}

// type response = { ok: true } | { ok: false };
// class myRes implements response {
//   ok: boolean = true;
// }

type TeaType = "masala" | "ginger" | "lemon";
function orderChai(t: TeaType) {
  console.log(t);
}

type BaseChai = { teaLeaves: number };
type Extra = { masala: number };

type masalachai = BaseChai & Extra;

const cup: masalachai = {
  teaLeaves: 2,
  masala: 1,
};

type User = {
  username: string;
  bio?: string;
};

const u1: User = {
  username: "Manish",
};

const u2: User = {
  username: "Manish",
  bio: "https://github.com/manishmotirale",
};

type Config = {
    readonly appName: string
    version: number
}

const cfg : Config ={
    appName: "Masterji",
    version : 1
}

// cfg.appName= "chaicode"