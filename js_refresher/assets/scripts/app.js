// // // import { apiKey } from "./utils.js"

// // // import apiKey from "./utils.js"
// // import { apiKey2, abc as content } from "./utils.js"
// // // import * as util from "./utils.js"

// // // console.log(util.apiKey2);
// // console.log(content);

// // const userMessage = "Hello World!";

// // console.log(userMessage);
// // console.log(userMessage);

// // function createGreeting(username, message = "Hello!") {
// //     // console.log(username);
// //     // console.log(message);
// //     return "Hi, my name is " + username + ". " + message;
// // }

// // const greeting1 = createGreeting("Caio");
// // console.log(greeting1);

// // const greeting2 = createGreeting("João", "How are you!?");
// // console.log(greeting2);

// // export default (username, message) => {
// //     console.log("Hello!");
// //     return username + ", " + message;
// // } 

// const user = {
//     name: "Caio",
//     age: 34,
//     greet() {
//         console.log("Hello!");
//         console.log(this.age)
//     }
// };

// console.log(user.name);
// (user.greet());

// class User {

//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     greet() {
//         console.log("Hey!");
//     }
// }

// const user1 = new User("Caio", 24);
// console.log(user1)

// const hobbies = ["Sports", "Cooking", "Reading"];
// console.log(hobbies[0])

// hobbies.push("Running");
// console.log(hobbies);

// const index = hobbies.findIndex(item => item === "Sports");
// console.log(index);

// const editedHobbies = hobbies.map(item => ({text: item}));
// console.log(editedHobbies);

// const userNameData = ["Caio", "Bianchi"];

// const firstName = userNameData[0];
// const lastName = userNameData[1];

// const [firstName, lastName] = ["Caio", "Bianchi"];

// console.log(firstName);
// console.log(lastName);

// const user = {
//     name: "Caio",
//     age: 24
// };

// const name = user.name;
// const age = user.age;

// const {name: userName, age} = {
//     name: "Caio",
//     age: 24
// };

// console.log(userName)
// console.log(age)

// const hobbies = ["Sports", "Cooking"];

// const newHobbies = ["Reading"];

// const mergedHobbies = [...hobbies, ...newHobbies]
// console.log(mergedHobbies)

// const user = {
//     name: "Caio",
//     age: 34
// };

// const extendedUser = {
//     isAdmin: true,
//     ...user
// };

// console.log(extendedUser);

// const password = prompt("Your password");

// if (password === "Hello") {
//     console.log("'Hello' works!")
// } else if (password === "hello") {
//     console.log("'hello' works")
// } else {
//     console.log("Access not granted")
// };

// const hobbies = ["Sports", "Cooking", "Reading"]

// for (const hobby of hobbies) {
//     console.log(hobby)
// };

// function handleTimeout() {
//     console.log("Timed out!");
// }

// const handleTimeout2 = () => {
//     console.log("Timed out... again!");    
// };

// setTimeout(handleTimeout, 2000);
// setTimeout(handleTimeout2, 3000);
// setTimeout(() => {
//     console.log("Timed out once more...");    
// }, 4000);

// function greeter(greetFn) {
//     greetFn();
// };

// greeter(() => console.log("Hi!"));

// function init() {
//     function greet() {
//         console.log("Hi!");
//     }

//     greet();
// }

// init();

const hobbies = ["Sports", "Cooking", "Reading"];
hobbies.push("Working");

console.log(hobbies)
