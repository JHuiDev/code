<?php
$servername = "localhost";
$username = "root";
$password = '';

$conn = new mysqli($servername,$username,$password);
if($conn->connect_error){
    die("数据库连接失败" . $conn->connect_error);
}
echo "ok";
$sql = "CREATE DATABASE myDB";
if($conn->query($sql) === TRUE){
    echo "数据库创建成功";
}else{
    echo "数据库创建失败";
}


$conn->close();