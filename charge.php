<?php
  require_once('./config.php');

  $token  = $_POST['stripeToken'];

  $customer = \Stripe\Customer::create(array(
      'email' => 'customer@example.com',
      'source'  => $token
  ));

  $charge = \Stripe\Charge::create(array(
      'customer' => $customer->id,
      'amount'   => 50000,
      'currency' => 'usd'
  ));

  $json = \Stripe\Balance::retrieve();

  $available = $json->available[0]->amount/100;
  $pending = $json->pending[0]->amount/100;
  $balance = $available + $pending;

?>
