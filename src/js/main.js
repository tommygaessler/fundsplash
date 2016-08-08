// add scripts

$(document).on('ready', function() {

});

const location = []

// progress bar

// random goal
const GOAL = Math.random() * (5000 - 500) + 500;

// random progress that does not exceed the goal asdf
var progress = Math.random() * (GOAL - 0) + 0;

// setting the progress with the random number
$('#progress').val(progress);

// change this to php in html linked to stripe balance or product
document.getElementById("progress").max = "5000";

console.log('progress', Math.round(progress));
console.log('goal', Math.round(GOAL));








// unsplash random user profile

// const CLIENT_ID = '?client_id=3500c188f8334662d427d07186a12a9ed4b32e0d30c08c85487bc8a20120f107';

// $.ajax({
//   method: 'GET',
//   url: 'https://api.unsplash.com/photos/random' + CLIENT_ID
// }).done(function (data) {
//
//   console.log(data.user.links.html);
//
//   const USERPROFILELINK = data.user.links.self
//   console.log(USERPROFILELINK);
//
//   $.ajax({
//     method: 'GET',
//     url: USERPROFILELINK + CLIENT_ID
//   }).done(function (data) {
//
//     console.log('username:', data.username);
//
//     console.log('name:', data.name);
//
//     console.log('bio:', data.bio);
//
//     console.log('location:', data.location);
//
//     console.log('total likes:', data.total_likes);
//
//     console.log('total photos:', data.total_photos);
//
//     console.log('downloads:', data.downloads);
//
//     console.log('profile picture:',data.profile_image.large);
//
//     $.ajax({
//       method: 'GET',
//       url: USERPROFILELINK + '/photos/' + CLIENT_ID
//     }).done(function (data) {
//
//       for (var i = 0; i < 6; i++) {
//         console.log(data[i].urls.raw);
//       }
//
//     });
//
//   });
// });
