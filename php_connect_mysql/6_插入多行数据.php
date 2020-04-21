<?php
$servername = "localhost";
$username = "root";
$password = '';
$dbname = "myDB";
$conn = new mysqli($servername,$username,$password,$dbname);
if($conn->connect_error){
    die("数据库连接失败" . $conn->connect_error);
}
// --NOT NULL不可为空,必须有值--timestamp时间戳
// 不可写注释

$sql = "INSERT INTO MyGuests (firstname, lastname, email)
VALUES ('John', 'Doe', 'john@example.com');";
$sql .= "INSERT INTO MyGuests (firstname, lastname, email)
VALUES ('Mary', 'Moe', 'mary@example.com');";
$sql .= "INSERT INTO MyGuests (firstname, lastname, email)
VALUES ('Julie', 'Dooley', 'julie@example.com')";

// $conn->multi_query($sql)插入多行数据
if($conn->multi_query($sql) === TRUE){
    echo "插入多行数据成功";
}else{
    echo "Error" .$sql . "<br>" >$conn->error;
}



$conn->close();