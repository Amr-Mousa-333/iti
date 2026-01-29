console.log("Welcome to BOM and DOM");
// window.open("https://www.google.com","_blank","width=800,height=600")

// var myWindow;
// function openNewWindow() {
//   myWindow = window.open("page2.html", "_blank", "width=800,height=600");
// }

// function closeWindow() {
//   myWindow.close();
//   console.log("window is closed")
// }

// function focusWindow() {
//     myWindow.focus();
//     // window.focus()
// }

// moveTo(x,y) , moveBy(x,y)


// screen object
// console.log("Screen Width: " + screen.width);
// console.log("Screen Height: " + screen.height);
// console.log("Available Screen Width: " + screen.availWidth); // available for web pages
// console.log("Available Screen Height: " + screen.availHeight);
// console.log("Color Depth: " + screen.colorDepth);

// navigator object
// console.log(navigator.userAgent);
// console.log(navigator.platform);
// console.log(navigator.language);
// console.log(navigator.languages);
// console.log(navigator.onLine);
// console.log(navigator.cookieEnabled);


// location object
// console.log(location.href);
// console.log(location.protocol);
// console.log(location.host);
// console.log(location.port);
// location.reload();
// location.assign("https://www.wikipedia.org");
// location.replace("https://www.wikipedia.org");


// history object
// console.log(history.length);
// history.back();
// history.forward();
// history.go(-2);

// ----------------------------- DOM ----------------------------
// ------------ WE NEED TO SELECT SOMETHING TO DO ANYTHING ------------



// childNodes vs children

//  childNodes returns all child nodes including text nodes (like spaces, comments, and line breaks).
//  children returns only element nodes.

// console.log(document.getElementById("btn-one"))
// console.log(document.getElementsByClassName("btn")[0])
// console.log(document.getElementsByTagName("button")[0])

// console.log(document.querySelector(".btn").textContent)
// console.log(document.querySelectorAll(".btn")[1].textContent)


var myBtn = document.querySelector("#btn-one");
console.log(myBtn);
myBtn.innerText = "Click Me Now!";

var myParagraph = document.querySelector("p");
// myParagraph.innerHTML = "<span> Hello Omar </span>"; // innerHTMl has security issues (XSS)
myParagraph.textContent = "Hello Omar"; // textContent is safe

// myParagraph.style.color = "blue";
// myParagraph.style.backgroundColor = "lightgray";



// var myInput = document.getElementById("user-name");
// console.log(myInput);
// myInput.value = "Omar Mosleh";
// var myType = myInput.getAttribute("type") 
// console.log(myType);
// myInput.setAttribute("type","password");


// var pTwo = document.querySelector(".two");
// // pTwo.className = "paragraph-a"; 
// // pTwo.className += " my-p"
// // pTwo.classList.add("paragraph-a");
// pTwo.classList.remove("two");
// console.log(pTwo)


// function changePStyle(){
//     pTwo.classList.toggle("paragraph-a");
// }