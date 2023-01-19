// Save reference to important DOM elements
var timeDisplayEl = $('#currentDay');
var timeBlockEl = $('.time-block');
var saveButton = $('.saveBtn');

// Handle displaying the time
function displayTime() {
  // var rightNow = dayjs().format('dddd, MMMM DD [at] hh:mm:ss A'); // With Time
  var rightNow = dayjs().format('dddd, MMMM DD');
  timeDisplayEl.text(rightNow);
}

$(document).ready(function () {
  
  // Save button
  saveButton.on("click", function () {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    // Save text in local storage
    localStorage.setItem(time, text);
  });

  // Time of Day Comparison
  var currentHour = dayjs().startOf('hour').format('H');

  // Loop to check Time of Day
  timeBlockEl.each(function () {
    var timeDiv = parseInt($(this).attr('id').split("hour-")[1]);

    // Present
    if (currentHour == timeDiv) {
      $(this).removeClass("past");
      $(this).removeClass("future");
      $(this).addClass("present");
    }
    // Future
    else if (currentHour < timeDiv) {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
    // Past
    else if (currentHour > timeDiv) {
      $(this).removeClass("present");
      $(this).removeClass("future");
      $(this).addClass("past");
    }

  });

  // Pull from local storage
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));


  // Display Time of Day
  displayTime();
  setInterval(displayTime, 1000);

});
