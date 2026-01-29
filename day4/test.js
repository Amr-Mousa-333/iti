// !Amr Mousa Sayed rashed
// !Data 28-1-2026
// !JavaScript BOM & DOM Lab Exercises
// !node v v22.18.0
// =====================================================
//? Exercise 1: Screen Information Display
// ====================================================
var screenInfo =
function(){
    console.log("Exercise 1: Screen Information Display")
    console.log("Screen width and height >> " + screen.width + "and " + screen.height) ;
    console.log("Available screen width and height >> " + screen.availWidth + "and "+screen.availHeight) ;
    console.log("Color depth >> " + screen.colorDepth) ;
} ;
screenInfo() ;
// ====================================================
// ? Exercise 2: Browser Navigator Info
// ====================================================
var checkBrowserInfo =
function(){
    console.log("Exercise 2: Browser Navigator Info")
    console.log("userAgent >> " + navigator.userAgent) ;
    console.log("user online >> " + navigator.onLine) ;
    console.log("browser lang >>" + navigator.language) ;
    console.log("cookies disabled >>" + navigator.cookieEnabled) ;
}
checkBrowserInfo() ;
// ====================================================
// ?Exercise 3: URL Manipulator
// ====================================================
console.log("Exercise 3: URL Manipulator")
function showPage(){
    console.log(location.href); location.href ;}
function reload(){
    console.log(location.reload()); location.reload() ;}
function goToWikipedia(){
    location.assign("https://www.wikipedia.org"); location.assign("https://www.wikipedia.org") ;}
console.log(location.protocol);
console.log(location.host);
console.log(location.port);
// ====================================================
//  ?Exercise 4: Dynamic Content Modifier
// ====================================================
console.log("Exercise 4: Dynamic Content Modifier")
let desc = document.getElementById("description") ;
let inputTxt = document.getElementById("new-text") ;
let changeParagraph =
function(){
    desc.textContent = inputTxt.value ;
} ;
function changeColor(){
    desc.classList.toggle("toggleStyle");}
// ====================================================
//?Exercise 5: Attribute Manager
// ====================================================
console.log("Exercise 5: Attribute Manager")
var inputt = document.querySelector("#ex5") ;
var myType = inputt.getAttribute("type") ;
console.log(myType)
inputt.setAttribute("type","password");
myType = inputt.getAttribute("type") ;
console.log(myType)
inputt.setAttribute("type","Email");
myType = inputt.getAttribute("type") ;
console.log(myType) ;
// ====================================================
// ? Exercise 6: Multi-Element Selector
// ====================================================
console.log("Exercise 6: Multi-Element Selector")
var btns = document.querySelector(".action-btn") ;
btns.textContent = " first button " ;
var allBtns = document.querySelectorAll(".action-btn") ;
allBtns[3].textContent = "last button" ;
for (var i = 1; i < allBtns.length - 1; i++) {
    allBtns[i].style.backgroundColor = "lightblue";
}
// ====================================================
// ?BONUS Exercise 7: Window Controller
// ====================================================
console.log("BONUS Exercise 7: Window Controller");
var openNew = document.getElementById("openNewBtn") ;
var closePage = document.getElementById("closePageBtn") ;
var moveTo = document.getElementById("moveToBtn") ;
var resizing = document.getElementById("reSizeBtn") ;
var newWindow = null ;
updateButtons("closed");
function updateButtons(state) {
    switch (state) {
        case "opened":
            openNew.style.display = "none";
            closePage.style.display = "inline-block";
            moveTo.style.display = "inline-block";
            resizing.style.display = "inline-block";
            break;

        case "closed":
            openNew.style.display = "inline-block";
            closePage.style.display = "none";
            moveTo.style.display = "none";
            resizing.style.display = "none";
            break;
    }
}

openNew.onclick = function openNew(){
    newWindow = window.open("about.html",
        "_blank",
        "width=600,height=400") ;
    updateButtons("opened") ;
}
closePage.onclick = function(){
     if (newWindow && !newWindow.closed){
    newWindow.close() ;
    updateButtons("closed");}
    else{
        alert("No window to close") ;
    }
}
moveTo.onclick = function(){
     if (newWindow && !newWindow.closed){
    newWindow.moveTo(100,100) ;newWindow.focus() ;
    updateButtons("opened");}
    else{
        alert("No window to move") ; }
} ;
resizing.onclick = function(){
        if (newWindow && !newWindow.closed){
    newWindow.resizeTo(800,600) ; newWindow.focus() ;
    updateButtons("opened");}
    else{
        alert("No window to resize") ; }}
// ====================================================
//  ?BONUS Exercise 8: DOM Tree Explorer
// ====================================================
console.log("BONUS Exercise 8: DOM Tree Explorer");
