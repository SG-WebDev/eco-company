<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$subject = $_POST['subject'];
$phone = $_POST['phone'];
header('Content-Type: application/json');
if ($name === ''){
  print json_encode(array('message' => 'Pole Imie i nazwisko nie może być puste.', 'code' => 0));
  exit();
}
if ($email === ''){
  print json_encode(array('message' => 'Pole E-mail nie może być puste', 'code' => 0));
  exit();
} else {
  if (!filter_var($email, FILTER_VALIDATE_EMAIL)){
  print json_encode(array('message' => 'E-mail jest nieprawidłowy.', 'code' => 0));
  exit();
  }
}
if ($subject === ''){
  print json_encode(array('message' => 'Pole Temat nie może być puste.', 'code' => 0));
  exit();
}
if ($phone === ''){
    print json_encode(array('message' => 'Pole Numer telefonu nie może być puste.', 'code' => 0));
    exit();
}
if ($message === ''){
  print json_encode(array('message' => 'Wiadomość nie może być pusta.', 'code' => 0));
  exit();
}
$content="Wiadomość z formularza kontaktowego od: ".$name. "\nE-mail: ".$email."\n"."Numer telefonu: ".$phone."\n"."Treść:\n".$message;
$recipient = "kontakt@ozeexpert.pl";
$mailheader = "Content-Type: text/html; charset=utf-8 \r\n"."From: $email \r\n";
mail($recipient, $subject, $content, $mailheader) or die("Error!");
print json_encode(array('message' => 'Wiadomość została wysłana!', 'code' => 1));
exit();
?>