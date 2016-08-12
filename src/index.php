    <?php include 'header.php'; ?>
    <div class="startWrapper">
      <div class="start">
        <h1>Fundsplash</h1>
        <p>Fundsplash is a crowdfunding website where <a href="http://unsplash.com" target="_blank">Unsplash</a> photographers can raise money for their next adventure!</p>
        <button class="startbutton" id="start">Browse Campaigns</button>
        <p class="credits">Made with <i class="fa fa-heart-o" aria-hidden="true"></i> by <a href="http://tommygaessler.com" target="_blank">Tommy Gaessler</a>,<br>using the <a href="http://unsplash.com" target="_blank">Unsplash</a> and <a href="http://stripe.com/" target="_blank">Stripe</a> API's</p>
      </div>
      <div class="loader">
        <h1 class="loading">Loading Next Campaign... </h1>
      </div>
    </div>
    <main>
      <div class="wrapper">
        <div class="row">
          <div class="column third">
            <img class="profilepicture" id="profilepicture" src="images/me.jpg" alt="" />
            <h2 class="name"><span id="name">Tommy Gaessler</span></h2>
            <a class="username" id="usernameLink" href="" target="_blank">@<span id="username">tommygaessler</span></a>
            <p class="location">Location: <span id="location">Denver, CO</span></p>
            <p class="downloads">Total Downloads: <span id="downloads">10000</span></p>
          </div>
          <div class="column third space">

            <a href="#" id="place" class="map-toggle arrow"></a>

            <!-- <p>Total Photos: <span id="totalPhotos">10</span></p> -->

            <p class="bio">Bio: <span id="bio">Shoreditch mixtape literally you probably haven't heard of them beard, narwhal vinyl. Raw denim mlkshk freegan synth, vice bushwick pug bespoke. Chartreuse tacos vinyl, authentic normcore pour-over cardigan bitters flexitarian pop-up.</span></p>
          </div>
          <div class="column third space payment">
            <?php require_once('./config.php'); ?>
            <?php
              ob_start();
              require_once('./progress.php');
              ob_end_clean();
            ?>

            <!-- <p class="totalLikes">Total Likes: <span id="totalLikes">1,000</span></p> -->

            <h3 class="percentage"><span id="percentage"></span>completed</h3>

            <h3 class="progressText">$<span id="progressText"><?php echo $balance; ?></span> of $<span id="progressGoal"></span></h3>

            <progress id="progress" value="<?php echo $balance; ?>" max=""></progress>

            <p class="countdown"><span id="countdown" class="timer"></span></p>

            <!-- <form id="target" action="charge.php" method="post" target="formSending"><script src="https://checkout.stripe.com/checkout.js"  class="stripe-button"  data-key="<?php echo $stripe["publishable_key"]; ?>"  data-description="Fundplash"  data-amount="50000"  data-image="images/logo.png"  data-locale="auto"></script></form> -->

            <iframe class="formSending" name="formSending"></iframe>
          </div>
        </div>
      </div>
      <div id="map" class="mapDiv">
        <div class="marker" data-lat="" data-lng="" itemprop="map"></div>
      </div>
      <div class="wrapper">
        <div class="row photos">
          <div class="column third">
            <img id="photo0" src="images/building.jpg" alt="" />
            <img id="photo1" src="images/fire.jpg" alt="" />
          </div>
          <div class="column third">
            <img id="photo2" src="images/space.jpg" alt="" />
            <img id="photo3" src="images/wall.jpg" alt="" />
          </div>
          <div class="column third">
            <img id="photo4" src="images/water.jpg" alt="" />
            <img id="photo5" src="images/wheel.jpg" alt="" />
          </div>
        </div>
      </div>
      <a class="nextLink" href="#"><button class="next" id="next">Next Campaign</button></a>
    </main>
    <?php include 'footer.php'; ?>
