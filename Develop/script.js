$('#currentDay').text(moment().format('MMMM Do YYYY, h:mm:ss a'));

var present = moment().hour();

$(".row").each(function () {
    var timeBlock = parseInt($(this).attr("id"));

    //compare timeBlock with present
    if (timeBlock < present) {
        $(this).find(".description").addclass("past");
    } else if (timeBlock === present) {
        $(this).find(".description").addclass("present");
    } else {
        $(this).find(".description").addclass("future");
    }
});