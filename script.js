const players = ["John", "Bob", "Alice", "Poppy"];

const person = {
  name: "John Doe",
  age: 80,
};

let team = players;
let team1 = [...players];
let cap1 = Object.assign({},person);

// using spread ...
// let cap1 = {
//     ...person
// };

// using JSON
// let p3 = JSON.parse(JSON.stringify(person));

// Write your code here, make sure the name of variables is exactly
// same as mentioned in the problem statement

window.players = players;
window.person = person;
window.team = team;
window.team1 = team1;
window.cap1 = cap1;
