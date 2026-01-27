// Amr Mousa Sayed rashed
// Data 25-1-2026
// JavaScript Basics - Exercises Solutions
// node v v22.18.0
// ---------------------------------------------------------
//question 1
// 1
// literal creation
var userName = "Amr";
// 2
//  literal creation
var userAge = 25;
// 3
//  isStudent
var isStudent = true;
// 4
// userProfile as an object
var userProfile = {
  name: userName,
  age: userAge,
  city: "Cairo"
};
// 5
var anotherProfile = userProfile;
// 6
//  Change the name
anotherProfile.name = "mousa";
// 7
// Print names
console.log("userProfile.name:", userProfile.name);
console.log("anotherProfile.name:", anotherProfile.name);
// **Question:** What is the difference between copying primitive data types vs objects in JavaScript?
//  Primitive types: Number, String, Boolean, undefined, null var a = 10;var b = a;
// Objects: Object, Array, Function var obj1 = { name: "Amr" };
// ---------------------------------------------------------
//question 2
// 1
// Literal
var str1 = "JavaScript";
// 2
//Constructor
var str2 = new String("JavaScript");
// 3
//constructor
var str3 = new String("JavaScript");
// 4
console.log("str1 == str2:", str1 == str2); // true
// 5
console.log("str2 == str3:", str2 == str3); // false
// 6
console.log("str2.valueOf() == str3.valueOf():", str2.valueOf() == str3.valueOf()); // true
// 7
console.log("typeof str1:", typeof str1); // string
console.log("typeof str2:", typeof str2); // object
// **Question:** Why is literal creation preferred over constructor creation in JavaScript?
// Faster , Clearer & Simpler
// ---------------------------------------------------------
// question 3
// 1
// Prompt the user to enter a number (as a string)
var userInput = prompt("Enter a num");
// 2
var num11 = Number(userInput);
var num22 = parseInt(userInput);
var num33 = +userInput;

// 3
// Store results in separate variables
// (num11, num22, num33 )
// 4
// Check if the conversion was successful
function isValidNumber(n) {
  var num = Number(n);
  return typeof num === "number" && !isNaN(num);
}

// 5
// If valid, perform operations
if (isValidNumber(num1)) {
  var added = num1 + 10;

  var multiplied = added * 2;

  var finalResult = multiplied.toString() + " final res";

  console.log(finalResult);
} else {
  // 6
  // If input is NOT valid number
  console.log("Invalid input!");
}

// Optional: Show the conversions
console.log("Number():", num11, "isNaN?", isNaN(num11));
console.log("parseInt():", num22, "isNaN?", isNaN(num22));
// -----------------------------------------
// question  4
// 1
//  input
var num1 = prompt(" first num");
var num2 = prompt(" second num");

num1 = Number(num1);
num2 = Number(num2);
// 2
// operations
console.log("Addition:", num1 + num2);
console.log("Subtraction:", num1 - num2);
console.log("Multiplication:", num1 * num2);
console.log("Division:", num1 / num2);
console.log("Modulus:", num1 % num2);
// 3
console.log("Equal to (==):", num1 == num2);
console.log("Strictly equal (===):", num1 === num2);
console.log("Greater than (>):", num1 > num2);
console.log("Less than or equal to (<=):", num1 <= num2);
// 4
// Logical operators
console.log("num1 , num2 > 0:", num1 > 0 && num2 > 0);
console.log("num1 or num2 is even", num1 % 2 === 0 || num2 % 2 === 0);
// 5
console.log("5 == '5':", 5 == "5");   // true, value is converted
console.log("5 === '5':", 5 === "5"); // false, different types

// Explanation:
// == compares values only
// === compares value + type
// ---------------------------------------------------------
// question 5
// 1
// Prompt the user to enter their score (0-100)
var scoreInput = prompt("Enter score (0-100)");

// 2
// input to number
var score = Number(scoreInput);

// 3
if (isNaN(score) || score < 0 || score > 100) {
  console.log("cheek num between 0 and 100");
} else {
  // 4
  var grade;
  if (score >= 90) {
    grade = "A";
  } else if (score >= 80) {
    grade = "B";
  } else if (score >= 70) {
    grade = "C";
  } else if (score >= 60) {
    grade = "D";
  } else {
    grade = "F";
  }

  // 5
  // show grade
  console.log("Your grade is:", grade);
}
// question 5 - Bonus
//using switch
// 1
var scoreInput2 = prompt("Enter score (0-100) ");
var score2 = Number(scoreInput2);
if (isNaN(score2) || score2 < 0 || score2 > 100) {
  console.log(" num between 0 and 100.");
} else {
  var grade;
  switch (Math.floor(score2 / 10)) {
    case 10:
    case 9:
      grade = "A";
      break;
    case 8:
      grade = "B";
      break;
    case 7:
      grade = "C";
      break;
    case 6:
      grade = "D";
      break;
    default:
      grade = "F";
  }
  console.log("grade", grade);
}
// ---------------------------------------------------------===================================
// question 6 - BONUS
// Part A
var rows = 5;
console.log("===  FOR loop ===");
for (var i = 1; i <= rows; i++) {
  var line = "";
  for (var j = 1; j <= i; j++) {
    line += "*";
  }
  console.log(line);
}

console.log("\n=== WHILE loop ===");
var i = 1;
while (i <= rows) {
  var line = "";
  var j = 1;
  while (j <= i) {
    line += "*";
    j++;
  }
  console.log(line);
  i++;
}

console.log("\n=== DO-WHILE loop ===");
var i = 1;
do {
  var line = "";
  var j = 1;
  do {
    line += "*";
    j++;
  } while (j <= i);
  console.log(line);
  i++;
} while (i <= rows);
// ---------------------------------------------------------
// Part B
var inputNumber = prompt("Enter a num");
var num = Number(inputNumber);

if (isNaN(num) || num < 0 || !Number.isInteger(num)) {
  console.log("Invalid input");
} else {
  // -----------------------------
  // Using FOR loop
  var factorialFor = 1;
  for (var i = num; i > 1; i--) {
    factorialFor *= i;
  }
  console.log("Factorial of " + num + " using FOR loop is:", factorialFor);

  // -----------------------------
  // Using WHILE loop
  var factorialWhile = 1;
  var i = num;
  while (i > 1) {
    factorialWhile *= i;
    i--;
  }
  console.log("Factorial of " + num + " using WHILE loop is:", factorialWhile);

  // -----------------------------
  // Using DO-WHILE loop
  var factorialDoWhile = 1;
  var j = num;
  if (num === 0) {
    factorialDoWhile = 1;
  } else {
    do {
      factorialDoWhile *= j;
      j--;
    } while (j > 1);
  }
  console.log("Factorial of " + num + " using DO-WHILE loop is:", factorialDoWhile);
}
// ---------------------------------------------------------
// part C
// -----------------------------
// 1. Using FOR loop
console.log("=== FOR loop ===");
var validNumber;
for (;;) {
  validNumber = prompt("num between 1 and 10");
  validNumber = Number(validNumber);
  
  if (!isNaN(validNumber) && validNumber >= 1 && validNumber <= 10) {
    console.log("Thank you! You entered:", validNumber);
    break;
  } else {
    console.log("Invalid input! Try again.");
  }
}

// -----------------------------
// 2. Using WHILE loop
console.log("\n=== WHILE loop ===");
validNumber = 0;
while (true) { // Infinite loop
  validNumber = prompt("num between 1 and 10:");
  validNumber = Number(validNumber);

  if (!isNaN(validNumber) && validNumber >= 1 && validNumber <= 10) {
    console.log("Thank you! You entered:", validNumber);
    break;
  } else {
    console.log("Invalid input! Try again.");
  }
}

// -----------------------------
// 3. Using DO-WHILE loop
console.log("\n=== DO-WHILE loop ===");
do {
  validNumber = prompt(" num between 1 and 10");
  validNumber = Number(validNumber);

  if (isNaN(validNumber) || validNumber < 1 || validNumber > 10) {
    console.log("Invalid input! Try again.");
  }
} while (isNaN(validNumber) || validNumber < 1 || validNumber > 10);

console.log("Thank you! You entered:", validNumber);


// ---------------------------------------------------------------------
// Q7 - BONUS

// 1
var nInput = prompt("positive integer");

// 2
var n = Number(nInput);
if (isNaN(n) || n <= 0 || !Number.isInteger(n)) {
  console.log("Invalid int");
} else {
  // 3
  var fizzCount = 0;
  var buzzCount = 0;
  var fizzBuzzCount = 0;
  var luckyCount = 0;
  // 4
  for (var i = 1; i <= n; i++) {
    // 7 has highest priority
    if (i % 7 === 0) {
      console.log("Lucky");
      luckyCount++;
    }
    // divisible by 3 and 5
    else if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
      fizzBuzzCount++;
    }
    // divisible by 3
    else if (i % 3 === 0) {
      console.log("Fizz");
      fizzCount++;
    }
    // divisible by 5
    else if (i % 5 === 0) {
      console.log("Buzz");
      buzzCount++;
    }
    else {
      console.log(i);
    }
  }

  console.log("\nSummary:");
  console.log("Fizz:", fizzCount, "times");
  console.log("Buzz:", buzzCount, "times");
  console.log("FizzBuzz:", fizzBuzzCount, "times");
  console.log("Lucky:", luckyCount, "times");
}
