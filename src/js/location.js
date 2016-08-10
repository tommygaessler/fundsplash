$(document).on('ready', function() {
  console.log('test');
});

// random location

var locations = ['Kauai, Hawaii', 'Bora Bora, French Polynesia', 'Longsheng, China', 'Victoria Falls, Zambia/Zimbabwe', 'Amazon River, Brazil', 'Rainbow Mountains of Zhangye Danxia, China', 'Railay, Thailand', 'Neuschwanstein Castle, Germany', 'Northern Lights, Iceland', 'Antarctica', 'Yellowstone National Park, Wyoming', 'Tracy Arm Fjord, Alaska', 'Torres Del Paine Patagonia, Chile', 'Svalbard, Norway', 'Temples of Bagan, Burma', 'Petra, Jordan', 'Machu Picchu, Peru', 'Venice, Italy', 'Giza Pyramids, Egypt'];

var randomLocation = Math.random() * (locations.length - 0) + 0;

var place = locations[Math.round(randomLocation)];
console.log(place);
