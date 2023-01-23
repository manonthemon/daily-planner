
//This launches JQUERY on page load

$(function () {

    //THE TIMER
    // Script displaying current date in the Jumbotron
    var currentDate = moment().format(' dddd, MMMM Do YYYY');
    document.getElementById("currentDay").innerHTML = "Today is" + currentDate;
});

// Var containing the current hour
var currentTime = new Date().getHours();

//THE COLORS
//These add different colors to timeBlocks depending on the time
//First it selects all "textarea" elements
//Then it filters out all those with ID whose value is > < or == to current time 
//And it applies different classes to them accordingly
$("textarea").filter(function () {
    return parseInt(this.id) < currentTime;
}).addClass("past");

$("textarea").filter(function () {
    return parseInt(this.id) == currentTime;
}).addClass("present");

$("textarea").filter(function () {
    return parseInt(this.id) > currentTime;
}).addClass("future");


//THE BUTTONS
//This adds an event listener to buttons
// On click it assigns user input from adjacent textarea to entryValue variable
// It also stores the id of the text area where the entry was made to in the entryId variable
// Then it saves the entryId as key and entryValue as value into local storage.
$(".saveBtn").on("click", function () {
    var entryValue = $(this).prev("textarea").val();
    var entryId = $(this).prev("textarea").attr("id");
    localStorage.setItem(entryId, entryValue);

    //DELETE BUTTONS
    // This part of code creates a delete button for each text-area
    // It first checks if a delete button already exists and if there is text in adjacent text area
    // If no button exists, but text exists, it creates a button and adds a class to it. The class is styled in CSS file
    // It then inserts the new button before the existing save button with an animation.
    if ($(this).prev(".deleteBtn").length == 0 && entryValue) {
        var newBtn = $("<button>").addClass("deleteBtn").text("Delete");
        $(newBtn).animate({ width: "75px" }, { duration: 150 }).insertBefore(this)
    }
});

// This sets up the new delete button event listener which:
// Removes text from adjacent textarea
// Removes corresponding entry from local storage
// Removes the button
$(document).on("click", ".deleteBtn", function () {
    $(this).prev("textarea").val("");
    var entryId = $(this).prev("textarea").attr("id");
    localStorage.removeItem(entryId);
    $(this).remove();
});

//RELOADING THE PAGE
// This retrieves information form local storage on page load and sets it in appropriate cells.
// First it loops through each textarea, gets their id attributes and assigns it to entryId variable
// Then it retrieves the local storage entryId key matching the id of the corresponding textarea.
// It finally sets the value of the textarea to the entryValue from local storage. 
$("textarea").each(function () {
    var entryId = $(this).attr("id");
    var entryValue = localStorage.getItem(entryId);
    $(this).val(entryValue);

    //This checks if there is text value in the textarea. If yes, it adds delete button after page reload.
    if ($(this).val() != '') {
        var newBtn = $("<button>").addClass("deleteBtn").text("Delete");
        $(newBtn).insertAfter(this)
    }
});

// CLEAR ALL BUTTON
// This adds an event listener to the Clear All button at the top of the page
// It clears local storage
// Removes all text from textareas
// Removes delete buttons
$("#clear").on("click", function () {

    localStorage.clear();
    $("textarea").val("");
    $(".deleteBtn").remove();
});

    //EXTRAS
    // Code converting current time to 12h format. I ended up not using it, but kept it here just in case.
    // var whatTime;
    // if (currentTime24 >= 12) {
    //     whatTime = "PM";
    // } else {
    //     whatTime = "AM";
    // }
    // var currentTime12 = currentTime24 % 12 + whatTime