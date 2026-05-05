let response: any = "42";

let numericLen: number = (response as string).length; // Force full type assertion

type Book = {
  name: string;
};

let bookString = '{"name": "who moved my cheese"}';
let bookObj = JSON.parse(bookString) as Book;

console.log(bookObj);

const inputEle = document.getElementById("username") as HTMLInputElement;

let val: any;

val = "chai";
val = [1, 2, 3];
val = 2.3;
val.toUpperCase();

let newVal: unknown;
newVal = "chai";
newVal = [1, 2, 3];
newVal = 2.3;

if (typeof newVal === "string") {
  newVal.toUpperCase();
}

try {
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  }

  console.log("Error", error);
}

const data: unknown = "chai aur code";
const strData: string = data as string;

type Role = "Admin" | "user" | "superAdmin";

function redirectBasedOnRole(role: Role): void {
  if (role === "Admin") {
    console.log("Redirection to admin Dashboard");
    return;
  }
  if (role === "user") {
    console.log("Redirection to user Dashboard");
    return;
  }
  role;
}

function neverReturn(): never {
  while (true) {}
}
