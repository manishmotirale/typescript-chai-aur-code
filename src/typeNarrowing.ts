function getChai(kind: string | number) {
  if (typeof kind === "string") {
    return `Making ${kind} chai...`;
  }
  return `Chai order: ${kind}`;
}

console.log(getChai("green"));

function serveChai(msg?: string) {
  if (msg) {
    return `Serving ${msg}`;
  }
  return `Serving default masala Chai`;
}

function orderChai(size: "small" | "medium" | "large" | number) {
  if (size === "small") {
    return `small cutting chai..`;
  }

  if (size === "medium" || size === "large") {
    return `make extra chai`;
  }

  return `chai order ${size}`;
}

class KulhadChai {
  serve() {
    return `serve kulhad chai`;
  }
}
class cutting {
  serve() {
    return `serve cutting chai`;
  }
}

function serve(chai: KulhadChai | cutting) {
  if (chai instanceof KulhadChai) {
    return chai.serve();
  }
}

// create customize types
type ChaiOrder = {
  type: string;
  sugar: number;
};

function isChaiOrder(obj: any): obj is ChaiOrder {
  return (
    typeof obj === "object" &&
    obj !== null &&
    typeof obj.type === "string" &&
    typeof obj.sugar === "number"
  );
}

function serveOrder(item: ChaiOrder | string) {
  if (isChaiOrder(item)) {
    return `Serving ${item.type} chai with ${item.sugar} sugar`;
  }
  return `Serving custom chai: ${item}`;
}

type MasalaChai = { type: "masala"; spiceLevel: number };
type GreenChai = { type: "green"; flavor: string };
type GingerChai = { type: "ginger"; gingerStrength: number };

type Chai = MasalaChai | GreenChai | GingerChai;

// Narrowing
function MakeChai(oder: Chai) {
  switch (oder.type) {
    case "masala":
      return `Making masala chai with spice level ${oder.spiceLevel}`;
    case "green":
      return `Making green chai with flavor ${oder.flavor}`;
    case "ginger":
      return `Making ginger chai with ginger strength ${oder.gingerStrength}`;
      break;

    default:
      break;
  }
}

function brew(order: MasalaChai | GingerChai){
    if('spiceLevel' in order){
        return `Brewing masala chai with spice level ${order.spiceLevel}`;
    }
}

function isStringArray(arr: unknown): arr is string[] {
    return Array.isArray(arr) && arr.every(item => typeof item === 'string');
}