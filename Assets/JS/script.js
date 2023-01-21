
//This launches JQUERY on page load

$(function () {

    // Script displaying current date in the Jumbotron
    var currentDate = moment().format(' dddd, MMMM Do YYYY');
    document.getElementById("currentDay").innerHTML = currentDate;
});

    // Var containing the current hour in 24 h format
    var currentTime = new Date().getHours();

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

    //This adds an event listener to buttons
    // On click it assigns user input from textarea to userEntry variable
    // It also stores the id of the text area where the entry was made to if variable.
    //Then it saves the paid id and userEntry into local storage.
    $(".saveBtn").on("click", function () {
        var entryValue = $(this).prev("textarea").val();
        var entryId = $(this).prev("textarea").attr("id");
        localStorage.setItem(entryId, entryValue);

        // This part of code creates a delete button for each text-area. I commented it out as it wasn't part of the requirements
        //but it can be uncommented and used as needed. 
        // It first check if a deleted button already exists.
        // If not, it creates it and adds a class to it. I defined this class in the CSS file.
        // It then inserts it before the existing save button with an animation. 

            if($(this).prev(".deleteBtn").length == 0){
                var newBtn = $("<button>").addClass("deleteBtn").text("Delete");
                $(newBtn).animate({width: "100px"}, {duration: 150 } ).insertBefore(this)
             }

        });

        $(document).on("click", ".deleteBtn", function () {
        $(this).prev("textarea").val("");
        var entryId = $(this).prev("textarea").attr("id");
        localStorage.removeItem(entryId);
        $(this).remove();
    });
  

    // This retrieves information form local storage on page load and sets it in appropriate cells.
    // First it loops through each textarea, gets their id attributes and assigns it to entryId variable
    // Then it retrieves the local storage entryId key matching the id of the corresponding textarea.
    // It finally sets the value of the textarea to the entryValue from local storage. 

    $("textarea").each(function () {
        var entryId = $(this).attr("id");
        var entryValue = localStorage.getItem(entryId);
        // Set the value of the textarea to the retrieved value
        $(this).val(entryValue);
    });


    // TODO Consider adding button to clear previous entry.

    $("#clear").on("click", function () {
        localStorage.clear();
        location.reload()
    });

    // Code converting current time to 12h format. I ended up not using it but kept it here just in case.
    // var whatTime;
    // if (currentTime24 >= 12) {
    //     whatTime = "PM";
    // } else {
    //     whatTime = "AM";
    // }
    // var currentTime12 = currentTime24 % 12 + whatTime