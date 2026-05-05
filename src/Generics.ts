// Generics

function wrapInArray<T>(value: T): T[] {
  return [value];
}

wrapInArray("masala"); // string[]
wrapInArray(42); // number[]
wrapInArray({ flavor: "ginger" }); // { flavor: string }[]

function pair<A, B>(a: A, b: B): [A, B] {
  return [a, b];
}
pair("masala", 5); // [string, number]
pair("ginger", { spicy: true }); // [string, { spicy: boolean }]

interface Box<T> {
  content: T;
}

const numberBox: Box<number> = { content: 42 };
const stringBox: Box<string> = { content: "chai" };

interface ApiPromise<T> {
  status: number;
  data: T;
}

const re: ApiPromise<{ flavor: string }> = {
  status: 200,
  data: {
    flavor: "masala",
  },
};
