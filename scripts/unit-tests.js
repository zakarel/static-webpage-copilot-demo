
// Define your variables
const name = "John Doe";
let age = 25;
var isEmployed = true;

// Define functions
function greet() {
  console.log("Hello, " + name + "!");
}

function calculateBirthYear() {
  const currentYear = new Date().getFullYear();
  const birthYear = currentYear - age;
  return birthYear;
}

// Call functions
greet();
const birthYear = calculateBirthYear();
console.log("You were born in " + birthYear + ".");
