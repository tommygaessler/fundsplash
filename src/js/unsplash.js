// $(document).on('ready', function() {
//
// });
//
// // unsplash random user profile
//
// const CLIENT_ID = 'client_id=3500c188f8334662d427d07186a12a9ed4b32e0d30c08c85487bc8a20120f107';
//
// $.ajax({
//   method: 'GET',
//   url: 'https://api.unsplash.com/photos/random?' + CLIENT_ID
// }).done(function (data) {
//
//   var usernameLink = data.user.links.html;
//   $('#usernameLink').attr('href', usernameLink)
//
//   console.log(data.user.links.html);
//
//   const USERPROFILELINK = data.user.links.self;
//   console.log(USERPROFILELINK);
//
//   $.ajax({
//     method: 'GET',
//     url: USERPROFILELINK + '?' + CLIENT_ID
//   }).done(function (data) {
//
//     var username = data.username;
//     $('#username').text(username);
//
//     var name = data.name;
//     $('#name').text(name);
//
//     var bio = data.bio;
//     $('#bio').text(bio);
//
//     var place = data.location;
//     $('#location').text(place);
//
//     var totalLikes = data.total_likes;
//     $('#totalLikes').text(totalLikes)
//
//     var totalPhotos = data.total_photos;
//     $('#totalPhotos').text(totalPhotos)
//
//     var downloads = data.downloads;
//     $('#downloads').text(downloads)
//
//     var profilepicture = data.profile_image.large;
//     $('#profilepicture').attr('src', profilepicture);
//
//     $.ajax({
//       method: 'GET',
//       url: USERPROFILELINK + '/photos/?order_by=popular&' + CLIENT_ID
//     }).done(function (data) {
//
//       // maybe auto generate based on how many pictures there are
//       var counter = 1;
//
//       for (var i = 0; i < 6; i++) {
//         console.log(data[i].urls.raw);
//         $('.photos #photo' + [i]).attr('src', data[i].urls.raw);
//         counter ++;
//       }
//
//     });
//
//   });
// });
