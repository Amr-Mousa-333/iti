# Day 3 JavaScript - Exercise Lab



## Exercise 1: Array Basics
Create an array called `fruits` containing 5 different fruit names. Then:
- Add a new fruit to the end of the array
- Remove the first fruit from the array
- Add a new fruit to the beginning of the array
- Log the final array and its length

---

## Exercise 2: Array Manipulation with splice()
Given the array: `var colors = ["red", "blue", "yellow", "purple", "orange"];`

Use the `splice()` method to:
- Remove "yellow" and "purple" from the array
- Insert "green" and "pink" at index 2
- Log the final array

---

## Exercise 3: Working with Array Methods
Given the array: `var numbers = [10, 25, 30, 45, 50, 65, 70];`

- Use `slice()` to create a new array containing elements from index 2 to 5 (not including 5)
- Use `indexOf()` to find the position of number 45
- Use `includes()` to check if the number 100 exists in the array
- Log all results

---

## Exercise 4: Array Iteration - map() and filter()
Given the array: `var prices = [19.99, 25.50, 10.00, 45.99, 5.25, 30.00];`

- Use `map()` to create a new array with all prices increased by 20%
- Use `filter()` to create a new array containing only prices greater than 20
- Log both new arrays

---

## Exercise 5: Array reduce()
Given the array: `var scores = [85, 92, 78, 95, 88, 76, 90];`

- Use `reduce()` to calculate the total sum of all scores
- Use `reduce()` to find the average score (total sum divided by array length)
- Log both the total and average

---

## Exercise 6: Working with Objects
Create an object called `book` with the following properties:
- title: "The Great Gatsby"
- author: "F. Scott Fitzgerald"
- year: 1925
- genres: ["Fiction", "Classic", "Drama"]
- isAvailable: true

Then:
- Add a new property `pages` with value 180
- Change the `year` to 1926
- Add a method called `getInfo` that returns a string: "-Title- by -Author- (-Year-)"
- Use a `for...in` loop to log all property names and values
- Call the `getInfo()` method and log the result

---
## Exercise 7: Object Deep Copy and JSON
Given the following object:

``` javascript
var movie = {
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"],
    ratings: {
        imdb: 8.8,
        rottenTomatoes: 87
    }
};
```   
- Create a deep copy of the `movie` object using `JSON.parse()` and `JSON.stringify()`
- Modify the copied object's `year` to 2012 and add a new cast member "Tom Hardy"
- Log both the original and copied objects to show they are different   


## Exercise 8: 🌟 BONUS - Complex Data Manipulation
Given the following array of student objects:
```javascript
var students = [
    {name: "Alice", age: 22, grades: [85, 90, 88]},
    {name: "Bob", age: 20, grades: [78, 82, 80]},
    {name: "Charlie", age: 23, grades: [92, 95, 89]},
    {name: "Diana", age: 21, grades: [88, 86, 90]}
];
```

Complete the following tasks:
- Use `map()` to create a new array where each student object has an additional property `averageGrade` (calculate the average of their grades using `reduce()`)
- Use `filter()` to create an array of students who have an average grade above 85
- Use `some()` to check if any student is younger than 21
- Use `every()` to check if all students have an average grade above 75
- Log all results

---


