$(document).on('ready', function () {
  $('#start').on('click', function () {
    $('main').fadeIn('slow');
    $('main').css('display', 'block');
    $('.start').css('display', 'none');
  });

  $('#next').on('click', function () {
    $('main').css('display', 'none');
    $('.loader').css('display', 'block');
    var promise = Promise.resolve(unsplashLoad());
    promise.then(function() {
      $('.loader').css('display', 'none');
      $('main').css('display', 'block');
    });
  });
});
