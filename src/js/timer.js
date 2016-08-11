var upgradeTime = 1000;
// var upgradeTime = 201;
var seconds = upgradeTime;
function timer() {
  var daysText = 'days';
  var hoursText = 'hours';
  var minutesText = 'minutes';
  var remainingSecondsText = 'seconds';

  var days        = Math.floor(seconds / 24 / 60 / 60);
  var hoursLeft   = Math.floor((seconds) - (days * 86400));
  var hours       = Math.floor(hoursLeft / 3600);
  var minutesLeft = Math.floor((hoursLeft) - (hours * 3600));
  var minutes     = Math.floor(minutesLeft / 60);
  var remainingSeconds = seconds % 60;

  if (remainingSeconds < 10) {
    remainingSeconds = '0' + remainingSeconds;
  }

  if (days === 1) {
    daysText = 'day';
  }
  else {
    daysText = 'days';
  }

  if (hours === 1) {
    hoursText = 'hour';
  }
  else {
    hoursText = 'hours';
  }

  if (minutes === 1) {
    minutesText = 'minute';
  }
  else {
    minutesText = 'minutes';
  }

  if (remainingSeconds == 01) {
    remainingSecondsText = 'second';
  }
  else {
    remainingSecondsText = 'seconds';
  }

  document.getElementById('countdown').innerHTML = days + ' ' + daysText + ' ' + hours + ' ' + hoursText + ' ' + minutes + ' ' + minutesText + ' ' + remainingSeconds + ' ' + remainingSecondsText;
  if (seconds === 0) {
    clearInterval(countdownTimer);
    document.getElementById('countdown').innerHTML = 'Campaign Closed';
    $('.stripe-button-el').attr('disabled','disabled');
    $('.stripe-button-el').css('cursor', 'not-allowed');
  } else {
    seconds--;
  }
}
var countdownTimer = setInterval('timer()', 1000);
