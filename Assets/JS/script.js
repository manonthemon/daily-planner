// Script displaying current date in the Jumbotron

var currentDate = moment().format(' dddd, MMMM Do YYYY');
document.getElementById("currentDay").innerHTML = currentDate;



// TODO Add event listeners to the buttons saving entries to local storage
// TODO Add if statement changing colors of tabs depending on current time

// TODO Consider adding button to clear previous entry.