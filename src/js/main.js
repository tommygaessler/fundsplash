$(document).on('ready', function () {
  $('#start').on('click', function () {
    $('main').fadeIn('slow');
    $('main').css('display', 'block');
    $('.start').css('display', 'none');
  });

  $('#next').on('click', function () {
    $('#target').remove();
    $('main').css('display', 'none');
    $('.loader').css('display', 'block');
    unsplashLoad()
    .then(function() {
      $('.loader').css('display', 'none');
      $('main').css('display', 'block');
    });
  });
});
