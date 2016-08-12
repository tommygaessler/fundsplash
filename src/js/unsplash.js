$(document).on('ready', function() {
  unsplashLoad(newLocation);
});

// unsplash random user profile

const CLIENT_ID = 'client_id=dc1caa1ab25c52ed98d69b4f505456c45fbac2deacfef3a61c02df1841bcccce';

function unsplashLoad (newLocation) {
  return new Promise(function(resolve, reject) {

    for (var j = 0; j < 6; j++) {
      $('.photos #photo' + [j]).attr('src', 'images/placeholder.png');
    }


    $.ajax({
      method: 'GET',
      url: 'https://api.unsplash.com/photos/random?' + CLIENT_ID
    }).done(function (data) {

      var usernameLink = data.user.links.html;
      $('#usernameLink').attr('href', usernameLink);

      const USERPROFILELINK = data.user.links.self;

      $.ajax({
        method: 'GET',
        url: USERPROFILELINK + '?' + CLIENT_ID
      }).done(function (data) {

        var username = data.username;
        $('#username').text(username);

        var name = data.name;
        $('#name').text(name);

        // var bio = data.bio;
        // $('#bio').text(bio);

        var placeMap = data.location;
        $('#location').text(placeMap);

        var totalLikes = data.total_likes;
        $('#totalLikes').text(totalLikes);

        var totalPhotos = data.total_photos;
        $('#totalPhotos').text(totalPhotos);

        var downloads = data.downloads;
        $('#downloads').text(downloads);

        var profilepicture = data.profile_image.large;
        $('#profilepicture').attr('src', profilepicture);

        // console.log(place);
        // console.log(locations);

        $('<form id="target" action="charge.php" method="post" target="formSending"><script src="https://checkout.stripe.com/checkout.js"  class="stripe-button"  data-key="pk_test_azE802fthc69BcEpUKGLJx6W" data-name="' + name + '&#39;s' + '" data-description="trip to ' + newLocation.place +'"  data-amount="50000"  data-image="'+ profilepicture +'" data-locale="auto" data-label="Contribute to Campaign"></script></form>').insertBefore('.formSending');

        $.ajax({
          method: 'GET',
          url: USERPROFILELINK + '/photos/?order_by=popular&' + CLIENT_ID
        }).done(function (data) {

          // maybe auto generate based on how many pictures there are
          // var counter = 1;

          for (var i = 0; i < 6; i++) {
            $('.photos #photo' + [i]).attr('src', data[i].urls.regular);
            // counter ++;
            resolve();
          }
        });
      });
    });
  });
}
