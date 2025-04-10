<?php
$to = 'todorcpgea@abv.bg';
$subject = 'Site';
$names = $_POST['name'];
$mess = $_POST

$message = $names . " " . $mess;
$headers = 'From: cutomer@example.com' . "\r\n"
'Reply-To: cutomer@example.com' "\r\n"
'X-Mailer' ($to, $subject, $message, $headers);

?>