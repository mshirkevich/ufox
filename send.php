<?php
header('Access-Control-Allow-Origin: *');
if (isset($_POST["name"]) && isset($_POST["email"]) && isset($_POST["subject"]) && isset($_POST["message"]) ) {
    $fd = fopen("log.txt", 'a');
    fwrite($fd, "Имя: ".$_POST["name"] ."; Почта: ".$_POST["email"] ."; Тема: ".$_POST["subject"] ."; Сообщение: ".$_POST["message"] ."\n");
    fclose($fd);
    echo json_encode($_POST);
}