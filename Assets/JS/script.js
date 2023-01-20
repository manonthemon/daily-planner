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

var currentTime12 = currentTime24 % 12 + whatTime



var timeBlock = $(".time-block")

console.log(timeBlock)


var container = $(".container")

console.log(container)

for (i=0; i<9; i++) {


}




var hour = timeBlock.find('.hour');

var textContent = hour.text();

console.log(textContent); //


// TODO Add event listeners to the buttons saving entries to local storage
// TODO Add if statement changing colors of tabs depending on current time

// TODO Consider adding button to clear previous entry.


