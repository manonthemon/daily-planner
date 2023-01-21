$(function () {


// Script displaying current date in the Jumbotron
var currentDate = moment().format(' dddd, MMMM Do YYYY');
document.getElementById("currentDay").innerHTML = currentDate;

// Var containing the current hour in 24 h format
var currentTime24= new Date().getHours();

// Code converting current time to 12h format

var whatTime;
if (currentTime24 >= 12) {
    whatTime = "PM";
} else {
    whatTime = "AM";
}

var currentTime12 = "9AM"

// currentTime24 % 12 + whatTime


// TODO Add if statement changing colors of tabs depending on current time

var timeBlock = $(".time-block") //Reference time blocks in html



// There add different colors to timeBlocks depending on the time

//!Problem with comparing AM and PM times. 

timeBlock.filter(function() {
    return parseInt($(this).find(".hour").text()) === parseInt(currentTime12);
}).find("textarea").addClass("present");

timeBlock.filter(function() {
    return parseInt($(this).find(".hour").text()) < parseInt(currentTime12);
}).find("textarea").addClass("past");

timeBlock.filter(function() {
    return parseInt($(this).find(".hour").text()) > parseInt(currentTime12);
}).find("textarea").addClass("future");



// TODO Add event listeners to the buttons saving entries to local storage

$(".saveBtn").on("click", function () {})


// TODO Consider adding button to clear previous entry.




});