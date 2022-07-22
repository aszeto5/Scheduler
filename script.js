

$('#currentDay').text(moment().format('MMMM Do YYYY, h:mm:ss a'));

var currentTime = moment().hour();
console.log(currentTime);

//reference code JQUERY : https://api.jquery.com/each/

//loop through all the time blocks to change background color 
$(".row").each(function () {

    var blockHr =parseInt($(this).attr("id"));
    console.log("Each time block hour", blockHr);

    //compare the time-block-hour with the current time 
    if (blockHr < currentTime) {
        $(this).find(".description").addClass("past");

    } else if (blockHr === currentTime) {
        $(this).find(".description").addClass("present");
    } else {
        $(this).find(".description").addClass("future");
    }
});