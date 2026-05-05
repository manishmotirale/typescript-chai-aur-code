let subs: number | string = 1000;

let apiRequestStatus: "success" | "failure" | "pending";

apiRequestStatus = "pending";

const orders = ["12", "20", "28", "42"];

let currOrder: string | undefined;

for (let order of orders) {
  if (order === "28") {
    currOrder = order;
    break;
  }
}

console.log(currOrder);
