<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Fundsplash</title>
    <!-- styles -->
    <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="styles.css">
  </head>
  <body>
    <div class="wrapper">
      <div class="row">
        <div class="column third">
          <img class="profilepicture" id="profilepicture" src="" alt="" />
          <h2 class="name"><span id="name"></span></h2>
          <a class="username" id="usernameLink" href="">@<span id="username"></span></a>
          <p class="location">Location: <span id="location"></span></p>
          <p class="downloads">Total Downloads: <span id="downloads"></span></p>
        </div>
        <div class="column third space">

          <h3 class="destination">Peru, Machu Picu</h3>
          <!-- <p>Total Photos: <span id="totalPhotos">10</span></p> -->

          <p class="bio">Bio: <span id="bio"></span></p>
        </div>
        <div class="column third space">
          <?php require_once('./config.php'); ?>
          <?php
            ob_start();
            require_once('./progress.php');
            ob_end_clean();
          ?>

          <!-- <p class="totalLikes">Total Likes: <span id="totalLikes">1,000</span></p> -->

          <h3 class="progressText">$<span id="progressText"><?php echo $balance; ?></span> of $<span id="progressGoal"></span></h3>

          <progress id="progress" value="<?php echo $balance; ?>" max=""></progress>

          <form id="target" action="charge.php" method="post" target="formSending">
            <script src="https://checkout.stripe.com/checkout.js"
              class="stripe-button"
              data-key="<?php echo $stripe['publishable_key']; ?>"
              data-description="Stripe Testing"
              data-amount="50000"
              data-locale="auto">
            </script>
          </form>

          <iframe class="formSending" name="formSending"></iframe>
        </div>
      </div>

      <div class="row photos">
        <div class="column third">
          <img id="photo0" src="" alt="" />
          <img id="photo1" src="" alt="" />
        </div>
        <div class="column third">
          <img id="photo2" src="" alt="" />
          <img id="photo3" src="" alt="" />
        </div>
        <div class="column third">
          <img id="photo4" src="" alt="" />
          <img id="photo5" src="" alt="" />
        </div>
      </div>
    </div>








    </div>
    <!-- Stripe -->
    <script type="text/javascript" src="https://js.stripe.com/v2/"></script>
    <!-- jQuery -->
    <script type="text/javascript" src="https://code.jquery.com/jquery-2.2.4.min.js"></script>
    <!-- Bootstrap -->
    <script type="text/javascript" src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
    <!-- main -->
    <script type="text/javascript" src="js/unsplash.js"></script>
    <script type="text/javascript" src="js/progress.js"></script>
    <script type="text/javascript" src="js/location.js"></script>
  </body>
</html>
