// var whatever = 10;
// attached to global scope


$(document).on('ready', function() {

});

// random goal
const GOAL = Math.random() * (5000 - 500) + 500;

// random progress that does not exceed the goal
var progress = Math.random() * (GOAL - 0) + 0;

// setting the progress with the random number
// change this to php in html linked to stripe balance or product
// $('#progress').val(progress);

document.getElementById('progress').max = GOAL;

var progressNumber = parseFloat($('#progressText').text()).toFixed(2);

var percentage = progressNumber / GOAL * 100;
percentage = Math.floor(percentage);

$('#percentage').text(percentage);

progressNumber = progressNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

$('#progressText').text(progressNumber);

$('#progressGoal').text(GOAL.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));

console.log('goal', Math.round(GOAL));

function auto_load() {
  $.ajax({
    url: 'progress.php',
    cache: false,
    success: function(data) {
      $('#progress').val(data);
      $('#percentage').text(Math.floor((data / GOAL * 100)));

      data = parseFloat(data).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      console.log(data);

      $('#progressText').text(data);

    }
  });
}

$('.stripe-button-el').on('click', function () {
  var interval = setInterval(auto_load, 1000);
});

$('#target').submit(function () {
  console.log('submitted');
});
