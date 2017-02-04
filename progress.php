<?php

  require_once('./config.php');

  $json = \Stripe\Balance::retrieve();

  $available = $json->available[0]->amount/100;
  $pending = $json->pending[0]->amount/100;
  $balance = $available + $pending;

  echo $balance;
?>
