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
//And it applies different classes to them accordingly


$("textarea").filter(function() {
    return parseInt(this.id) < currentTime;
}).addClass("past");


$("textarea").filter(function() {
    return parseInt(this.id) == currentTime;
}).addClass("present");


$("textarea").filter(function() {
    return parseInt(this.id) > currentTime;
}).addClass("future");




//This adds an event listener to buttons
// On click it assigns user input from textarea to userEntry variable
// It also stores the id of the text area where the entry was made to if variable.
//Then it saves the paid id and userEntry into local storage.
$(".saveBtn").on("click", function() {
var entryValue = $(this).prev("textarea").val();
 var entryId = $(this).prev("textarea").attr("id");
localStorage.setItem(entryId, entryValue);
});



// This retrieves information form local storage on page load and sets it in appropriate cells.
// First it loops through each textarea, gets their id attributes and assigns it to entryId variable
// Then it retrieves the local storage entryId key matching the id of the corresponding textarea.
// It finally sets the value of the textarea to the entryValue from local storage. 

$("textarea").each(function() {
 var entryId = $(this).attr("id");
var entryValue = localStorage.getItem(entryId);
      // Set the value of the textarea to the retrieved value
      $(this).val(entryValue);
    });


// TODO Consider adding button to clear previous entry.


 $("#clear").on("click", function() {
 localStorage.clear();
location.reload()
 });
 })