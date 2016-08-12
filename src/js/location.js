$(document).on('ready', function() {
});

// random location

var allLocations = [{
  place: 'Machu Picu, Peru',
  lat: '-13.162880',
  long: '-72.544931'
},
{
  place: 'Kaui, Hawaii',
  lat: '22.114769',
  long: '-159.528480'
},
{
  place: 'Dead Sea, Israel',
  lat: '31.595379',
  long: '35.471021'
},
{
  place: 'Saint Martin, Leeward Islands',
  lat: '18.076614',
  long: '-63.050777'
},
{
  place: 'Telluride, CO',
  lat: '37.938013',
  long: '-107.811902'
}
];

function setLatLng (locations) {
  var randomLocation = Math.random() * (locations.length - 0) + 0;

  var place = locations[Math.floor(randomLocation)];

  $('.marker').attr({'data-lat': place.lat, 'data-lng': place.long});

  $('#place').text(place.place);

  return place;
}

window.newLocation = setLatLng(allLocations);
// declares global varible
