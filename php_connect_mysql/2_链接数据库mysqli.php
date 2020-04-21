<?php
$servername = 'localhost';
$username = "root";
$password = "";

$conn = new mysqli($servername, $username, $password);
if($conn->connect_error){
    die("连接失败：" . $conn->connect_error);
}

// 关闭链接
$conn->close();
?>