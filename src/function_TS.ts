function makeChai(type: string, cups: number) {
  console.log(`Making ${type} chai with ${cups} cups of water.`);
}
makeChai("Masala", 2);

function getChaiPrice(): number {
  return 50;
}

function makeOrder(order: string) {
  if (!order) return null;
  return order;
}

function logChai(): void {
  console.log("chai  is ready");
}

function orderChai(type?: string) {
  if (type) {
    console.log(`Ordering ${type} chai.`);
  }
}

function orderChai1(type: string = "Masala") {
  console.log(`Ordering ${type} chai.`);
}

function createChai(order: {
  type: string;
  sugar: number;
  size: "small" | "medium" | "large";
}): number {
  return 4;
}
