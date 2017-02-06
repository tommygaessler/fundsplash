$(document).on('ready', function () {

  console.log('Hi');

  $('#start').on('click', function () {
    $('main').fadeIn('slow');
    $('main').css('display', 'block');
    $('.start').css('display', 'none');
  });

  $('#next').on('click', function () {
    $('#target').remove();

    $('main').css('display', 'none');

    $('.loader').css('display', 'block');

    window.newLocation = setLatLng(allLocations);

    $('#map').empty().append('<div class="marker" data-lat="' + newLocation.lat + '" data-lng="' + newLocation.long + '" itemprop="map"></div>');

    initializeMap($);

    unsplashLoad(newLocation)
    .then(function() {
      $('.loader').css('display', 'none');
      $('main').css('display', 'block');
    });
  });
});
