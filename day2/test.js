// Amr Mousa Sayed rashed
// Data 26-1-2026
// JavaScript Basics - Exercises Solutions
// node v v22.18.0
// =============================================================
// ?Exercise 1: Format Full Name
// =============================================================
function formatName(firstName, lastName){
    // this program for format the first name and last name & handel the spaces
    // Example: "  aMr " , " moUSa "  => "Amr Mousa"
    // !the algorithms is :
    // 1- trim the spaces from the first name and last name
    // 2- make the first letter capital and the another small
    // 3- return the formatted full name
    var firstName = firstName.trim();
    var lastName = lastName.trim();
    firstName =
    firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
    lastName =
    lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();
    return firstName + " " + lastName;
};
// ============================================================
// ?Exercise 2: Number Validator
// ============================================================
function numberValidator(num){
    // !the algorithms is :
    // 1- check if the type of the input is number and not NaN
    // 2- return the result
    if (typeof num === "number" && !isNaN(num)) {
        return num + " valid number";
    } else {
        return num.toFixed(2) + "not valid number";
    }
}
// ============================================================
// ?Exercise 3: Random Number Generator
// ============================================================
// https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
// reference
function getRandomInRange(min, max){
      if (min > max) {
    [min, max] = [max, min];  //swap
    }
    // this program for generate random number in range
    return  Math.random() * (max - min) + min;
    // ! the algorithms is : in reference
}
// ============================================================
// ?Exercise 4: String Search and Replace
// ============================================================
function censorWord(text, target, replacement) {
  return text
    .split(" ")
    .map(word =>
      word.toLowerCase() === target.toLowerCase()
      ?
      replacement : word
    )
    .join(" ");
}
// ============================================================
// Exercise 5: Function with Callbacks
// ============================================================
function processNumbers1(num, callback) {
  return callback(num * 2);
}

function processNumbers2(num, callback) {
    return callback(num + 10);
}
processNumbers2(5, function(result){
    console.log(result);
});
// ============================================================
// ? Bonus
// ============================================================
function flexibleSum(arr) {
  if (!Array.isArray(arr)) return 0;

  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    const val = arr[i];
    let num;

    if (typeof val === "number") {
      num = val;
    } else if (typeof val === "string") {
      num = Number(val);
    }

    if (typeof num === "number" && num === num && num !== Infinity && num !== -Infinity) {
      sum += num;
    }
  }

  return sum;
}
