<?php
$servername = 'localhost';
$username = "root";
$password = "";

try{
    $conn = new PDO("mysql:host=$servername,",$username,$password);
    echo "连接成功";
}
catch(PDOException $e)
{
    echo "error";
    echo $e->getMessage();
}