<?php
require_once('./vendor/autoload.php');

$stripe = array(
  "secret_key"      => "sk_test_EjdNXaZK6fjBoklHuejjtYG6",
  "publishable_key" => "pk_test_azE802fthc69BcEpUKGLJx6W"
);

\Stripe\Stripe::setApiKey($stripe['secret_key']);

?>
