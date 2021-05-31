<?php
ob_start();
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$message = $_POST['message'];

$token = "1732508477:AAFTqXm7LLzI3pD2zeOyI_nEyyFrCduUBZg";
$chat_id = "-543049551";

$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'Email' => $email,
  'Сообщение:' => $message
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");



if ($sendToTelegram) {
  header('Location: '."../thanks.html");
  ob_end_flush();
	// echo "Sent";
} else {
  echo "Error";

}
?>