$(function () {


// Script displaying current date in the Jumbotron
var currentDate = moment().format(' dddd, MMMM Do YYYY');
document.getElementById("currentDay").innerHTML = currentDate;

// Var containing the current hour in 24 h format
var currentTime= new Date().getHours();

// Code converting current time to 12h format

// var whatTime;
// if (currentTime24 >= 12) {
//     whatTime = "PM";
// } else {
//     whatTime = "AM";
// }

// var currentTime12 = currentTime24 % 12 + whatTime


// TODO Add if statement changing colors of tabs depending on current time

// There add different colors to timeBlocks depending on the time
//Firs it selects all "textarea" elements
//Then it filters out all those with ID whose value is > < or == to current time 
//And it applies different classes to them accordingly.
$("textarea").filter(function() {
    return parseInt(this.id) < currentTime;
}).addClass("past");


$("textarea").filter(function() {
    return parseInt(this.id) == currentTime;
}).addClass("present");


$("textarea").filter(function() {
    return parseInt(this.id) > currentTime;
}).addClass("future");



// TODO Add event listeners to the buttons saving entries to local storage

$(".saveBtn").on("click", function () {})


// TODO Consider adding button to clear previous entry.







});