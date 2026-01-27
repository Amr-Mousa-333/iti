// !Amr Mousa Sayed rashed
// !Data 26-1-2026
// !JavaScript Basics - Exercises Solutions
// !node v v22.18.0
// =======================================================
// ?Exercise 1: Array Basics
// =======================================================
var fruits  = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];  // has 5 items
fruits.push("Fig");  // Add "Fig" to the end of the array
fruits.pop() ; // Remove the last item from the array
fruits.unshift("Grapes"); // Add "Grapes" to the beginning of the array
console.log(fruits + " array length " + fruits.length); // Output the modified array
// =======================================================
// ?Exercise 2: Array Manipulation with splice()
// =======================================================
var colors = ["red", "blue", "yellow", "purple", "orange"];
colors.splice(2,2, "green", "pink"); // Remove 2 items starting from index 2 and add "green" and "pink"
console.log(colors); // log out array
// =======================================================
// ?Exercise 3: Working with Array Methods
// =======================================================
var numbers = [10, 25, 30, 45, 50, 65, 70];
var newArray1 = numbers.slice(2,5) ;
console.log(newArray1);
var newArray2 = numbers.indexOf(45) ;
console.log(newArray2);
var newArray3 = numbers.includes(100) ;
console.log(newArray3);
// =======================================================
// ?Exercise 4: Array Iteration - map() and filter()
// =======================================================
var prices = [19.99, 25.50, 10.00, 45.99, 5.25, 30.00];
var newPrice = prices.map(function(ele) {
    return ele + ele * 20 / 100 ; //increase price 20 %
} ) ;
console.log(newPrice); // print the array
var newIteam = prices.filter(function(ele) {
    return ele > 20 ;
});
console.log(newIteam);
// =======================================================
// Exercise 5: Array reduce()
// =======================================================
var scores = [85, 92, 78, 95, 88, 76, 90];
var total = scores.reduce((acc, cur) => acc + cur, 0);  // used arrow func
console.log(total);
var avgScore = total / scores.length ;
console.log(avgScore);
// =======================================================
//  ?Exercise 6: Working with Objects
// =======================================================
var book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    genres: ["Fiction", "Classic", "Drama"],
    isAvailable: true,
    getInfo : function() {
        return `${this.title} written by ${this.author} year ${this.year}`;}
}
book.pages = 180 ;
book.year = 1926 ;
for (var key in book){
    console.log(`${key} >> ${book[key]}`)
}
console.log(book.getInfo());
// =======================================================
// ?Exercise 7: Object Deep Copy and JSON
// =======================================================

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
/*
this used for edit the original object
// movieC = new Object(movie) ;
// movieC.title = "The Dark Knight" ;
// console.log(movie.title);
// console.log(movieC.title);
*/
/*
this used for  edit the copied object */
var movieC = JSON.parse(JSON.stringify(movie)) ; // Deep Copy
movieC.year = "2012" ;
movieC.members = ["Tom Hardy"] ;
for (var key in movieC){
    console.log(`${key} >> ${movieC[key]}`)
}
for (var key in movie){
    console.log(`${key} >> ${movie[key]}`)
}
// =======================================================
// ?Exercise 8: 🌟 BONUS - Complex Data Manipulation
// =======================================================

var students = [
    {name: "Alice", age: 22, grades: [85, 90, 88]},
    {name: "Bob", age: 20, grades: [78, 82, 80]},
    {name: "Charlie", age: 23, grades: [92, 95, 89]},
    {name: "Diana", age: 21, grades: [88, 86, 90]}
];
var newStudents = students.map(function(student) {
    var sumGreades = student.grades.reduce((acc , cur ) => acc + cur , 0) ;
    var avgSum =  sumGreades / 3 ;
    return {name: student.name , age: student.age , avgGrade : avgSum.toFixed(2), grades : [student.grades[0] ,student.grades[1] ,student.grades[2] ] } ;
}) ;
console.log(newStudents);
var studentmore85 = newStudents.filter(function(student) {
    return student.avgGrade > 85 ;
}) ;
console.log(studentmore85);

var studentYoung = students.some(student => {
    return student.age < 21 ;
}) ;
console.log(studentYoung);
var studentGreads75 = students.every(student => {
        for(var i = 0 ; i < student.grades.length ; i++ ){
            return student.grades[i] > 75 ;
        }
        return true;
}) ;
console.log(studentGreads75);
var studentGreads75 = newStudents.every(student => {
    return student.grades.every(avgGradee => avgGradee > 75);
});
console.log(studentGreads75);
// =======================================================