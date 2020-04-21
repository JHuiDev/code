<?php
$servername = "localhost";
$username = "root";
$password = '';
$dbname = "myDB";
$conn = new mysqli($servername,$username,$password,$dbname);
if($conn->connect_error){
    die("数据库连接失败" . $conn->connect_error);
}
echo "ok";
// --NOT NULL不可为空,必须有值--timestamp时间戳
// 不可写注释

$sql = "INSERT INTO MyGuests (firstname,lastname,email)
VALUES('John','','John@example.com')";

if($conn->query($sql) === TRUE){
    echo "insert MyGests data Success";
}else{
    echo "Error".$sql."<br>".$connt->error;
}



$conn->close();