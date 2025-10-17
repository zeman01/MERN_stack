let x: number;
// x = 'string'
x = 50;

// data types
// number string null boolean undefined

// ? special types
//* any -> disable type checking
//* unknown ->
//* never  ->
//* void ->

let a: any = 10;
let b: unknown = "hello good morning";

// console.log(a.toUpperCase())
if (typeof b === "string") {
  console.log(b.toUpperCase());
}

//! Array
const numbers: number[] = [1, 2, 3, 65];
const strings: Array<string> = ["abc", "hfg"];

numbers.push(20);

//! tuples
const tuple: [string, boolean, number] = ["abc", false, 3];

//! object
type User = {
  name: string;
  email: string;
  gender?: string; // optional field
};

let user: User = {
  name: "abc",
  email: "",
};

//

let user2: User = {
  name: "",
  email: "",
  gender: "",
};

// console.log(user.name)

//! function
// const greet = (name: string): void => {
//   console.log("good morning", name);
// };

// greet("Ram");
// greet(123)
// greet([123])

//function to  add two numbers

// const add = (a: number, b: number): number => {
//   return a + b;
// };

// add(12, 23);
// add('','')

//! enum
// numbered enum
enum Role {
  ADMIN = "ADMIN",
  SUPER_ADMIN = "SUPER_ADMIN",
  USER = "USER",
}
console.log(Role.ADMIN); // 0
console.log(Role.USER); // 11

type UserType = {
  name: string;
  role: Role;
};

const u: UserType = {
  name: "abc",
  role: Role.ADMIN,
};

// class Person

class People {
  public name: string;
  protected email: string;
  private pass: string;

  // constructor
  constructor(name: string, email: string, pass: string) {
    this.name = name;
    this.email = email;
    this.pass = pass;
  }
}

// !Interface

interface IProduct {
  name: string;
  price: number;
  stock: number;
  category: string;
}

//  declaration merging
interface A {
  a: string;
}
interface A {
  b: string;
}
const merge: A = {
  a: "",
  b: "",
};

//* advanced type
//*  union (|)
let id: string | number;
id = "asdf";
id = 12234;

//* Intersection (&)

type T1 = {
  a: string;
};
type T2 = {
  b: string;
};

type T12 = T1 & T2;

type T1or2 = T1 | T2;

const t12: T12 = {
  a: "",
  b: "",
};
const t1or2: T1or2 = {
  a: "",
  b: "",
};

// ! Literal Type
type Status = "Success" | "Error" | "Pending";
let response_status: Status;
response_status = "Error";

// ! inheritance /  extends

interface U {
  u: string;
}
interface V extends U {
  v: string;
}

const UV: V = {
  v: "",
  u: "",
};

type T = {
  t: string;
};

type T3 = T & {
  t: string;
};

// ! Generics
function identity<T>(value: T): T {
  return value;
}

identity<string>("sdfg");
identity<number>(1234);

// task
function wrapper<T>(value: T | T[]): T[] {
  if (Array.isArray(value)) {
    return value;
  }
  return [value];
}
wrapper<string>("sdfg");
wrapper<number>(1234);
wrapper<number>([1234456]);

// *interface

// * Utility Type
interface IUser {
  readonly id: string;
  name: string;
  email: string;
  phone?: string;
}

const user1: Required<IUser> = {
  id: "1",
  name: "",
  email: "",
  phone: "",
};
