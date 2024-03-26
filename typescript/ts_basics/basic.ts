// Primitive types:
let age: number;
age = 17;

let userName: string;
userName = "Caio";

let isInstructor: boolean;
isInstructor = true;

// Complex types:
let hobbies: string[];
hobbies = ["Sports", "Cooking", "Gaming"];

type Person = {
  name: string;
  age: number;
};

let person: Person;
person = {
  name: "Caio",
  age: 25,
};

let people: Person[];
people = [
  {
    name: "Caio",
    age: 25,
  },
  {
    name: "Eduardo",
    age: 25,
  },
  {
    name: "Monica",
    age: 23,
  },
];

// Union types:
let course: string | number = "React - The Complete Guide";
course = 1;

// Functions and types:
function add(a: number, b: number): number {
  return a + b;
}

function printOut(value: any): void {
  console.log(value);
}

// Generics:
function insertAtBeggining<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}
const demoArray = [1, 2, 3];
const updatedArray = insertAtBeggining(demoArray, -3);
