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
$sql_table = "CREATE TABLE MyGuests(
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    firstname VARCHAR(30) NOT NULL,
    lastname VARCHAR(30) NOT NULL,
    email VARCHAR(50),
    reg_date TIMESTAMP 

)" ;

if($conn->query($sql_table) === TRUE){
    echo "Table MyGuests create successful";
}else{
    echo "创建数据表错误" . $conn->error;
}

$conn->close();